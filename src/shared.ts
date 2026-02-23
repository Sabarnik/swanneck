/* ===================================================
   SHARED — Common initialization for all pages
   =================================================== */

import { getNavbar, getFooter } from './components';

export function initPage(activePage: string) {
    // Inject navbar & footer
    const navPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = getNavbar(activePage);
    if (footerPlaceholder) footerPlaceholder.outerHTML = getFooter();

    // ---- THEME TOGGLE ----
    const themeToggle = document.getElementById('theme-toggle');

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = savedTheme || (systemDark ? 'dark' : 'light'); // Default to light if no preference

    // Apply initial theme
    document.documentElement.setAttribute('data-theme', defaultTheme);

    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ---- PRELOADER ----
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => preloader.classList.add('hidden'), 1200);
    }

    // ---- NAVBAR SCROLL ----
    const navbar = document.getElementById('main-nav') as HTMLElement;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // ---- MOBILE MENU ----
    const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement;
    const navMenu = document.getElementById('nav-menu') as HTMLElement;

    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // ---- CUSTOM CURSOR ----
    const cursor = document.getElementById('cursor-follower') as HTMLElement;
    if (cursor && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e: MouseEvent) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.classList.add('visible');
        });
        const hoverTargets = 'a, button, .product-card, .industry-card, .about-card, .why-card, .service-item, .pillar-item, .industry-detail-card, .sustain-pillar-card, .why-detail-card, .segment-card, .capability-card, .carousel-3d-item, .tilt-card, input, select, textarea';
        document.querySelectorAll(hoverTargets).forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
        document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
    }

    // ---- SCROLL ANIMATIONS (supports multiple animation classes) ----
    const observerOptions: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), index * 100);
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animSelectors = '.animate-on-scroll, .anim-slide-left, .anim-slide-right, .anim-scale, .anim-flip, .anim-rotate';
    document.querySelectorAll(animSelectors).forEach(el => scrollObserver.observe(el));

    // ---- 3D TILT EFFECT (mouse-tracked) ----
    document.querySelectorAll<HTMLElement>('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const midX = rect.width / 2;
            const midY = rect.height / 2;
            const rotY = ((x - midX) / midX) * 6;   // max ±6 deg
            const rotX = ((midY - y) / midY) * 6;
            card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ---- SMOOTH SCROLL ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e: Event) {
            e.preventDefault();
            const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') || '');
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Console branding
    console.log('%c🌊 Swanneck Agile Waters Pvt. Ltd.', 'color: #d4af37; font-size: 16px; font-weight: bold;');

    return scrollObserver;
}

/** Preloader HTML shared across pages */
export const preloaderHtml = `
<div id="preloader">
  <div class="preloader-inner">
    <div class="swan-loader">
      <svg class="logo-icon loader-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 75C10 88 40 95 65 90C85 86 95 75 95 55" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25 72C25 72 15 65 15 45C15 25 35 5 50 15C55 18 55 25 50 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 70C32 70 24 60 25 45C26 30 38 18 50 22C52 23 52 26 50 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50 15L65 10L58 20Z" fill="currentColor"/>
        <path d="M50 40C65 30 85 30 95 45M55 50C70 40 90 40 98 55M50 60C65 55 85 55 95 70M45 70C55 68 75 70 85 82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M85 35L95 45M88 45L98 55M85 60L95 70M75 75L85 82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <span class="preloader-text">SWANNECK</span>
  </div>
</div>
<div id="cursor-follower"></div>
`;
