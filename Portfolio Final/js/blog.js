// Blog Page JavaScript

// Blog Category Filter
class BlogCategoryFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.category-btn');
        this.blogPosts = document.querySelectorAll('.blog-post');
        this.init();
    }

    init() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => this.filterPosts(button));
        });
    }

    filterPosts(button) {
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        // Filter posts with animation
        this.blogPosts.forEach(post => {
            if (category === 'all' || post.getAttribute('data-category') === category) {
                post.style.display = 'block';
                setTimeout(() => {
                    post.style.opacity = '1';
                    post.style.transform = 'translateY(0)';
                }, 50);
            } else {
                post.style.opacity = '0';
                post.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    post.style.display = 'none';
                }, 300);
            }
        });
    }
}

// Blog Post Modal
class BlogPostModal {
    constructor() {
        this.modal = document.getElementById('blog-post-modal');
        this.modalContent = this.modal.querySelector('.modal-content');
        this.currentPostId = null;
        this.postIds = ['microservices', 'clean-architecture', 'testing', 'security', 'performance', 'cloud-native', 'mobile-apps', 'blazor', 'azure-functions'];
        this.currentIndex = 0;
        this.readingPreferences = {
            fontSize: 1.1,
            lineHeight: 1.6,
            theme: 'light',
            fontFamily: 'Poppins'
        };
        this.posts = {
            'microservices': {
                title: 'Building Scalable Microservices with .NET 8',
                category: 'Architecture',
                date: 'March 15, 2024',
                readingTime: '15 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fas fa-microservices"></i> Building Scalable Microservices with .NET 8</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> March 15, 2024</span>
                            <span><i class="fas fa-clock"></i> 15 min read</span>
                            <span><i class="fas fa-folder"></i> Architecture</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fab fa-dotnet"></i> .NET 8</span>
                            <span><i class="fas fa-microservices"></i> Microservices</span>
                            <span><i class="fas fa-cloud"></i> Cloud Native</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>Microservices architecture has become the go-to approach for building scalable and maintainable applications. In this comprehensive guide, we'll explore how to leverage the latest features in .NET 8 to create robust microservices.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Key Benefits of Microservices</h3>
                        <ul>
                            <li>Independent deployment and scaling</li>
                            <li>Technology stack flexibility</li>
                            <li>Improved fault isolation</li>
                            <li>Better team autonomy</li>
                        </ul>

                        <h3><i class="fas fa-sitemap"></i> Architecture Overview</h3>
                        <p>Our microservices architecture consists of several key components:</p>
                        <ul>
                            <li>API Gateway for routing and load balancing</li>
                            <li>Service discovery and registration</li>
                            <li>Distributed configuration management</li>
                            <li>Centralized logging and monitoring</li>
                        </ul>

                        <h3><i class="fas fa-code"></i> Implementation Details</h3>
                        <p>We'll use the following technologies and patterns:</p>
                        <ul>
                            <li>ASP.NET Core Minimal APIs for lightweight services</li>
                            <li>Docker containers for consistent deployment</li>
                            <li>Kubernetes for orchestration</li>
                            <li>gRPC for inter-service communication</li>
                        </ul>

                        <h3><i class="fas fa-star"></i> Best Practices</h3>
                        <p>To ensure success with microservices, follow these best practices:</p>
                        <ul>
                            <li>Design for failure</li>
                            <li>Implement circuit breakers</li>
                            <li>Use event-driven architecture</li>
                            <li>Maintain API versioning</li>
                        </ul>

                        <h3><i class="fas fa-chart-line"></i> Performance Considerations</h3>
                        <p>When building microservices, consider these performance aspects:</p>
                        <ul>
                            <li>Implement caching strategies</li>
                            <li>Use async/await patterns</li>
                            <li>Optimize database queries</li>
                            <li>Monitor service health</li>
                        </ul>

                        <h3><i class="fas fa-shield-alt"></i> Security Best Practices</h3>
                        <p>Ensure your microservices are secure:</p>
                        <ul>
                            <li>Implement JWT authentication</li>
                            <li>Use HTTPS for all communications</li>
                            <li>Implement rate limiting</li>
                            <li>Regular security audits</li>
                        </ul>
                    </div>
                `
            },
            'clean-architecture': {
                title: 'Implementing Clean Architecture in .NET Applications',
                category: 'Architecture',
                date: 'March 20, 2024',
                readingTime: '18 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fas fa-building"></i> Implementing Clean Architecture in .NET Applications</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> March 20, 2024</span>
                            <span><i class="fas fa-clock"></i> 18 min read</span>
                            <span><i class="fas fa-folder"></i> Architecture</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fab fa-dotnet"></i> .NET 8</span>
                            <span><i class="fas fa-layer-group"></i> Clean Architecture</span>
                            <span><i class="fas fa-code"></i> SOLID</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>Clean Architecture is a software design philosophy that emphasizes separation of concerns and independence of frameworks. This guide will show you how to implement Clean Architecture principles in your .NET applications.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Core Principles</h3>
                        <ul>
                            <li>Dependency Rule</li>
                            <li>Separation of Concerns</li>
                            <li>Interface Segregation</li>
                            <li>Single Responsibility</li>
                        </ul>

                        <h3><i class="fas fa-sitemap"></i> Architecture Layers</h3>
                        <p>The Clean Architecture consists of several layers:</p>
                        <ul>
                            <li>Core (Domain) Layer</li>
                            <li>Application Layer</li>
                            <li>Infrastructure Layer</li>
                            <li>Presentation Layer</li>
                        </ul>

                        <h3><i class="fas fa-code"></i> Implementation Guide</h3>
                        <p>Step-by-step implementation:</p>
                        <ul>
                            <li>Set up project structure</li>
                            <li>Define domain entities</li>
                            <li>Create interfaces</li>
                            <li>Implement repositories</li>
                            <li>Add application services</li>
                        </ul>

                        <h3><i class="fas fa-star"></i> Best Practices</h3>
                        <p>Follow these best practices:</p>
                        <ul>
                            <li>Use dependency injection</li>
                            <li>Implement CQRS pattern</li>
                            <li>Use value objects</li>
                            <li>Implement domain events</li>
                        </ul>
                    </div>
                `
            },
            'testing': {
                title: 'Comprehensive Testing Strategies for .NET Applications',
                category: 'Best Practices',
                date: 'March 25, 2024',
                readingTime: '20 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fas fa-vial"></i> Comprehensive Testing Strategies for .NET Applications</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> March 25, 2024</span>
                            <span><i class="fas fa-clock"></i> 20 min read</span>
                            <span><i class="fas fa-folder"></i> Best Practices</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fas fa-vial"></i> xUnit</span>
                            <span><i class="fas fa-code"></i> NUnit</span>
                            <span><i class="fas fa-tasks"></i> MSTest</span>
                            <span><i class="fas fa-robot"></i> Moq</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>Testing is a crucial aspect of software development. This comprehensive guide covers various testing strategies and best practices for .NET applications.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Types of Testing</h3>
                        <ul>
                            <li>Unit Testing</li>
                            <li>Integration Testing</li>
                            <li>End-to-End Testing</li>
                            <li>Performance Testing</li>
                        </ul>

                        <h3><i class="fas fa-code"></i> Testing Frameworks</h3>
                        <p>Popular testing frameworks in .NET:</p>
                        <ul>
                            <li>xUnit - Modern and extensible</li>
                            <li>NUnit - Feature-rich and mature</li>
                            <li>MSTest - Microsoft's testing framework</li>
                        </ul>

                        <h3><i class="fas fa-tasks"></i> Testing Best Practices</h3>
                        <p>Follow these best practices:</p>
                        <ul>
                            <li>Write testable code</li>
                            <li>Use meaningful test names</li>
                            <li>Follow the AAA pattern</li>
                            <li>Maintain test independence</li>
                        </ul>

                        <h3><i class="fas fa-chart-line"></i> Test Coverage</h3>
                        <p>Understanding test coverage:</p>
                        <ul>
                            <li>Line coverage</li>
                            <li>Branch coverage</li>
                            <li>Code coverage tools</li>
                            <li>Coverage goals</li>
                        </ul>
                    </div>
                `
            },
            'security': {
                title: 'Security Best Practices for .NET Applications',
                category: 'Best Practices',
                date: 'March 30, 2024',
                readingTime: '16 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fas fa-shield-alt"></i> Security Best Practices for .NET Applications</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> March 30, 2024</span>
                            <span><i class="fas fa-clock"></i> 16 min read</span>
                            <span><i class="fas fa-folder"></i> Best Practices</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fas fa-key"></i> JWT</span>
                            <span><i class="fas fa-lock"></i> OAuth2</span>
                            <span><i class="fas fa-shield-alt"></i> Identity</span>
                            <span><i class="fas fa-user-shield"></i> RBAC</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>Security is paramount in modern web applications. This guide covers essential security practices and implementations for .NET applications.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Authentication</h3>
                        <ul>
                            <li>JWT implementation</li>
                            <li>OAuth2 integration</li>
                            <li>Multi-factor authentication</li>
                            <li>Password policies</li>
                        </ul>

                        <h3><i class="fas fa-user-shield"></i> Authorization</h3>
                        <p>Implement proper authorization:</p>
                        <ul>
                            <li>Role-based access control</li>
                            <li>Policy-based authorization</li>
                            <li>Claims-based authorization</li>
                            <li>Resource-based authorization</li>
                        </ul>

                        <h3><i class="fas fa-shield-alt"></i> Security Headers</h3>
                        <p>Important security headers:</p>
                        <ul>
                            <li>Content Security Policy</li>
                            <li>X-Frame-Options</li>
                            <li>X-Content-Type-Options</li>
                            <li>Strict-Transport-Security</li>
                        </ul>

                        <h3><i class="fas fa-lock"></i> Data Protection</h3>
                        <p>Protect sensitive data:</p>
                        <ul>
                            <li>Encryption at rest</li>
                            <li>Encryption in transit</li>
                            <li>Secure configuration</li>
                            <li>Secrets management</li>
                        </ul>
                    </div>
                `
            },
            'performance': {
                title: 'Optimizing .NET Application Performance',
                category: 'Best Practices',
                date: 'April 5, 2024',
                readingTime: '17 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fas fa-tachometer-alt"></i> Optimizing .NET Application Performance</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> April 5, 2024</span>
                            <span><i class="fas fa-clock"></i> 17 min read</span>
                            <span><i class="fas fa-folder"></i> Best Practices</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fas fa-database"></i> Entity Framework</span>
                            <span><i class="fas fa-memory"></i> Caching</span>
                            <span><i class="fas fa-tachometer-alt"></i> Profiling</span>
                            <span><i class="fas fa-chart-line"></i> Monitoring</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>Performance optimization is crucial for providing a great user experience. Learn how to optimize your .NET applications for better performance.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Database Optimization</h3>
                        <ul>
                            <li>Query optimization</li>
                            <li>Indexing strategies</li>
                            <li>Connection pooling</li>
                            <li>Batch operations</li>
                        </ul>

                        <h3><i class="fas fa-memory"></i> Caching Strategies</h3>
                        <p>Implement effective caching:</p>
                        <ul>
                            <li>In-memory caching</li>
                            <li>Distributed caching</li>
                            <li>Cache invalidation</li>
                            <li>Cache patterns</li>
                        </ul>

                        <h3><i class="fas fa-code"></i> Code Optimization</h3>
                        <p>Optimize your code:</p>
                        <ul>
                            <li>Async/await patterns</li>
                            <li>Memory management</li>
                            <li>Garbage collection</li>
                            <li>Resource disposal</li>
                        </ul>

                        <h3><i class="fas fa-chart-line"></i> Monitoring and Profiling</h3>
                        <p>Monitor application performance:</p>
                        <ul>
                            <li>Application insights</li>
                            <li>Performance counters</li>
                            <li>Logging strategies</li>
                            <li>Profiling tools</li>
                        </ul>
                    </div>
                `
            },
            'cloud-native': {
                title: 'Cloud Native Development with .NET and Azure',
                category: 'Cloud',
                date: 'April 10, 2024',
                readingTime: '18 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fas fa-cloud"></i> Cloud Native Development with .NET and Azure</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> April 10, 2024</span>
                            <span><i class="fas fa-clock"></i> 18 min read</span>
                            <span><i class="fas fa-folder"></i> Cloud</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fab fa-azure"></i> Azure</span>
                            <span><i class="fas fa-cloud"></i> Cloud Native</span>
                            <span><i class="fas fa-server"></i> Kubernetes</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>Cloud native development is transforming how we build and deploy applications. This guide explores how to leverage .NET and Azure for cloud-native development.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Cloud Native Principles</h3>
                        <ul>
                            <li>Containerization</li>
                            <li>Microservices architecture</li>
                            <li>DevOps practices</li>
                            <li>Continuous delivery</li>
                        </ul>

                        <h3><i class="fas fa-sitemap"></i> Azure Services</h3>
                        <p>Key Azure services for cloud-native development:</p>
                        <ul>
                            <li>Azure Kubernetes Service (AKS)</li>
                            <li>Azure Container Registry</li>
                            <li>Azure DevOps</li>
                            <li>Azure Monitor</li>
                        </ul>

                        <h3><i class="fas fa-code"></i> Implementation Guide</h3>
                        <p>Step-by-step implementation:</p>
                        <ul>
                            <li>Containerize your application</li>
                            <li>Set up CI/CD pipeline</li>
                            <li>Deploy to Kubernetes</li>
                            <li>Monitor and scale</li>
                        </ul>

                        <h3><i class="fas fa-star"></i> Best Practices</h3>
                        <p>Follow these best practices:</p>
                        <ul>
                            <li>Use managed services</li>
                            <li>Implement auto-scaling</li>
                            <li>Use infrastructure as code</li>
                            <li>Monitor application health</li>
                        </ul>
                    </div>
                `
            },
            'mobile-apps': {
                title: 'Modern Mobile App Development with .NET MAUI',
                category: 'Mobile',
                date: 'April 15, 2024',
                readingTime: '16 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fas fa-mobile-alt"></i> Modern Mobile App Development with .NET MAUI</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> April 15, 2024</span>
                            <span><i class="fas fa-clock"></i> 16 min read</span>
                            <span><i class="fas fa-folder"></i> Mobile</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fas fa-mobile-alt"></i> MAUI</span>
                            <span><i class="fas fa-mobile"></i> Mobile</span>
                            <span><i class="fas fa-code"></i> Cross-Platform</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>.NET MAUI is the evolution of Xamarin.Forms, providing a modern framework for building cross-platform mobile applications.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Key Features</h3>
                        <ul>
                            <li>Single codebase</li>
                            <li>Native performance</li>
                            <li>Modern UI controls</li>
                            <li>Hot reload support</li>
                        </ul>

                        <h3><i class="fas fa-sitemap"></i> Architecture Overview</h3>
                        <p>MAUI application structure:</p>
                        <ul>
                            <li>MVVM pattern</li>
                            <li>Dependency injection</li>
                            <li>Shell navigation</li>
                            <li>Resource management</li>
                        </ul>

                        <h3><i class="fas fa-code"></i> Implementation Guide</h3>
                        <p>Building a MAUI app:</p>
                        <ul>
                            <li>Project setup</li>
                            <li>UI design</li>
                            <li>Platform-specific code</li>
                            <li>Testing and deployment</li>
                        </ul>

                        <h3><i class="fas fa-star"></i> Best Practices</h3>
                        <p>Follow these best practices:</p>
                        <ul>
                            <li>Use MVVM pattern</li>
                            <li>Implement responsive design</li>
                            <li>Optimize performance</li>
                            <li>Handle platform differences</li>
                        </ul>
                    </div>
                `
            },
            'blazor': {
                title: 'Getting Started with Blazor Development',
                category: 'Tutorials',
                date: 'April 20, 2024',
                readingTime: '15 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fab fa-blazor"></i> Getting Started with Blazor Development</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> April 20, 2024</span>
                            <span><i class="fas fa-clock"></i> 15 min read</span>
                            <span><i class="fas fa-folder"></i> Tutorials</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fab fa-blazor"></i> Blazor</span>
                            <span><i class="fas fa-code"></i> WebAssembly</span>
                            <span><i class="fas fa-graduation-cap"></i> Tutorial</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>Blazor is a modern web framework that allows you to build interactive web applications using C# and .NET.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Blazor Hosting Models</h3>
                        <ul>
                            <li>Blazor Server</li>
                            <li>Blazor WebAssembly</li>
                            <li>Blazor Hybrid</li>
                        </ul>

                        <h3><i class="fas fa-sitemap"></i> Component Architecture</h3>
                        <p>Understanding Blazor components:</p>
                        <ul>
                            <li>Component lifecycle</li>
                            <li>State management</li>
                            <li>Event handling</li>
                            <li>Data binding</li>
                        </ul>

                        <h3><i class="fas fa-code"></i> Implementation Guide</h3>
                        <p>Building a Blazor app:</p>
                        <ul>
                            <li>Project setup</li>
                            <li>Component creation</li>
                            <li>Routing</li>
                            <li>State management</li>
                        </ul>

                        <h3><i class="fas fa-star"></i> Best Practices</h3>
                        <p>Follow these best practices:</p>
                        <ul>
                            <li>Use component composition</li>
                            <li>Implement proper state management</li>
                            <li>Optimize performance</li>
                            <li>Handle errors gracefully</li>
                        </ul>
                    </div>
                `
            },
            'azure-functions': {
                title: 'Azure Functions Development with .NET',
                category: 'Tutorials',
                date: 'April 25, 2024',
                readingTime: '17 min read',
                content: `
                    <div class="case-study-header">
                        <h2><i class="fas fa-server"></i> Azure Functions Development with .NET</h2>
                        <div class="case-study-meta">
                            <span><i class="fas fa-calendar"></i> April 25, 2024</span>
                            <span><i class="fas fa-clock"></i> 17 min read</span>
                            <span><i class="fas fa-folder"></i> Tutorials</span>
                        </div>
                        <div class="tech-stack">
                            <span><i class="fab fa-azure"></i> Azure</span>
                            <span><i class="fas fa-server"></i> Serverless</span>
                            <span><i class="fas fa-cloud"></i> Cloud</span>
                        </div>
                    </div>
                    <div class="case-study-content">
                        <p>Azure Functions is a serverless compute service that enables you to run event-driven code without managing infrastructure.</p>
                        
                        <h3><i class="fas fa-check-circle"></i> Key Features</h3>
                        <ul>
                            <li>Event-driven execution</li>
                            <li>Multiple triggers</li>
                            <li>Scalability</li>
                            <li>Pay-per-execution</li>
                        </ul>

                        <h3><i class="fas fa-sitemap"></i> Function Types</h3>
                        <p>Common function types:</p>
                        <ul>
                            <li>HTTP triggers</li>
                            <li>Timer triggers</li>
                            <li>Queue triggers</li>
                            <li>Event Grid triggers</li>
                        </ul>

                        <h3><i class="fas fa-code"></i> Implementation Guide</h3>
                        <p>Building Azure Functions:</p>
                        <ul>
                            <li>Project setup</li>
                            <li>Trigger configuration</li>
                            <li>Binding setup</li>
                            <li>Deployment</li>
                        </ul>

                        <h3><i class="fas fa-star"></i> Best Practices</h3>
                        <p>Follow these best practices:</p>
                        <ul>
                            <li>Use dependency injection</li>
                            <li>Implement proper error handling</li>
                            <li>Optimize cold starts</li>
                            <li>Monitor performance</li>
                        </ul>
                    </div>
                `
            }
        };
        this.init();
    }

