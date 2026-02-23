/* Contact Page Entry */
import './style.css';
import { initPage } from './shared';
initPage('contact');

// ---- CONTACT FORM HANDLER ----
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
contactForm?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const submitBtn = document.getElementById('contact-submit-btn') as HTMLButtonElement;
    const originalContent = submitBtn.innerHTML;

    submitBtn.innerHTML = `<span style="display:flex;align-items:center;gap:0.5rem"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"/></svg>Sending...</span>`;
    submitBtn.disabled = true;

    const s = document.createElement('style');
    s.textContent = `@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}`;
    document.head.appendChild(s);

    setTimeout(() => {
        submitBtn.innerHTML = `<span style="display:flex;align-items:center;gap:0.5rem"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>Message Sent!</span>`;
        submitBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
        setTimeout(() => {
            submitBtn.innerHTML = originalContent;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 3000);
    }, 2000);
});
