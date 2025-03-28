// Resume Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initializeAnimations();
    
    // Initialize skill progress bars
    initializeSkillBars();
    
    // Initialize timeline animations
    initializeTimeline();
    
    // Initialize certification cards
    initializeCertificationCards();
});

// Scroll Animation
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Skill Progress Bars
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Timeline Animation
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.3
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Certification Cards Hover Effect
function initializeCertificationCards() {
    const cards = document.querySelectorAll('.certification-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// PDF Download Progress
function initializePDFDownload() {
    const downloadBtn = document.querySelector('.btn.primary');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Add loading state
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            this.disabled = true;
            
            // Simulate download progress
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-download"></i> Download PDF';
                }, 2000);
            }, 1500);
        });
    }
}

// Initialize PDF download functionality
initializePDFDownload();

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.resume-hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
const heroText = document.querySelector('.resume-hero h1');
if (heroText) {
    const text = heroText.textContent;
    typeWriter(heroText, text, 100);
} 