    init() {
        // Add click handlers to all "Read More" buttons
        document.querySelectorAll('[data-action="view-post"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = button.getAttribute('data-post');
                this.showPost(postId);
            });
        });
    }

    showPost(postId) {
        const post = this.posts[postId];
        if (!post) return;

        this.currentPostId = postId;
        this.currentIndex = this.postIds.indexOf(postId);

        this.modalContent.innerHTML = `
            <div class="blog-post-reader">
                <div class="reader-header">
                    <h2 class="reader-title"><i class="fas fa-book-reader"></i> ${post.title}</h2>
                    <div class="reader-controls">
                        <div class="font-controls">
                            <button class="reader-control-btn" data-action="decrease-font">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button class="reader-control-btn" data-action="increase-font">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <button class="reader-control-btn" data-action="toggle-reading-mode">
                            <i class="fas fa-moon"></i>
                        </button>
                        <button class="reader-control-btn" data-action="toggle-font-family">
                            <i class="fas fa-font"></i>
                        </button>
                        <button class="reader-control-btn" data-action="close-modal">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="reader-content" style="font-size: ${this.readingPreferences.fontSize}rem; line-height: ${this.readingPreferences.lineHeight}; font-family: ${this.readingPreferences.fontFamily}">
                    ${post.content}
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                        <span><i class="fas fa-clock"></i> ${post.readingTime}</span>
                    </div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" data-action="prev-post" ${this.currentIndex === 0 ? 'disabled' : ''}>
                            <i class="fas fa-arrow-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" data-action="next-post" ${this.currentIndex === this.postIds.length - 1 ? 'disabled' : ''}>
                            Next <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.initializeReaderControls();
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        this.updateReadingProgress();
    }

    hideModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    navigatePost(direction) {
        const newIndex = this.currentIndex + direction;
        if (newIndex >= 0 && newIndex < this.postIds.length) {
            const newPostId = this.postIds[newIndex];
            this.showPost(newPostId);
        }
    }

    updateReadingProgress() {
        const content = this.modalContent.querySelector('.reader-content');
        const progressBar = this.modalContent.querySelector('.progress-fill');
        
        const updateProgress = () => {
            const scrollTop = content.scrollTop;
            const scrollHeight = content.scrollHeight - content.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = `${progress}%`;
        };

        content.addEventListener('scroll', updateProgress);
    }

    initializeReaderControls() {
        // Close button
        this.modalContent.querySelector('[data-action="close-modal"]').addEventListener('click', () => {
            this.hideModal();
        });

        // Reading mode toggle
        this.modalContent.querySelector('[data-action="toggle-reading-mode"]').addEventListener('click', (e) => {
            const button = e.currentTarget;
            const reader = this.modalContent.querySelector('.blog-post-reader');
            reader.classList.toggle('reading-mode');
            button.querySelector('i').classList.toggle('fa-moon');
            button.querySelector('i').classList.toggle('fa-sun');
        });

        // Font size controls
        this.modalContent.querySelector('[data-action="increase-font"]').addEventListener('click', () => {
            this.readingPreferences.fontSize = Math.min(this.readingPreferences.fontSize + 0.1, 1.5);
            this.updateReaderStyle();
        });

        this.modalContent.querySelector('[data-action="decrease-font"]').addEventListener('click', () => {
            this.readingPreferences.fontSize = Math.max(this.readingPreferences.fontSize - 0.1, 0.8);
            this.updateReaderStyle();
        });

        // Font family toggle
        this.modalContent.querySelector('[data-action="toggle-font-family"]').addEventListener('click', () => {
            this.readingPreferences.fontFamily = this.readingPreferences.fontFamily === 'Poppins' ? 'Georgia' : 'Poppins';
            this.updateReaderStyle();
        });

        // Navigation buttons
        this.modalContent.querySelector('[data-action="prev-post"]').addEventListener('click', () => {
            this.navigatePost(-1);
        });

        this.modalContent.querySelector('[data-action="next-post"]').addEventListener('click', () => {
            this.navigatePost(1);
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.navigatePost(-1);
            } else if (e.key === 'ArrowRight') {
                this.navigatePost(1);
            }
        });
    }

    updateReaderStyle() {
        const content = this.modalContent.querySelector('.reader-content');
        content.style.fontSize = `${this.readingPreferences.fontSize}rem`;
        content.style.lineHeight = `${this.readingPreferences.lineHeight}`;
        content.style.fontFamily = this.readingPreferences.fontFamily;
    }
}

// Newsletter Form
class NewsletterForm {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const email = this.form.querySelector('input[type="email"]').value;
        
        // Show loading state
        const button = this.form.querySelector('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
        button.disabled = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            this.form.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 3000);
        } catch (error) {
            // Show error message
            button.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
            button.disabled = false;
        }
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

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize blog category filter
    new BlogCategoryFilter();

    // Initialize blog post modal
    new BlogPostModal();

    // Initialize newsletter form
    new NewsletterForm();

    // Initialize scroll animations
    new ScrollAnimation();
}); 