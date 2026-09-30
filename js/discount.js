(() => {
  const TRACKS = [
  {
    "id": "ai-trap-heavy-142",
    "title": "AI Trap Heavy 142",
    "bpm": 142,
    "key": "F# Minor",
    "genre": "Trap",
    "tags": [
      "AI-generated",
      "Heavy 808s",
      "Dark",
      "Workout"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/trap-heavy-142-v1.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "AI-crafted trap banger with thunderous 808s, haunting melody, and crisp hi-hats. Generated at 142 BPM for maximum energy. Perfect for dark trap, drill, or high-energy workout playlists.",
    "releaseDate": "2026-06-11"
  },
  {
    "id": "ai-west-coast-96",
    "title": "AI West Coast 96",
    "bpm": 96,
    "key": "G Major",
    "genre": "West Coast Hip Hop",
    "tags": [
      "AI-generated",
      "G-Funk",
      "Smooth",
      "Cruising"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/west-coast-96.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Classic West Coast vibe at 96 BPM. Warm synth leads, deep funk bassline, and swung drums. Built for laid-back storytelling, cruising music, or smooth hook-driven tracks.",
    "releaseDate": "2026-06-13"
  },
  {
    "id": "south-memphis-78-alt",
    "title": "South Memphis 78 (Alt)",
    "bpm": 78,
    "key": "D Minor",
    "genre": "Memphis Phonk / Trap",
    "tags": [
      "Phonk",
      "Slow",
      "Dark",
      "Cowbell",
      "Alternate"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/south-memphis-78-alt.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Alternate take on the South Memphis 78 phonk session. Heavier cowbell, deeper 808 saturation, darker atmosphere. Classic Memphis sound at half-time tempo.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "cross-bang",
    "title": "Cross Bang",
    "bpm": 138,
    "key": "A Minor",
    "genre": "Trap / Drill",
    "tags": [
      "Aggressive",
      "Drill",
      "UK Influence",
      "High Energy"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/cross-bang.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "UK drill meets US trap. Sliding 808s, rapid hi-hat triplets, menacing piano stabs. Built for aggressive flows and high-impact drops.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "detroit-85",
    "title": "Detroit 85",
    "bpm": 85,
    "key": "C# Minor",
    "genre": "Detroit Hip Hop / Boom Bap",
    "tags": [
      "Boom Bap",
      "Soulful",
      "Sample-based Feel",
      "Jazz Chords"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/detroit-85.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Soulful Detroit boom bap at 85 BPM. Dusty drums, jazz chord progressions, warm vinyl texture. Made for conscious lyrics and storytelling.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "east-coast-98",
    "title": "East Coast 98",
    "bpm": 98,
    "key": "Bb Minor",
    "genre": "East Coast Hip Hop / Boom Bap",
    "tags": [
      "Boom Bap",
      "Golden Era",
      "Piano Loop",
      "Hard Drums"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/east-coast-98.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Classic 90s East Coast boom bap. Piano-driven loop, punchy kick/snare, deep bass. Authentic golden era sound for pure lyricism.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "heater",
    "title": "Heater",
    "bpm": 140,
    "key": "E Minor",
    "genre": "Trap / Club",
    "tags": [
      "Club",
      "High Energy",
      "Festival",
      "Anthem"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/heater.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Festival-ready trap heater at 140 BPM. Massive drop, euphoric lead, rolling bass. Designed for main stage energy and crowd reaction.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "modern-hiphop-105",
    "title": "Modern Hip Hop 105",
    "bpm": 105,
    "key": "F Minor",
    "genre": "Modern Hip Hop / Trap",
    "tags": [
      "Contemporary",
      "Melodic",
      "Versatile",
      "Radio-ready"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/modern-hiphop-105.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Contemporary melodic trap at 105 BPM. Emotional chord progression, modern drum programming, space for vocals. Radio-ready structure with intro/hook/verse/bridge.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "play-4-bahb",
    "title": "Play 4 Bahb",
    "bpm": 132,
    "key": "G# Minor",
    "genre": "Trap / Drill",
    "tags": [
      "Drill",
      "Sliding 808s",
      "Dark",
      "UK Style"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/play-4-bahb.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "UK drill influenced trap with signature sliding 808s and syncopated hi-hats. Dark, menacing atmosphere for aggressive delivery.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "south-atlanta-130-v1",
    "title": "South Atlanta 130 (v1)",
    "bpm": 130,
    "key": "A Minor",
    "genre": "Atlanta Trap",
    "tags": [
      "Atlanta",
      "Trap",
      "Zaytoven Style",
      "Bell Melody"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/south-atlanta-130-v1.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Zaytoven-inspired Atlanta trap at 130 BPM. Sparkling bell melody, rolling hi-hats, deep 808s. Classic South sound for melodic trap flows.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "south-atlanta-130-v2",
    "title": "South Atlanta 130 (v2)",
    "bpm": 130,
    "key": "A Minor",
    "genre": "Atlanta Trap",
    "tags": [
      "Atlanta",
      "Trap",
      "Alternate Mix",
      "Different Drums"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/south-atlanta-130-v2.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Alternate drum pattern on the South Atlanta 130 session. Same melody, different pocket. Gives you options for different vocal approaches.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "south-atlanta-130-v3",
    "title": "South Atlanta 130 (v3)",
    "bpm": 130,
    "key": "A Minor",
    "genre": "Atlanta Trap",
    "tags": [
      "Atlanta",
      "Trap",
      "Minimal",
      "Space for Vocals"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/south-atlanta-130-v3.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Stripped-back version with more space for vocals. Minimal drum arrangement, melody takes center stage. Ideal for melodic rappers and singers.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "south-memphis-78",
    "title": "South Memphis 78",
    "bpm": 78,
    "key": "D Minor",
    "genre": "Memphis Phonk / Trap",
    "tags": [
      "Phonk",
      "Slow",
      "Dark",
      "Cowbell",
      "Classic"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/south-memphis-78.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Authentic Memphis phonk at half-time 78 BPM. Distorted cowbell, lo-fi texture, sinking 808s. The sound that defined an underground movement.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "this-one-slaps",
    "title": "This One Slaps",
    "bpm": 136,
    "key": "C Minor",
    "genre": "Trap / Banger",
    "tags": [
      "Banger",
      "Hard",
      "Simple",
      "Effective"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/this-one-slaps.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Straight-up banger. No frills, just hard-hitting drums and a hypnotic loop. Sometimes simple hits hardest.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "trap-heavy-142-v3",
    "title": "Trap Heavy 142 (v3)",
    "bpm": 142,
    "key": "F# Minor",
    "genre": "Trap",
    "tags": [
      "Heavy",
      "Polished",
      "Version 3",
      "Refined"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/trap-heavy-142-v3.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Refined version with better mix balance. 808 sits cleaner, hi-hats more defined. Production polish on the same core idea.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "trap-heavy-142-v5",
    "title": "Trap Heavy 142 (v5)",
    "bpm": 142,
    "key": "F# Minor",
    "genre": "Trap",
    "tags": [
      "Heavy",
      "Final",
      "Version 5",
      "Mastered"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/trap-heavy-142-v5.m4a",
    "producedBy": "The Beat Mob AI",
    "license": "unlimited",
    "price": {
      "single": 19.99,
      "bundle5": 69.99,
      "bundle10": 99.99
    },
    "description": "Final mastered version of the 142 BPM trap session. Streaming-ready loudness, polished transients, maximum impact.",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "midnight-shadow",
    "title": "Midnight Shadow",
    "bpm": 140,
    "key": "A Minor",
    "genre": "Trap",
    "tags": [
      "A Minor Trap"
    ],
    "audioUrl": "https://myaiplug.github.io/signal-chain/beats/midnight-shadow-140bpm.m4a",
    "producedBy": "The Beat Mob AI",
    "license": null,
    "price": null,
    "description": "From the Signal Chain beat player playlist (A Minor Trap, 140 BPM).",
    "previewOnly": true
  }
];
  const grid = document.getElementById("rack-grid");
  const search = document.getElementById("search");
  let filtered = TRACKS.slice();

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function initials(title) {
    return (title || "?")
      .replace(/[^A-Za-z0-9 ]/g, " ")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase() || "?";
  }

  function render(state) {
    if (!filtered.length) {
      grid.innerHTML = `<div class="empty">No beats match.</div>`;
      return;
    }
    grid.innerHTML = filtered.map((t) => {
      const i = TRACKS.indexOf(t);
      const current = state && state.index === i;
      const playing = current && state.playing;
      const meta = [];
      if (t.bpm) meta.push(`${t.bpm} BPM`);
      if (t.key) meta.push(t.key);
      if (t.genre) meta.push(t.genre);
      const tags = (t.tags || []).slice(0, 3).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("");
      const priced = t.price && typeof t.price.single === "number";
      // User-selected 50% off: $19.99 / 2 = $9.995 → display $9.99
      const original = priced ? t.price.single : null;
      const sale = priced ? Math.floor(original * 50) / 100 : null;
      const priceHtml = priced
        ? `<div class="price-wrap"><span class="price-was">$${original.toFixed(2)}</span><span class="price-sale">$${sale.toFixed(2)} <span class="sale-badge">50% off</span></span></div>`
        : `<div class="price preview">Preview</div>`;
      return `
        <article class="beat-card${current ? " is-current" : ""}" data-index="${i}">
          <div class="cover">
            <div class="cover-initials">${escapeHtml(initials(t.title))}</div>
            <button class="play-fab" type="button" data-action="play" aria-label="Play">
              ${playing ? window.BeatMobPlayer.icons.pause : window.BeatMobPlayer.icons.play}
            </button>
          </div>
          <div class="card-body">
            <h3 class="card-title">${escapeHtml(t.title)}</h3>
            <div class="card-meta">${meta.map((m) => `<span>${escapeHtml(m)}</span>`).join("") || "<span>Instrumental</span>"}</div>
            <div class="card-tags">${tags}</div>
            <div class="card-foot">
              <div>
                ${priceHtml}
                <div class="license">${escapeHtml(t.license ? t.license + " license" : (t.producedBy || "The Beat Mob"))}</div>
              </div>
              <div>
                <button class="ghost-btn" type="button" data-action="play">Play</button>
                ${priced ? `<a class="ghost-btn" href="https://thebeatmob.gumroad.com/" target="_blank" rel="noopener noreferrer">License</a>` : ""}
              </div>
            </div>
          </div>
        </article>`;
    }).join("");
  }

  const player = window.BeatMobPlayer.createPlayer({
    tracks: TRACKS,
    onChange: (state) => render(state),
  });

  grid.addEventListener("click", (e) => {
    const action = e.target.closest("[data-action='play']");
    const card = e.target.closest(".beat-card");
    if (!action || !card) return;
    const i = Number(card.dataset.index);
    const st = player.getState();
    if (st.index === i && st.playing) player.pause();
    else player.playIndex(i);
  });

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    filtered = TRACKS.filter((t) => {
      if (!q) return true;
      const hay = [t.title, t.genre, t.key, t.producedBy, ...(t.tags || [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q) || String(t.bpm || "").includes(q);
    });
    render(player.getState());
  });

  render(player.getState());
})();
