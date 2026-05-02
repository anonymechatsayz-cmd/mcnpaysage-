import './index.css';

console.log("Mcn Paysages landing page loaded.");

// Basic JS for production-ready polish
document.addEventListener("DOMContentLoaded", () => {
    // 1. Handle Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Also close mobile menu if open
                const mobileNav = document.getElementById('mobile-nav');
                if (mobileNav && !mobileNav.classList.contains('hidden')) {
                    mobileNav.classList.add('hidden');
                }
            }
        });
    });

    // 2. Handle Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const mobileNav = document.getElementById('mobile-nav');
            if (mobileNav) {
                mobileNav.classList.toggle('hidden');
            }
        });
    }

    // 3. Handle Forms to show a success state
    const forms = ['quote-form-hero', 'quote-form-contact'];
    forms.forEach(formId => {
        const form = document.getElementById(formId) as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                if (btn) {
                    const originalText = btn.innerHTML;
                    btn.innerHTML = 'Envoi en cours...';
                    btn.disabled = true;
                    btn.style.opacity = '0.7';
                    btn.style.cursor = 'not-allowed';
                    
                    setTimeout(() => {
                        btn.innerHTML = 'Message Envoyé ! ✓';
                        btn.style.backgroundColor = '#1E4620'; // Primary green
                        btn.style.color = '#ffffff';
                        btn.style.opacity = '1';
                        
                        setTimeout(() => {
                            btn.innerHTML = originalText;
                            btn.style.backgroundColor = '';
                            btn.style.color = '';
                            btn.disabled = false;
                            btn.style.cursor = 'pointer';
                            form.reset();
                        }, 4000);
                    }, 800); // Simulate network request
                }
            });
        }
    });
});
