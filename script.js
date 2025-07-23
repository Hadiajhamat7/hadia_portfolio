document.addEventListener('DOMContentLoaded', function () {
    // Detect and print current URL for debugging
    const currentURL = window.location.href;
    console.log("Current full URL:", currentURL);

    // Get just the filename (e.g., "about.html")
    const currentPage = currentURL.split('/').pop();
    console.log("Current page:", currentPage);

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        console.log("Checking link:", href);

        if (href === currentPage || (currentPage === '' && href.includes('index'))) {
            link.classList.add('active');
            console.log("✅ Active class added to:", href);
        }
    });

   
    const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name.length < 3) {
            alert('Please enter a valid name (at least 3 characters)');
            e.preventDefault();
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address');
            e.preventDefault();
            return;
        }

        if (message.length < 10) {
            alert('Please enter a message with at least 10 characters');
            e.preventDefault();
            return;
        }

        // ✅ Form is valid, show confirmation alert
        setTimeout(() => {
            alert('✅ Thank you! Your message has been sent.');
        }, 100);
    });
}


    // Header scroll effect
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = '#333';
            header.style.boxShadow = 'none';
        }
    });
    // Theme Toggle
const toggleButton = document.getElementById('theme-toggle');

if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        // Save theme to local storage
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggleButton.textContent = isDark ? '☀️' : '🌙';
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggleButton.textContent = '☀️';
    }
}
// Initialize AOS
AOS.init({
    duration: 1000,      // animation duration in ms
    once: true           // whether animation should happen only once
});

});
