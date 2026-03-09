// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const envelopes = document.querySelectorAll('.envelope');

    // 1. Custom Mouse Follower
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. Scroll Reveal Logic (The "Envelope" effect)
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    envelopes.forEach(envelope => {
        revealOnScroll.observe(envelope);
    });

    // 3. Smooth Scrolling for Navigation
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Parallax effect on Hero Section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero .envelope');
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
});