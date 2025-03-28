// Research Page JavaScript
class ResearchReader {
    constructor() {
        this.modal = document.getElementById('research-modal');
        this.modalContent = this.modal.querySelector('.modal-content');
        this.currentResearch = null;
        this.fontSize = 'medium';
        this.researchItems = [
            'current',
            'publications',
            'awards'
        ];
        this.currentItemIndex = 0;
        this.init();
    }

    init() {
        // Add event listeners for "Read More" buttons
        document.querySelectorAll('[data-action="view-research"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const researchId = button.getAttribute('data-research');
                this.showResearch(researchId);
            });
        });

        // Initialize reader controls and scroll animations
        this.initializeReaderControls();
        new ScrollAnimation();
    }

    showResearch(researchId) {
        const researchData = this.getResearchData(researchId);
        if (!researchData) return;

        this.currentResearch = researchId;
        this.currentItemIndex = this.researchItems.indexOf(researchId);

        // Create and show modal content
        this.modalContent.innerHTML = this.createReaderContent(researchData);
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Initialize reading progress
        this.updateReadingProgress();
        this.updateNavigationButtons();
    }

    getResearchData(researchId) {
        // Mock data for research content
        const research = {
            'current': {
                title: 'Current Research Projects',
                category: 'Research',
                date: '2023 - Present',
                readTime: '10 min read',
                content: `
                    <h2>Current Research Projects</h2>
                    
                    <h3>AI in Software Development</h3>
                    <p>Investigating the impact of artificial intelligence on modern software development practices and methodologies.</p>
                    <ul>
                        <li>Machine Learning in Code Review</li>
                        <li>AI-Powered Code Generation</li>
                        <li>Automated Testing Strategies</li>
                    </ul>

                    <h3>Cloud Computing Optimization</h3>
                    <p>Researching methods to optimize cloud resource utilization and reduce costs in enterprise applications.</p>
                    <ul>
                        <li>Resource Allocation Algorithms</li>
                        <li>Cost Optimization Strategies</li>
                        <li>Performance Monitoring Tools</li>
                    </ul>
                `
            },
            'publications': {
                title: 'Research Publications',
                category: 'Publications',
                date: '2023',
                readTime: '8 min read',
                content: `
                    <h2>Research Publications</h2>
                    
                    <h3>AI-Driven Development: A New Paradigm</h3>
                    <p>Published in Journal of Software Engineering, 2023</p>
                    <ul>
                        <li>Impact of AI on software development lifecycle</li>
                        <li>Case studies of AI implementation</li>
                        <li>Future trends and predictions</li>
                    </ul>

                    <h3>Optimizing Cloud Resources in Enterprise Applications</h3>
                    <p>Published in Cloud Computing Journal, 2023</p>
                    <ul>
                        <li>Resource optimization techniques</li>
                        <li>Cost-benefit analysis</li>
                        <li>Implementation strategies</li>
                    </ul>
                `
            },
            'awards': {
                title: 'Research Awards & Recognition',
                category: 'Awards',
                date: '2023',
                readTime: '5 min read',
                content: `
                    <h2>Research Awards & Recognition</h2>
                    
                    <h3>Best Research Paper Award</h3>
                    <p>International Conference on Software Engineering, 2023</p>
                    <ul>
                        <li>First Place Recognition</li>
                        <li>Innovative Research Methodology</li>
                        <li>Practical Applications</li>
                    </ul>

                    <h3>Research Excellence Grant</h3>
                    <p>University Research Foundation, 2023</p>
                    <ul>
                        <li>$10,000 Research Grant</li>
                        <li>Project Implementation Support</li>
                        <li>Industry Collaboration Opportunities</li>
                    </ul>
                `
            }
        };

        return research[researchId] || null;
    }

    createReaderContent(researchData) {
        return `
            <div class="blog-post-reader">
                <div class="reader-header">
                    <h2 class="reader-title">${researchData.title}</h2>
                    <div class="reader-controls">
                        <button class="reader-control-btn" data-action="font-size">
                            <i class="fas fa-text-height"></i>
                        </button>
                        <button class="reader-control-btn" data-action="reading-mode">
                            <i class="fas fa-book"></i>
                        </button>
                        <button class="reader-control-btn" data-action="close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="reader-content">
                    <div class="post-meta">
                        <span><i class="fas fa-folder"></i> ${researchData.category}</span>
                        <span><i class="fas fa-calendar"></i> ${researchData.date}</span>
                        <span><i class="fas fa-clock"></i> ${researchData.readTime}</span>
                    </div>
                    ${researchData.content}
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" data-action="prev" ${this.currentItemIndex === 0 ? 'disabled' : ''}>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" data-action="next" ${this.currentItemIndex === this.researchItems.length - 1 ? 'disabled' : ''}>
                            Next <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    hideModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    initializeReaderControls() {
        this.modal.addEventListener('click', (e) => {
            const target = e.target;
            const action = target.getAttribute('data-action');

            if (action === 'close') {
                this.hideModal();
            } else if (action === 'font-size') {
                this.toggleFontSize();
            } else if (action === 'reading-mode') {
                this.toggleReadingMode();
            } else if (action === 'prev') {
                this.navigateResearch('prev');
            } else if (action === 'next') {
                this.navigateResearch('next');
            }
        });

        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });
    }

    toggleReadingMode() {
        const reader = this.modal.querySelector('.blog-post-reader');
        reader.classList.toggle('reading-mode');
    }

    toggleFontSize() {
        const sizes = ['small', 'medium', 'large'];
        const currentIndex = sizes.indexOf(this.fontSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        this.setFontSize(sizes[nextIndex]);
    }

    setFontSize(size) {
        this.fontSize = size;
        const content = this.modal.querySelector('.reader-content');
        content.style.fontSize = size === 'small' ? '0.9rem' : 
                                size === 'medium' ? '1.1rem' : '1.3rem';
    }

    navigateResearch(direction) {
        const newIndex = direction === 'next' ? 
            this.currentItemIndex + 1 : 
            this.currentItemIndex - 1;

        if (newIndex >= 0 && newIndex < this.researchItems.length) {
            this.currentItemIndex = newIndex;
            this.showResearch(this.researchItems[newIndex]);
        }
    }

    updateReadingProgress() {
        const content = this.modal.querySelector('.reader-content');
        const progressFill = this.modal.querySelector('.progress-fill');

        const updateProgress = () => {
            const scrollTop = content.scrollTop;
            const scrollHeight = content.scrollHeight - content.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            progressFill.style.width = `${progress}%`;
        };

        content.addEventListener('scroll', updateProgress);
    }

    updateNavigationButtons() {
        const prevBtn = this.modal.querySelector('[data-action="prev"]');
        const nextBtn = this.modal.querySelector('[data-action="next"]');

        prevBtn.disabled = this.currentItemIndex === 0;
        nextBtn.disabled = this.currentItemIndex === this.researchItems.length - 1;
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
    new ResearchReader();
}); 