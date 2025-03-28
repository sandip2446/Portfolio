// Resources Page JavaScript

class ResourceReader {
    constructor() {
        this.modal = document.getElementById('resource-modal');
        this.modalContent = this.modal.querySelector('.modal-content');
        this.currentResource = null;
        this.fontSize = 'medium';
        this.resources = [
            'clean-architecture',
            'microservices',
            'cloud-development',
            'api-template',
            'microservices-template',
            'clean-architecture-template',
            'code-generator',
            'api-testing',
            'code-analyzer',
            'clean-architecture-series',
            'microservices-development',
            'cloud-development-series'
        ];
        this.currentResourceIndex = 0;
        this.init();
    }

    init() {
        // Add event listeners for resource links
        document.querySelectorAll('[data-action="view-resource"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const resourceId = link.getAttribute('data-resource');
                this.showResource(resourceId);
            });
        });

        // Initialize reader controls and scroll animations
        this.initializeReaderControls();
        new ScrollAnimation();
    }

    showResource(resourceId) {
        const resourceData = this.getResourceData(resourceId);
        if (!resourceData) return;

        this.currentResource = resourceId;
        this.currentResourceIndex = this.resources.indexOf(resourceId);

        // Create and show modal content
        this.modalContent.innerHTML = this.createReaderContent(resourceData);
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Initialize reading progress
        this.updateReadingProgress();
        this.updateNavigationButtons();
    }

    getResourceData(resourceId) {
        // Mock data for resources
        const resources = {
            'clean-architecture': {
                title: 'Clean Architecture Guide',
                category: 'Learning Resources',
                type: 'PDF',
                size: '2.5MB',
                content: `
                    <h2>Clean Architecture Guide</h2>
                    <p>Clean Architecture is a software design philosophy that emphasizes separation of concerns and independence of frameworks, databases, and UI.</p>
                    
                    <h3>Key Principles</h3>
                    <ul>
                        <li>Independence of Frameworks</li>
                        <li>Testability</li>
                        <li>Independence of UI</li>
                        <li>Independence of Database</li>
                        <li>Independence of any external agency</li>
                    </ul>

                    <h3>Project Structure</h3>
                    <pre><code>Solution/
├── Core/
│   ├── Domain/
│   └── Application/
├── Infrastructure/
├── Presentation/
└── Tests/</code></pre>

                    <h3>Implementation Guidelines</h3>
                    <p>When implementing Clean Architecture, follow these guidelines:</p>
                    <ul>
                        <li>Use dependency inversion principle</li>
                        <li>Keep business logic in the core layer</li>
                        <li>Use interfaces for external dependencies</li>
                        <li>Implement proper separation of concerns</li>
                    </ul>
                `
            },
            'microservices': {
                title: 'Microservices Best Practices',
                category: 'Learning Resources',
                type: 'PDF',
                size: '1.8MB',
                content: `
                    <h2>Microservices Best Practices</h2>
                    <p>Microservices architecture is a design approach where a single application is composed of many loosely coupled and independently deployable smaller services.</p>
                    
                    <h3>Key Concepts</h3>
                    <ul>
                        <li>Service Independence</li>
                        <li>Decentralized Data Management</li>
                        <li>Failure Isolation</li>
                        <li>Technology Diversity</li>
                    </ul>

                    <h3>Design Patterns</h3>
                    <pre><code>// Service Discovery
public class ServiceDiscovery
{
    public async Task<ServiceInfo> DiscoverService(string serviceName)
    {
        // Implementation
    }
}

// Circuit Breaker
public class CircuitBreaker
{
    private readonly int _failureThreshold;
    private readonly int _resetTimeout;
    
    public async Task<T> ExecuteAsync<T>(Func<Task<T>> action)
    {
        // Implementation
    }
}</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Design for failure</li>
                        <li>Implement proper monitoring</li>
                        <li>Use API gateways</li>
                        <li>Implement circuit breakers</li>
                    </ul>
                `
            },
            'cloud-development': {
                title: 'Cloud Development Guide',
                category: 'Learning Resources',
                type: 'PDF',
                size: '3.2MB',
                content: `
                    <h2>Cloud Development Guide</h2>
                    <p>Cloud-native development is an approach to building and running applications that exploits the advantages of the cloud computing delivery model.</p>
                    
                    <h3>Cloud-Native Principles</h3>
                    <ul>
                        <li>Containerization</li>
                        <li>Microservices</li>
                        <li>DevOps</li>
                        <li>Continuous Delivery</li>
                    </ul>

                    <h3>Azure Services</h3>
                    <pre><code>// Azure Service Bus
public class MessageService
{
    private readonly ServiceBusClient _client;
    
    public async Task SendMessageAsync(string message)
    {
        // Implementation
    }
}

// Azure Functions
public class FunctionApp
{
    [FunctionName("ProcessMessage")]
    public static async Task RunAsync(
        [ServiceBusTrigger("queue-name")] string message)
    {
        // Implementation
    }
}</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Use managed services</li>
                        <li>Implement proper scaling</li>
                        <li>Use cloud-native patterns</li>
                        <li>Implement proper monitoring</li>
                    </ul>
                `
            },
            'api-template': {
                title: 'API Template',
                category: 'Code Templates',
                type: 'GitHub',
                size: '1.2k stars',
                content: `
                    <h2>API Template</h2>
                    <p>A starter template for building RESTful APIs using ASP.NET Core Web API with best practices and common patterns.</p>
                    
                    <h3>Features</h3>
                    <ul>
                        <li>Clean Architecture</li>
                        <li>JWT Authentication</li>
                        <li>Swagger Documentation</li>
                        <li>Global Error Handling</li>
                        <li>Logging</li>
                    </ul>

                    <h3>Project Structure</h3>
                    <pre><code>API.Template/
├── src/
│   ├── API.Template.API/
│   ├── API.Template.Core/
│   ├── API.Template.Infrastructure/
│   └── API.Template.Application/
└── tests/
    ├── API.Template.UnitTests/
    └── API.Template.IntegrationTests/</code></pre>

                    <h3>Getting Started</h3>
                    <pre><code>// Clone the repository
git clone https://github.com/yourusername/api-template.git

// Install dependencies
dotnet restore

// Run the application
dotnet run --project src/API.Template.API</code></pre>
                `
            },
            'microservices-template': {
                title: 'Microservices Template',
                category: 'Code Templates',
                type: 'GitHub',
                size: '2.1k stars',
                content: `
                    <h2>Microservices Template</h2>
                    <p>A comprehensive template for building microservices applications using .NET Core and Docker.</p>
                    
                    <h3>Features</h3>
                    <ul>
                        <li>Docker Support</li>
                        <li>Service Discovery</li>
                        <li>API Gateway</li>
                        <li>Message Bus</li>
                        <li>Health Checks</li>
                    </ul>

                    <h3>Architecture</h3>
                    <pre><code>Microservices.Template/
├── src/
│   ├── Gateway/
│   ├── Services/
│   │   ├── IdentityService/
│   │   ├── CatalogService/
│   │   └── OrderService/
│   └── Shared/
└── docker-compose.yml</code></pre>

                    <h3>Getting Started</h3>
                    <pre><code>// Build and run with Docker
docker-compose up --build

// Access the API Gateway
http://localhost:5000</code></pre>
                `
            },
            'clean-architecture-template': {
                title: 'Clean Architecture Template',
                category: 'Code Templates',
                type: 'GitHub',
                size: '1.8k stars',
                content: `
                    <h2>Clean Architecture Template</h2>
                    <p>A template implementing clean architecture principles with best practices and common patterns.</p>
                    
                    <h3>Features</h3>
                    <ul>
                        <li>Clean Architecture</li>
                        <li>CQRS Pattern</li>
                        <li>MediatR</li>
                        <li>FluentValidation</li>
                        <li>AutoMapper</li>
                    </ul>

                    <h3>Project Structure</h3>
                    <pre><code>CleanArchitecture.Template/
├── src/
│   ├── Core/
│   │   ├── Domain/
│   │   └── Application/
│   ├── Infrastructure/
│   └── Web/
└── tests/
    ├── Core.Tests/
    └── Infrastructure.Tests/</code></pre>

                    <h3>Getting Started</h3>
                    <pre><code>// Clone the repository
git clone https://github.com/yourusername/clean-architecture-template.git

// Install dependencies
dotnet restore

// Run the application
dotnet run --project src/Web</code></pre>
                `
            },
            'code-generator': {
                title: 'Code Generator',
                category: 'Development Tools',
                type: 'VS Code Extension',
                content: `
                    <h2>Code Generator</h2>
                    <p>A Visual Studio Code extension for generating boilerplate code and templates.</p>
                    
                    <h3>Features</h3>
                    <ul>
                        <li>Generate CRUD Operations</li>
                        <li>Create API Endpoints</li>
                        <li>Generate Database Models</li>
                        <li>Create DTOs</li>
                        <li>Generate Tests</li>
                    </ul>

                    <h3>Usage</h3>
                    <pre><code>// Command Palette
Ctrl+Shift+P

// Generate Code
> Code Generator: Generate CRUD
> Code Generator: Generate API
> Code Generator: Generate Models</code></pre>

                    <h3>Configuration</h3>
                    <pre><code>{
    "codeGenerator.templates": {
        "crud": {
            "template": "custom-template",
            "output": "src/Generated"
        }
    }
}</code></pre>
                `
            },
            'api-testing': {
                title: 'API Testing Tool',
                category: 'Development Tools',
                type: 'VS Code Extension',
                content: `
                    <h2>API Testing Tool</h2>
                    <p>A Visual Studio Code extension for testing and documenting APIs.</p>
                    
                    <h3>Features</h3>
                    <ul>
                        <li>Send HTTP Requests</li>
                        <li>Generate Documentation</li>
                        <li>Environment Variables</li>
                        <li>Request Collections</li>
                        <li>Response Validation</li>
                    </ul>

                    <h3>Usage</h3>
                    <pre><code>// Create a new request
POST https://api.example.com/users
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com"
}</code></pre>

                    <h3>Documentation</h3>
                    <pre><code>/**
 * @api {post} /users Create User
 * @apiName CreateUser
 * @apiGroup Users
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name User's name
 * @apiParam {String} email User's email
 *
 * @apiSuccess {String} id User ID
 * @apiSuccess {String} name User's name
 * @apiSuccess {String} email User's email
 */</code></pre>
                `
            },
            'code-analyzer': {
                title: 'Code Analyzer',
                category: 'Development Tools',
                type: 'VS Code Extension',
                content: `
                    <h2>Code Analyzer</h2>
                    <p>A Visual Studio Code extension for analyzing code quality and providing suggestions.</p>
                    
                    <h3>Features</h3>
                    <ul>
                        <li>Code Quality Analysis</li>
                        <li>Performance Suggestions</li>
                        <li>Security Checks</li>
                        <li>Best Practices</li>
                        <li>Custom Rules</li>
                    </ul>

                    <h3>Usage</h3>
                    <pre><code>// Analyze current file
Ctrl+Shift+A

// Analyze entire project
Ctrl+Shift+P > Code Analyzer: Analyze Project</code></pre>

                    <h3>Configuration</h3>
                    <pre><code>{
    "codeAnalyzer.rules": {
        "complexity": {
            "maxCyclomaticComplexity": 10,
            "maxMethodLength": 20
        },
        "security": {
            "enableSecurityChecks": true
        }
    }
}</code></pre>
                `
            },
            'clean-architecture-series': {
                title: 'Clean Architecture Series',
                category: 'Video Tutorials',
                type: 'YouTube',
                size: '10 videos',
                content: `
                    <h2>Clean Architecture Series</h2>
                    <p>A comprehensive video series on implementing clean architecture in .NET applications.</p>
                    
                    <h3>Series Overview</h3>
                    <ul>
                        <li>Introduction to Clean Architecture</li>
                        <li>Project Structure and Setup</li>
                        <li>Domain Layer Implementation</li>
                        <li>Application Layer Implementation</li>
                        <li>Infrastructure Layer Implementation</li>
                        <li>Presentation Layer Implementation</li>
                        <li>Testing and Validation</li>
                        <li>Deployment and CI/CD</li>
                        <li>Best Practices and Patterns</li>
                        <li>Real-world Examples</li>
                    </ul>

                    <h3>Prerequisites</h3>
                    <ul>
                        <li>Basic understanding of C#</li>
                        <li>Familiarity with .NET Core</li>
                        <li>Understanding of SOLID principles</li>
                        <li>Basic knowledge of design patterns</li>
                    </ul>

                    <h3>Resources</h3>
                    <ul>
                        <li>Source Code: GitHub Repository</li>
                        <li>Slides: Presentation Materials</li>
                        <li>Exercises: Practice Problems</li>
                        <li>Additional Reading: Recommended Books</li>
                    </ul>
                `
            },
            'microservices-development': {
                title: 'Microservices Development',
                category: 'Video Tutorials',
                type: 'YouTube',
                size: '8 videos',
                content: `
                    <h2>Microservices Development</h2>
                    <p>A step-by-step guide to building microservices applications using .NET Core.</p>
                    
                    <h3>Series Overview</h3>
                    <ul>
                        <li>Introduction to Microservices</li>
                        <li>Service Design and Boundaries</li>
                        <li>Communication Patterns</li>
                        <li>Data Management</li>
                        <li>Service Discovery</li>
                        <li>API Gateway</li>
                        <li>Monitoring and Logging</li>
                        <li>Deployment and Scaling</li>
                    </ul>

                    <h3>Technologies Covered</h3>
                    <ul>
                        <li>.NET Core</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>RabbitMQ</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                        <li>ELK Stack</li>
                        <li>Prometheus & Grafana</li>
                    </ul>

                    <h3>Resources</h3>
                    <ul>
                        <li>Source Code: GitHub Repository</li>
                        <li>Docker Compose Files</li>
                        <li>Kubernetes Manifests</li>
                        <li>Monitoring Dashboards</li>
                    </ul>
                `
            },
            'cloud-development-series': {
                title: 'Cloud Development',
                category: 'Video Tutorials',
                type: 'YouTube',
                size: '12 videos',
                content: `
                    <h2>Cloud Development</h2>
                    <p>Tutorials on cloud-native development with Azure and best practices.</p>
                    
                    <h3>Series Overview</h3>
                    <ul>
                        <li>Introduction to Cloud Development</li>
                        <li>Azure Fundamentals</li>
                        <li>Containerization with Docker</li>
                        <li>Kubernetes Orchestration</li>
                        <li>Serverless Computing</li>
                        <li>Database Services</li>
                        <li>Message Queues and Events</li>
                        <li>Identity and Security</li>
                        <li>Monitoring and Logging</li>
                        <li>DevOps Practices</li>
                        <li>Cost Optimization</li>
                        <li>Real-world Projects</li>
                    </ul>

                    <h3>Azure Services Covered</h3>
                    <ul>
                        <li>Azure App Service</li>
                        <li>Azure Kubernetes Service</li>
                        <li>Azure Functions</li>
                        <li>Azure SQL Database</li>
                        <li>Azure Cosmos DB</li>
                        <li>Azure Service Bus</li>
                        <li>Azure Active Directory</li>
                        <li>Azure Monitor</li>
                        <li>Azure DevOps</li>
                    </ul>

                    <h3>Resources</h3>
                    <ul>
                        <li>Azure Free Account</li>
                        <li>Sample Projects</li>
                        <li>Architecture Diagrams</li>
                        <li>Cost Calculator</li>
                    </ul>
                `
            }
        };

        return resources[resourceId] || null;
    }

    createReaderContent(resourceData) {
        return `
            <div class="resource-reader">
                <div class="reader-header">
                    <h2 class="reader-title">${resourceData.title}</h2>
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
                    <div class="resource-meta">
                        <span><i class="fas fa-folder"></i> ${resourceData.category}</span>
                        <span><i class="fas fa-file"></i> ${resourceData.type}</span>
                        <span><i class="fas fa-info-circle"></i> ${resourceData.size}</span>
                    </div>
                    ${resourceData.content}
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" data-action="prev" ${this.currentResourceIndex === 0 ? 'disabled' : ''}>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" data-action="next" ${this.currentResourceIndex === this.resources.length - 1 ? 'disabled' : ''}>
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
                this.navigateResource('prev');
            } else if (action === 'next') {
                this.navigateResource('next');
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
        const reader = this.modal.querySelector('.resource-reader');
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

    navigateResource(direction) {
        const newIndex = direction === 'next' ? 
            this.currentResourceIndex + 1 : 
            this.currentResourceIndex - 1;

        if (newIndex >= 0 && newIndex < this.resources.length) {
            this.currentResourceIndex = newIndex;
            this.showResource(this.resources[newIndex]);
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

        prevBtn.disabled = this.currentResourceIndex === 0;
        nextBtn.disabled = this.currentResourceIndex === this.resources.length - 1;
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
    new ResourceReader();
    new NewsletterForm();
}); 