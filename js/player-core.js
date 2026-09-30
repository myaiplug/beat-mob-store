window.BeatMobPlayer = (function () {
  const iconPlay = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  const iconPause = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>`;
  const iconPrev = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>`;
  const iconNext = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>`;

  function fmt(sec) {
    if (!Number.isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  /**
   * Tag-taming graph (honest, no stems):
   * MediaElementSource → high-mid peaking cut (voice band) → DynamicsCompressor
   * (ducks loud vocal-tag bursts) → makeup Gain → destination.
   * Tags stay in the mix; seeking uses audio.currentTime on the element.
   */
  function createTagTameGraph(audio) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    const ctx = new AudioCtx();
    const source = ctx.createMediaElementSource(audio);

    // Soft cut where spoken tags are usually harsh (presence band)
    const voiceCut = ctx.createBiquadFilter();
    voiceCut.type = "peaking";
    voiceCut.frequency.value = 2800;
    voiceCut.Q.value = 1.1;
    voiceCut.gain.value = -7.5;

    // Extra shelf to ease sibilance / shouty tops on tags
    const airCut = ctx.createBiquadFilter();
    airCut.type = "highshelf";
    airCut.frequency.value = 6500;
    airCut.gain.value = -3.5;

    // Compress loud tag transients so they sit under the beat
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -28;
    comp.knee.value = 18;
    comp.ratio.value = 5.5;
    comp.attack.value = 0.004;
    comp.release.value = 0.22;

    const makeup = ctx.createGain();
    makeup.gain.value = 1.12; // recover beat body after compression

    const master = ctx.createGain();
    master.gain.value = 0.9;

    source.connect(voiceCut);
    voiceCut.connect(airCut);
    airCut.connect(comp);
    comp.connect(makeup);
    makeup.connect(master);
    master.connect(ctx.destination);

    return { ctx, master, voiceCut, airCut, comp };
  }

  function createPlayer({ tracks, onChange }) {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.crossOrigin = "anonymous";
    audio.volume = 1;

    const state = {
      index: -1,
      playing: false,
      seeking: false,
      tracks,
      tagTame: true,
    };

    let graph = null;
    let graphFailed = false;
    let usingElementVolume = true;

    const els = {
      nowTitle: document.getElementById("now-title"),
      nowSub: document.getElementById("now-sub"),
      nowArt: document.getElementById("now-art"),
      btnPlay: document.getElementById("btn-play"),
      btnPrev: document.getElementById("btn-prev"),
      btnNext: document.getElementById("btn-next"),
      seek: document.getElementById("seek"),
      curTime: document.getElementById("cur-time"),
      durTime: document.getElementById("dur-time"),
      volume: document.getElementById("volume"),
    };

    els.btnPlay.innerHTML = iconPlay;
    els.btnPrev.innerHTML = iconPrev;
    els.btnNext.innerHTML = iconNext;

    function initials(title) {
      return (title || "BM")
        .replace(/[^A-Za-z0-9 ]/g, " ")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase() || "BM";
    }

    function notify() {
      if (typeof onChange === "function") onChange({ ...state });
      updateNow();
      els.btnPlay.innerHTML = state.playing ? iconPause : iconPlay;
    }

    function updateNow() {
      const t = state.tracks[state.index];
      if (!t) {
        els.nowTitle.textContent = "Select a beat";
        els.nowSub.textContent = "The Beat Mob";
        els.nowArt.textContent = "BM";
        return;
      }
      els.nowTitle.textContent = t.title;
      const bits = [];
      if (t.bpm) bits.push(`${t.bpm} BPM`);
      if (t.key) bits.push(t.key);
      const tame = graph && !graphFailed ? " · tags eased" : "";
      els.nowSub.textContent =
        [t.producedBy || "The Beat Mob", ...bits].filter(Boolean).join(" · ") + tame;
      els.nowArt.textContent = initials(t.title);
    }

    function ensureGraph() {
      if (graph || graphFailed) return;
      try {
        graph = createTagTameGraph(audio);
        if (!graph) throw new Error("AudioContext unavailable");
        usingElementVolume = false;
        if (els.volume) {
          graph.master.gain.value = Number(els.volume.value);
        }
      } catch (err) {
        console.warn("Web Audio tag-tame unavailable; using raw element playback", err);
        graphFailed = true;
        graph = null;
        usingElementVolume = true;
        audio.volume = els.volume ? Number(els.volume.value) : 0.9;
      }
    }

    async function resumeCtx() {
      if (graph && graph.ctx.state === "suspended") {
        try {
          await graph.ctx.resume();
        } catch (_) {}
      }
    }

    function seekToRatio(ratio) {
      const d = audio.duration;
      if (!Number.isFinite(d) || d <= 0) return;
      const t = Math.max(0, Math.min(d, ratio * d));
      try {
        audio.currentTime = t;
      } catch (err) {
        console.warn("Seek failed", err);
      }
      els.curTime.textContent = fmt(t);
    }

    async function playIndex(i) {
      if (i < 0 || i >= state.tracks.length) return;
      const track = state.tracks[i];
      const switching = state.index !== i;
      state.index = i;
      ensureGraph();
      await resumeCtx();
      if (switching || !audio.getAttribute("src")) {
        audio.src = track.audioUrl;
      }
      try {
        await audio.play();
        state.playing = true;
      } catch (err) {
        state.playing = false;
        console.warn("Playback failed", err);
      }
      notify();
    }

    function pause() {
      audio.pause();
      state.playing = false;
      notify();
    }

    function toggle() {
      if (state.index < 0) {
        playIndex(0);
        return;
      }
      if (state.playing) pause();
      else playIndex(state.index);
    }

    function step(delta) {
      if (!state.tracks.length) return;
      let next = state.index + delta;
      if (state.index < 0) next = 0;
      if (next < 0) next = state.tracks.length - 1;
      if (next >= state.tracks.length) next = 0;
      playIndex(next);
    }

    els.btnPlay.addEventListener("click", toggle);
    els.btnPrev.addEventListener("click", () => step(-1));
    els.btnNext.addEventListener("click", () => step(1));

    els.seek.addEventListener("pointerdown", () => {
      state.seeking = true;
    });
    els.seek.addEventListener("pointerup", () => {
      state.seeking = false;
    });
    els.seek.addEventListener("input", () => {
      const ratio = Number(els.seek.value) / 1000;
      if (!Number.isFinite(audio.duration)) return;
      els.curTime.textContent = fmt(ratio * audio.duration);
      // Live scrub while dragging
      seekToRatio(ratio);
    });
    els.seek.addEventListener("change", () => {
      seekToRatio(Number(els.seek.value) / 1000);
      state.seeking = false;
    });

    if (els.volume) {
      els.volume.addEventListener("input", () => {
        const v = Number(els.volume.value);
        if (graph && !usingElementVolume) {
          graph.master.gain.value = v;
        } else {
          audio.volume = v;
        }
      });
    }

    audio.addEventListener("timeupdate", () => {
      if (state.seeking) return;
      const d = audio.duration || 0;
      const c = audio.currentTime || 0;
      els.curTime.textContent = fmt(c);
      els.durTime.textContent = fmt(d);
      if (d > 0) els.seek.value = String(Math.floor((c / d) * 1000));
    });
    audio.addEventListener("loadedmetadata", () => {
      els.durTime.textContent = fmt(audio.duration || 0);
    });
    audio.addEventListener("ended", () => step(1));
    audio.addEventListener("play", () => {
      state.playing = true;
      notify();
    });
    audio.addEventListener("pause", () => {
      state.playing = false;
      notify();
    });

    updateNow();
    return {
      playIndex,
      pause,
      toggle,
      step,
      getState: () => ({ ...state, webAudio: !!(graph && !graphFailed) }),
      icons: { play: iconPlay, pause: iconPause },
    };
  }

  return { createPlayer, fmt, icons: { play: iconPlay, pause: iconPause } };
})();
