// Technical Blog Page JavaScript

class TechBlogReader {
    constructor() {
        this.modal = document.getElementById('tech-blog-modal');
        this.modalContent = this.modal.querySelector('.modal-content');
        this.currentPost = null;
        this.fontSize = 'medium';
        this.posts = [
            'aspnet-mvc',
            'web-api',
            'design-patterns',
            'oop',
            'entity-framework',
            'security'
        ];
        this.currentPostIndex = 0;
        this.init();
    }

    init() {
        // Add event listeners for "Read More" buttons
        document.querySelectorAll('[data-action="view-post"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = button.getAttribute('data-post');
                this.showPost(postId);
            });
        });

        // Initialize reader controls and scroll animations
        this.initializeReaderControls();
        new ScrollAnimation();
    }

    showPost(postId) {
        const postData = this.getPostData(postId);
        if (!postData) return;

        this.currentPost = postId;
        this.currentPostIndex = this.posts.indexOf(postId);

        // Create and show modal content
        this.modalContent.innerHTML = this.createReaderContent(postData);
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Initialize reading progress
        this.updateReadingProgress();
        this.updateNavigationButtons();
    }

    getPostData(postId) {
        // Mock data for blog posts
        const posts = {
            'aspnet-mvc': {
                title: 'Building Scalable Web Applications with ASP.NET Core MVC',
                category: 'ASP.NET Core MVC',
                date: 'March 15, 2024',
                readTime: '15 min read',
                content: `
                    <h2>Building Scalable Web Applications with ASP.NET Core MVC</h2>
                    <p>ASP.NET Core MVC is a powerful framework for building web applications. In this article, we'll explore best practices for creating scalable and maintainable applications.</p>
                    
                    <h3>Project Structure</h3>
                    <p>A well-organized project structure is crucial for maintainability. Here's a recommended structure:</p>
                    <pre><code>ProjectName/
├── Controllers/
├── Models/
├── Views/
├── Services/
├── Repositories/
└── Infrastructure/</code></pre>

                    <h3>Dependency Injection</h3>
                    <p>ASP.NET Core's built-in dependency injection container makes it easy to manage dependencies:</p>
                    <pre><code>public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<IProductRepository, ProductRepository>();
    }
}</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Use async/await for database operations</li>
                        <li>Implement proper error handling</li>
                        <li>Use view models for data transfer</li>
                        <li>Implement proper validation</li>
                    </ul>
                `
            },
            'web-api': {
                title: 'RESTful API Design with ASP.NET Core Web API',
                category: 'Web API',
                date: 'March 10, 2024',
                readTime: '12 min read',
                content: `
                    <h2>RESTful API Design with ASP.NET Core Web API</h2>
                    <p>Designing and implementing RESTful APIs requires careful consideration of various factors. Let's explore the best practices.</p>
                    
                    <h3>API Versioning</h3>
                    <p>Version your APIs to maintain backward compatibility:</p>
                    <pre><code>[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        var products = await _productService.GetAllProductsAsync();
        return Ok(products);
    }
}</code></pre>

                    <h3>Response Format</h3>
                    <p>Use consistent response formats for better client integration:</p>
                    <pre><code>public class ApiResponse<T>
{
    public bool Success { get; set; }
    public T Data { get; set; }
    public string Message { get; set; }
}</code></pre>
                `
            },
            'design-patterns': {
                title: 'Essential Design Patterns in .NET Development',
                category: 'Design Patterns',
                date: 'March 5, 2024',
                readTime: '10 min read',
                content: `
                    <h2>Essential Design Patterns in .NET Development</h2>
                    <p>Design patterns are reusable solutions to common problems in software design. Let's explore some essential patterns.</p>
                    
                    <h3>Singleton Pattern</h3>
                    <p>Ensure a class has only one instance:</p>
                    <pre><code>public class Singleton
{
    private static Singleton _instance;
    private static readonly object _lock = new object();

    public static Singleton Instance
    {
        get
        {
            if (_instance == null)
            {
                lock (_lock)
                {
                    _instance ??= new Singleton();
                }
            }
            return _instance;
        }
    }
}</code></pre>

                    <h3>Factory Pattern</h3>
                    <p>Create objects without exposing creation logic:</p>
                    <pre><code>public interface IProductFactory
{
    IProduct CreateProduct(string type);
}

public class ProductFactory : IProductFactory
{
    public IProduct CreateProduct(string type)
    {
        return type switch
        {
            "physical" => new PhysicalProduct(),
            "digital" => new DigitalProduct(),
            _ => throw new ArgumentException("Invalid product type")
        };
    }
}</code></pre>
                `
            },
            'oop': {
                title: 'Object-Oriented Programming Principles in C#',
                category: 'OOP',
                date: 'March 1, 2024',
                readTime: '14 min read',
                content: `
                    <h2>Object-Oriented Programming Principles in C#</h2>
                    <p>Understanding and applying OOP principles is crucial for writing maintainable code.</p>
                    
                    <h3>SOLID Principles</h3>
                    <p>Let's look at the Single Responsibility Principle:</p>
                    <pre><code>// Bad
public class UserService
{
    public void CreateUser() { }
    public void SendEmail() { }
    public void GenerateReport() { }
}

// Good
public class UserService
{
    public void CreateUser() { }
}

public class EmailService
{
    public void SendEmail() { }
}

public class ReportService
{
    public void GenerateReport() { }
}</code></pre>

                    <h3>Inheritance and Polymorphism</h3>
                    <pre><code>public abstract class Shape
{
    public abstract double CalculateArea();
}

public class Circle : Shape
{
    private readonly double _radius;
    
    public Circle(double radius)
    {
        _radius = radius;
    }

    public override double CalculateArea()
    {
        return Math.PI * _radius * _radius;
    }
}</code></pre>
                `
            },
            'entity-framework': {
                title: 'Entity Framework Core Best Practices',
                category: 'Entity Framework',
                date: 'February 25, 2024',
                readTime: '13 min read',
                content: `
                    <h2>Entity Framework Core Best Practices</h2>
                    <p>Entity Framework Core is a powerful ORM, but using it effectively requires understanding best practices.</p>
                    
                    <h3>Configuration</h3>
                    <pre><code>public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .HasIndex(p => p.Name)
            .IsUnique();
    }
}</code></pre>

                    <h3>Performance Optimization</h3>
                    <pre><code>// Use Include for related data
var products = await _context.Products
    .Include(p => p.Category)
    .Include(p => p.Supplier)
    .ToListAsync();

// Use projection for better performance
var productDtos = await _context.Products
    .Select(p => new ProductDto
    {
        Id = p.Id,
        Name = p.Name,
        Price = p.Price
    })
    .ToListAsync();</code></pre>
                `
            },
            'security': {
                title: 'Securing ASP.NET Core Applications',
                category: 'Security',
                date: 'February 20, 2024',
                readTime: '11 min read',
                content: `
                    <h2>Securing ASP.NET Core Applications</h2>
                    <p>Security is crucial for web applications. Let's explore essential security practices.</p>
                    
                    <h3>JWT Authentication</h3>
                    <pre><code>services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true
        };
    });</code></pre>

                    <h3>Authorization</h3>
                    <pre><code>[Authorize(Roles = "Admin")]
public class AdminController : Controller
{
    [HttpGet]
    public IActionResult Dashboard()
    {
        return View();
    }
}</code></pre>
                `
            }
        };

        return posts[postId] || null;
    }

    createReaderContent(postData) {
        return `
            <div class="blog-post-reader">
                <div class="reader-header">
                    <h2 class="reader-title">${postData.title}</h2>
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
                        <span><i class="fas fa-folder"></i> ${postData.category}</span>
                        <span><i class="fas fa-calendar"></i> ${postData.date}</span>
                        <span><i class="fas fa-clock"></i> ${postData.readTime}</span>
                    </div>
                    ${postData.content}
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" data-action="prev" ${this.currentPostIndex === 0 ? 'disabled' : ''}>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" data-action="next" ${this.currentPostIndex === this.posts.length - 1 ? 'disabled' : ''}>
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
                this.navigatePost('prev');
            } else if (action === 'next') {
                this.navigatePost('next');
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

    navigatePost(direction) {
        const newIndex = direction === 'next' ? 
            this.currentPostIndex + 1 : 
            this.currentPostIndex - 1;

        if (newIndex >= 0 && newIndex < this.posts.length) {
            this.currentPostIndex = newIndex;
            this.showPost(this.posts[newIndex]);
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

        prevBtn.disabled = this.currentPostIndex === 0;
        nextBtn.disabled = this.currentPostIndex === this.posts.length - 1;
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
    new TechBlogReader();
    new NewsletterForm();
}); 