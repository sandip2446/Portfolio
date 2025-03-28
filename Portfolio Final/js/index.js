// Index Page Specific JavaScript

// Typing Animation
class TypingAnimation {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.start();
    }

    start() {
        if (this.isDeleting) {
            this.element.textContent = this.texts[this.currentTextIndex].substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.element.textContent = this.texts[this.currentTextIndex].substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }

        let typeSpeed = this.isDeleting ? this.speed / 2 : this.speed;

        if (!this.isDeleting && this.currentCharIndex === this.texts[this.currentTextIndex].length) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.start(), typeSpeed);
    }
}

// Project Filtering
class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.project-filter button');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => this.filterProjects(button));
        });
    }

    filterProjects(button) {
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filter projects
        this.projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Scroll Animations
class ScrollAnimation {
    constructor() {
        this.animatedElements = document.querySelectorAll('.animate-on-scroll');
        this.init();
    }

    init() {
        // Initial check for elements in view
        this.checkElementsInView();

        // Add scroll event listener
        window.addEventListener('scroll', () => this.checkElementsInView());
    }

    checkElementsInView() {
        this.animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    }
}

// Mobile Menu
class MobileMenu {
    constructor() {
        this.menuButton = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        this.menuButton.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.menuButton.classList.toggle('active');
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = typingElement.getAttribute('data-texts').split(',');
        new TypingAnimation(typingElement, texts);
    }

    // Initialize project filtering
    new ProjectFilter();

    // Initialize scroll animations
    new ScrollAnimation();

    // Initialize mobile menu
    new MobileMenu();

    // Initialize smooth scroll
    new SmoothScroll();
}); 