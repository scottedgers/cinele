// CINELE — Theaterle-inspired Movie Guessing Game
// Core game engine, 6-category clue comparison logic, autocomplete, and stats

(function () {
  "use strict";

  const MAX_GUESSES = 8;
  const YEAR_CLOSE_THRESHOLD = 5;

  // 100-Point Critic Score Configuration (extensible for future clues/hints)
  const SCORE_CONFIG = {
    MAX_SCORE: 100,
    WRONG_GUESS_PENALTY: 10,
    CATALOG_PENALTY: 15,
    SALVAGE_GREEN_PTS: 3,
    SALVAGE_GOLD_PTS: 1,
    MIN_WIN_SCORE: 5
  };

  // Source material families for "Close / Gold" matching
  const WRITTEN_SOURCES = new Set([
    "Novel / Book",
    "Short Story / Novella",
    "Comic / Graphic Novel"
  ]);
  const STAGE_FOLK_SOURCES = new Set([
    "Stage Play / Musical",
    "Fairy Tale / Folklore"
  ]);

  // Storage Keys
  const STORAGE_KEYS = {
    DAILY_STATE: "cinele_daily_state_v1",
    UNLIMITED_STATE: "cinele_unlimited_state_v1",
    STATS_DAILY: "cinele_stats_daily_v1",
    STATS_UNLIMITED: "cinele_stats_unlimited_v1"
  };

  // Epoch for Daily Feature numbering (Oct 28, 2026 -> Day #1)
  const LAUNCH_EPOCH_MS = Date.UTC(2026, 9, 28);

  // App State
  let currentMode = "daily"; // "daily" | "unlimited"
  let statsViewMode = "daily";

  let gameState = {
    targetMovieId: null,
    guesses: [], // array of movie IDs
    status: "playing", // "playing" | "won" | "lost"
    dateKey: null,
    dailyNumber: 1,
    catalogUsed: false, // flat one-time -15 penalty per round when Archive opened
    catalogGuessIndices: [], // 0-based guess indices where Archive was unlocked/used
    cluePenalties: [] // extensible array of { id, label, points, guessIndex } for future hints
  };

  let selectedMovieId = null;
  let acMatches = [];
  let acHighlightIndex = -1;
  let countdownInterval = null;

  // DOM Elements
  const dom = {
    tabDaily: document.getElementById("tab-daily"),
    tabUnlimited: document.getElementById("tab-unlimited"),
    dailyBadge: document.getElementById("daily-number-badge"),

    guessCounter: document.getElementById("guess-counter"),
    liveScoreBadge: document.getElementById("live-score-badge"),
    liveScoreValue: document.getElementById("live-score-value"),
    liveMemoryBadge: document.getElementById("live-memory-badge"),
    btnGiveUp: document.getElementById("btn-give-up"),

    controlsSection: document.getElementById("controls-section"),
    searchInput: document.getElementById("movie-search-input"),
    btnClearSearch: document.getElementById("btn-clear-search"),
    btnSubmitGuess: document.getElementById("btn-submit-guess"),
    autocompleteList: document.getElementById("autocomplete-list"),

    resultBanner: document.getElementById("result-banner"),
    resultStatusBadge: document.getElementById("result-status-badge"),
    resultMovieTitle: document.getElementById("result-movie-title"),
    resultMovieTagline: document.getElementById("result-movie-tagline"),
    resultMovieMeta: document.getElementById("result-movie-meta"),
    resultScoreNum: document.getElementById("result-score-num"),
    resultCriticTier: document.getElementById("result-critic-tier"),
    resultScoreBreakdown: document.getElementById("result-score-breakdown"),
    resultSharePreview: document.getElementById("result-share-preview"),
    btnShareResult: document.getElementById("btn-share-result"),
    btnNextUnlimited: document.getElementById("btn-next-unlimited"),
    dailyCountdownBox: document.getElementById("daily-countdown-box"),
    dailyCountdownTimer: document.getElementById("daily-countdown-timer"),

    guessesContainer: document.getElementById("guesses-container"),
    emptyBoardState: document.getElementById("empty-board-state"),
    emptySlotsContainer: document.getElementById("empty-slots-container"),

    toast: document.getElementById("toast"),

    // Modals
    btnHowTo: document.getElementById("btn-how-to"),
    btnStats: document.getElementById("btn-stats"),
    btnCatalog: document.getElementById("btn-catalog"),
    catalogBtnBadge: document.getElementById("catalog-btn-badge"),
    modalHowTo: document.getElementById("modal-how-to"),
    modalStats: document.getElementById("modal-stats"),
    modalCatalog: document.getElementById("modal-catalog"),

    statsTabDaily: document.getElementById("stats-tab-daily"),
    statsTabUnlimited: document.getElementById("stats-tab-unlimited"),
    statPlayed: document.getElementById("stat-played"),
    statWinPct: document.getElementById("stat-win-pct"),
    statAvgScore: document.getElementById("stat-avg-score"),
    statStreak: document.getElementById("stat-streak"),
    statMaxStreak: document.getElementById("stat-max-streak"),
    statsDistribution: document.getElementById("stats-distribution"),

    catalogCount: document.getElementById("catalog-count"),
    catalogPenaltyGate: document.getElementById("catalog-penalty-gate"),
    btnConfirmCatalog: document.getElementById("btn-confirm-catalog"),
    catalogBrowserContent: document.getElementById("catalog-browser-content"),
    catalogActiveTag: document.getElementById("catalog-active-tag"),
    catalogFilterInput: document.getElementById("catalog-filter-input"),
    catalogList: document.getElementById("catalog-list")
  };

  // Lookup helper
  const movieById = new Map();
  MOVIES_DB.forEach((m) => movieById.set(m.id, m));

  // =========================================================================
  // DATE & DAILY SEED HELPERS
  // =========================================================================
  function getTodayDateKey() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function getDailyPuzzleNumber() {
    const now = new Date();
    const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const diffDays = Math.floor((todayUtc - LAUNCH_EPOCH_MS) / 86400000);
    return Math.max(1, diffDays + 1);
  }

  function getTargetPool() {
    const targets = MOVIES_DB.filter((m) => m.isTarget !== false);
    return targets.length > 0 ? targets : MOVIES_DB;
  }

  function getDailyTargetMovie(dateKey) {
    const pool = getTargetPool();
    let hash = 2166136261;
    const seedStr = `CINELE_DAILY_${dateKey}`;
    for (let i = 0; i < seedStr.length; i++) {
      hash ^= seedStr.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    const index = Math.abs(hash) % pool.length;
    return pool[index];
  }

  function getRandomUnlimitedMovie(excludeIds = []) {
    const excludeSet = new Set(excludeIds);
    const targetPool = getTargetPool();
    const pool = targetPool.filter((m) => !excludeSet.has(m.id));
    const candidates = pool.length > 0 ? pool : targetPool;
    const randomIndex = Math.floor(Math.random() * candidates.length);
    return candidates[randomIndex];
  }

  function parseDirectorsList(directorStr) {
    return directorStr
      .split(/\s*(?:,|&)\s*/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  // =========================================================================
  // 6-CATEGORY CLUE COMPARISON ENGINE
  // =========================================================================
  function evaluateGuess(guessMovie, targetMovie) {
    // 1. RELEASE YEAR
    const yearDiff = Math.abs(guessMovie.year - targetMovie.year);
    let yearStatus = "wrong";
    let yearArrow = "";

    if (yearDiff === 0) {
      yearStatus = "correct";
    } else {
      yearArrow = guessMovie.year < targetMovie.year ? "↑" : "↓";
      if (yearDiff <= YEAR_CLOSE_THRESHOLD) {
        yearStatus = "close";
      } else {
        yearStatus = "wrong";
      }
    }

    // 2. DIRECTOR
    const guessDirs = parseDirectorsList(guessMovie.director);
    const targetDirs = parseDirectorsList(targetMovie.director);
    const targetDirSet = new Set(targetDirs);
    const sharedDirs = guessDirs.filter((d) => targetDirSet.has(d));

    let directorStatus = "wrong";
    if (guessMovie.director === targetMovie.director) {
      directorStatus = "correct";
    } else if (sharedDirs.length > 0) {
      directorStatus = "close";
    }

    // 3. SOUND COMPOSER
    const guessCompSet = new Set(guessMovie.composers);
    const targetCompSet = new Set(targetMovie.composers);
    const sharedComposers = guessMovie.composers.filter((c) => targetCompSet.has(c));

    let composerStatus = "wrong";
    if (
      sharedComposers.length === guessCompSet.size &&
      sharedComposers.length === targetCompSet.size
    ) {
      composerStatus = "correct";
    } else if (sharedComposers.length > 0) {
      composerStatus = "close";
    }

    // 4. GENRE
    const guessGenreSet = new Set(guessMovie.genres);
    const targetGenreSet = new Set(targetMovie.genres);
    const sharedGenres = guessMovie.genres.filter((g) => targetGenreSet.has(g));

    let genreStatus = "wrong";
    if (
      sharedGenres.length === guessGenreSet.size &&
      sharedGenres.length === targetGenreSet.size
    ) {
      genreStatus = "correct";
    } else if (sharedGenres.length > 0) {
      genreStatus = "close";
    }

    // 5. SOURCE MATERIAL
    let sourceStatus = "wrong";
    if (guessMovie.source === targetMovie.source) {
      sourceStatus = "correct";
    } else if (
      (WRITTEN_SOURCES.has(guessMovie.source) && WRITTEN_SOURCES.has(targetMovie.source)) ||
      (STAGE_FOLK_SOURCES.has(guessMovie.source) && STAGE_FOLK_SOURCES.has(targetMovie.source))
    ) {
      sourceStatus = "close";
    }

    // 6. LEAD ACTOR (Top-2 Cast)
    const targetActorSet = new Set(targetMovie.actors);
    const sharedActors = guessMovie.actors.filter((a) => targetActorSet.has(a));

    let actorStatus = "wrong";
    if (guessMovie.actors[0] === targetMovie.actors[0]) {
      actorStatus = "correct";
    } else if (sharedActors.length > 0) {
      actorStatus = "close";
    }

    return {
      isCorrectMovie: guessMovie.id === targetMovie.id,
      year: {
        value: guessMovie.year,
        arrow: yearArrow,
        status: yearStatus
      },
      director: {
        primary: guessMovie.director,
        status: directorStatus
      },
      composer: {
        primary: guessMovie.composers[0],
        secondary: guessMovie.composers[1] || null,
        status: composerStatus
      },
      genre: {
        primary: guessMovie.genres.join(" • "),
        status: genreStatus
      },
      source: {
        primary: guessMovie.source,
        status: sourceStatus
      },
      actor: {
        primary: guessMovie.actors[0],
        secondary: guessMovie.actors[1] ? `w/ ${guessMovie.actors[1]}` : null,
        status: actorStatus
      }
    };
  }

  // =========================================================================
  // 100-POINT CRITIC SCORE ENGINE (EXTENSIBLE FOR ARCHIVE & FUTURE CLUES)
  // =========================================================================
  function normalizeGameState(state) {
    if (!state) return state;
    state.catalogUsed = Boolean(state.catalogUsed);
    state.catalogGuessIndices = Array.isArray(state.catalogGuessIndices)
      ? state.catalogGuessIndices
      : [];
    state.cluePenalties = Array.isArray(state.cluePenalties)
      ? state.cluePenalties
      : [];
    return state;
  }

  function getCriticTier(score, status) {
    if (status === "lost") {
      return score >= 10 ? "🎞️ Unfinished Reel (Clue Salvage)" : "💀 Box Office Bomb";
    }
    if (score >= 95) return "🏆 Certified Masterpiece";
    if (score >= 80) return "🌟 Critics' Pick";
    if (score >= 65) return "🍅 Certified Fresh";
    if (score >= 50) return "🍿 Crowd Pleaser";
    if (score >= 30) return "🎟️ Matinee Mixed";
    return "🎞️ Cult Curio";
  }

  function calculateCriticScore(state, targetMovie) {
    normalizeGameState(state);
    const catalogDeduction = state.catalogUsed ? SCORE_CONFIG.CATALOG_PENALTY : 0;
    const clueDeduction = state.cluePenalties.reduce((sum, p) => sum + (p.points || 0), 0);

    // If round was lost, award Clue Salvage points for best category matches discovered
    if (state.status === "lost") {
      const catKeys = ["year", "director", "composer", "genre", "source", "actor"];
      const bestByCat = {};
      catKeys.forEach((k) => (bestByCat[k] = "wrong"));

      if (targetMovie) {
        state.guesses.forEach((gId) => {
          const gm = movieById.get(gId);
          if (!gm) return;
          const ev = evaluateGuess(gm, targetMovie);
          catKeys.forEach((k) => {
            const st = ev[k].status;
            if (st === "correct") {
              bestByCat[k] = "correct";
            } else if (st === "close" && bestByCat[k] === "wrong") {
              bestByCat[k] = "close";
            }
          });
        });
      }

      let greenCount = 0;
      let goldCount = 0;
      catKeys.forEach((k) => {
        if (bestByCat[k] === "correct") greenCount++;
        else if (bestByCat[k] === "close") goldCount++;
      });

      const rawSalvage =
        greenCount * SCORE_CONFIG.SALVAGE_GREEN_PTS +
        goldCount * SCORE_CONFIG.SALVAGE_GOLD_PTS;
      const lossArchiveDeduction = state.catalogUsed ? 5 : 0;
      const finalLossScore = Math.max(0, rawSalvage - lossArchiveDeduction);

      const breakdown = [
        {
          text: `Clue Salvage (${greenCount}🟩 ${goldCount}🟨): +${rawSalvage}`,
          type: "neutral"
        }
      ];
      if (state.catalogUsed) {
        breakdown.push({ text: `📖 Film Archive: -${lossArchiveDeduction}`, type: "penalty" });
      } else {
        breakdown.push({ text: "🧠 Pure Memory", type: "bonus" });
      }

      return {
        score: finalLossScore,
        tier: getCriticTier(finalLossScore, "lost"),
        breakdown
      };
    }

    // Active ("playing") or Won ("won")
    const wrongGuesses =
      state.status === "won"
        ? Math.max(0, state.guesses.length - 1)
        : state.guesses.length;
    const wrongDeduction = wrongGuesses * SCORE_CONFIG.WRONG_GUESS_PENALTY;

    const rawScore =
      SCORE_CONFIG.MAX_SCORE - wrongDeduction - catalogDeduction - clueDeduction;
    const finalScore = Math.max(SCORE_CONFIG.MIN_WIN_SCORE, rawScore);

    const breakdown = [{ text: `Base: ${SCORE_CONFIG.MAX_SCORE}`, type: "neutral" }];
    if (wrongGuesses > 0) {
      breakdown.push({
        text: `${wrongGuesses} Wrong ${wrongGuesses === 1 ? "Guess" : "Guesses"}: -${wrongDeduction}`,
        type: "penalty"
      });
    } else if (state.status === "won") {
      breakdown.push({ text: "First-Try Ace: -0", type: "bonus" });
    }

    if (state.catalogUsed) {
      breakdown.push({
        text: `📖 Film Archive: -${SCORE_CONFIG.CATALOG_PENALTY}`,
        type: "penalty"
      });
    } else {
      breakdown.push({
        text: "🧠 Pure Memory: No Penalty",
        type: "bonus"
      });
    }

    state.cluePenalties.forEach((p) => {
      breakdown.push({
        text: `${p.label || "Clue"}: -${p.points}`,
        type: "penalty"
      });
    });

    return {
      score: finalScore,
      tier: getCriticTier(finalScore, "won"),
      breakdown
    };
  }

  function markCatalogUsedForCurrentGuess() {
    normalizeGameState(gameState);
    if (gameState.status !== "playing") return;
    gameState.catalogUsed = true;
    const currentGuessIdx = gameState.guesses.length;
    if (!gameState.catalogGuessIndices.includes(currentGuessIdx)) {
      gameState.catalogGuessIndices.push(currentGuessIdx);
    }
    saveCurrentState();
    updateLiveScoreAndCatalogUI();
  }

  function updateLiveScoreAndCatalogUI() {
    const targetMovie = movieById.get(gameState.targetMovieId);
    const scoreInfo = calculateCriticScore(gameState, targetMovie);
    const isPlaying = gameState.status === "playing";

    if (dom.liveScoreValue) {
      dom.liveScoreValue.textContent = `${scoreInfo.score}/100`;
    }
    if (dom.liveMemoryBadge) {
      if (gameState.catalogUsed) {
        dom.liveMemoryBadge.textContent = `📖 Archive (-${SCORE_CONFIG.CATALOG_PENALTY})`;
        dom.liveMemoryBadge.classList.remove("pure");
        dom.liveMemoryBadge.classList.add("penalized");
      } else {
        dom.liveMemoryBadge.textContent = "🧠 Pure Memory";
        dom.liveMemoryBadge.classList.add("pure");
        dom.liveMemoryBadge.classList.remove("penalized");
      }
    }

    if (dom.catalogBtnBadge) {
      if (!isPlaying) {
        dom.catalogBtnBadge.textContent = "FREE";
        dom.catalogBtnBadge.className = "catalog-btn-badge free";
      } else if (gameState.catalogUsed) {
        dom.catalogBtnBadge.textContent = "📖";
        dom.catalogBtnBadge.className = "catalog-btn-badge unlocked";
      } else {
        dom.catalogBtnBadge.textContent = `-${SCORE_CONFIG.CATALOG_PENALTY}`;
        dom.catalogBtnBadge.className = "catalog-btn-badge penalty";
      }
    }
  }

  // =========================================================================
  // STATE PERSISTENCE & INITIALIZATION
  // =========================================================================
  function loadOrInitMode(mode) {
    currentMode = mode;
    dom.tabDaily.classList.toggle("active", mode === "daily");
    dom.tabDaily.setAttribute("aria-selected", mode === "daily" ? "true" : "false");
    dom.tabUnlimited.classList.toggle("active", mode === "unlimited");
    dom.tabUnlimited.setAttribute("aria-selected", mode === "unlimited" ? "true" : "false");

    const todayKey = getTodayDateKey();
    const dailyNum = getDailyPuzzleNumber();
    dom.dailyBadge.textContent = `#${dailyNum}`;

    if (mode === "daily") {
      const savedRaw = localStorage.getItem(STORAGE_KEYS.DAILY_STATE);
      let saved = null;
      try {
        saved = savedRaw ? JSON.parse(savedRaw) : null;
      } catch (e) {
        saved = null;
      }

      const target = getDailyTargetMovie(todayKey);

      if (saved && saved.dateKey === todayKey && movieById.has(saved.targetMovieId)) {
        gameState = normalizeGameState(saved);
      } else {
        gameState = normalizeGameState({
          targetMovieId: target.id,
          guesses: [],
          status: "playing",
          dateKey: todayKey,
          dailyNumber: dailyNum,
          catalogUsed: false,
          catalogGuessIndices: [],
          cluePenalties: []
        });
        saveCurrentState();
      }
    } else {
      const savedRaw = localStorage.getItem(STORAGE_KEYS.UNLIMITED_STATE);
      let saved = null;
      try {
        saved = savedRaw ? JSON.parse(savedRaw) : null;
      } catch (e) {
        saved = null;
      }

      if (saved && movieById.has(saved.targetMovieId)) {
        gameState = normalizeGameState(saved);
      } else {
        startNewUnlimitedGame();
        return;
      }
    }

    resetSearchBox();
    renderFullBoard(false);
  }

  function startNewUnlimitedGame() {
    const prevId = gameState ? gameState.targetMovieId : null;
    const nextMovie = getRandomUnlimitedMovie(prevId ? [prevId] : []);
    gameState = normalizeGameState({
      targetMovieId: nextMovie.id,
      guesses: [],
      status: "playing",
      dateKey: getTodayDateKey(),
      dailyNumber: null,
      catalogUsed: false,
      catalogGuessIndices: [],
      cluePenalties: []
    });
    saveCurrentState();
    resetSearchBox();
    renderFullBoard(false);
  }

  function saveCurrentState() {
    const key =
      currentMode === "daily"
        ? STORAGE_KEYS.DAILY_STATE
        : STORAGE_KEYS.UNLIMITED_STATE;
    localStorage.setItem(key, JSON.stringify(gameState));
  }

  // =========================================================================
  // RENDERING BOARD
  // =========================================================================
  function renderFullBoard(animateLatest = false) {
    normalizeGameState(gameState);
    const targetMovie = movieById.get(gameState.targetMovieId);
    const numGuesses = gameState.guesses.length;
    const isPlaying = gameState.status === "playing";

    // 1. Update counter, live score & controls visibility
    dom.guessCounter.textContent = `Guess ${numGuesses} of ${MAX_GUESSES}`;
    dom.controlsSection.classList.toggle("hidden", !isPlaying);
    dom.btnGiveUp.classList.toggle("hidden", !(currentMode === "unlimited" && isPlaying && numGuesses >= 1));
    updateLiveScoreAndCatalogUI();

    // 2. Render Guess Rows
    dom.guessesContainer.innerHTML = "";

    if (numGuesses === 0) {
      dom.guessesContainer.appendChild(dom.emptyBoardState);
      dom.emptyBoardState.classList.remove("hidden");
    } else {
      dom.emptyBoardState.classList.add("hidden");

      gameState.guesses.forEach((guessId, idx) => {
        const guessMovie = movieById.get(guessId);
        if (!guessMovie) return;
        const evalResult = evaluateGuess(guessMovie, targetMovie);
        const shouldAnimate = animateLatest && idx === numGuesses - 1;
        const usedCatalogOnRow = gameState.catalogGuessIndices.includes(idx);
        const rowEl = createGuessRowElement(
          guessMovie,
          evalResult,
          idx + 1,
          shouldAnimate,
          usedCatalogOnRow
        );
        dom.guessesContainer.appendChild(rowEl);
      });
    }

    // 3. Render Remaining Empty Slot Placeholders (6 columns)
    dom.emptySlotsContainer.innerHTML = "";
    if (isPlaying) {
      const remaining = Math.max(0, MAX_GUESSES - numGuesses);
      for (let i = 0; i < remaining; i++) {
        const slotRow = document.createElement("div");
        slotRow.className = "empty-slot-row";
        for (let c = 0; c < 6; c++) {
          const cell = document.createElement("div");
          cell.className = "empty-slot-cell";
          slotRow.appendChild(cell);
        }
        dom.emptySlotsContainer.appendChild(slotRow);
      }
    }

    // 4. Update End-of-Round Banner
    updateResultBanner(targetMovie);
  }

  function createGuessRowElement(
    guessMovie,
    evalResult,
    guessNumber,
    animate,
    usedCatalogOnRow = false
  ) {
    const block = document.createElement("div");
    block.className = "guess-block";

    const titleBar = document.createElement("div");
    titleBar.className = "guess-title-bar";
    titleBar.innerHTML = `
      <div class="guess-movie-name">
        <span class="guess-num-tag">#${guessNumber}</span>
        <span>${escapeHtml(guessMovie.title)}</span>
      </div>
      ${
        usedCatalogOnRow
          ? `<span class="guess-catalog-tag" title="Film Archive used on this guess">📖 Archive</span>`
          : ""
      }
    `;
    block.appendChild(titleBar);

    const tilesRow = document.createElement("div");
    tilesRow.className = "guess-tiles-row";

    const categories = [
      {
        label: "Release Year",
        status: evalResult.year.status,
        mainHtml: `
          <div class="tile-year-text">
            <span>${evalResult.year.value}</span>
            ${
              evalResult.year.arrow
                ? `<span class="year-arrow">${evalResult.year.arrow}</span>`
                : ""
            }
          </div>
        `
      },
      {
        label: "Director",
        status: evalResult.director.status,
        mainHtml: `<div class="tile-primary-text">${escapeHtml(evalResult.director.primary)}</div>`
      },
      {
        label: "Sound Composer",
        status: evalResult.composer.status,
        mainHtml: `
          <div class="tile-primary-text">${escapeHtml(evalResult.composer.primary)}</div>
          ${
            evalResult.composer.secondary
              ? `<div class="tile-secondary-text">&amp; ${escapeHtml(evalResult.composer.secondary)}</div>`
              : ""
          }
        `
      },
      {
        label: "Genre",
        status: evalResult.genre.status,
        mainHtml: `<div class="tile-primary-text">${escapeHtml(evalResult.genre.primary)}</div>`
      },
      {
        label: "Source",
        status: evalResult.source.status,
        mainHtml: `<div class="tile-primary-text">${escapeHtml(evalResult.source.primary)}</div>`
      },
      {
        label: "Lead Actor",
        status: evalResult.actor.status,
        mainHtml: `
          <div class="tile-primary-text">${escapeHtml(evalResult.actor.primary)}</div>
          ${
            evalResult.actor.secondary
              ? `<div class="tile-secondary-text">${escapeHtml(evalResult.actor.secondary)}</div>`
              : ""
          }
        `
      }
    ];

    categories.forEach((cat, colIdx) => {
      const tile = document.createElement("div");
      tile.className = `clue-tile ${cat.status}${animate ? " animate-flip" : ""}`;
      if (animate) {
        tile.style.animationDelay = `${colIdx * 85}ms`;
      }

      tile.innerHTML = `
        <span class="tile-mobile-label">${cat.label}</span>
        <div class="tile-main-content">${cat.mainHtml}</div>
      `;
      tilesRow.appendChild(tile);
    });

    block.appendChild(tilesRow);
    return block;
  }

  function updateResultBanner(targetMovie) {
    if (gameState.status === "playing") {
      dom.resultBanner.classList.add("hidden");
      stopDailyCountdown();
      return;
    }

    dom.resultBanner.classList.remove("hidden");
    const won = gameState.status === "won";
    const tries = gameState.guesses.length;

    dom.resultStatusBadge.classList.toggle("loss", !won);
    if (won) {
      const praise =
        tries === 1
          ? "🏆 BLOCKBUSTER! FIRST TRY!"
          : tries <= 3
          ? "🌟 ACADEMY AWARD WORTHY!"
          : tries <= 6
          ? "🎬 STANDING OVATION!"
          : "🍿 JUST BEFORE THE CREDITS!";
      dom.resultStatusBadge.textContent = `${praise} (${tries}/${MAX_GUESSES})`;
    } else {
      dom.resultStatusBadge.textContent = "🎞️ END OF REEL — THE MYSTERY FILM WAS:";
    }

    dom.resultMovieTitle.textContent = `${targetMovie.title} (${targetMovie.year})`;
    dom.resultMovieTagline.textContent = `"${targetMovie.tagline}"`;

    dom.resultMovieMeta.innerHTML = `
      <span class="meta-pill"><strong>Director:</strong> ${escapeHtml(targetMovie.director)}</span>
      <span class="meta-pill"><strong>Composer:</strong> ${escapeHtml(targetMovie.composers.join(" & "))}</span>
      <span class="meta-pill"><strong>Genre:</strong> ${escapeHtml(targetMovie.genres.join(" • "))}</span>
      <span class="meta-pill"><strong>Source:</strong> ${escapeHtml(targetMovie.source)}</span>
      <span class="meta-pill"><strong>Lead Cast:</strong> ${escapeHtml(targetMovie.actors.join(", "))}</span>
    `;

    // Update 100-Point Critic Score Card & Share Preview
    const scoreInfo = calculateCriticScore(gameState, targetMovie);
    if (dom.resultScoreNum) {
      dom.resultScoreNum.textContent = String(scoreInfo.score);
    }
    if (dom.resultCriticTier) {
      dom.resultCriticTier.textContent = scoreInfo.tier;
    }
    if (dom.resultScoreBreakdown) {
      dom.resultScoreBreakdown.innerHTML = scoreInfo.breakdown
        .map(
          (item) =>
            `<span class="score-breakdown-pill ${item.type}">${escapeHtml(item.text)}</span>`
        )
        .join("");
    }
    if (dom.resultSharePreview) {
      dom.resultSharePreview.textContent = buildShareText(targetMovie);
    }

    if (currentMode === "daily") {
      dom.btnNextUnlimited.textContent = "♾️ Play Unlimited Mode";
      dom.dailyCountdownBox.classList.remove("hidden");
      startDailyCountdown();
    } else {
      dom.btnNextUnlimited.textContent = "🎬 Next Mystery Movie →";
      dom.dailyCountdownBox.classList.add("hidden");
      stopDailyCountdown();
    }
  }

  // =========================================================================
  // SUBMITTING A GUESS
  // =========================================================================
  function submitGuess(movieId) {
    if (gameState.status !== "playing") return;
    const movie = movieById.get(movieId);
    if (!movie) return;

    if (gameState.guesses.includes(movieId)) {
      showToast("You already guessed that film!");
      return;
    }

    gameState.guesses.push(movieId);
    const targetMovie = movieById.get(gameState.targetMovieId);

    if (movieId === gameState.targetMovieId) {
      gameState.status = "won";
      const scoreInfo = calculateCriticScore(gameState, targetMovie);
      recordStats(currentMode, true, gameState.guesses.length, scoreInfo.score);
    } else if (gameState.guesses.length >= MAX_GUESSES) {
      gameState.status = "lost";
      const scoreInfo = calculateCriticScore(gameState, targetMovie);
      recordStats(currentMode, false, MAX_GUESSES, scoreInfo.score);
    }

    saveCurrentState();
    resetSearchBox();
    renderFullBoard(true);

    if (gameState.status !== "playing") {
      setTimeout(() => {
        dom.resultBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 450);
    }
  }

  // =========================================================================
  // AUTOCOMPLETE SEARCH
  // =========================================================================
  function normalizeTitle(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function updateAutocomplete() {
    const rawQuery = dom.searchInput.value.trim();
    dom.btnClearSearch.classList.toggle("hidden", rawQuery.length === 0);

    if (selectedMovieId) {
      const selMovie = movieById.get(selectedMovieId);
      if (!selMovie || selMovie.title.toLowerCase() !== rawQuery.toLowerCase()) {
        selectedMovieId = null;
      }
    }
    dom.btnSubmitGuess.disabled = !selectedMovieId;

    if (rawQuery.length === 0) {
      hideAutocomplete();
      return;
    }

    const q = normalizeTitle(rawQuery);
    const guessedSet = new Set(gameState.guesses);

    const scored = [];
    for (const m of MOVIES_DB) {
      const normTitle = normalizeTitle(m.title);
      const strippedTitle = normTitle.replace(/^the\s+/, "");

      let score = 0;
      if (normTitle === q || strippedTitle === q) {
        score = 100;
      } else if (normTitle.startsWith(q) || strippedTitle.startsWith(q)) {
        score = 80;
      } else if (normTitle.includes(q)) {
        score = 50;
      }

      if (score > 0) {
        scored.push({ movie: m, score, alreadyGuessed: guessedSet.has(m.id) });
      }
    }

    scored.sort((a, b) => {
      if (a.alreadyGuessed !== b.alreadyGuessed) return a.alreadyGuessed ? 1 : -1;
      if (b.score !== a.score) return b.score - a.score;
      return a.movie.title.localeCompare(b.movie.title);
    });

    acMatches = scored.slice(0, 8);
    acHighlightIndex = acMatches.length > 0 ? 0 : -1;
    renderAutocompleteDropdown(rawQuery);
  }

  function renderAutocompleteDropdown(rawQuery) {
    if (acMatches.length === 0) {
      dom.autocompleteList.innerHTML = `
        <li class="autocomplete-item already-guessed">
          <span class="ac-title">No matching movies in catalog</span>
        </li>
      `;
      dom.autocompleteList.classList.remove("hidden");
      return;
    }

    dom.autocompleteList.innerHTML = "";
    acMatches.forEach((item, idx) => {
      const li = document.createElement("li");
      li.className = "autocomplete-item";
      if (idx === acHighlightIndex) li.classList.add("highlighted");
      if (item.alreadyGuessed) li.classList.add("already-guessed");

      li.innerHTML = `
        <span class="ac-title">${highlightSubstring(item.movie.title, rawQuery)}</span>
        <span class="ac-badge">${item.alreadyGuessed ? "Already Guessed" : "Select ↵"}</span>
      `;

      li.addEventListener("mousedown", (e) => {
        e.preventDefault();
        if (item.alreadyGuessed) {
          showToast("Already guessed in this round!");
          return;
        }
        selectAutocompleteMovie(item.movie, true);
      });

      dom.autocompleteList.appendChild(li);
    });

    dom.autocompleteList.classList.remove("hidden");
    dom.searchInput.setAttribute("aria-expanded", "true");
  }

  function selectAutocompleteMovie(movie, autoSubmit = false) {
    selectedMovieId = movie.id;
    dom.searchInput.value = movie.title;
    dom.btnClearSearch.classList.remove("hidden");
    dom.btnSubmitGuess.disabled = false;
    hideAutocomplete();

    if (autoSubmit) {
      submitGuess(movie.id);
    }
  }

  function hideAutocomplete() {
    dom.autocompleteList.classList.add("hidden");
    dom.searchInput.setAttribute("aria-expanded", "false");
    acMatches = [];
    acHighlightIndex = -1;
  }

  function resetSearchBox() {
    selectedMovieId = null;
    dom.searchInput.value = "";
    dom.btnClearSearch.classList.add("hidden");
    dom.btnSubmitGuess.disabled = true;
    hideAutocomplete();
  }

  // =========================================================================
  // STATISTICS & EMOJI SHARING
  // =========================================================================
  function getStats(mode) {
    const key = mode === "daily" ? STORAGE_KEYS.STATS_DAILY : STORAGE_KEYS.STATS_UNLIMITED;
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        return {
          played: parsed.played || 0,
          wins: parsed.wins || 0,
          currentStreak: parsed.currentStreak || 0,
          maxStreak: parsed.maxStreak || 0,
          totalScore: typeof parsed.totalScore === "number" ? parsed.totalScore : 0,
          scoredGames: typeof parsed.scoredGames === "number" ? parsed.scoredGames : 0,
          distribution: Array.isArray(parsed.distribution)
            ? parsed.distribution
            : [0, 0, 0, 0, 0, 0, 0, 0]
        };
      } catch (e) {}
    }
    return {
      played: 0,
      wins: 0,
      currentStreak: 0,
      maxStreak: 0,
      totalScore: 0,
      scoredGames: 0,
      distribution: [0, 0, 0, 0, 0, 0, 0, 0]
    };
  }

  function recordStats(mode, won, numGuesses, criticScore = 0) {
    const key = mode === "daily" ? STORAGE_KEYS.STATS_DAILY : STORAGE_KEYS.STATS_UNLIMITED;
    const stats = getStats(mode);
    stats.played += 1;
    stats.totalScore = (stats.totalScore || 0) + criticScore;
    stats.scoredGames = (stats.scoredGames || 0) + 1;
    if (won) {
      stats.wins += 1;
      stats.currentStreak += 1;
      stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
      const distIdx = Math.min(MAX_GUESSES - 1, Math.max(0, numGuesses - 1));
      stats.distribution[distIdx] = (stats.distribution[distIdx] || 0) + 1;
    } else {
      stats.currentStreak = 0;
    }
    localStorage.setItem(key, JSON.stringify(stats));
  }

  function renderStatsModal(mode) {
    statsViewMode = mode;
    dom.statsTabDaily.classList.toggle("active", mode === "daily");
    dom.statsTabUnlimited.classList.toggle("active", mode === "unlimited");

    const stats = getStats(mode);
    dom.statPlayed.textContent = String(stats.played);
    const pct = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;
    dom.statWinPct.textContent = `${pct}%`;
    const avgScore =
      stats.scoredGames > 0 ? Math.round(stats.totalScore / stats.scoredGames) : 0;
    if (dom.statAvgScore) {
      dom.statAvgScore.textContent = String(avgScore);
    }
    dom.statStreak.textContent = String(stats.currentStreak);
    dom.statMaxStreak.textContent = String(stats.maxStreak);

    const maxDist = Math.max(1, ...stats.distribution);
    dom.statsDistribution.innerHTML = "";
    stats.distribution.forEach((count, i) => {
      const widthPct = Math.max(7, Math.round((count / maxDist) * 100));
      const row = document.createElement("div");
      row.className = "dist-row";
      row.innerHTML = `
        <span class="dist-num">${i + 1}</span>
        <div class="dist-bar-wrap">
          <div class="dist-bar" style="width: ${widthPct}%">${count}</div>
        </div>
      `;
      dom.statsDistribution.appendChild(row);
    });
  }

  function buildShareText(targetMovie) {
    normalizeGameState(gameState);
    const scoreInfo = calculateCriticScore(gameState, targetMovie);
    const guessesStr =
      gameState.status === "won"
        ? `${gameState.guesses.length}/${MAX_GUESSES}`
        : `X/${MAX_GUESSES}`;
    const memoryBadge = gameState.catalogUsed ? "📖" : "🧠";
    const header =
      currentMode === "daily"
        ? `🎬 CINEDLE Daily #${gameState.dailyNumber || getDailyPuzzleNumber()} — ${guessesStr} | ⭐ ${scoreInfo.score}/100 ${memoryBadge}`
        : `🎬 CINEDLE (Unlimited) — ${guessesStr} | ⭐ ${scoreInfo.score}/100 ${memoryBadge}`;

    const rows = gameState.guesses.map((gId, idx) => {
      const gm = movieById.get(gId);
      const ev = evaluateGuess(gm, targetMovie);
      const toEmoji = (s) => (s === "correct" ? "🟩" : s === "close" ? "🟨" : "🟥");
      const tiles = [
        toEmoji(ev.year.status),
        toEmoji(ev.director.status),
        toEmoji(ev.composer.status),
        toEmoji(ev.genre.status),
        toEmoji(ev.source.status),
        toEmoji(ev.actor.status)
      ].join("");
      const rowUsedCatalog = gameState.catalogGuessIndices.includes(idx);
      return rowUsedCatalog ? `${tiles} 📖` : tiles;
    });

    return [header, "🗓️🎬🎵🎭📖🌟", ...rows].join("\n");
  }

  function shareCurrentResult() {
    const targetMovie = movieById.get(gameState.targetMovieId);
    if (!targetMovie) return;

    const text = buildShareText(targetMovie);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast("Copied Critic Score & emoji grid to clipboard!");
      });
    } else {
      showToast("Result ready to share!");
    }
  }

  // =========================================================================
  // MOVIE CATALOG MODAL (Title-only browse, spoiler-free, -15 pt gate)
  // =========================================================================
  function openCatalogModal() {
    normalizeGameState(gameState);
    const isPlaying = gameState.status === "playing";
    dom.catalogFilterInput.value = "";
    renderCatalogList("");

    if (isPlaying && !gameState.catalogUsed) {
      // Show safety confirmation gate first so user doesn't lose 15 pts by accident
      dom.catalogPenaltyGate.classList.remove("hidden");
      dom.catalogBrowserContent.classList.add("hidden");
    } else {
      dom.catalogPenaltyGate.classList.add("hidden");
      dom.catalogBrowserContent.classList.remove("hidden");
      if (dom.catalogActiveTag) {
        dom.catalogActiveTag.classList.toggle("hidden", !gameState.catalogUsed);
      }
      setTimeout(() => dom.catalogFilterInput.focus(), 50);
    }

    dom.modalCatalog.classList.remove("hidden");
  }

  function renderCatalogList(filterText = "") {
    const q = normalizeTitle(filterText.trim());
    const sorted = [...MOVIES_DB].sort((a, b) => a.title.localeCompare(b.title));
    const guessedSet = new Set(gameState.guesses);

    const filtered = sorted.filter((m) => {
      if (!q) return true;
      return normalizeTitle(m.title).includes(q);
    });

    dom.catalogCount.textContent = String(filtered.length);
    dom.catalogList.innerHTML = "";

    filtered.forEach((m) => {
      const alreadyGuessed = guessedSet.has(m.id);
      const row = document.createElement("div");
      row.className = `catalog-row${alreadyGuessed ? " already-guessed" : ""}`;
      row.innerHTML = `
        <span class="catalog-row-title">${escapeHtml(m.title)}</span>
        <span class="catalog-row-sub">${alreadyGuessed ? "Guessed" : "Select"}</span>
      `;
      row.addEventListener("click", () => {
        if (alreadyGuessed) {
          showToast("You already guessed that film!");
          return;
        }
        dom.modalCatalog.classList.add("hidden");
        if (gameState.status === "playing") {
          markCatalogUsedForCurrentGuess();
          selectAutocompleteMovie(m, false);
          dom.searchInput.focus();
          showToast(`Selected "${m.title}" — click Guess to submit!`);
        }
      });
      dom.catalogList.appendChild(row);
    });
  }

  // =========================================================================
  // DAILY COUNTDOWN TIMER
  // =========================================================================
  function startDailyCountdown() {
    stopDailyCountdown();
    const tick = () => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = Math.max(0, tomorrow.getTime() - now.getTime());
      const hrs = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const mins = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const secs = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
      dom.dailyCountdownTimer.textContent = `${hrs}:${mins}:${secs}`;
    };
    tick();
    countdownInterval = setInterval(tick, 1000);
  }

  function stopDailyCountdown() {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }

  // =========================================================================
  // UTILITIES & EVENT LISTENERS
  // =========================================================================
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlightSubstring(text, query) {
    const cleanText = escapeHtml(text);
    const cleanQ = query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!cleanQ) return cleanText;
    try {
      const regex = new RegExp(`(${cleanQ})`, "ig");
      return cleanText.replace(regex, "<mark>$1</mark>");
    } catch (e) {
      return cleanText;
    }
  }

  let toastTimeout = null;
  function showToast(msg) {
    dom.toast.textContent = msg;
    dom.toast.classList.remove("hidden");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      dom.toast.classList.add("hidden");
    }, 2600);
  }

  function bindEvents() {
    // Mode Tabs
    dom.tabDaily.addEventListener("click", () => {
      if (currentMode !== "daily") loadOrInitMode("daily");
    });
    dom.tabUnlimited.addEventListener("click", () => {
      if (currentMode !== "unlimited") loadOrInitMode("unlimited");
    });

    // Search Input
    dom.searchInput.addEventListener("input", () => {
      updateAutocomplete();
    });

    dom.searchInput.addEventListener("focus", () => {
      if (dom.searchInput.value.trim().length > 0) {
        updateAutocomplete();
      }
    });

    dom.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        if (acMatches.length > 0) {
          e.preventDefault();
          acHighlightIndex = (acHighlightIndex + 1) % acMatches.length;
          renderAutocompleteDropdown(dom.searchInput.value.trim());
        }
      } else if (e.key === "ArrowUp") {
        if (acMatches.length > 0) {
          e.preventDefault();
          acHighlightIndex = (acHighlightIndex - 1 + acMatches.length) % acMatches.length;
          renderAutocompleteDropdown(dom.searchInput.value.trim());
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedMovieId) {
          submitGuess(selectedMovieId);
        } else if (acMatches.length > 0 && acHighlightIndex >= 0) {
          const picked = acMatches[acHighlightIndex];
          if (picked.alreadyGuessed) {
            showToast("Already guessed in this round!");
          } else {
            selectAutocompleteMovie(picked.movie, true);
          }
        }
      } else if (e.key === "Escape") {
        hideAutocomplete();
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-wrapper")) {
        hideAutocomplete();
      }
    });

    dom.btnClearSearch.addEventListener("click", () => {
      resetSearchBox();
      dom.searchInput.focus();
    });

    dom.btnSubmitGuess.addEventListener("click", () => {
      if (selectedMovieId) {
        submitGuess(selectedMovieId);
      }
    });

    dom.btnGiveUp.addEventListener("click", () => {
      if (currentMode === "unlimited" && gameState.status === "playing") {
        gameState.status = "lost";
        const targetMovie = movieById.get(gameState.targetMovieId);
        const scoreInfo = calculateCriticScore(gameState, targetMovie);
        recordStats("unlimited", false, gameState.guesses.length, scoreInfo.score);
        saveCurrentState();
        renderFullBoard(false);
      }
    });

    // End of round actions
    dom.btnShareResult.addEventListener("click", shareCurrentResult);
    dom.btnNextUnlimited.addEventListener("click", () => {
      if (currentMode === "daily") {
        loadOrInitMode("unlimited");
      } else {
        startNewUnlimitedGame();
      }
    });

    // Modals
    dom.btnHowTo.addEventListener("click", () => {
      dom.modalHowTo.classList.remove("hidden");
    });

    dom.btnStats.addEventListener("click", () => {
      renderStatsModal(currentMode);
      dom.modalStats.classList.remove("hidden");
    });

    dom.btnCatalog.addEventListener("click", () => {
      openCatalogModal();
    });

    if (dom.btnConfirmCatalog) {
      dom.btnConfirmCatalog.addEventListener("click", () => {
        markCatalogUsedForCurrentGuess();
        dom.catalogPenaltyGate.classList.add("hidden");
        dom.catalogBrowserContent.classList.remove("hidden");
        if (dom.catalogActiveTag) {
          dom.catalogActiveTag.classList.remove("hidden");
        }
        dom.catalogFilterInput.focus();
        showToast(`📖 Film Archive unlocked (-${SCORE_CONFIG.CATALOG_PENALTY} Critic Score)`);
      });
    }

    dom.catalogFilterInput.addEventListener("input", () => {
      renderCatalogList(dom.catalogFilterInput.value);
    });

    dom.statsTabDaily.addEventListener("click", () => renderStatsModal("daily"));
    dom.statsTabUnlimited.addEventListener("click", () => renderStatsModal("unlimited"));

    document.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-close-modal");
        document.getElementById(modalId).classList.add("hidden");
      });
    });

    document.querySelectorAll(".modal-overlay").forEach((overlay) => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.add("hidden");
        }
      });
    });
  }

  // Boot app
  bindEvents();
  loadOrInitMode("daily");
})();
