// Tools Page Specific JavaScript
class ToolsManager {
    constructor() {
        // Tool data
        this.tools = {
            vscode: {
                name: "Visual Studio Code",
                version: "1.85.1",
                category: "editor",
                icon: "vscode.png",
                description: "A lightweight but powerful source code editor with support for multiple programming languages.",
                features: [
                    "IntelliSense code completion",
                    "Built-in Git commands",
                    "Extensive extension marketplace",
                    "Integrated terminal"
                ],
                requirements: [
                    "1.6 GHz processor",
                    "1 GB RAM",
                    "Windows 7 or later",
                    "200 MB storage"
                ],
                downloadUrl: "https://code.visualstudio.com/download",
                docs: "https://code.visualstudio.com/docs"
            },
            sublime: {
                name: "Sublime Text",
                version: "4.0",
                category: "editor",
                icon: "sublime.png",
                description: "A sophisticated text editor for code, markup and prose with outstanding performance.",
                features: [
                    "Multiple selections",
                    "Split editing",
                    "Instant project switch",
                    "Custom snippets"
                ],
                requirements: [
                    "Modern processor",
                    "512 MB RAM",
                    "Cross-platform",
                    "100 MB storage"
                ],
                downloadUrl: "https://www.sublimetext.com/download",
                docs: "https://www.sublimetext.com/docs/"
            },
            git: {
                name: "Git",
                version: "2.43.0",
                category: "version-control",
                icon: "git.png",
                description: "Distributed version control system for tracking changes in source code during development.",
                features: [
                    "Distributed development",
                    "Strong support for non-linear development",
                    "Efficient handling of large projects",
                    "Cryptographic authentication"
                ],
                requirements: [
                    "Any processor",
                    "256 MB RAM",
                    "Cross-platform",
                    "50 MB storage"
                ],
                downloadUrl: "https://git-scm.com/downloads",
                docs: "https://git-scm.com/doc"
            },
            mongodb_compass: {
                name: "MongoDB Compass",
                version: "1.40",
                category: "database",
                icon: "mongodb.png",
                description: "The GUI for MongoDB. Visualize, explore, and manipulate your data.",
                features: [
                    "Visual query builder",
                    "Real-time data insights",
                    "Performance optimization",
                    "Schema visualization"
                ],
                requirements: [
                    "Intel processor",
                    "2 GB RAM",
                    "Cross-platform",
                    "150 MB storage"
                ],
                downloadUrl: "https://www.mongodb.com/try/download/compass",
                docs: "https://docs.mongodb.com/compass/"
            },
            docker: {
                name: "Docker Desktop",
                version: "4.25",
                category: "container",
                icon: "docker.png",
                description: "Platform for developing, shipping, and running applications in containers.",
                features: [
                    "Container management",
                    "Kubernetes integration",
                    "Volume management",
                    "Network configuration"
                ],
                requirements: [
                    "64-bit processor",
                    "4 GB RAM",
                    "Windows/Mac",
                    "500 MB storage"
                ],
                downloadUrl: "https://www.docker.com/products/docker-desktop/",
                docs: "https://docs.docker.com/"
            },
            postman: {
                name: "Postman",
                version: "10.21",
                category: "api",
                icon: "postman.png",
                description: "Complete API development environment for testing and documenting APIs.",
                features: [
                    "API request builder",
                    "Automated testing",
                    "API documentation",
                    "Team collaboration"
                ],
                requirements: [
                    "Modern processor",
                    "4 GB RAM",
                    "Cross-platform",
                    "250 MB storage"
                ],
                downloadUrl: "https://www.postman.com/downloads/",
                docs: "https://learning.postman.com/"
            }
        };

        this.initializeElements();
        this.setupEventListeners();
        this.loadTools();
    }

    initializeElements() {
        // Get DOM elements
        this.toolsGrid = document.querySelector('.tools-grid');
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.searchInput = document.querySelector('.tools-search input');
        this.modal = document.getElementById('toolModal');
        this.modalClose = this.modal?.querySelector('.modal-close');
    }

    setupEventListeners() {
        // Category filtering
        this.categoryButtons?.forEach(btn => {
            btn.addEventListener('click', () => this.filterByCategory(btn.dataset.category));
        });

        // Search functionality
        this.searchInput?.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Modal handling
        this.modalClose?.addEventListener('click', () => this.closeModal());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        // Scroll handling
        window.addEventListener('scroll', () => this.handleScroll());
    }

    loadTools() {
        if (!this.toolsGrid) return;
        
        // Clear existing tools
        this.toolsGrid.innerHTML = '';

        // Create and append tool cards
        Object.entries(this.tools).forEach(([id, tool]) => {
            const card = this.createToolCard(id, tool);
            this.toolsGrid.appendChild(card);
        });
    }

