/**
 * GitHub Pages Optimized Portfolio Script
 * Enhanced version with better navigation handling and error prevention
 */

// Wait for DOM and all resources to load
document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // IMPROVED NAVIGATION SYSTEM
    // ======================
    console.log("[DEBUG] Initializing portfolio scripts...");
    
    const navLinks = document.querySelectorAll('nav a');
    // GitHub Pages compatible path detection
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    console.log(`[DEBUG] Current page: ${currentPage}`);
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        console.log(`[DEBUG] Checking link: ${linkPath}`);
        
        // Remove .html for comparison if needed
        const cleanLinkPath = linkPath.replace('.html', '');
        const cleanCurrentPage = currentPage.replace('.html', '');
        
        if (linkPath === currentPage || cleanLinkPath === cleanCurrentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
            console.log(`[SUCCESS] Active class added to: ${linkPath}`);
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });

    // ======================
    // ENHANCED THEME TOGGLE
    // ======================
    const toggleButton = document.getElementById('theme-toggle');
    
    if (toggleButton) {
        // Load saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            toggleButton.textContent = '☀️';
            toggleButton.setAttribute('aria-label', 'Switch to light mode');
        }
        
        toggleButton.addEventListener('click', function() {
            const isDark = !document.body.classList.contains('dark-theme');
            document.body.classList.toggle('dark-theme');
            
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            toggleButton.textContent = isDark ? '☀️' : '🌙';
            toggleButton.setAttribute('aria-label', 
                isDark ? 'Switch to light mode' : 'Switch to dark mode');
            
            console.log(`[THEME] Switched to ${isDark ? 'dark' : 'light'} mode`);
        });
    }

    // ======================
    // ROBUST FORM VALIDATION
    // ======================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Enhanced validation
            let isValid = true;
            const errors = [];
            
            if (name.length < 3) {
                errors.push('Name must be at least 3 characters');
                isValid = false;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errors.push('Please enter a valid email address');
                isValid = false;
            }
            
            if (message.length < 10) {
                errors.push('Message must be at least 10 characters');
                isValid = false;
            }
            
            if (!isValid) {
                alert('Please fix these errors:\n\n' + errors.join('\n'));
                return;
            }
            
            // Form submission handling (simulated for GitHub Pages)
            console.log('[FORM] Submission data:', { name, email, message });
            alert('✅ Thank you! Your message has been sent.\n\nNote: This is a demo form. For real functionality, consider using Formspree or Netlify Forms.');
            contactForm.reset();
        });
    }

    // ======================
    // SMOOTH SCROLL EFFECTS
    // ======================
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (!header) return;
        
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(34, 34, 34, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.style.backgroundColor = '#333';
            header.style.boxShadow = 'none';
            header.style.backdropFilter = 'none';
        }
    });

    // ======================
    // SAFE AOS INITIALIZATION
    // ======================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
            offset: 100,
            disable: window.innerWidth < 768 // Disable on mobile if needed
        });
        console.log('[AOS] Animation system initialized');
    } else {
        console.warn('[AOS] Animation library not loaded');
    }

    // Debugging info
    console.log('[INIT] All scripts loaded successfully');
});

// Error handling for the entire script
window.addEventListener('error', function(e) {
    console.error('[SCRIPT ERROR]', e.message, 'in', e.filename, 'line:', e.lineno);
});
