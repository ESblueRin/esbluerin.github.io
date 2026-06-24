const state = {
  route: "home",
  lang: localStorage.getItem("site-lang") || "ko",
  theme: getAutoThemeByTime(),
  tracks: [],
  currentTrackIndex: 0,
  isPlaying: false,
  isSeeking: false,
};

function getAutoThemeByTime() {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 18) {
    return "light";
  }

  return "dark";
}

const BGM_SCAN_LIMIT = 30;

const app = document.getElementById("app");
const audio = document.getElementById("bgmAudio");
const musicButton = document.getElementById("musicButton");
const nextTrackButton = document.getElementById("nextTrackButton");
const musicTitle = document.getElementById("musicTitle");
const musicLabel = document.getElementById("musicLabel");
const musicSeek = document.getElementById("musicSeek");

function getContent(page) {
  const content = window.SITE_CONTENT[page];
  return content[state.lang] || content.ko || content.en;
}

function getUi() {
  return window.SITE_CONTENT.ui[state.lang] || window.SITE_CONTENT.ui.ko;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setRoute(route) {
  state.route = route;

  if (window.location.hash.replace("#", "") !== route) {
    window.location.hash = route;
  }

  render();
}

function getRouteFromHash() {
  const route = window.location.hash.replace("#", "");
  return ["home", "projects", "profile", "hobby"].includes(route) ? route : "home";
}

function updateUiText() {
  const ui = getUi();

  document.querySelector('[data-route="home"]').textContent = ui.nav.home;
  document.querySelector('[data-route="projects"]').textContent = ui.nav.projects;
  document.querySelector('[data-route="profile"]').textContent = ui.nav.profile;
  document.querySelector('[data-route="hobby"]').textContent = ui.nav.hobby;

  musicLabel.textContent = ui.music.nowPlaying;

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === state.route);
  });
}

function setPageTitle() {
  if (state.route === "profile") {
    document.title = "ESblueRin | Profile";
    return;
  }

  const ui = getUi();
  const titleMap = {
    home: ui.nav.home,
    projects: ui.nav.projects,
    hobby: ui.nav.hobby,
  };

  document.title = `ESblueRin | ${titleMap[state.route] || "Home"}`;
}

function render() {
  app.classList.add("page-leaving");

  setTimeout(() => {
    if (state.route === "home") app.innerHTML = renderHome();
    if (state.route === "projects") app.innerHTML = renderProjects();
    if (state.route === "profile") app.innerHTML = renderProfile();
    if (state.route === "hobby") app.innerHTML = renderHobby();

    updateUiText();
    setPageTitle();
    bindDynamicEffects();

    app.classList.remove("page-leaving");
    app.classList.add("page-entering");

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      app.classList.remove("page-entering");
    }, 350);
  }, 120);
}

function renderHome() {
  const data = getContent("home");
  const floating = data.floatingCards
    .map((card, index) => {
      const className = ["card-one", "card-two", "card-three"][index] || "";
      return `
        <div class="floating-card ${className}">
          <strong>${escapeHtml(card[0])}</strong>
          <span>${escapeHtml(card[1])}</span>
        </div>
      `;
    })
    .join("");

  const cards = data.cards
    .map(
      (card) => `
      <article class="glass-card reveal">
        <span class="card-number">${escapeHtml(card.number)}</span>
        <h2>${escapeHtml(card.title)}</h2>
        <p>${escapeHtml(card.text)}</p>
        <a href="#${escapeHtml(card.route)}">${escapeHtml(card.link)}</a>
      </article>
    `
    )
    .join("");

  return `
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow">${escapeHtml(data.eyebrow)}</p>
          <h1 class="headline">
            ${escapeHtml(data.title)}<br />
            <span>${escapeHtml(data.titleAccent)}</span>
          </h1>
          <p class="hero-text">${escapeHtml(data.description)}</p>

          <div class="hero-buttons">
            <a class="button primary" href="#projects">${escapeHtml(data.primaryButton)}</a>
            <a class="button secondary" href="#profile">${escapeHtml(data.secondaryButton)}</a>
          </div>
        </div>

        <div class="hero-panel reveal">
          <div class="profile-orbit">
            <img src="profile.jpg" alt="Profile image" />
          </div>
          ${floating}
        </div>
      </div>
    </section>

    <section class="container quick-grid">
      ${cards}
    </section>
  `;
}