    createToolCard(id, tool) {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.dataset.category = tool.category;
        card.dataset.toolId = id;

        card.innerHTML = `
            <div class="tool-favorite">
                <i class="far fa-heart"></i>
            </div>
            <div class="tool-icon">
                <img src="../../images/tools/${tool.icon}" alt="${tool.name}" 
                     onerror="this.src='../../images/tools/default-tool.png'">
            </div>
            <div class="tool-info">
                <h3>${tool.name}</h3>
                <div class="tool-meta">
                    <span class="tool-version">v${tool.version}</span>
                    <span class="tool-rating">
                        ${this.generateRatingStars()}
                    </span>
                </div>
                <p>${tool.description}</p>
            </div>
            <div class="tool-actions">
                <a href="${tool.downloadUrl}" class="btn-download" target="_blank">
                    <i class="fas fa-download"></i>
                    <span>Download</span>
                </a>
                <button class="btn-info" data-tool="${id}">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
        `;

        // Add event listeners
        card.querySelector('.tool-favorite').addEventListener('click', (e) => this.toggleFavorite(e));
        card.querySelector('.btn-info').addEventListener('click', () => this.showToolDetails(id));

        return card;
    }

    generateRatingStars() {
        return `
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        `;
    }

    filterByCategory(category) {
        if (!this.toolsGrid) return;

        // Update active button
        this.categoryButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });

        // Filter tools
        const tools = this.toolsGrid.querySelectorAll('.tool-card');
        tools.forEach(tool => {
            const shouldShow = category === 'all' || tool.dataset.category === category;
            tool.style.display = shouldShow ? 'flex' : 'none';
            tool.style.opacity = shouldShow ? '1' : '0';
            tool.style.transform = shouldShow ? 'translateY(0)' : 'translateY(20px)';
        });
    }

    handleSearch(searchTerm) {
        if (!this.toolsGrid) return;

        searchTerm = searchTerm.toLowerCase();
        const tools = this.toolsGrid.querySelectorAll('.tool-card');

        tools.forEach(tool => {
            const toolName = tool.querySelector('h3').textContent.toLowerCase();
            const toolDesc = tool.querySelector('p').textContent.toLowerCase();
            const isMatch = toolName.includes(searchTerm) || toolDesc.includes(searchTerm);

            tool.style.display = isMatch ? 'flex' : 'none';
            tool.style.opacity = isMatch ? '1' : '0';
            tool.style.transform = isMatch ? 'translateY(0)' : 'translateY(20px)';
        });
    }

    showToolDetails(toolId) {
        const tool = this.tools[toolId];
        if (!tool || !this.modal) return;

        // Update modal content
        const modalContent = this.modal.querySelector('.modal-content');
        modalContent.innerHTML = `
            <div class="modal-header">
                <h3>${tool.name} <span class="tool-version">v${tool.version}</span></h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="tool-details">
                    <div class="detail-section">
                        <h4><i class="fas fa-star"></i> Features</h4>
                        <ul class="feature-list">
                            ${tool.features.map(feature => `
                                <li><i class="fas fa-check"></i>${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4><i class="fas fa-microchip"></i> System Requirements</h4>
                        <ul class="requirements-list">
                            ${tool.requirements.map(req => `
                                <li><i class="fas fa-check-circle"></i>${req}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="detail-section">
                        <h4><i class="fas fa-external-link-alt"></i> Resources</h4>
                        <div class="resource-links">
                            <a href="${tool.downloadUrl}" class="resource-link" target="_blank">
                                <i class="fas fa-download"></i> Download Page
                            </a>
                            <a href="${tool.docs}" class="resource-link" target="_blank">
                                <i class="fas fa-book"></i> Documentation
                            </a>
                    </div>
                    </div>
                </div>
            </div>
        `;

        // Show modal
        this.modal.style.display = 'block';
        
        // Add close button event listener
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.closeModal());
    }

    closeModal() {
        if (this.modal) {
            this.modal.style.display = 'none';
        }
    }

    toggleFavorite(event) {
        const favoriteBtn = event.currentTarget;
        const icon = favoriteBtn.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        favoriteBtn.classList.toggle('active');
    }

    handleScroll() {
        // Update scroll progress
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = `${scrolled}%`;
        }

        // Toggle scroll-to-top button
        const scrollTopBtn = document.querySelector('.scroll-top-btn');
        if (scrollTopBtn) {
            scrollTopBtn.classList.toggle('show', window.scrollY > 300);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const toolsManager = new ToolsManager();
}); 