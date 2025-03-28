// Typing Text Animation
class TypingText {
    constructor(element) {
        this.element = element;
        this.texts = element.dataset.texts.split(',');
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseDuration = 2000;
        this.start();
    }

    start() {
        if (this.isDeleting) {
            this.element.textContent = this.texts[this.currentTextIndex].substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            setTimeout(() => this.start(), this.deletingSpeed);
        } else {
            this.element.textContent = this.texts[this.currentTextIndex].substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            if (this.currentCharIndex === this.texts[this.currentTextIndex].length) {
                this.isDeleting = true;
                setTimeout(() => this.start(), this.pauseDuration);
            } else {
                setTimeout(() => this.start(), this.typingSpeed);
            }
        }

        // Reset to first text when all texts are completed
        if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        }
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new TypingText(typingElement);
    }
});

// Book Reviews Page JavaScript

class BookReader {
    constructor() {
        this.modal = document.getElementById('book-review-modal');
        this.modalContent = this.modal.querySelector('.modal-content');
        this.currentBook = null;
        this.fontSize = 'medium';
        this.books = [
            'clean-code',
            'design-patterns',
            'clean-architecture',
            'pragmatic-programmer',
            'refactoring',
            'domain-driven-design'
        ];
        this.currentBookIndex = 0;
        this.init();
    }