function renderProjects() {
  const data = getContent("projects");

  const diagram = data.diagram
    .map(
      (item, index) => `
      <div class="diagram-step reveal">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <p>${escapeHtml(item)}</p>
      </div>
    `
    )
    .join("");

  const sections = data.sections
    .map(
      (section) => `
      <article class="content-card reveal">
        <h2>${escapeHtml(section.title)}</h2>
        <ul class="clean-list">
          ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");

  return `
    <section class="container">
      <section class="page-intro reveal">
        <p class="eyebrow">${escapeHtml(data.eyebrow)}</p>
        <h1 class="page-heading">${escapeHtml(data.title)} <span>RIN</span></h1>
        <p>${escapeHtml(data.subtitle)}</p>
      </section>

      <section class="rin-hero-card reveal">
        <div>
          <h2>${escapeHtml(data.coreTitle)}</h2>
          <p>${escapeHtml(data.coreText)}</p>
        </div>
        <div class="rin-badge">Frozen VLM<br />+<br />Adapter CL</div>
      </section>

      <section class="paper-figure reveal">
        <h2>${escapeHtml(data.diagramTitle)}</h2>
        <div class="diagram-flow">
          ${diagram}
        </div>
      </section>

      <section class="project-grid">
        ${sections}
      </section>
    </section>
  `;
}

function renderProfile() {
  const data = getContent("profile");

  return `
    <section class="container">
      <section class="profile-layout">
        <aside class="profile-sidebar reveal">
          <div class="profile-card-main">
            <img src="profile.jpg" alt="Profile photo" class="profile-photo-large" />
            <h1>${escapeHtml(data.name)}</h1>
            <p class="kor-name">${escapeHtml(data.koreanName)}</p>
            <p class="profile-role">${escapeHtml(data.role)}</p>

            <div class="tag-list center">
              <span>Mechatronics</span>
              <span>AI</span>
              <span>Robotics</span>
              <span>Flutter</span>
              <span>PyTorch</span>
            </div>
          </div>

          ${renderContact(data)}
          ${renderSkillCard("Skills", data.skills)}
          ${renderSkillCard("Languages", data.languages)}
        </aside>

        <section class="profile-main reveal">
          <div class="page-intro">
            <p class="eyebrow">${escapeHtml(data.eyebrow)}</p>
            <h1 class="page-heading">${escapeHtml(data.name)} <span>Profile</span></h1>
            <p>${escapeHtml(data.summary)}</p>
          </div>

          <div class="tab-buttons">
            <button class="tab-button active" type="button" data-tab="overview">${escapeHtml(data.tabs.overview)}</button>
            <button class="tab-button" type="button" data-tab="experience">${escapeHtml(data.tabs.experience)}</button>
            <button class="tab-button" type="button" data-tab="projects">${escapeHtml(data.tabs.projects)}</button>
            <button class="tab-button" type="button" data-tab="patents">${escapeHtml(data.tabs.patents)}</button>
            <button class="tab-button" type="button" data-tab="achievements">${escapeHtml(data.tabs.achievements)}</button>
          </div>

          <div class="tab-panel active" id="overview">
            ${renderTimelineCard(data.tabs.overview, data.overview)}
          </div>

          <div class="tab-panel" id="experience">
            ${data.experience.map(renderExperienceCard).join("")}
          </div>

          <div class="tab-panel" id="projects">
            ${data.previousProjects.map(renderPreviousProject).join("")}
          </div>

          <div class="tab-panel" id="patents">
            ${data.patents.map(renderPatent).join("")}
          </div>

          <div class="tab-panel" id="achievements">
            <article class="content-card">
              <h2>${escapeHtml(data.tabs.achievements)}</h2>
              <ul class="clean-list">
                ${data.achievements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </article>
          </div>
        </section>
      </section>
    </section>
  `;
}

function renderContact(data) {
  return `
    <div class="mini-card">
      <h2>${escapeHtml(data.contactTitle)}</h2>

      <p><strong>Office</strong></p>
      ${data.contact.office.map((item) => renderContactLine(item)).join("")}

      <p class="contact-gap"><strong>Personal</strong></p>
      ${data.contact.personal.map((item) => renderContactLine(item)).join("")}

      <p class="contact-gap small-note">${escapeHtml(data.contactNote)}</p>
    </div>
  `;
}

function renderContactLine(item) {
  if (item.includes("@")) {
    return `<p><a href="mailto:${escapeHtml(item)}">${escapeHtml(item)}</a></p>`;
  }

  return `<p>${escapeHtml(item)}</p>`;
}

function renderSkillCard(title, skills) {
  return `
    <div class="mini-card">
      <h2>${escapeHtml(title)}</h2>
      ${skills
        .map(
          (skill) => `
          <div class="skill-item" data-level="${escapeHtml(skill[2])}">
            <div class="skill-title">
              <span>${escapeHtml(skill[0])}</span>
              <span>${escapeHtml(skill[1])}</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill"></div>
            </div>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

function renderTimelineCard(title, items) {
  return `
    <article class="content-card">
      <h2>${escapeHtml(title)}</h2>
      ${items
        .map(
          (item) => `
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <p class="date">${escapeHtml(item.date)}</p>
              <p>${escapeHtml(item.text)}</p>
            </div>
          </div>
        `
        )
        .join("")}
    </article>
  `;
}

function renderExperienceCard(item) {
  return `
    <article class="content-card">
      <h2>${escapeHtml(item.title)}</h2>
      <p class="date">${escapeHtml(item.date)}</p>
      <ul class="clean-list">
        ${item.items.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderPreviousProject(item) {
  return `
    <article class="project-card">
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.text)}</p>
      <div class="tag-list">
        ${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderPatent(item) {
  return `
    <article class="content-card patent-highlight">
      <h2>${escapeHtml(item[0])}</h2>
      <p>${escapeHtml(item[1])}</p>
    </article>
  `;
}

function renderHobby() {
  const data = getContent("hobby");

  return `
    <section class="container">
      <section class="page-intro reveal">
        <p class="eyebrow">${escapeHtml(data.eyebrow)}</p>
        <h1 class="page-heading">${escapeHtml(data.title)} <span>${escapeHtml(data.titleAccent)}</span></h1>
        <p>${escapeHtml(data.subtitle)}</p>
      </section>

      <section class="hobby-section reveal">
        <h2>${escapeHtml(data.sections.vtuber)}</h2>
        ${renderVtuber(data.vtuber)}
      </section>

      <section class="hobby-section reveal">
        <h2>${escapeHtml(data.sections.anime)}</h2>
        <div class="anime-log">
          ${data.animeEntries.map(renderAnimeEntry).join("")}
        </div>
      </section>

      <section class="hobby-section reveal">
        <h2>${escapeHtml(data.sections.compose)}</h2>
        <div class="composition-grid">
          ${data.composition.map(renderComposition).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderVtuber(data) {
  const isPlaceholder = data.youtubeEmbed.includes("VIDEO_ID");

  return `
    <article class="content-card vtuber-card">
      <div>
        <h3>${escapeHtml(data.title)}</h3>
        <p>${escapeHtml(data.text)}</p>
        <p class="small-note">${escapeHtml(data.note)}</p>
        <a class="button secondary" href="${escapeHtml(data.youtubeUrl)}" target="_blank" rel="noopener noreferrer">
          YouTube →
        </a>
      </div>

      <div class="youtube-frame">
        ${
          isPlaceholder
            ? `<div class="youtube-placeholder">YouTube Video<br />VIDEO_ID needed</div>`
            : `<iframe src="${escapeHtml(data.youtubeEmbed)}" title="YouTube video" allowfullscreen></iframe>`
        }
      </div>
    </article>
  `;
}

function renderAnimeEntry(entry) {
  return `
    <article class="anime-entry">
      <h3>${escapeHtml(entry.title)}</h3>
      ${entry.logs.map((log) => `<p>${escapeHtml(log)}</p>`).join("")}
    </article>
  `;
}

function renderComposition(item) {
  return `
    <article class="composition-card">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" onerror="this.style.display='none'" />
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
        <audio controls>
          <source src="${escapeHtml(item.audio)}" type="audio/mpeg" />
        </audio>
      </div>
    </article>
  `;
}

function bindDynamicEffects() {
  bindRevealEffects();
  bindSkillEffects();
  bindTabs();
  bindHashLinks();
}

function bindHashLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const route = link.getAttribute("href").replace("#", "");

      if (["home", "projects", "profile", "hobby"].includes(route)) {
        event.preventDefault();
        setRoute(route);
      }
    });
  });
}

function bindRevealEffects() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function bindSkillEffects() {
  const skillItems = document.querySelectorAll(".skill-item");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const fill = entry.target.querySelector(".skill-fill");
        const level = entry.target.dataset.level || 0;

        if (fill) fill.style.width = `${level}%`;

        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  skillItems.forEach((item) => observer.observe(item));
}

function bindTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      buttons.forEach((item) => item.classList.remove("active"));
      panels.forEach((item) => item.classList.remove("active"));

      button.classList.add("active");

      const targetPanel = document.getElementById(target);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

async function detectBgmTracks() {
  const candidates = [];

  for (let i = 1; i <= BGM_SCAN_LIMIT; i += 1) {
    const fileName = i === 1 ? "bgm.mp3" : `bgm${i}.mp3`;

    candidates.push({
      title: `BGM ${String(i).padStart(2, "0")}`,
      src: `assets/${fileName}`,
    });
  }

  const results = await Promise.all(
    candidates.map(async (track) => {
      try {
        const response = await fetch(track.src, {
          method: "HEAD",
          cache: "no-store",
        });

        return response.ok ? track : null;
      } catch {
        return null;
      }
    })
  );

  state.tracks = results.filter(Boolean);

  if (state.tracks.length === 0) {
    musicTitle.textContent = getUi().music.noBgm;
    musicButton.disabled = true;
    nextTrackButton.disabled = true;
    return;
  }

  state.currentTrackIndex = Math.floor(Math.random() * state.tracks.length);
  setTrack(state.currentTrackIndex, false);
}

function setTrack(index, shouldPlay) {
  const track = state.tracks[index];

  if (!track) return;

  state.currentTrackIndex = index;
  audio.src = track.src;
  audio.load();

  musicTitle.textContent = track.title;
  musicSeek.value = 0;

  if (shouldPlay) {
    playMusic();
  }
}

async function playMusic() {
  try {
    await audio.play();
    state.isPlaying = true;
    musicButton.textContent = "Ⅱ";
    musicButton.classList.add("playing");
  } catch (error) {
    state.isPlaying = false;
    musicButton.textContent = "▶";
    musicButton.classList.remove("playing");
    console.log("Playback blocked:", error);
  }
}

function pauseMusic() {
  audio.pause();
  state.isPlaying = false;
  musicButton.textContent = "▶";
  musicButton.classList.remove("playing");
}

function toggleMusic() {
  if (state.isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function nextTrack() {
  if (state.tracks.length === 0) return;

  const nextIndex = (state.currentTrackIndex + 1) % state.tracks.length;
  setTrack(nextIndex, state.isPlaying);
}

function updateSeekBar() {
  if (!audio.duration || state.isSeeking) return;

  musicSeek.value = (audio.currentTime / audio.duration) * 100;
}

function seekMusic() {
  if (!audio.duration) return;

  audio.currentTime = (musicSeek.value / 100) * audio.duration;
}

function bindMusic() {
  musicButton.addEventListener("click", toggleMusic);
  nextTrackButton.addEventListener("click", nextTrack);

  audio.addEventListener("timeupdate", updateSeekBar);

  musicSeek.addEventListener("input", () => {
    state.isSeeking = true;
  });

  musicSeek.addEventListener("change", () => {
    seekMusic();
    state.isSeeking = false;
  });

  audio.addEventListener("play", () => {
    state.isPlaying = true;
    musicButton.textContent = "Ⅱ";
    musicButton.classList.add("playing");
  });

  audio.addEventListener("pause", () => {
    state.isPlaying = false;
    musicButton.textContent = "▶";
    musicButton.classList.remove("playing");
  });
}

let isThemeTransitioning = false;

function changeThemeSmoothly(nextTheme) {
  if (isThemeTransitioning) return;
  if (state.theme === nextTheme) return;

  isThemeTransitioning = true;

  const previousTheme = state.theme;
  const overlay = document.createElement("div");

  overlay.className = `theme-fade-overlay ${
    previousTheme === "light" && nextTheme === "dark"
      ? "light-to-dark"
      : "dark-to-light"
  }`;

  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    overlay.classList.add("visible");
  });

  setTimeout(() => {
    state.theme = nextTheme;
    document.body.dataset.theme = state.theme;
  }, 650);

  setTimeout(() => {
    overlay.classList.remove("visible");
  }, 760);

  setTimeout(() => {
    overlay.remove();
    isThemeTransitioning = false;
  }, 1500);
}



function bindHeaderEvents() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setRoute(link.dataset.route);
    });
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("site-lang", state.lang);
      document.documentElement.lang = state.lang;
      render();
    });
  });

  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const nextTheme = state.theme === "dark" ? "light" : "dark";
    changeThemeSmoothly(nextTheme);
  });
}

