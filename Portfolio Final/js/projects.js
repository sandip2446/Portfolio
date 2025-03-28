// Projects Page JavaScript

// Project Data
const projectData = {
    'student-portal': {
        title: 'Student Portal',
        description: 'A web application for managing student information, course materials, and assignments. Built as part of my coursework to help students access their academic resources and track their progress.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        features: [
            'Student login and profile management',
            'Course material access and downloads',
            'Assignment submission system',
            'Grade viewing and GPA calculator',
            'Discussion forum for student interaction'
        ],
        images: [
            '../../images/projects/student-portal-1.jpg',
            '../../images/projects/student-portal-2.jpg',
            '../../images/projects/student-portal-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/student-portal',
        demo: 'https://student-portal-demo.example.com'
    },
    'task-tracker': {
        title: 'Task Tracker',
        description: 'A simple task management application to help students organize their assignments and study schedule. Features include task categorization, due date reminders, and progress tracking.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
        features: [
            'Add, edit, and delete tasks',
            'Categorize tasks by subject',
            'Set due dates and reminders',
            'Track completion status',
            'Simple and intuitive interface'
        ],
        images: [
            '../../images/projects/task-tracker-1.jpg',
            '../../images/projects/task-tracker-2.jpg',
            '../../images/projects/task-tracker-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/task-tracker',
        demo: 'https://task-tracker-demo.example.com'
    },
    'calculator': {
        title: 'Scientific Calculator',
        description: 'A desktop calculator application with basic and scientific functions. Built as part of my programming fundamentals course to demonstrate object-oriented programming concepts.',
        technologies: ['Python', 'Tkinter', 'Math Module'],
        features: [
            'Basic arithmetic operations',
            'Scientific functions (sin, cos, tan)',
            'Unit conversions',
            'Memory functions',
            'History of calculations'
        ],
        images: [
            '../../images/projects/calculator-1.jpg',
            '../../images/projects/calculator-2.jpg',
            '../../images/projects/calculator-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/scientific-calculator',
        demo: null
    },
    'file-manager': {
        title: 'File Manager',
        description: 'A simple file management system for organizing study materials and project files. Created to practice file handling and GUI programming concepts.',
        technologies: ['Java', 'Swing', 'File I/O'],
        features: [
            'File and folder operations',
            'Search functionality',
            'File preview',
            'Basic file organization',
            'Simple and clean interface'
        ],
        images: [
            '../../images/projects/file-manager-1.jpg',
            '../../images/projects/file-manager-2.jpg',
            '../../images/projects/file-manager-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/file-manager',
        demo: null
    },
    'study-timer': {
        title: 'Study Timer',
        description: 'A mobile application to help students manage their study sessions using the Pomodoro technique. Developed as part of my mobile app development course.',
        technologies: ['Flutter', 'Dart', 'Provider'],
        features: [
            'Pomodoro timer (25/5 intervals)',
            'Custom timer settings',
            'Study session tracking',
            'Simple statistics',
            'Offline functionality'
        ],
        images: [
            '../../images/projects/study-timer-1.jpg',
            '../../images/projects/study-timer-2.jpg',
            '../../images/projects/study-timer-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/study-timer',
        demo: 'https://play.google.com/store/apps/details?id=com.sandipacharya.studytimer'
    },
    'quiz-app': {
        title: 'Programming Quiz App',
        description: 'An educational quiz application focused on programming concepts and languages. Created to help students test their knowledge of various programming topics.',
        technologies: ['React Native', 'JavaScript', 'AsyncStorage'],
        features: [
            'Multiple programming topics',
            'Score tracking',
            'Progress saving',
            'Review incorrect answers',
            'Simple and engaging UI'
        ],
        images: [
            '../../images/projects/quiz-app-1.jpg',
            '../../images/projects/quiz-app-2.jpg',
            '../../images/projects/quiz-app-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/programming-quiz',
        demo: 'https://play.google.com/store/apps/details?id=com.sandipacharya.programmingquiz'
    },
    'ecommerce-platform': {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce solution built with ASP.NET Core MVC. Features include product management, shopping cart, order processing, and admin dashboard.',
        technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap 5', 'jQuery'],
        features: [
            'User authentication and authorization',
            'Product catalog with categories',
            'Shopping cart functionality',
            'Order processing system',
            'Admin dashboard for management',
            'Payment integration',
            'Email notifications'
        ],
        images: [
            '../../images/projects/ecommerce-platform.jpg',
            '../../images/projects/ecommerce-platform-2.jpg',
            '../../images/projects/ecommerce-platform-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/ecommerce-platform',
        demo: 'https://ecommerce-demo.example.com'
    },
    'task-management': {
        title: 'Task Management API',
        description: 'A robust RESTful Web API for task management built with ASP.NET Core Web API. Implements JWT authentication and follows clean architecture principles.',
        technologies: ['ASP.NET Core Web API', 'Entity Framework Core', 'SQL Server', 'JWT', 'Swagger'],
        features: [
            'JWT-based authentication',
            'Role-based authorization',
            'CRUD operations for tasks',
            'Task categorization and filtering',
            'Real-time updates with SignalR',
            'API documentation with Swagger',
            'Unit testing with xUnit'
        ],
        images: [
            '../../images/projects/task-management.jpg',
            '../../images/projects/task-management-2.jpg',
            '../../images/projects/task-management-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/task-management-api',
        demo: 'https://api.task-management.example.com'
    },
    'real-estate': {
        title: 'Real Estate Portal',
        description: 'A property listing and management system built with ASP.NET Core MVC and Azure services. Features advanced search and property management capabilities.',
        technologies: ['ASP.NET Core MVC', 'Azure SQL', 'Azure Storage', 'Azure App Service', 'Azure AD'],
        features: [
            'Property listing management',
            'Advanced search with filters',
            'Image upload to Azure Storage',
            'User authentication with Azure AD',
            'Property analytics dashboard',
            'Email notifications',
            'Mobile-responsive design'
        ],
        images: [
            '../../images/projects/real-estate.jpg',
            '../../images/projects/real-estate-2.jpg',
            '../../images/projects/real-estate-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/real-estate-portal',
        demo: 'https://real-estate.example.com'
    },
    'healthcare': {
        title: 'Healthcare Management System',
        description: 'A comprehensive healthcare management solution built with ASP.NET Core and Entity Framework Core. Manages patient records, appointments, and medical history.',
        technologies: ['ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'SignalR', 'Bootstrap 5'],
        features: [
            'Patient records management',
            'Appointment scheduling',
            'Real-time notifications',
            'Medical history tracking',
            'Prescription management',
            'Reporting system',
            'HIPAA compliance features'
        ],
        images: [
            '../../images/projects/healthcare.jpg',
            '../../images/projects/healthcare-2.jpg',
            '../../images/projects/healthcare-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/healthcare-system',
        demo: 'https://healthcare.example.com'
    },
    'banking-api': {
        title: 'Banking Operations API',
        description: 'A secure banking operations API built with ASP.NET Core Web API. Implements OAuth2 authentication and follows microservices architecture.',
        technologies: ['ASP.NET Core Web API', 'Entity Framework Core', 'PostgreSQL', 'Redis', 'OAuth2'],
        features: [
            'Account management',
            'Transaction processing',
            'Balance checking',
            'Transaction history',
            'Rate limiting',
            'Caching with Redis',
            'API versioning'
        ],
        images: [
            '../../images/projects/banking-api.jpg',
            '../../images/projects/banking-api-2.jpg',
            '../../images/projects/banking-api-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/banking-api',
        demo: 'https://api.banking.example.com'
    },
    'school-management': {
        title: 'School Management System',
        description: 'A complete school administration solution built with ASP.NET Core MVC and Blazor. Manages student records, attendance, and academic performance.',
        technologies: ['ASP.NET Core MVC', 'Blazor', 'Entity Framework Core', 'SQL Server', 'SignalR'],
        features: [
            'Student information management',
            'Attendance tracking',
            'Grade management',
            'Class scheduling',
            'Parent portal',
            'Real-time notifications',
            'Reporting system'
        ],
        images: [
            '../../images/projects/school-management.jpg',
            '../../images/projects/school-management-2.jpg',
            '../../images/projects/school-management-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/school-management',
        demo: 'https://school-management.example.com'
    },
    'inventory-management': {
        title: 'Enterprise Inventory Management',
        description: 'A comprehensive inventory management system built with ASP.NET Core and Azure. Features real-time stock tracking, automated reordering, and advanced analytics.',
        technologies: ['ASP.NET Core MVC', 'Azure SQL', 'Azure Functions', 'Power BI', 'SignalR'],
        features: [
            'Real-time inventory tracking',
            'Automated reorder points',
            'Barcode scanning integration',
            'Advanced analytics dashboard',
            'Multi-warehouse support',
            'Supplier management',
            'Inventory forecasting'
        ],
        images: [
            '../../images/projects/inventory-management.jpg',
            '../../images/projects/inventory-management-2.jpg',
            '../../images/projects/inventory-management-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/inventory-management',
        demo: 'https://inventory.example.com'
    },
    'hr-management': {
        title: 'HR Management System',
        description: 'A complete HR management solution with employee onboarding, attendance tracking, and performance management. Built with ASP.NET Core and Blazor.',
        technologies: ['ASP.NET Core', 'Blazor', 'Entity Framework Core', 'SQL Server', 'Azure AD'],
        features: [
            'Employee onboarding workflow',
            'Attendance tracking system',
            'Performance reviews',
            'Leave management',
            'Document management',
            'Employee self-service portal',
            'Reporting and analytics'
        ],
        images: [
            '../../images/projects/hr-management.jpg',
            '../../images/projects/hr-management-2.jpg',
            '../../images/projects/hr-management-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/hr-management',
        demo: 'https://hr.example.com'
    },
    'crm-system': {
        title: 'Customer Relationship Management',
        description: 'A modern CRM system with lead tracking, sales pipeline, and customer analytics. Built with ASP.NET Core Web API and React.',
        technologies: ['ASP.NET Core Web API', 'React', 'MongoDB', 'Redis', 'Azure App Service'],
        features: [
            'Lead tracking and scoring',
            'Sales pipeline management',
            'Customer analytics',
            'Email campaign integration',
            'Task automation',
            'Mobile app support',
            'API integration capabilities'
        ],
        images: [
            '../../images/projects/crm-system.jpg',
            '../../images/projects/crm-system-2.jpg',
            '../../images/projects/crm-system-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/crm-system',
        demo: 'https://crm.example.com'
    },
    'document-management': {
        title: 'Document Management System',
        description: 'A secure document management system with version control and workflow automation. Built with ASP.NET Core and Azure Blob Storage.',
        technologies: ['ASP.NET Core MVC', 'Azure Blob Storage', 'Azure Search', 'Azure AD', 'SignalR'],
        features: [
            'Document version control',
            'Workflow automation',
            'Advanced search capabilities',
            'Document collaboration',
            'Access control and permissions',
            'Audit logging',
            'Document conversion'
        ],
        images: [
            '../../images/projects/document-management.jpg',
            '../../images/projects/document-management-2.jpg',
            '../../images/projects/document-management-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/document-management',
        demo: 'https://docs.example.com'
    },
    'analytics-platform': {
        title: 'Business Analytics Platform',
        description: 'A powerful analytics platform for data visualization and business intelligence. Built with ASP.NET Core and Power BI integration.',
        technologies: ['ASP.NET Core', 'Power BI', 'Azure Synapse', 'Azure Data Factory', 'React'],
        features: [
            'Interactive dashboards',
            'Custom report builder',
            'Data integration tools',
            'Real-time analytics',
            'Export capabilities',
            'Scheduled reports',
            'API access'
        ],
        images: [
            '../../images/projects/analytics-platform.jpg',
            '../../images/projects/analytics-platform-2.jpg',
            '../../images/projects/analytics-platform-3.jpg'
        ],
        github: 'https://github.com/sandipacharya/analytics-platform',
        demo: 'https://analytics.example.com'
    }
};

// Project Filtering with Search
class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.searchInput = document.createElement('input');
        this.searchInput.type = 'text';
        this.searchInput.placeholder = 'Search projects...';
        this.searchInput.className = 'project-search';
        this.init();
    }

    init() {
        // Add search input to filters section
        const filterContainer = document.querySelector('.filter-buttons');
        filterContainer.parentNode.insertBefore(this.searchInput, filterContainer);

        // Initialize filter buttons
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => this.filterProjects(button));
        });

        // Add search functionality
        this.searchInput.addEventListener('input', (e) => this.searchProjects(e.target.value));
    }

    filterProjects(button) {
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        this.filterAndSearch(filterValue, this.searchInput.value);
    }

    searchProjects(searchTerm) {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        this.filterAndSearch(activeFilter, searchTerm);
    }

    filterAndSearch(filterValue, searchTerm) {
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const technologies = Array.from(card.querySelectorAll('.project-tech span'))
                .map(span => span.textContent.toLowerCase());

            const matchesFilter = filterValue === 'all' || category === filterValue;
            const matchesSearch = !searchTerm || 
                title.includes(searchTerm.toLowerCase()) ||
                description.includes(searchTerm.toLowerCase()) ||
                technologies.some(tech => tech.includes(searchTerm.toLowerCase()));

            if (matchesFilter && matchesSearch) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.add('animate');
                }, 50);
            } else {
                card.classList.remove('animate');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
}

// Enhanced Scroll Animations with Intersection Observer
class ScrollAnimation {
    constructor() {
        this.animatedElements = document.querySelectorAll('.scroll-animate');
        this.init();
    }

    init() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.animatedElements.forEach(element => observer.observe(element));
    }
}

// Enhanced Project Modal with Image Gallery
class ProjectModal {
    constructor() {
        this.modal = document.getElementById('project-modal');
        this.modalContent = this.modal.querySelector('.modal-content');
        this.currentImageIndex = 0;
        this.touchStartX = 0;
        this.isZoomed = false;
        this.currentProjectId = null;
        this.init();
    }

    init() {
        // Add click event listeners to project cards
        document.querySelectorAll('[data-action="view-project"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = button.getAttribute('data-project');
                this.showProjectDetails(projectId);
            });
        });

        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });

        // Prevent body scroll when modal is open
        this.modal.addEventListener('wheel', (e) => {
            if (this.modal.classList.contains('active')) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    showProjectDetails(projectId) {
        this.currentProjectId = projectId;
        const project = projectData[projectId];
        if (!project) return;

        this.currentImageIndex = 0;
        this.isZoomed = false;
        this.createModalContent(project);
        this.showModal();
        this.preventBodyScroll();
        this.initializeImageLoading();
    }

    createModalContent(project) {
        this.modalContent.innerHTML = `
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <div class="project-header">
                <h2>${project.title}</h2>
                <div class="project-meta">
                    <span class="project-date">
                        <i class="far fa-calendar-alt"></i>
                        ${new Date().toLocaleDateString()}
                    </span>
                    <span class="project-category">
                        <i class="fas fa-code"></i>
                        ${project.technologies[0]}
                    </span>
                </div>
            </div>
            <div class="project-gallery">
                <div class="gallery-container">
                    <div class="loading-state">
                        <div class="spinner"></div>
                    </div>
                    <img src="${project.images[0]}" alt="${project.title}" class="main-image">
                    <div class="gallery-thumbnails">
                        ${project.images.map((img, index) => `
                            <img src="${img}" alt="${project.title} - Image ${index + 1}" 
                                class="thumbnail ${index === 0 ? 'active' : ''}"
                                data-index="${index}">
                        `).join('')}
                    </div>
                </div>
                <div class="gallery-controls">
                    <button class="gallery-prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
                    <button class="gallery-next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <div class="project-details">
                <div class="project-description">
                    <p>${project.description}</p>
                </div>
                <div class="project-technologies">
                    <h3><i class="fas fa-tools"></i> Technologies Used</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span>
                                <i class="fas fa-check"></i>
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="project-features">
                    <h3><i class="fas fa-star"></i> Key Features</h3>
                    <ul>
                        ${project.features.map(feature => `
                            <li>
                                <i class="fas fa-check-circle"></i>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="btn primary" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                    ` : ''}
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="btn secondary" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;

        this.setupGalleryControls(project);
        this.setupCloseButton();
        this.setupTouchControls();
        this.setupImageZoom();
    }

    initializeImageLoading() {
        const mainImage = this.modalContent.querySelector('.main-image');
        const loadingState = this.modalContent.querySelector('.loading-state');

        mainImage.onload = () => {
            loadingState.style.opacity = '0';
            setTimeout(() => {
                loadingState.style.display = 'none';
            }, 300);
        };
    }

    setupImageZoom() {
        const mainImage = this.modalContent.querySelector('.main-image');
        
        mainImage.addEventListener('click', () => {
            this.isZoomed = !this.isZoomed;
            mainImage.classList.toggle('zoom', this.isZoomed);
        });

        mainImage.addEventListener('mousemove', (e) => {
            if (this.isZoomed) {
                const rect = mainImage.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width * 100;
                const y = (e.clientY - rect.top) / rect.height * 100;
                mainImage.style.transformOrigin = `${x}% ${y}%`;
            }
        });
    }

    setupGalleryControls(project) {
        const prevBtn = this.modalContent.querySelector('.gallery-prev');
        const nextBtn = this.modalContent.querySelector('.gallery-next');
        const thumbnails = this.modalContent.querySelectorAll('.thumbnail');
        const mainImage = this.modalContent.querySelector('.main-image');

        prevBtn.addEventListener('click', () => this.changeImage(project, -1));
        nextBtn.addEventListener('click', () => this.changeImage(project, 1));

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const index = parseInt(thumb.dataset.index);
                this.currentImageIndex = index;
                this.updateGallery(project);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.modal.classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    this.changeImage(project, -1);
                } else if (e.key === 'ArrowRight') {
                    this.changeImage(project, 1);
                }
            }
        });
    }

    setupTouchControls() {
        const galleryContainer = this.modalContent.querySelector('.gallery-container');
        
        galleryContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
        });

        galleryContainer.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = this.touchStartX - touchEndX;

            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    this.changeImage(projectData[this.currentProjectId], 1);
                } else {
                    this.changeImage(projectData[this.currentProjectId], -1);
                }
            }
        });
    }

    changeImage(project, direction) {
        this.currentImageIndex = (this.currentImageIndex + direction + project.images.length) % project.images.length;
        this.updateGallery(project);
    }

    updateGallery(project) {
        const mainImage = this.modalContent.querySelector('.main-image');
        const thumbnails = this.modalContent.querySelectorAll('.thumbnail');
        const loadingState = this.modalContent.querySelector('.loading-state');

        // Show loading state
        loadingState.style.display = 'flex';
        loadingState.style.opacity = '1';

        // Reset zoom
        this.isZoomed = false;
        mainImage.classList.remove('zoom');

        // Add fade transition
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = project.images[this.currentImageIndex];
            mainImage.style.opacity = '1';
        }, 300);

        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentImageIndex);
        });
    }

    setupCloseButton() {
        const closeBtn = this.modalContent.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            this.closeModal();
        });
    }

    showModal() {
        this.modal.style.display = 'block';
        setTimeout(() => {
            this.modal.classList.add('active');
        }, 50);
    }

    closeModal() {
        this.modal.classList.remove('active');
        setTimeout(() => {
            this.modal.style.display = 'none';
            this.restoreBodyScroll();
        }, 300);
    }

    preventBodyScroll() {
        document.body.style.overflow = 'hidden';
    }

    restoreBodyScroll() {
        document.body.style.overflow = '';
    }
}

// Loading Animation with Progress
class LoadingAnimation {
    constructor() {
        this.loading = document.querySelector('.loading');
        this.spinner = this.loading.querySelector('.spinner');
        this.progress = 0;
        this.init();
    }

    init() {
        // Simulate loading progress
        const interval = setInterval(() => {
            this.progress += Math.random() * 30;
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(interval);
                this.hideLoading();
            }
            this.updateProgress();
        }, 500);

        // Hide loading when page is fully loaded
        window.addEventListener('load', () => {
            this.progress = 100;
            this.updateProgress();
            this.hideLoading();
        });
    }

    updateProgress() {
        this.spinner.style.transform = `rotate(${this.progress * 3.6}deg)`;
    }

    hideLoading() {
        this.loading.style.opacity = '0';
        setTimeout(() => {
            this.loading.style.display = 'none';
        }, 500);
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize project filtering with search
    new ProjectFilter();

    // Initialize scroll animations
    new ScrollAnimation();

    // Initialize project modal with gallery
    new ProjectModal();

    // Initialize loading animation with progress
    new LoadingAnimation();
}); 