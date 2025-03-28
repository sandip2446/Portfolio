// Case Studies Page JavaScript

// Case Study Data
const caseStudies = {
    'ecommerce-transformation': {
        title: 'Student E-Commerce Platform Development',
        category: 'Web Development',
        duration: '3 months',
        teamSize: '3 team members',
        technology: 'ASP.NET Core MVC',
        content: `
            <div class="case-study-reader">
                <div class="reader-header">
                    <h2 class="reader-title">Student E-Commerce Platform Development</h2>
                    <div class="reader-controls">
                        <button class="reader-control-btn" id="fontSizeBtn">
                            <i class="fas fa-text-height"></i>
                        </button>
                        <button class="reader-control-btn" id="readingModeBtn">
                            <i class="fas fa-book"></i>
                        </button>
                        <button class="reader-control-btn" id="closeBtn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="reader-content">
                    <div class="case-study-meta">
                        <span><i class="fas fa-clock"></i> 3 months</span>
                        <span><i class="fas fa-users"></i> 3 team members</span>
                        <span><i class="fas fa-code-branch"></i> ASP.NET Core MVC</span>
                    </div>

                    <h3>Project Overview</h3>
                    <p>As part of my final year project, I developed a full-featured e-commerce platform using ASP.NET Core MVC. This project was designed to showcase my understanding of web development principles and modern technologies.</p>
                    
                    <h3>Learning Objectives</h3>
                    <ul>
                        <li>Implement MVC architecture in a real-world application</li>
                        <li>Learn and apply Entity Framework Core for database operations</li>
                        <li>Develop secure user authentication and authorization</li>
                        <li>Create responsive and user-friendly interfaces</li>
                        <li>Implement shopping cart functionality</li>
                        <li>Learn payment gateway integration</li>
                    </ul>
                    
                    <h3>Technical Implementation</h3>
                    <p>The project was built using the following technologies and features:</p>
                    <div class="tech-stack">
                        <span><i class="fab fa-dotnet"></i> ASP.NET Core MVC</span>
                        <span><i class="fas fa-database"></i> SQL Server</span>
                        <span><i class="fas fa-code"></i> Entity Framework Core</span>
                        <span><i class="fab fa-bootstrap"></i> Bootstrap 5</span>
                        <span><i class="fas fa-lock"></i> Identity Framework</span>
                        <span><i class="fas fa-shopping-cart"></i> Shopping Cart</span>
                    </div>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>User registration and authentication</li>
                        <li>Product catalog with categories</li>
                        <li>Shopping cart functionality</li>
                        <li>Order management system</li>
                        <li>Admin dashboard</li>
                        <li>Responsive design for all devices</li>
                    </ul>
                    
                    <h3>Challenges and Solutions</h3>
                    <p>During development, I faced several challenges:</p>
                    <ul>
                        <li><strong>Database Design:</strong> Created normalized database schema to handle product variations and orders efficiently</li>
                        <li><strong>Authentication:</strong> Implemented secure user authentication using ASP.NET Core Identity</li>
                        <li><strong>Performance:</strong> Optimized database queries and implemented caching for better performance</li>
                        <li><strong>UI/UX:</strong> Designed intuitive interfaces using Bootstrap 5 and custom CSS</li>
                    </ul>
                    
                    <h3>Learning Outcomes</h3>
                    <ul>
                        <li>Gained practical experience with ASP.NET Core MVC</li>
                        <li>Learned database design and optimization</li>
                        <li>Improved problem-solving skills</li>
                        <li>Enhanced understanding of web security</li>
                        <li>Developed project management skills</li>
                    </ul>
                    
                    <h3>Future Improvements</h3>
                    <ul>
                        <li>Add real-time inventory management</li>
                        <li>Implement payment gateway integration</li>
                        <li>Add product reviews and ratings</li>
                        <li>Implement search functionality</li>
                        <li>Add email notifications</li>
                    </ul>
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">Page 1 of 1</div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" disabled>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" disabled>
                            Next <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
    },
    'cloud-migration': {
        title: 'Cloud-Based Student Management System',
        category: 'Cloud Solutions',
        duration: '4 months',
        teamSize: '4 team members',
        technology: 'Azure',
        content: `
            <div class="case-study-reader">
                <div class="reader-header">
                    <h2 class="reader-title">Cloud-Based Student Management System</h2>
                    <div class="reader-controls">
                        <button class="reader-control-btn" id="fontSizeBtn">
                            <i class="fas fa-text-height"></i>
                        </button>
                        <button class="reader-control-btn" id="readingModeBtn">
                            <i class="fas fa-book"></i>
                        </button>
                        <button class="reader-control-btn" id="closeBtn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="reader-content">
                    <div class="case-study-meta">
                        <span><i class="fas fa-clock"></i> 4 months</span>
                        <span><i class="fas fa-users"></i> 4 team members</span>
                        <span><i class="fas fa-cloud"></i> Azure</span>
                    </div>

                    <h3>Project Overview</h3>
                    <p>Developed a cloud-based student management system using Microsoft Azure services as part of my cloud computing course project. This system helps educational institutions manage student records, attendance, and academic performance.</p>
                    
                    <h3>Learning Objectives</h3>
                    <ul>
                        <li>Learn cloud computing concepts and Azure services</li>
                        <li>Implement microservices architecture</li>
                        <li>Work with cloud databases and storage</li>
                        <li>Develop secure cloud applications</li>
                        <li>Learn DevOps practices</li>
                    </ul>
                    
                    <h3>Technical Implementation</h3>
                    <p>The project utilized various Azure services:</p>
                    <div class="tech-stack">
                        <span><i class="fab fa-azure"></i> Azure App Service</span>
                        <span><i class="fas fa-database"></i> Azure SQL Database</span>
                        <span><i class="fas fa-server"></i> Azure Functions</span>
                        <span><i class="fas fa-shield-alt"></i> Azure AD</span>
                        <span><i class="fas fa-cloud"></i> Azure Storage</span>
                    </div>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Student profile management</li>
                        <li>Attendance tracking system</li>
                        <li>Grade management</li>
                        <li>Course registration</li>
                        <li>Faculty portal</li>
                        <li>Mobile app integration</li>
                    </ul>
                    
                    <h3>Challenges and Solutions</h3>
                    <p>Key challenges faced during development:</p>
                    <ul>
                        <li><strong>Data Security:</strong> Implemented Azure AD for authentication and role-based access control</li>
                        <li><strong>Scalability:</strong> Used Azure App Service for automatic scaling</li>
                        <li><strong>Data Storage:</strong> Implemented Azure SQL Database with proper indexing</li>
                        <li><strong>Performance:</strong> Used Azure CDN for static content delivery</li>
                    </ul>
                    
                    <h3>Learning Outcomes</h3>
                    <ul>
                        <li>Gained practical experience with Azure services</li>
                        <li>Learned cloud architecture patterns</li>
                        <li>Improved understanding of cloud security</li>
                        <li>Developed microservices skills</li>
                        <li>Learned cloud deployment practices</li>
                    </ul>
                    
                    <h3>Future Improvements</h3>
                    <ul>
                        <li>Add real-time notifications</li>
                        <li>Implement analytics dashboard</li>
                        <li>Add document management system</li>
                        <li>Implement chat functionality</li>
                        <li>Add reporting features</li>
                    </ul>
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">Page 1 of 1</div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" disabled>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" disabled>
                            Next <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
    },
    'mobile-app': {
        title: 'Cross-Platform Student Attendance App',
        category: 'Mobile Development',
        duration: '3 months',
        teamSize: '2 team members',
        technology: '.NET MAUI',
        content: `
            <div class="case-study-reader">
                <div class="reader-header">
                    <h2 class="reader-title">Cross-Platform Student Attendance App</h2>
                    <div class="reader-controls">
                        <button class="reader-control-btn" id="fontSizeBtn">
                            <i class="fas fa-text-height"></i>
                        </button>
                        <button class="reader-control-btn" id="readingModeBtn">
                            <i class="fas fa-book"></i>
                        </button>
                        <button class="reader-control-btn" id="closeBtn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="reader-content">
                    <div class="case-study-meta">
                        <span><i class="fas fa-clock"></i> 3 months</span>
                        <span><i class="fas fa-users"></i> 2 team members</span>
                        <span><i class="fas fa-mobile-alt"></i> .NET MAUI</span>
                    </div>

                    <h3>Project Overview</h3>
                    <p>Developed a cross-platform mobile application using .NET MAUI for managing student attendance. This project was part of my mobile development course and aimed to create a practical solution for educational institutions.</p>
                    
                    <h3>Learning Objectives</h3>
                    <ul>
                        <li>Learn cross-platform mobile development</li>
                        <li>Implement MVVM architecture</li>
                        <li>Work with local databases</li>
                        <li>Develop offline-first applications</li>
                        <li>Learn mobile UI/UX design</li>
                    </ul>
                    
                    <h3>Technical Implementation</h3>
                    <p>The app was built using modern mobile development technologies:</p>
                    <div class="tech-stack">
                        <span><i class="fas fa-mobile-alt"></i> .NET MAUI</span>
                        <span><i class="fas fa-database"></i> SQLite</span>
                        <span><i class="fas fa-paint-brush"></i> XAML</span>
                        <span><i class="fas fa-cloud"></i> Azure Mobile Services</span>
                        <span><i class="fas fa-qrcode"></i> QR Code Scanning</span>
                    </div>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>QR code-based attendance marking</li>
                        <li>Offline data storage</li>
                        <li>Attendance reports</li>
                        <li>Student profiles</li>
                        <li>Course management</li>
                        <li>Push notifications</li>
                    </ul>
                    
                    <h3>Challenges and Solutions</h3>
                    <p>Key challenges faced during development:</p>
                    <ul>
                        <li><strong>Offline Support:</strong> Implemented SQLite for local storage and sync</li>
                        <li><strong>UI Consistency:</strong> Created custom controls for consistent look across platforms</li>
                        <li><strong>Performance:</strong> Optimized image loading and caching</li>
                        <li><strong>Data Sync:</strong> Implemented background sync with Azure</li>
                    </ul>
                    
                    <h3>Learning Outcomes</h3>
                    <ul>
                        <li>Gained experience with .NET MAUI</li>
                        <li>Learned mobile app architecture</li>
                        <li>Improved UI/UX design skills</li>
                        <li>Developed offline-first thinking</li>
                        <li>Learned mobile testing practices</li>
                    </ul>
                    
                    <h3>Future Improvements</h3>
                    <ul>
                        <li>Add biometric authentication</li>
                        <li>Implement real-time attendance tracking</li>
                        <li>Add attendance analytics</li>
                        <li>Implement parent portal</li>
                        <li>Add export functionality</li>
                    </ul>
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">Page 1 of 1</div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" disabled>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" disabled>
                            Next <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
    },
    'task-management': {
        title: 'Task Management System',
        category: 'Web Development',
        duration: '2 months',
        teamSize: '2 team members',
        technology: 'ASP.NET Core Web API',
        content: `
            <div class="case-study-reader">
                <div class="reader-header">
                    <h2 class="reader-title">Task Management System</h2>
                    <div class="reader-controls">
                        <button class="reader-control-btn" id="fontSizeBtn">
                            <i class="fas fa-text-height"></i>
                        </button>
                        <button class="reader-control-btn" id="readingModeBtn">
                            <i class="fas fa-book"></i>
                        </button>
                        <button class="reader-control-btn" id="closeBtn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="reader-content">
                    <div class="case-study-meta">
                        <span><i class="fas fa-clock"></i> 2 months</span>
                        <span><i class="fas fa-users"></i> 2 team members</span>
                        <span><i class="fas fa-code"></i> ASP.NET Core Web API</span>
                    </div>

                    <h3>Project Overview</h3>
                    <p>Developed a RESTful task management system as part of my Web API development course. This project focused on building a scalable backend service with modern API design principles.</p>
                    
                    <h3>Learning Objectives</h3>
                    <ul>
                        <li>Learn RESTful API design principles</li>
                        <li>Implement JWT authentication</li>
                        <li>Work with Entity Framework Core</li>
                        <li>Develop API documentation</li>
                        <li>Learn API testing practices</li>
                    </ul>
                    
                    <h3>Technical Implementation</h3>
                    <p>The API was built using modern web technologies:</p>
                    <div class="tech-stack">
                        <span><i class="fab fa-dotnet"></i> ASP.NET Core Web API</span>
                        <span><i class="fas fa-key"></i> JWT Authentication</span>
                        <span><i class="fas fa-database"></i> Entity Framework Core</span>
                        <span><i class="fas fa-file-code"></i> Swagger</span>
                        <span><i class="fas fa-code-branch"></i> Git</span>
                        <span><i class="fas fa-vial"></i> xUnit</span>
                    </div>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>User authentication and authorization</li>
                        <li>Task CRUD operations</li>
                        <li>Task categorization and prioritization</li>
                        <li>Due date management</li>
                        <li>Task assignment and tracking</li>
                        <li>API documentation with Swagger</li>
                    </ul>
                    
                    <h3>Challenges and Solutions</h3>
                    <p>Key challenges faced during development:</p>
                    <ul>
                        <li><strong>Authentication:</strong> Implemented secure JWT token-based authentication</li>
                        <li><strong>Data Validation:</strong> Used FluentValidation for request validation</li>
                        <li><strong>Error Handling:</strong> Created global exception handling middleware</li>
                        <li><strong>Testing:</strong> Wrote comprehensive unit tests using xUnit</li>
                    </ul>
                    
                    <h3>Learning Outcomes</h3>
                    <ul>
                        <li>Gained experience with Web API development</li>
                        <li>Learned API security best practices</li>
                        <li>Improved testing skills</li>
                        <li>Enhanced documentation abilities</li>
                        <li>Developed API design skills</li>
                    </ul>
                    
                    <h3>Future Improvements</h3>
                    <ul>
                        <li>Add real-time notifications</li>
                        <li>Implement task dependencies</li>
                        <li>Add file attachments</li>
                        <li>Create reporting features</li>
                        <li>Add team collaboration features</li>
                    </ul>
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">Page 1 of 1</div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" disabled>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" disabled>
                            Next <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
    },
    'weather-app': {
        title: 'Weather Forecast Application',
        category: 'Mobile Development',
        duration: '2 months',
        teamSize: '1 team member',
        technology: '.NET MAUI',
        content: `
            <div class="case-study-reader">
                <div class="reader-header">
                    <h2 class="reader-title">Weather Forecast Application</h2>
                    <div class="reader-controls">
                        <button class="reader-control-btn" id="fontSizeBtn">
                            <i class="fas fa-text-height"></i>
                        </button>
                        <button class="reader-control-btn" id="readingModeBtn">
                            <i class="fas fa-book"></i>
                        </button>
                        <button class="reader-control-btn" id="closeBtn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="reader-content">
                    <div class="case-study-meta">
                        <span><i class="fas fa-clock"></i> 2 months</span>
                        <span><i class="fas fa-users"></i> 1 team member</span>
                        <span><i class="fas fa-mobile-alt"></i> .NET MAUI</span>
                    </div>

                    <h3>Project Overview</h3>
                    <p>Developed a cross-platform weather forecast application using .NET MAUI as part of my mobile development course. This project focused on creating a user-friendly weather app with real-time data and location services.</p>
                    
                    <h3>Learning Objectives</h3>
                    <ul>
                        <li>Learn cross-platform mobile development</li>
                        <li>Implement location services</li>
                        <li>Work with external APIs</li>
                        <li>Create responsive UI</li>
                        <li>Handle offline data</li>
                    </ul>
                    
                    <h3>Technical Implementation</h3>
                    <p>The app was built using modern mobile development technologies:</p>
                    <div class="tech-stack">
                        <span><i class="fas fa-mobile-alt"></i> .NET MAUI</span>
                        <span><i class="fas fa-paint-brush"></i> XAML</span>
                        <span><i class="fas fa-database"></i> SQLite</span>
                        <span><i class="fas fa-cloud"></i> OpenWeather API</span>
                        <span><i class="fas fa-map-marker-alt"></i> Geolocation</span>
                        <span><i class="fas fa-sync"></i> Background Sync</span>
                    </div>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Current weather conditions</li>
                        <li>5-day weather forecast</li>
                        <li>Location-based weather</li>
                        <li>Offline data access</li>
                        <li>Weather alerts</li>
                        <li>Multiple location support</li>
                    </ul>
                    
                    <h3>Challenges and Solutions</h3>
                    <p>Key challenges faced during development:</p>
                    <ul>
                        <li><strong>Location Services:</strong> Implemented proper location permission handling</li>
                        <li><strong>Data Caching:</strong> Used SQLite for offline data storage</li>
                        <li><strong>UI Responsiveness:</strong> Optimized UI updates for better performance</li>
                        <li><strong>API Integration:</strong> Created robust API client with error handling</li>
                    </ul>
                    
                    <h3>Learning Outcomes</h3>
                    <ul>
                        <li>Gained experience with .NET MAUI</li>
                        <li>Learned mobile app architecture</li>
                        <li>Improved UI/UX design skills</li>
                        <li>Developed API integration skills</li>
                        <li>Learned mobile testing practices</li>
                    </ul>
                    
                    <h3>Future Improvements</h3>
                    <ul>
                        <li>Add weather maps</li>
                        <li>Implement push notifications</li>
                        <li>Add weather widgets</li>
                        <li>Create weather sharing features</li>
                        <li>Add more weather data sources</li>
                    </ul>
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">Page 1 of 1</div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" disabled>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" disabled>
                            Next <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
    },
    'blog-platform': {
        title: 'Personal Blog Platform',
        category: 'Web Development',
        duration: '3 months',
        teamSize: '1 team member',
        technology: 'ASP.NET Core MVC',
        content: `
            <div class="case-study-reader">
                <div class="reader-header">
                    <h2 class="reader-title">Personal Blog Platform</h2>
                    <div class="reader-controls">
                        <button class="reader-control-btn" id="fontSizeBtn">
                            <i class="fas fa-text-height"></i>
                        </button>
                        <button class="reader-control-btn" id="readingModeBtn">
                            <i class="fas fa-book"></i>
                        </button>
                        <button class="reader-control-btn" id="closeBtn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="reader-content">
                    <div class="case-study-meta">
                        <span><i class="fas fa-clock"></i> 3 months</span>
                        <span><i class="fas fa-users"></i> 1 team member</span>
                        <span><i class="fas fa-code"></i> ASP.NET Core MVC</span>
                    </div>

                    <h3>Project Overview</h3>
                    <p>Developed a personal blog platform using ASP.NET Core MVC as part of my web development course. This project focused on creating a full-featured blogging system with modern design and functionality.</p>
                    
                    <h3>Learning Objectives</h3>
                    <ul>
                        <li>Implement MVC architecture</li>
                        <li>Learn content management</li>
                        <li>Work with rich text editing</li>
                        <li>Develop SEO features</li>
                        <li>Create responsive design</li>
                    </ul>
                    
                    <h3>Technical Implementation</h3>
                    <p>The platform was built using modern web technologies:</p>
                    <div class="tech-stack">
                        <span><i class="fab fa-dotnet"></i> ASP.NET Core MVC</span>
                        <span><i class="fas fa-database"></i> Entity Framework Core</span>
                        <span><i class="fas fa-edit"></i> TinyMCE Editor</span>
                        <span><i class="fas fa-search"></i> Lucene.NET</span>
                        <span><i class="fas fa-image"></i> Image Processing</span>
                        <span><i class="fas fa-share-alt"></i> Social Sharing</span>
                    </div>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Rich text blog post editor</li>
                        <li>Category and tag management</li>
                        <li>Comment system</li>
                        <li>Search functionality</li>
                        <li>Social media sharing</li>
                        <li>Responsive design</li>
                    </ul>
                    
                    <h3>Challenges and Solutions</h3>
                    <p>Key challenges faced during development:</p>
                    <ul>
                        <li><strong>Content Management:</strong> Implemented TinyMCE for rich text editing</li>
                        <li><strong>Search:</strong> Used Lucene.NET for efficient search</li>
                        <li><strong>Performance:</strong> Implemented caching for better load times</li>
                        <li><strong>SEO:</strong> Added meta tags and sitemap generation</li>
                    </ul>
                    
                    <h3>Learning Outcomes</h3>
                    <ul>
                        <li>Gained experience with MVC</li>
                        <li>Learned content management</li>
                        <li>Improved SEO knowledge</li>
                        <li>Enhanced UI/UX skills</li>
                        <li>Developed blogging features</li>
                    </ul>
                    
                    <h3>Future Improvements</h3>
                    <ul>
                        <li>Add analytics dashboard</li>
                        <li>Implement newsletter system</li>
                        <li>Add multi-language support</li>
                        <li>Create API for mobile app</li>
                        <li>Add monetization features</li>
                    </ul>
                </div>
                <div class="reader-footer">
                    <div class="reader-progress">Page 1 of 1</div>
                    <div class="reader-navigation">
                        <button class="reader-nav-btn" disabled>
                            <i class="fas fa-chevron-left"></i> Previous
                        </button>
                        <button class="reader-nav-btn" disabled>
                            Next <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
};

// Modal Management
class CaseStudyModal {
    constructor() {
        this.modal = document.getElementById('case-study-modal');
        this.modalContent = this.modal.querySelector('.modal-content');
        this.currentCaseStudy = null;
        this.init();
    }

    init() {
        // Add click event listeners to case study buttons
        document.querySelectorAll('[data-action="view-case-study"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const caseStudyId = button.getAttribute('data-case-study');
                this.showCaseStudy(caseStudyId);
            });
        });

        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });

        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.hideModal();
            }
        });
    }

    showCaseStudy(caseStudyId) {
        const caseStudy = caseStudies[caseStudyId];
        if (caseStudy) {
            this.currentCaseStudy = caseStudy;
            this.modalContent.innerHTML = caseStudy.content;
            this.modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            this.initializeReaderControls();
        }
    }

    hideModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = '';
        this.currentCaseStudy = null;
    }

    initializeReaderControls() {
        // Font size controls
        const fontSizeBtn = this.modalContent.querySelector('#fontSizeBtn');
        const readerContent = this.modalContent.querySelector('.reader-content');
        let currentFontSize = 1.1;
        
        fontSizeBtn.addEventListener('click', () => {
            currentFontSize = currentFontSize === 1.1 ? 1.3 : 1.1;
            readerContent.style.fontSize = `${currentFontSize}rem`;
        });

        // Reading mode toggle
        const readingModeBtn = this.modalContent.querySelector('#readingModeBtn');
        const reader = this.modalContent.querySelector('.case-study-reader');
        
        readingModeBtn.addEventListener('click', () => {
            reader.classList.toggle('reading-mode');
        });

        // Close button
        const closeBtn = this.modalContent.querySelector('#closeBtn');
        closeBtn.addEventListener('click', () => {
            this.hideModal();
        });
    }
}

// Scroll Animations
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

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize case study modal
    new CaseStudyModal();

    // Initialize scroll animations
    new ScrollAnimation();

    // Initialize mobile menu
    new MobileMenu();
}); 