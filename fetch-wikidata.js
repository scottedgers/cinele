/**
 * CINELE — Wikidata Public Domain (CC0) Movie Catalog Builder
 *
 * Uses fast composer-anchored SPARQL queries on Wikidata (CC0 1.0 Public Domain)
 * so queries return quickly without full-table timeouts.
 *
 * Usage:
 *   node fetch-wikidata.js
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

function sparqlQuery(query) {
  return new Promise((resolve, reject) => {
    const urlPath = `/sparql?format=json&query=${encodeURIComponent(query)}`;
    const options = {
      hostname: "query.wikidata.org",
      path: urlPath,
      method: "GET",
      headers: {
        Accept: "application/sparql-results+json",
        "User-Agent": "CineleMovieQuizBuilder/1.0 (https://localhost:8080; trivia)"
      },
      timeout: 35000
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error(`Wikidata HTTP ${res.statusCode}`));
        }
        try {
          resolve(JSON.parse(body));
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on("timeout", () => {
      req.destroy(new Error("Request timeout"));
    });
    req.on("error", reject);
    req.end();
  });
}

function normalizeWikidataGenres(rawGenreStr) {
  const r = (rawGenreStr || "").toLowerCase();
  const mapped = [];
  const addGenre = (g) => {
    if (!mapped.includes(g) && mapped.length < 2) mapped.push(g);
  };

  if (r.includes("science fiction") || r.includes("sci-fi") || r.includes("dystopian") || r.includes("cyberpunk")) addGenre("Sci-Fi");
  if (r.includes("animated") || r.includes("animation") || r.includes("anime")) addGenre("Animation");
  if (r.includes("superhero") || r.includes("action") || r.includes("martial arts") || r.includes("heist") || r.includes("spy")) addGenre("Action");
  if (r.includes("western")) addGenre("Western");
  if (r.includes("horror") || r.includes("slasher") || r.includes("zombie") || r.includes("monster")) addGenre("Horror");
  if (r.includes("musical")) addGenre("Musical");
  if (r.includes("war")) addGenre("War");
  if (r.includes("biographical") || r.includes("biopic")) addGenre("Biography");
  if (r.includes("historical")) addGenre("History");
  if (r.includes("crime") || r.includes("gangster") || r.includes("noir") || r.includes("detective")) addGenre("Crime");
  if (r.includes("mystery") || r.includes("whodunit")) addGenre("Mystery");
  if (r.includes("thriller") || r.includes("suspense") || r.includes("psychological")) addGenre("Thriller");
  if (r.includes("fantasy") || r.includes("fairy tale")) addGenre("Fantasy");
  if (r.includes("adventure") || r.includes("survival") || r.includes("pirate")) addGenre("Adventure");
  if (r.includes("romantic") || r.includes("romance")) addGenre("Romance");
  if (r.includes("comedy") || r.includes("satire") || r.includes("parody") || r.includes("coming-of-age")) addGenre("Comedy");
  if (r.includes("family") || r.includes("children") || r.includes("christmas")) addGenre("Family");
  if (r.includes("drama") || r.includes("melodrama")) addGenre("Drama");

  if (mapped.length === 0) mapped.push("Drama");
  if (mapped.length === 1) mapped.push(mapped[0] === "Drama" ? "Thriller" : "Drama");
  return mapped;
}

function inferWikidataSource(rawGenreStr, hasBasedOn) {
  const r = (rawGenreStr || "").toLowerCase();
  if (r.includes("superhero") || r.includes("comic")) return "Comic / Graphic Novel";
  if (r.includes("biographical") || r.includes("biopic")) return "True Story / Biography";
  if (r.includes("fairy tale")) return "Fairy Tale / Folklore";
  if (hasBasedOn) return "Novel / Book";
  return "Original Screenplay";
}

function buildComposerBatchQuery(composerQids) {
  const valuesStr = composerQids.map((q) => `wd:${q}`).join(" ");
  return `
SELECT ?film ?filmLabel (MIN(YEAR(?date)) AS ?year) (SAMPLE(?dirLabel) AS ?director) (SAMPLE(?compLabel) AS ?composer) (SAMPLE(?genreLabel) AS ?g1) (SAMPLE(?castLabel) AS ?c1) (MAX(?castLabel) AS ?c2) (COUNT(?basedOn) AS ?basedCount) WHERE {
  VALUES ?comp { ${valuesStr} }
  ?film wdt:P86 ?comp ;
        wdt:P31 wd:Q11424 ;
        wikibase:sitelinks ?links ;
        wdt:P577 ?date ;
        wdt:P57 ?dir ;
        wdt:P136 ?genre ;
        wdt:P161 ?cast .
  FILTER(?links >= 28)
  OPTIONAL { ?film wdt:P144 ?basedOn . }
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?film rdfs:label ?filmLabel .
    ?dir rdfs:label ?dirLabel .
    ?comp rdfs:label ?compLabel .
    ?genre rdfs:label ?genreLabel .
    ?cast rdfs:label ?castLabel .
  }
}
GROUP BY ?film ?filmLabel
LIMIT 220
`;
}

async function main() {
  console.log("🌐 Querying Wikidata Public Domain (CC0) SPARQL Endpoint by Composer Batches...");

  const moviesJsPath = path.join(__dirname, "movies.js");
  let existingList = [];
  if (fs.existsSync(moviesJsPath)) {
    const code = fs.readFileSync(moviesJsPath, "utf8");
    const fn = new Function(`${code}; return MOVIES_DB;`);
    existingList = fn();
  }

  const finalMovies = [];
  const seenTitles = new Set();

  for (const m of existingList) {
    seenTitles.add(m.title.toLowerCase());
    finalMovies.push({
      ...m,
      isTarget: m.isTarget !== false
    });
  }

  // Batches of famous film composers by Wikidata QID
  const composerBatches = [
    {
      name: "Williams, Zimmer, Morricone, Shore, Elfman",
      qids: ["Q131186", "Q471802", "Q23848", "Q185040", "Q192185"]
    },
    {
      name: "Horner, Silvestri, T. Newman, Giacchino, Desplat",
      qids: ["Q106221", "Q208572", "Q310960", "Q313362", "Q212960"]
    },
    {
      name: "J.N. Howard, Goldsmith, Herrmann, Powell, Beltrami",
      qids: ["Q215902", "Q206243", "Q193640", "Q313667", "Q356305"]
    }
  ];

  for (const batch of composerBatches) {
    process.stdout.write(`   Fetching [${batch.name}]... `);
    try {
      const t0 = Date.now();
      const data = await sparqlQuery(buildComposerBatchQuery(batch.qids));
      const bindings = (data.results && data.results.bindings) || [];
      let added = 0;

      for (const b of bindings) {
        const rawTitle = (b.filmLabel && b.filmLabel.value) || "";
        if (!rawTitle || /^Q\d+$/.test(rawTitle)) continue;

        const cleanTitle = rawTitle
          .replace(/\s*\(\d{4}\s+film\)\s*$/i, "")
          .replace(/\s*\(film\)\s*$/i, "")
          .trim();
        const titleKey = cleanTitle.toLowerCase();
        if (seenTitles.has(titleKey)) continue;

        const year = parseInt(b.year && b.year.value, 10);
        const director = (b.director && b.director.value) || "";
        const composer = (b.composer && b.composer.value) || "";
        const c1 = (b.c1 && b.c1.value) || "";
        const c2 = (b.c2 && b.c2.value) || "";
        if (!year || !director || !composer || !c1) continue;
        if (/^Q\d+$/.test(director) || /^Q\d+$/.test(composer) || /^Q\d+$/.test(c1)) continue;

        const actors = c2 && c2 !== c1 && !/^Q\d+$/.test(c2) ? [c1, c2] : [c1];
        const rawGenre = (b.g1 && b.g1.value) || "Drama";
        const genres = normalizeWikidataGenres(rawGenre);
        const hasBasedOn = parseInt((b.basedCount && b.basedCount.value) || "0", 10) > 0;
        const source = inferWikidataSource(rawGenre, hasBasedOn);

        seenTitles.add(titleKey);
        finalMovies.push({
          id: finalMovies.length + 1,
          title: cleanTitle,
          year,
          composers: [composer],
          genres,
          source,
          actors,
          director,
          tagline: `Released in ${year}, directed by ${director}.`,
          isTarget: false // Searchable in guess catalog while keeping the 510 hand-curated classics as mystery targets
        });
        added++;
      }

      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`+${added} new movies added (${elapsed}s)`);
    } catch (err) {
      console.log(`Skipped batch (${err.message})`);
    }
  }

  finalMovies.forEach((m, i) => {
    m.id = i + 1;
  });

  const targetCount = finalMovies.filter((m) => m.isTarget !== false).length;
  const outputContent = `// Curated + Wikidata Public Domain (CC0) Movie Catalog for CINELE
// Total Movies: ${finalMovies.length} (${targetCount} Mystery Targets)
// License: CC0 1.0 Public Domain (100% Free for Commercial & Personal Use)

const MOVIES_DB = ${JSON.stringify(finalMovies, null, 2)};
`;

  fs.writeFileSync(moviesJsPath, outputContent, "utf8");
  console.log(`\n🎉 Catalog expanded to ${finalMovies.length} movies (${targetCount} mystery targets) in movies.js!`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
