const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Nav: add blur/border after scroll
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.dataset.scrolled = window.scrollY > 10 ? 'true' : '';
}, { passive: true });

// Mobile menu toggle
const menuToggle  = document.getElementById('menu-toggle');
const mobileMenu  = document.getElementById('mobile-menu');
const iconOpen    = document.getElementById('menu-icon-open');
const iconClose   = document.getElementById('menu-icon-close');

function openMenu() {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
  iconOpen.classList.add('hidden');
  iconClose.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');

if (prefersReducedMotion) {
  revealEls.forEach(el => {
    el.classList.remove('opacity-0', 'translate-y-6');
    el.classList.add('opacity-100', 'translate-y-0');
  });
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// Typewriter effect for hero tagline
// Hero fade-in: 300ms delay + 700ms transition = starts typing at ~1050ms
const TAGLINE  = 'I build OS systems, CV pipelines, and backend APIs.';
const taglineEl = document.getElementById('hero-tagline');

if (prefersReducedMotion) {
  taglineEl.textContent = TAGLINE;
} else {
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  taglineEl.appendChild(cursor);

  let i = 0;
  function typeNext() {
    if (i < TAGLINE.length) {
      cursor.insertAdjacentText('beforebegin', TAGLINE[i]);
      i++;
      setTimeout(typeNext, 40);
    }
    // cursor continues blinking after typing completes
  }
  setTimeout(typeNext, 1050);
}

// Video cards: lazy-load on viewport entry, hover-to-play on desktop, click-to-toggle
// src is set directly in HTML so Parcel bundles the files; preload="none" defers actual download.
const videoContainers = document.querySelectorAll('[data-video-container]');
const videoControls = new Map();

videoContainers.forEach(container => {
  const video = container.querySelector('video');
  const overlay = container.querySelector('.play-overlay');
  const card = container.closest('article');
  if (!video || !overlay || !card) return;

  let loadTriggered = false;

  function ensureLoaded(onReady) {
    if (video.readyState >= 2) { onReady(); return; }
    if (!loadTriggered) { loadTriggered = true; video.load(); }
    video.addEventListener('canplay', onReady, { once: true });
  }

  function startPlay() {
    ensureLoaded(() => {
      video.play().catch(() => {});
      overlay.classList.add('opacity-0', 'pointer-events-none');
    });
  }

  function stopPlay() {
    video.pause();
    video.currentTime = 0;
    overlay.classList.remove('opacity-0', 'pointer-events-none');
  }

  // Register for external control
  if (card.id) {
    videoControls.set(card.id, { startPlay, stopPlay });
  }

  new IntersectionObserver(
    ([e]) => { if (!e.isIntersecting && !video.paused) stopPlay(); },
    { threshold: 0.15 }
  ).observe(container);

  if (!prefersReducedMotion) {
    container.addEventListener('mouseenter', startPlay);
    container.addEventListener('mouseleave', stopPlay);
  }

  // Mobile/Desktop tap-to-play behavior (replaces the modal)
  container.addEventListener('click', () => { 
    if (!video.paused) stopPlay(); else startPlay();
  });
});

// Deep Linking: Auto-play video if URL hash matches a project card
function handleHash() {
  const hash = window.location.hash.substring(1);
  if (!hash) return;
  
  // Stop all others first (optional, but cleaner)
  videoControls.forEach(ctrl => ctrl.stopPlay());

  const ctrl = videoControls.get(hash);
  if (ctrl) {
    // Small delay to ensure any intersection observers don't immediately pause it
    setTimeout(() => ctrl.startPlay(), 100);
  }

  // Scroll targeted card into view smoothly (CSS :target pseudo-class handles styling)
  const targetCard = document.getElementById(hash);
  if (targetCard) {
    // Ensure it's scrolled into the center of viewport after a brief delay
    setTimeout(() => {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 250);
  }
}

window.addEventListener('hashchange', handleHash);
window.addEventListener('DOMContentLoaded', handleHash);
// Also run immediately in case DOMContentLoaded already fired (parcel/module behavior)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  handleHash();
}
