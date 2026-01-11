document.addEventListener('DOMContentLoaded', () => {
    
    // --- VARIABLES ---
    const navLinks = document.querySelectorAll('[data-target]');
    const views = document.querySelectorAll('main section');
    const closeBtns = document.querySelectorAll('.close-btn');

    // --- INITIAL ROUTING CHECK ---
    checkHash();

    // --- EVENT LISTENERS ---
    
    // Navigation Clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            
            // Allow default behavior for hash changes (history support)
            // But manually switch view for smooth SPA feel if needed
            if (targetId) {
                e.preventDefault();
                switchView(targetId);
                
                // Update URL without reload (optional, keeps history clean)
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // Close Button (for Privacy Policy)
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchView('home');
            history.pushState(null, null, '#home');
        });
    });

    // Handle Browser Back/Forward Buttons
    window.addEventListener('popstate', checkHash);

    // --- VIEW SWITCHING LOGIC ---
    function switchView(targetId) {
        // Hide all views
        views.forEach(view => {
            view.classList.remove('active-view');
            view.classList.add('hidden-view');
        });

        // Show target view
        const targetView = document.getElementById(targetId);
        if (targetView) {
            targetView.classList.remove('hidden-view');
            targetView.classList.add('active-view');
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Update Active Nav Link
            document.querySelectorAll('.nav-links .nav-item').forEach(a => {
                a.classList.remove('active');
                if(a.getAttribute('data-target') === targetId) a.classList.add('active');
            });
        }
    }

    function checkHash() {
        const hash = window.location.hash.substring(1); // Remove '#'
        if (hash === 'privacy-policy') {
            switchView('privacy-policy');
        } else if (hash === 'contact') {
            switchView('contact');
        } else {
            switchView('home');
        }
    }

    // --- ANIMATIONS (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        // Initial state set in CSS usually, but JS enforces the 'visible' class
        observer.observe(el);
    });

    // Add visible class style dynamically if not in CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal-on-scroll { opacity: 0; transform: translateY(20px); transition: 0.6s ease-out; }
        .reveal-on-scroll.visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);


    // --- CONSOLE EASTER EGG ---
    console.log("%c BENGKEL APLIKASI KOMPENI ", "background: #0000BB; color: #00FF41; font-size: 20px; padding: 10px;");
    console.log("System Status: OPERATIONAL");
});