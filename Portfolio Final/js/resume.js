// Resume Page Specific JavaScript

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

// Skill Bar Animation
class SkillBarAnimation {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-bar');
        this.init();
    }

    init() {
        // Initial check for elements in view
        this.checkSkillBars();

        // Add scroll event listener
        window.addEventListener('scroll', () => this.checkSkillBars());
    }

    checkSkillBars() {
        this.skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const barBottom = bar.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (barTop < windowHeight * 0.8 && barBottom > 0) {
                const progress = bar.getAttribute('data-progress');
                bar.style.setProperty('--progress', `${progress}%`);
                bar.classList.add('animate');
            }
        });
    }
}

// Scroll Animation
class ScrollAnimation {
    constructor() {
        this.animatedElements = document.querySelectorAll('.scroll-animate');
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

// PDF Download Handler
class PDFHandler {
    constructor() {
        this.downloadBtn = document.querySelector('.btn.primary');
        this.viewBtn = document.querySelector('.btn.secondary');
        this.init();
    }

    init() {
        if (this.downloadBtn) {
            this.downloadBtn.addEventListener('click', (e) => this.handleDownload(e));
        }
        if (this.viewBtn) {
            this.viewBtn.addEventListener('click', (e) => this.handleView(e));
        }
    }

    handleDownload(e) {
        // Add loading state
        const btn = e.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
        btn.disabled = true;

        // Simulate download (replace with actual PDF download logic)
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    }

    handleView(e) {
        // Add loading state
        const btn = e.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        btn.disabled = true;

        // Simulate PDF view (replace with actual PDF view logic)
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    }
}

// Language Hover Effect
class LanguageHoverEffect {
    constructor() {
        this.languageItems = document.querySelectorAll('.language-item');
        this.init();
    }

    init() {
        this.languageItems.forEach(item => {
            item.addEventListener('mouseenter', () => this.handleHover(item));
            item.addEventListener('mouseleave', () => this.handleLeave(item));
        });
    }

    handleHover(item) {
        item.style.transform = 'translateX(10px)';
        item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    }

    handleLeave(item) {
        item.style.transform = 'translateX(0)';
        item.style.boxShadow = 'none';
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

    // Initialize skill bar animation
    new SkillBarAnimation();

    // Initialize scroll animation
    new ScrollAnimation();

    // Initialize mobile menu
    new MobileMenu();

    // Initialize smooth scroll
    new SmoothScroll();

    // Initialize PDF handler
    new PDFHandler();

    // Initialize language hover effect
    new LanguageHoverEffect();
}); 