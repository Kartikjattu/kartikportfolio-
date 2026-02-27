// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Glitch Effect / Typewriter wrapper if needed, but CSS handles the main glitch.
// We can add a GSAP reveal for the Hero content.

const tl = gsap.timeline();

tl.from('.logo', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
    .from('.nav-links li', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.5")
    .from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.5");

// Scroll Animations for Sections
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    gsap.from(section.children, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // When top of section hits 80% viewport
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}
