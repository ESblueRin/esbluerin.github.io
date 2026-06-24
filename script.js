const routes = {
  home: "pages/home.html",
  projects: "pages/projects.html",
  profile: "pages/profile.html",
  hobby: "pages/hobby.html",
};

const pageTitles = {
  home: "Lee Juho | Home",
  projects: "Lee Juho | Projects",
  profile: "Lee Juho | Profile",
  hobby: "Lee Juho | Hobby",
};

const tracks = [
  {
    title: "BGM 01",
    src: "assets/bgm.mp3",
  },
  {
    title: "BGM 02",
    src: "assets/bgm2.mp3",
  },
];

const app = document.getElementById("app");
const navLinks = document.querySelectorAll(".nav-link");

const audio = document.getElementById("bgmAudio");
const musicButton = document.getElementById("musicButton");
const nextTrackButton = document.getElementById("nextTrackButton");
const musicTitle = document.getElementById("musicTitle");
const musicSeek = document.getElementById("musicSeek");

let currentTrackIndex = Math.floor(Math.random() * tracks.length);
let isPlaying = false;
let isSeeking = false;

function setTrack(index, shouldPlay = false) {
  currentTrackIndex = index;
  const track = tracks[currentTrackIndex];

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
    isPlaying = true;
    musicButton.textContent = "Ⅱ";
    musicButton.classList.add("playing");
  } catch (error) {
    isPlaying = false;
    musicButton.textContent = "▶";
    musicButton.classList.remove("playing");
    console.log("Autoplay or playback was blocked:", error);
  }
}

function pauseMusic() {
  audio.pause();
  isPlaying = false;
  musicButton.textContent = "▶";
  musicButton.classList.remove("playing");
}

function toggleMusic() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function nextTrack() {
  const nextIndex = (currentTrackIndex + 1) % tracks.length;
  setTrack(nextIndex, isPlaying);
}

function updateSeekBar() {
  if (!audio.duration || isSeeking) return;

  const progress = (audio.currentTime / audio.duration) * 100;
  musicSeek.value = progress;
}

function seekMusic() {
  if (!audio.duration) return;

  const nextTime = (musicSeek.value / 100) * audio.duration;
  audio.currentTime = nextTime;
}

function getCurrentRoute() {
  const hash = window.location.hash.replace("#", "");
  return routes[hash] ? hash : "home";
}

async function loadRoute(routeName) {
  const routePath = routes[routeName];

  if (!routePath) {
    window.location.hash = "#home";
    return;
  }

  app.classList.add("page-leaving");

  try {
    const response = await fetch(routePath);

    if (!response.ok) {
      throw new Error(`Failed to load ${routePath}`);
    }

    const html = await response.text();

    setTimeout(() => {
      app.innerHTML = html;
      document.title = pageTitles[routeName] || "Lee Juho | ESblueRin";

      updateActiveNav(routeName);
      bindDynamicPageEffects();

      app.classList.remove("page-leaving");
      app.classList.add("page-entering");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        app.classList.remove("page-entering");
      }, 350);
    }, 120);
  } catch (error) {
    app.innerHTML = `
      <section class="container">
        <article class="content-card">
          <h1>Page Load Error</h1>
          <p>Could not load this page. Please check the file path.</p>
          <p>${error.message}</p>
        </article>
      </section>
    `;
    app.classList.remove("page-leaving");
  }
}

function updateActiveNav(routeName) {
  navLinks.forEach((link) => {
    const linkRoute = link.dataset.route;

    if (linkRoute === routeName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function bindRevealEffects() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

function bindSkillEffects() {
  const skillItems = document.querySelectorAll(".skill-item");

  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const skillItem = entry.target;
        const level = skillItem.dataset.level || 0;
        const fill = skillItem.querySelector(".skill-fill");

        if (fill) {
          fill.style.width = `${level}%`;
        }

        observer.unobserve(skillItem);
      });
    },
    {
      threshold: 0.35,
    }
  );

  skillItems.forEach((item) => {
    skillObserver.observe(item);
  });
}

function bindTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.tab;

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");

      const targetPanel = document.getElementById(targetId);

      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
}

function bindDynamicPageEffects() {
  bindRevealEffects();
  bindSkillEffects();
  bindTabs();
}

function bindThemeToggle() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.body.dataset.theme = savedTheme;
  }

  const themeToggle = document.querySelector(".theme-toggle");

  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
    document.body.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  });
}

function bindCursorGlow() {
  const cursorGlow = document.querySelector(".cursor-glow");

  if (!cursorGlow) return;

  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

function bindMusicPlayer() {
  setTrack(currentTrackIndex, false);

  musicButton.addEventListener("click", toggleMusic);
  nextTrackButton.addEventListener("click", nextTrack);

  audio.addEventListener("timeupdate", updateSeekBar);

  musicSeek.addEventListener("input", () => {
    isSeeking = true;
  });

  musicSeek.addEventListener("change", () => {
    seekMusic();
    isSeeking = false;
  });

  audio.addEventListener("play", () => {
    isPlaying = true;
    musicButton.textContent = "Ⅱ";
    musicButton.classList.add("playing");
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    musicButton.textContent = "▶";
    musicButton.classList.remove("playing");
  });
}

function initRouter() {
  if (!window.location.hash) {
    window.location.hash = "#home";
  }

  loadRoute(getCurrentRoute());

  window.addEventListener("hashchange", () => {
    loadRoute(getCurrentRoute());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindThemeToggle();
  bindCursorGlow();
  bindMusicPlayer();
  initRouter();
});
