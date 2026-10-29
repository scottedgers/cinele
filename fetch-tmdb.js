/**
 * CINELE — Automated TMDB Movie Database Builder
 *
 * Usage:
 *   node fetch-tmdb.js <YOUR_TMDB_API_KEY_OR_READ_TOKEN> [--limit=800]
 *
 * Or create a .env file with:
 *   TMDB_API_KEY=your_key_here
 *   and run: node fetch-tmdb.js
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// 1. Read API Key from CLI args or .env file
function getApiKey() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  if (args[0]) return args[0].trim();

  if (process.env.TMDB_API_KEY) return process.env.TMDB_API_KEY.trim();

  const envPath = path.join(__dirname, ".env");
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf8");
    const match = content.match(/^\s*TMDB_API_KEY\s*=\s*["']?([^"'\r\n]+)["']?/m);
    if (match && match[1]) return match[1].trim();
  }
  return null;
}

const limitArg = process.argv.find((a) => a.startsWith("--limit="));
const TARGET_MOVIE_LIMIT = limitArg ? parseInt(limitArg.split("=")[1], 10) || 800 : 800;
const MYSTERY_ANSWER_POOL_SIZE = 400; // Top 400 most famous films can be the secret target; all 800+ are guessable

const apiKey = getApiKey();
if (!apiKey) {
  console.error("\n❌ Missing TMDB API Key!");
  console.error("Usage: node fetch-tmdb.js <YOUR_TMDB_API_KEY>\n");
  process.exit(1);
}

// Detect whether user provided a v4 Bearer JWT token (starts with "eyJ") or a v3 API key
const isBearerToken = apiKey.startsWith("eyJ") && apiKey.length > 60;

function tmdbGet(endpoint, retries = 3) {
  return new Promise((resolve, reject) => {
    const separator = endpoint.includes("?") ? "&" : "?";
    const urlPath = isBearerToken
      ? `/3${endpoint}`
      : `/3${endpoint}${separator}api_key=${encodeURIComponent(apiKey)}`;

    const options = {
      hostname: "api.themoviedb.org",
      path: urlPath,
      method: "GET",
      headers: {
        Accept: "application/json",
        ...(isBearerToken ? { Authorization: `Bearer ${apiKey}` } : {})
      }
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        if (res.statusCode === 429 && retries > 0) {
          // Rate limited — wait and retry
          setTimeout(() => {
            tmdbGet(endpoint, retries - 1).then(resolve).catch(reject);
          }, 1500);
          return;
        }
        if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(
            new Error(`TMDB HTTP ${res.statusCode} on ${endpoint}: ${body.slice(0, 200)}`)
          );
        }
        try {
          resolve(JSON.parse(body));
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on("error", (err) => {
      if (retries > 0) {
        setTimeout(() => {
          tmdbGet(endpoint, retries - 1).then(resolve).catch(reject);
        }, 1000);
      } else {
        reject(err);
      }
    });

    req.end();
  });
}

// Normalize TMDB genre names to CINELE standard genres
function normalizeGenreName(name) {
  const map = {
    "Science Fiction": "Sci-Fi",
    "Music": "Musical"
  };
  return map[name] || name;
}

// Infer CINELE Source Material from TMDB keywords & genres
function inferSourceMaterial(keywordsList, genresList, overview = "") {
  const kwNames = (keywordsList || []).map((k) => (k.name || "").toLowerCase());
  const kwJoined = kwNames.join(" | ");
  const genreNames = (genresList || []).map((g) => g.name || "");

  if (
    kwNames.some(
      (k) =>
        k.includes("comic") ||
        k.includes("graphic novel") ||
        k.includes("manga") ||
        k === "dc comics" ||
        k === "marvel comics"
    )
  ) {
    return "Comic / Graphic Novel";
  }

  if (
    kwNames.some(
      (k) =>
        k.includes("short story") ||
        k.includes("novella")
    )
  ) {
    return "Short Story / Novella";
  }

  if (
    kwNames.some(
      (k) =>
        k.includes("based on play") ||
        k.includes("based on stage") ||
        k.includes("stage musical") ||
        k.includes("broadway") ||
        k === "play" ||
        k === "opera"
    )
  ) {
    return "Stage Play / Musical";
  }

  if (
    kwNames.some(
      (k) =>
        k.includes("fairy tale") ||
        k.includes("folklore") ||
        k.includes("mythology") ||
        k.includes("arabian nights") ||
        k.includes("fable")
    )
  ) {
    return "Fairy Tale / Folklore";
  }

  if (
    kwNames.some(
      (k) =>
        k.includes("based on novel") ||
        k.includes("based on book") ||
        k.includes("based on children's book") ||
        k.includes("based on young adult novel") ||
        k.includes("literary adaptation")
    )
  ) {
    return "Novel / Book";
  }

  if (
    genreNames.includes("Biography") ||
    kwNames.some(
      (k) =>
        k.includes("based on true story") ||
        k.includes("biography") ||
        k.includes("biopic") ||
        k.includes("based on memoir") ||
        k.includes("autobiography") ||
        k.includes("true crime") ||
        k.includes("historical figure")
    )
  ) {
    return "True Story / Biography";
  }

  if (kwNames.some((k) => k === "remake" || k === "reboot" || k.includes("based on movie"))) {
    return "Remake / Reboot";
  }

  return "Original Screenplay";
}

// Run promises with a concurrency limit
async function mapConcurrent(items, concurrency, fn) {
  const results = new Array(items.length);
  let currentIndex = 0;

  async function worker() {
    while (currentIndex < items.length) {
      const idx = currentIndex++;
      results[idx] = await fn(items[idx], idx);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

async function main() {
  console.log(`🎬 Connecting to TMDB API...`);

  // Quick auth test
  await tmdbGet("/configuration");
  console.log(`✅ TMDB API key verified! Gathering top movies...`);

  const candidateMap = new Map();

  // 1. Fetch Most Voted Movies of All Time (Audience & Box Office Classics)
  const discoverPages = Math.min(35, Math.ceil((TARGET_MOVIE_LIMIT * 0.75) / 20));
  for (let page = 1; page <= discoverPages; page++) {
    const data = await tmdbGet(
      `/discover/movie?language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${page}`
    );
    for (const m of data.results || []) {
      if (!candidateMap.has(m.id)) candidateMap.set(m.id, m);
    }
    process.stdout.write(`\r   Fetched Discover page ${page}/${discoverPages} (${candidateMap.size} unique films)`);
  }

  // 2. Fetch Top Rated Movies (Critically Acclaimed Classics across eras)
  const topRatedPages = Math.min(20, Math.ceil((TARGET_MOVIE_LIMIT * 0.4) / 20));
  for (let page = 1; page <= topRatedPages; page++) {
    const data = await tmdbGet(`/movie/top_rated?language=en-US&page=${page}`);
    for (const m of data.results || []) {
      if ((m.vote_count || 0) >= 1200 && !candidateMap.has(m.id)) {
        candidateMap.set(m.id, m);
      }
    }
    process.stdout.write(`\r   Fetched Top Rated page ${page}/${topRatedPages} (${candidateMap.size} unique films)`);
  }
  console.log("");

  // Sort candidates by vote_count descending so the most famous movies are ranked first
  const allCandidates = Array.from(candidateMap.values())
    .sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0))
    .slice(0, TARGET_MOVIE_LIMIT);

  console.log(`📥 Fetching full credits & keywords for ${allCandidates.length} movies (8 parallel workers)...`);

  let completed = 0;
  const detailedMovies = await mapConcurrent(allCandidates, 8, async (item) => {
    try {
      const detail = await tmdbGet(
        `/movie/${item.id}?language=en-US&append_to_response=credits,keywords`
      );
      completed++;
      if (completed % 25 === 0 || completed === allCandidates.length) {
        process.stdout.write(`\r   Processed ${completed}/${allCandidates.length} movies...`);
      }
      return detail;
    } catch (e) {
      completed++;
      return null;
    }
  });
  console.log("\n");

  // Load existing curated MOVIES_DB so we preserve hand-tuned entries
  const existingByTitleYear = new Map();
  const moviesJsPath = path.join(__dirname, "movies.js");
  if (fs.existsSync(moviesJsPath)) {
    try {
      const code = fs.readFileSync(moviesJsPath, "utf8");
      const sandbox = {};
      const fn = new Function(`${code}; return MOVIES_DB;`);
      const existingList = fn();
      for (const m of existingList) {
        existingByTitleYear.set(`${m.title.toLowerCase()}|${m.year}`, m);
      }
    } catch (e) {}
  }

  const finalMovies = [];
  const seenTitles = new Set();

  // First include all existing curated movies so nothing is lost
  for (const m of existingByTitleYear.values()) {
    const titleKey = m.title.toLowerCase();
    seenTitles.add(titleKey);
    finalMovies.push({
      ...m,
      isTarget: true
    });
  }

  // Now process TMDB movies
  for (let i = 0; i < detailedMovies.length; i++) {
    const d = detailedMovies[i];
    if (!d || !d.title || !d.release_date) continue;

    const year = parseInt(d.release_date.slice(0, 4), 10);
    if (!year || isNaN(year)) continue;

    const titleKey = d.title.trim().toLowerCase();
    if (seenTitles.has(titleKey)) continue;

    const crew = (d.credits && d.credits.crew) || [];
    const cast = (d.credits && d.credits.cast) || [];

    // Directors
    const directors = [];
    for (const c of crew) {
      if (c.job === "Director" && c.name && !directors.includes(c.name)) {
        directors.push(c.name);
      }
    }
    if (directors.length === 0) continue;

    // Composers
    const composers = [];
    for (const c of crew) {
      if (
        (c.job === "Original Music Composer" || c.job === "Music" || c.job === "Composer") &&
        c.name &&
        !composers.includes(c.name)
      ) {
        composers.push(c.name);
      }
    }
    const finalComposers = composers.length > 0 ? composers.slice(0, 2) : ["Various Artists"];

    // Genres
    const genres = (d.genres || [])
      .map((g) => normalizeGenreName(g.name))
      .filter((g) => g && g !== "TV Movie")
      .slice(0, 2);
    if (genres.length === 0) continue;

    // Actors
    const actors = cast
      .filter((a) => a && a.name)
      .slice(0, 2)
      .map((a) => a.name);
    if (actors.length === 0) continue;

    // Source
    const kwList = (d.keywords && (d.keywords.keywords || d.keywords.results)) || [];
    const source = inferSourceMaterial(kwList, d.genres, d.overview);

    seenTitles.add(titleKey);
    finalMovies.push({
      id: finalMovies.length + 1,
      title: d.title.trim(),
      year,
      composers: finalComposers,
      genres,
      source,
      actors,
      director: directors.slice(0, 2).join(" & "),
      tagline: (d.tagline && d.tagline.trim()) || "A landmark motion picture.",
      isTarget: i < MYSTERY_ANSWER_POOL_SIZE
    });
  }

  // Re-index IDs cleanly 1..N
  finalMovies.forEach((m, idx) => {
    m.id = idx + 1;
  });

  const targetCount = finalMovies.filter((m) => m.isTarget).length;
  const outputContent = `// Curated + TMDB Expanded Movie Catalog for CINELE (${finalMovies.length} movies total, ${targetCount} mystery targets)
// Generated on ${new Date().toISOString()}

const MOVIES_DB = ${JSON.stringify(finalMovies, null, 2)};
`;

  fs.writeFileSync(moviesJsPath, outputContent, "utf8");
  console.log(`🎉 Successfully wrote ${finalMovies.length} movies (${targetCount} target answers) to movies.js!`);
}

main().catch((err) => {
  console.error("\n❌ Error fetching from TMDB:", err.message);
  process.exit(1);
});
