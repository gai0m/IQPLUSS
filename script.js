document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Preloader Logic (Updated for 3-Second Duration) ---
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    // 3000ms = 3 seconds
    const displayDuration = 3000; 

    setTimeout(() => {
        // Start fading out
        preloader.style.opacity = '0';
        
        // Remove from display after the CSS transition finishes (800ms)
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800); 
        
    }, displayDuration);
});
    // --- 2. Particles.js Configuration ---
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#d4af37" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3 },
                "size": { "value": 3 },
                "line_linked": { "enable": true, "distance": 150, "color": "#d4af37", "opacity": 0.1, "width": 1 },
                "move": { "enable": true, "speed": 1.5, "out_mode": "out" }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
            },
            "retina_detect": true
        });
    }

    // --- 3. Scroll Reveal ---
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(reveal => revealOnScroll.observe(reveal));

    // --- 4. Counter Logic ---
    const counters = document.querySelectorAll('.counter');
    const startCounters = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                let current = 0;
                const update = () => {
                    current += target / 100;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(update);
                    } else {
                        counter.innerText = target + (target > 100 ? '+' : '');
                    }
                };
                update();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => startCounters.observe(counter));

    // --- 5. Language Toggle ---
    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const htmlElement = document.documentElement;
    const translatableElements = document.querySelectorAll('[data-ar][data-en]');
    let currentLang = 'ar'; 

    langToggleBtn.addEventListener('click', () => {
        document.body.style.opacity = '0.2';
        setTimeout(() => {
            const isAr = currentLang === 'ar';
            htmlElement.setAttribute('lang', isAr ? 'en' : 'ar');
            htmlElement.setAttribute('dir', isAr ? 'ltr' : 'rtl');
            document.body.classList.toggle('en-mode', isAr);
            langText.textContent = isAr ? 'عربي' : 'English';
            
            translatableElements.forEach(el => {
                el.textContent = el.getAttribute(isAr ? 'data-en' : 'data-ar');
            });

            currentLang = isAr ? 'en' : 'ar';
            document.body.style.opacity = '1';
        }, 300);
    });
});