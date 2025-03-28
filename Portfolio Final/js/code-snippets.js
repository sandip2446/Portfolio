// Code Snippets Page JavaScript

class CodeSnippetsManager {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.snippetCards = document.querySelectorAll('.snippet-card');
        this.copyButtons = document.querySelectorAll('.copy-btn');
        this.init();
    }

    init() {
        // Initialize filter functionality
        this.initializeFilters();
        
        // Initialize copy functionality
        this.initializeCopyButtons();
        
        // Initialize scroll animations
        new ScrollAnimation();
    }

    initializeFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => this.filterSnippets(button));
        });
    }

    filterSnippets(button) {
        // Update active button
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.querySelector('i').style.color = 'var(--accent-color)';
        });
        button.classList.add('active');
        button.querySelector('i').style.color = 'var(--white)';

        const category = button.dataset.category;

        // Filter snippets with animation
        this.snippetCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    initializeCopyButtons() {
        this.copyButtons.forEach(button => {
            button.addEventListener('click', () => this.copySnippet(button));
        });
    }

    copySnippet(button) {
        const codeBlock = button.closest('.snippet-card').querySelector('code');
        const textArea = document.createElement('textarea');
        textArea.value = codeBlock.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Show feedback
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = 'var(--accent-color)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = 'var(--gradient)';
        }, 2000);
    }
}

class ScrollAnimation {
    constructor() {
        this.animatedElements = document.querySelectorAll('.scroll-animate');
        this.init();
    }

    init() {
        this.checkElementsInView();
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CodeSnippetsManager();
}); 