function bindCursorGlow() {
  const glow = document.querySelector(".cursor-glow");

  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

function createStarField() {
  const oldStarField = document.querySelector(".star-field");
  if (oldStarField) oldStarField.remove();

  const starField = document.createElement("div");
  starField.className = "star-field";

  const starCount = 120;

  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement("span");

    const sizeRandom = Math.random();
    const sizeClass =
      sizeRandom > 0.92 ? "large" : sizeRandom > 0.68 ? "medium" : "small";

    const softClass = Math.random() > 0.72 ? "soft" : "";

    star.className = `star ${sizeClass} ${softClass}`.trim();
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--twinkle-duration", `${2.4 + Math.random() * 4.8}s`);
    star.style.setProperty("--twinkle-delay", `${Math.random() * 5}s`);

    starField.appendChild(star);
  }

  document.body.prepend(starField);
}

function createRainLayer() {
  const oldRainLayer = document.querySelector(".rain-layer");
  const oldRainMist = document.querySelector(".rain-mist");

  if (oldRainLayer) oldRainLayer.remove();
  if (oldRainMist) oldRainMist.remove();

  const rainLayer = document.createElement("div");
  rainLayer.className = "rain-layer";

  const rainMist = document.createElement("div");
  rainMist.className = "rain-mist";

  const rainCount = 300;

  for (let i = 0; i < rainCount; i += 1) {
    const streak = document.createElement("span");

    const depthRandom = Math.random();
    const depthClass =
      depthRandom > 0.78 ? "near" : depthRandom < 0.28 ? "far" : "mid";

    const height =
  depthClass === "near"
    ? 34 + Math.random() * 46
    : depthClass === "mid"
      ? 28 + Math.random() * 42
      : 22 + Math.random() * 34;

const width =
  depthClass === "near"
    ? 1.15 + Math.random() * 0.75
    : depthClass === "mid"
      ? 0.85 + Math.random() * 0.55
      : 0.55 + Math.random() * 0.45;

const opacity =
  depthClass === "near"
    ? 0.62 + Math.random() * 0.28
    : depthClass === "mid"
      ? 0.46 + Math.random() * 0.26
      : 0.30 + Math.random() * 0.20;

const duration =
  depthClass === "near"
    ? 0.58 + Math.random() * 0.48
    : depthClass === "mid"
      ? 0.78 + Math.random() * 0.62
      : 1.05 + Math.random() * 0.85;

const delay = -Math.random() * duration;
const angle = 6 + Math.random() * 5;
const drift = -5 - Math.random() * 12;

const blur =
  depthClass === "near"
    ? Math.random() * 0.18
    : 0.12 + Math.random() * 0.45;

    streak.className = `rain-streak ${depthClass}`;
    streak.style.left = `${Math.random() * 118}%`;
    streak.style.setProperty("--rain-height", `${height}px`);
    streak.style.setProperty("--rain-width", `${width}px`);
    streak.style.setProperty("--rain-opacity", `${opacity}`);
    streak.style.setProperty("--rain-duration", `${duration}s`);
    streak.style.setProperty("--rain-delay", `${delay}s`);
    streak.style.setProperty("--rain-angle", `${angle}deg`);
    streak.style.setProperty("--rain-drift", `${drift}vw`);
    streak.style.setProperty("--rain-blur", `${blur}px`);

    rainLayer.appendChild(streak);
  }

  document.body.prepend(rainMist);
  document.body.prepend(rainLayer);
}



function init() {
  document.body.dataset.theme = state.theme;
  document.documentElement.lang = state.lang;

  state.route = getRouteFromHash();

  bindHeaderEvents();
  bindMusic();
  bindCursorGlow();
  createStarField();
  createRainLayer();
  detectBgmTracks();
  render();

  window.addEventListener("hashchange", () => {
    const nextRoute = getRouteFromHash();

    if (nextRoute !== state.route) {
      state.route = nextRoute;
      render();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
