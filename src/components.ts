/* ===================================================
   SHARED COMPONENTS — Navbar & Footer
   =================================================== */

export function getNavbar(activePage: string): string {
  const links = [
    { href: './index.html', id: 'home', label: 'Home' },
    { href: './about.html', id: 'about', label: 'About' },
    { href: './products.html', id: 'products', label: 'Products' },
    { href: './industries.html', id: 'industries', label: 'Industries' },
    { href: './sustainability.html', id: 'sustainability', label: 'Sustainability' },
    { href: './why-swanneck.html', id: 'why-swanneck', label: 'Why Swanneck' },
    { href: './contact.html', id: 'contact', label: 'Contact Us', cta: true },
  ];

  const navLinksHtml = links
    .map(link => {
      const activeClass = link.id === activePage ? ' active' : '';
      const ctaClass = link.cta ? ' nav-link-cta' : '';
      return `<a href="${link.href}" class="nav-link${activeClass}${ctaClass}" data-page="${link.id}">${link.label}</a>`;
    })
    .join('\n        ');

  return `
  <nav id="main-nav" class="navbar">
    <div class="nav-container">
      <a href="./index.html" class="nav-logo" id="nav-logo">
        <svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 75C10 88 40 95 65 90C85 86 95 75 95 55" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 72C25 72 15 65 15 45C15 25 35 5 50 15C55 18 55 25 50 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M32 70C32 70 24 60 25 45C26 30 38 18 50 22C52 23 52 26 50 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M50 15L65 10L58 20Z" fill="currentColor"/>
          <path d="M50 40C65 30 85 30 95 45M55 50C70 40 90 40 98 55M50 60C65 55 85 55 95 70M45 70C55 68 75 70 85 82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M85 35L95 45M88 45L98 55M85 60L95 70M75 75L85 82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="logo-text">SWANNECK</span>
      </a>
      <div class="nav-menu" id="nav-menu">
        ${navLinksHtml}
      </div>
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
        <svg class="theme-icon light-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg class="theme-icon dark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </nav>`;
}

export function getFooter(): string {
  return `
  <footer id="footer" class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="./index.html" class="footer-logo">
            <svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 75C10 88 40 95 65 90C85 86 95 75 95 55" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25 72C25 72 15 65 15 45C15 25 35 5 50 15C55 18 55 25 50 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M32 70C32 70 24 60 25 45C26 30 38 18 50 22C52 23 52 26 50 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M50 15L65 10L58 20Z" fill="currentColor"/>
              <path d="M50 40C65 30 85 30 95 45M55 50C70 40 90 40 98 55M50 60C65 55 85 55 95 70M45 70C55 68 75 70 85 82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M85 35L95 45M88 45L98 55M85 60L95 70M75 75L85 82" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>SWANNECK</span>
          </a>
          <p class="footer-tagline">Pioneering the future of matured water beverages. First-of-its-kind, patent-pending technology delivering extraordinary taste experiences without alcohol.</p>
        </div>
        <div class="footer-links">
          <h5>Quick Links</h5>
          <a href="./index.html">Home</a>
          <a href="./about.html">About Us</a>
          <a href="./products.html">Products</a>
          <a href="./industries.html">Industries</a>
        </div>
        <div class="footer-links">
          <h5>Company</h5>
          <a href="./sustainability.html">Sustainability</a>
          <a href="./why-swanneck.html">Why Swanneck</a>
          <a href="./contact.html">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="footer-links">
          <h5>Products</h5>
          <a href="./products.html">Matured Water</a>
          <a href="./products.html">Health Drinks</a>
          <a href="./products.html">Energy Drinks</a>
          <a href="./products.html">Mineral Water</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Swanneck Agile Waters Pvt. Ltd. All rights reserved.</p>
        <p class="footer-legal">Patent-pending technology. Product descriptions represent development goals.</p>
      </div>
    </div>
  </footer>`;
}
