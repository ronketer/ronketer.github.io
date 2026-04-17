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
