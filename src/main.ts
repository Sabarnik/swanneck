/* Home Page Entry */
import './style.css';
import { initPage } from './shared';

initPage('home');

// ---- HERO PARTICLES ----
function createParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      position:absolute; width:${size}px; height:${size}px;
      background:${Math.random() > 0.5 ? 'var(--color-gold)' : 'var(--color-crystal)'};
      opacity: ${Math.random() * 0.3 + 0.1};
      border-radius:50%; top:${Math.random() * 100}%; left:${Math.random() * 100}%;
      animation:particleFloat ${Math.random() * 12 + 10}s linear infinite;
      animation-delay:${Math.random() * -15}s; pointer-events:none;`;
    container.appendChild(p);
  }
  const s = document.createElement('style');
  s.textContent = `@keyframes particleFloat{0%{opacity:0;transform:translateY(100vh) rotate(0)}10%{opacity:1}90%{opacity:1}100%{opacity:0;transform:translateY(-10vh) rotate(360deg)}}`;
  document.head.appendChild(s);
}
createParticles();

// ---- PARALLAX ORB ----
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const orbs = hero.querySelectorAll<HTMLElement>('.hero-gradient-orb');
  orbs.forEach((orb, i) => {
    orb.style.transform = `translateY(${window.scrollY * (i + 1) * 0.08}px)`;
  });
});

// ---- 3D CAROUSEL NAVIGATION ----
(function initCarousel() {
  const carousel = document.getElementById('home-carousel') as HTMLElement;
  const nav = document.getElementById('home-carousel-nav');
  if (!carousel || !nav) return;

  const items = carousel.querySelectorAll('.carousel-3d-item');
  const dots = nav.querySelectorAll<HTMLButtonElement>('.carousel-3d-dot');
  const count = items.length;
  const angleStep = 360 / count;
  let currentIndex = 0;
  let autoTimer: ReturnType<typeof setInterval>;

  function goTo(index: number) {
    currentIndex = index;
    // Stop auto-rotation and manually set angle
    carousel.classList.remove('auto-rotate');
    carousel.style.transform = `rotateY(${-index * angleStep}deg)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    // Restart auto-rotation after 6s idle
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % count;
      carousel.style.transform = `rotateY(${-currentIndex * angleStep}deg)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }, 4000);
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index || '0', 10);
      goTo(idx);
    });
  });

  // Start auto-advance after the initial CSS auto-rotate finishes one cycle
  // or if user interacts, override CSS animation
  carousel.addEventListener('click', () => {
    goTo((currentIndex + 1) % count);
  });
})();
