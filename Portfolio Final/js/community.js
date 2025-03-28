class CommunityPage {
    constructor() {
        this.initTypingAnimation();
        this.initScrollAnimations();
        this.initStatCounters();
    }

    initTypingAnimation() {
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            const texts = typingElement.getAttribute('data-texts').split(',');
            let currentIndex = 0;
            let currentText = '';
            let isDeleting = false;

            const type = () => {
                const text = texts[currentIndex];
                
                if (isDeleting) {
                    currentText = text.substring(0, currentText.length - 1);
                } else {
                    currentText = text.substring(0, currentText.length + 1);
                }

                typingElement.textContent = currentText;

                let typeSpeed = isDeleting ? 100 : 200;

                if (!isDeleting && currentText === text) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && currentText === '') {
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % texts.length;
                    typeSpeed = 500;
                }

                setTimeout(type, typeSpeed);
            };

            type();
        }
    }

    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-animate').forEach(element => {
            observer.observe(element);
        });
    }

    initStatCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.innerText);
            let count = 0;
            
            const updateCount = () => {
                const increment = target / 50;
                
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target;
                }
            };

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCount();
                    observer.unobserve(entries[0].target);
                }
            });

            observer.observe(counter);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CommunityPage();
}); 