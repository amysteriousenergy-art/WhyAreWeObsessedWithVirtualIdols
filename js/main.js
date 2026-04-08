/**
 * Main Application Controller
 */

class ObsessionApp {
    constructor() {
        this.sections = ['landing', 'category', 'data', 'what', 'how', 'about'];
        this.currentSection = 0;
        this.sectionInstances = {};

        this.init();
    }

    init() {
        this.setupGlobalScroll();
        this.setupNavInteractions();
        console.log('Obsession App initialized');
    }

    setupGlobalScroll() {
        gsap.config({
            nullTargetWarn: false
        });

        this.sections.forEach((id, index) => {
            const section = document.querySelector(`#${id}`);
            if (!section) return;

            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => this.updateNav(index),
                onEnterBack: () => this.updateNav(index)
            });
        });
    }

    setupNavInteractions() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const target = document.querySelector(targetId);

                if (target) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: { y: target, offsetY: 80 },
                        ease: "power3.inOut"
                    });
                }
            });
        });

        const progressDots = document.querySelectorAll('.progress-dot');
        progressDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const targetId = this.sections[index];
                const target = document.querySelector(`#${targetId}`);
                if (target) {
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: { y: target, offsetY: 80 },
                        ease: "power3.inOut"
                    });
                }
            });
        });
    }

    updateNav(index) {
        this.currentSection = index;

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });

        const progressDots = document.querySelectorAll('.progress-dot');
        progressDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    scrollToSection(sectionId) {
        const target = document.querySelector(`#${sectionId}`);
        if (target) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: { y: target, offsetY: 80 },
                ease: "power3.inOut"
            });
        }
    }

    getCurrentSection() {
        return this.sections[this.currentSection];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new ObsessionApp();
});