    init() {
        // Add event listeners for "Read Full Review" buttons
        document.querySelectorAll('[data-action="view-review"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const bookId = button.getAttribute('data-book');
                this.showReview(bookId);
            });
        });

        // Initialize reader controls and scroll animations
        this.initializeReaderControls();
        new ScrollAnimation();
    }

    showReview(bookId) {
        const bookData = this.getBookData(bookId);
        if (!bookData) return;

        this.currentBook = bookId;
        this.currentBookIndex = this.books.indexOf(bookId);

        // Create and show modal content
        this.modalContent.innerHTML = this.createReaderContent(bookData);
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Initialize reading progress
        this.updateReadingProgress();
        this.updateNavigationButtons();
    }

    getBookData(bookId) {
        // Mock data for book reviews
        const books = {
            'clean-code': {
                title: 'Clean Code',
                author: 'Robert C. Martin',
                rating: 5,
                date: 'March 2024',
                pages: 464,
                content: `
                    <h2>Clean Code: A Handbook of Agile Software Craftsmanship</h2>
                    <p>Clean Code is a seminal work that every developer should read. The book provides practical guidelines for writing clean, maintainable code that stands the test of time.</p>
                    
                    <h3>Key Takeaways</h3>
                    <ul>
                        <li>Meaningful names for variables, functions, and classes</li>
                        <li>Functions should be small and do one thing</li>
                        <li>Comments should explain why, not what</li>
                        <li>Error handling and testing are crucial</li>
                    </ul>

                    <h3>Code Examples</h3>
                    <p>The book provides numerous examples of clean vs. dirty code:</p>
                    <pre><code>// Dirty Code
public void processData() {
    int x = 0;
    for(int i = 0; i < data.length; i++) {
        x = x + data[i];
    }
    return x;
}

// Clean Code
public int calculateSum(int[] numbers) {
    return Arrays.stream(numbers).sum();}</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Use descriptive names that reveal intent</li>
                        <li>Keep functions small and focused</li>
                        <li>Write self-documenting code</li>
                        <li>Follow the DRY principle</li>
                    </ul>
                `
            },
            'design-patterns': {
                title: 'Design Patterns',
                author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
                rating: 4.5,
                date: 'February 2024',
                pages: 416,
                content: `
                    <h2>Design Patterns: Elements of Reusable Object-Oriented Software</h2>
                    <p>The Gang of Four's seminal work on software design patterns has become a cornerstone of software development literature.</p>
                    
                    <h3>Key Patterns</h3>
                    <ul>
                        <li>Creational Patterns (Factory, Singleton, Builder)</li>
                        <li>Structural Patterns (Adapter, Bridge, Composite)</li>
                        <li>Behavioral Patterns (Observer, Strategy, Command)</li>
                    </ul>

                    <h3>Example Implementation</h3>
                    <pre><code>// Singleton Pattern
public class Singleton {
    private static Singleton instance;
    private static readonly object lock = new object();

    public static Singleton Instance {
        get {
            if (instance == null) {
                lock (lock) {
                    instance ??= new Singleton();
                }
            }
            return instance;
        }
    }
}</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Understand when to use each pattern</li>
                        <li>Don't over-engineer solutions</li>
                        <li>Consider the context and requirements</li>
                        <li>Document pattern usage</li>
                    </ul>
                `
            },
            'clean-architecture': {
                title: 'Clean Architecture',
                author: 'Robert C. Martin',
                rating: 5,
                date: 'January 2024',
                pages: 432,
                content: `
                    <h2>Clean Architecture: A Craftsman's Guide to Software Structure and Design</h2>
                    <p>Clean Architecture provides a comprehensive guide to software architecture principles and practices.</p>
                    
                    <h3>Core Principles</h3>
                    <ul>
                        <li>Dependency Rule</li>
                        <li>Separation of Concerns</li>
                        <li>SOLID Principles</li>
                        <li>Component Design</li>
                    </ul>

                    <h3>Architecture Example</h3>
                    <pre><code>// Clean Architecture Layers
ProjectName/
├── Core/                 // Enterprise Business Rules
├── Application/          // Application Business Rules
├── Infrastructure/       // Frameworks, Drivers, Tools
└── Presentation/        // Interface Adapters, UI</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Maintain clear boundaries between layers</li>
                        <li>Keep business rules independent of frameworks</li>
                        <li>Use dependency inversion</li>
                        <li>Test all layers independently</li>
                    </ul>
                `
            },
            'pragmatic-programmer': {
                title: 'The Pragmatic Programmer',
                author: 'Andrew Hunt and David Thomas',
                rating: 5,
                date: 'December 2023',
                pages: 352,
                content: `
                    <h2>The Pragmatic Programmer: From Journeyman to Master</h2>
                    <p>A comprehensive guide to software development that goes beyond just coding to cover the entire software development process.</p>
                    
                    <h3>Key Concepts</h3>
                    <ul>
                        <li>DRY (Don't Repeat Yourself)</li>
                        <li>Orthogonality</li>
                        <li>Programming by Coincidence</li>
                        <li>Domain Languages</li>
                    </ul>

                    <h3>Practical Examples</h3>
                    <pre><code>// Example of DRY Principle
// Before
function calculateTotal(items) {
    let sum = 0;
    for (let item of items) {
        sum += item.price;
    }
    return sum;
}

function calculateAverage(items) {
    let sum = 0;
    for (let item of items) {
        sum += item.price;
    }
    return sum / items.length;
}

// After
function sum(items) {
    return items.reduce((acc, item) => acc + item.price, 0);
}

function calculateTotal(items) {
    return sum(items);
}

function calculateAverage(items) {
    return sum(items) / items.length;
}</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Write code that is easy to change</li>
                        <li>Use version control effectively</li>
                        <li>Test early and often</li>
                        <li>Document as you go</li>
                    </ul>
                `
            },
            'refactoring': {
                title: 'Refactoring',
                author: 'Martin Fowler',
                rating: 4.5,
                date: 'November 2023',
                pages: 448,
                content: `
                    <h2>Refactoring: Improving the Design of Existing Code</h2>
                    <p>A comprehensive guide to improving code quality through systematic refactoring techniques.</p>
                    
                    <h3>Key Refactoring Patterns</h3>
                    <ul>
                        <li>Extract Method</li>
                        <li>Move Method</li>
                        <li>Replace Conditional with Polymorphism</li>
                        <li>Introduce Null Object</li>
                    </ul>

                    <h3>Refactoring Example</h3>
                    <pre><code>// Before Refactoring
public double getPrice() {
    double basePrice = _quantity * _itemPrice;
    double discountFactor;
    if (basePrice > 1000) discountFactor = 0.95;
    else discountFactor = 0.98;
    return basePrice * discountFactor;
}

// After Refactoring
public double getPrice() {
    return getBasePrice() * getDiscountFactor();
}

private double getBasePrice() {
    return _quantity * _itemPrice;
}

private double getDiscountFactor() {
    return getBasePrice() > 1000 ? 0.95 : 0.98;
}</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Refactor in small steps</li>
                        <li>Keep tests passing</li>
                        <li>Understand the code first</li>
                        <li>Use automated tools</li>
                    </ul>
                `
            },
            'domain-driven-design': {
                title: 'Domain-Driven Design',
                author: 'Eric Evans',
                rating: 4.5,
                date: 'October 2023',
                pages: 560,
                content: `
                    <h2>Domain-Driven Design: Tackling Complexity in the Heart of Software</h2>
                    <p>A comprehensive approach to software development that focuses on creating a shared understanding between technical and domain experts.</p>
                    
                    <h3>Core Concepts</h3>
                    <ul>
                        <li>Ubiquitous Language</li>
                        <li>Bounded Contexts</li>
                        <li>Aggregates</li>
                        <li>Value Objects</li>
                    </ul>

                    <h3>Implementation Example</h3>
                    <pre><code>// Value Object Example
public class Money {
    private readonly decimal amount;
    private readonly string currency;

    public Money(decimal amount, string currency) {
        this.amount = amount;
        this.currency = currency;
    }

    public Money Add(Money other) {
        if (this.currency != other.currency)
            throw new InvalidOperationException("Cannot add different currencies");
        return new Money(this.amount + other.amount, this.currency);
    }

    public override bool Equals(object obj) {
        if (obj is Money other)
            return this.amount == other.amount && this.currency == other.currency;
        return false;
    }
}</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Develop a shared language</li>
                        <li>Model complex domains</li>
                        <li>Maintain bounded contexts</li>
                        <li>Use aggregates for consistency</li>
                    </ul>
                `
            }
        };

        return books[bookId] || null;
    }

    createReaderContent(bookData) {
        return `
            <div class="book-reader">
                <div class="reader-header">
                    <h2 class="reader-title">${bookData.title}</h2>
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
                    <div class="book-meta">
                        <span><i class="fas fa-user"></i> ${bookData.author}</span>
                        <span><i class="fas fa-calendar"></i> ${bookData.date}</span>
                        <span><i class="fas fa-book"></i> ${bookData.pages} pages</span>
                        <span><i class="fas fa-star"></i> ${bookData.rating}/5</span>
                    </div>
                    ${bookData.content}
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" data-action="prev" ${this.currentBookIndex === 0 ? 'disabled' : ''}>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" data-action="next" ${this.currentBookIndex === this.books.length - 1 ? 'disabled' : ''}>
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
                this.navigateBook('prev');
            } else if (action === 'next') {
                this.navigateBook('next');
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
        const reader = this.modal.querySelector('.book-reader');
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

    navigateBook(direction) {
        const newIndex = direction === 'next' ? 
            this.currentBookIndex + 1 : 
            this.currentBookIndex - 1;

        if (newIndex >= 0 && newIndex < this.books.length) {
            this.currentBookIndex = newIndex;
            this.showReview(this.books[newIndex]);
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

        prevBtn.disabled = this.currentBookIndex === 0;
        nextBtn.disabled = this.currentBookIndex === this.books.length - 1;
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

class NewsletterForm {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const email = this.form.querySelector('input[type="email"]').value;
        
        try {
            // Here you would typically send the email to your backend
            // For now, we'll just show a success message
            this.showMessage('Thank you for subscribing!', 'success');
            this.form.reset();
        } catch (error) {
            this.showMessage('Something went wrong. Please try again.', 'error');
        }
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `newsletter-message ${type}`;
        messageDiv.textContent = message;
        
        this.form.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BookReader();
    new NewsletterForm();
}); 