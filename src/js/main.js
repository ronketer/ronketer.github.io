// Nav: add blur/border after scroll
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.dataset.scrolled = window.scrollY > 10 ? 'true' : '';
}, { passive: true });

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen  = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

function openMenu() {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
  menuIconOpen.classList.add('hidden');
  menuIconClose.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  menuIconOpen.classList.remove('hidden');
  menuIconClose.classList.add('hidden');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
});

mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Scroll reveal via IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-6');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
