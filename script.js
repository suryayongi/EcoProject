// Script for Landing Page Interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        // Highlight active link based on current page
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const linkPath = link.getAttribute('href');
        
        if (currentPath === linkPath) {
            link.classList.add('text-eco-accent');
            if (link.classList.contains('border-b-2')) {
                // border-b-2 is already there in HTML for active page
            } else {
                link.classList.add('border-b-2', 'border-eco-accent', 'pb-1');
            }
        } else {
            link.classList.remove('border-b-2', 'border-eco-accent', 'pb-1');
        }
    });

    // Intersection Observer for scroll animations (optional enhancement)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Apply basic fade-in to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
});
