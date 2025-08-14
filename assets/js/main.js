// ==========================================================================
// Main Portfolio Application
// ==========================================================================

class PortfolioApp {
    constructor() {
        this.isLoading = false;
        this.currentTheme = 'light';
        this.resumeURL = '#'; // This will be set when PDF is provided

        this.init();
    }

    /**
     * Initialize the portfolio application
     */
    init() {
        this.setupEventListeners();
        this.populateContent();
        this.setupSearch();
        this.setupFilters();
        this.setupThemeToggle();
        this.setupDownloadResume();
        this.updateLastModified();
        this.setupContactForm();
        this.setupAnalytics();
    }

    /**
     * Setup global event listeners
     */
    setupEventListeners() {
        // Page load events
        window.addEventListener('load', () => {
            this.onPageLoad();
        });

        // Resize events
        window.addEventListener('resize', this.debounce(() => {
            this.onWindowResize();
        }, 250));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });

        // Error handling
        window.addEventListener('error', (e) => {
            this.handleError(e);
        });
    }

    /**
     * Populate all content sections
     */
    populateContent() {
        try {
            // Generate skills grid
            if (portfolioData.skills) {
                generateSkillsGrid(portfolioData.skills);
            }

            // Generate projects grid
            if (portfolioData.projects) {
                generateProjectsGrid(portfolioData.projects);
            }

            // Generate certifications grid
            if (portfolioData.certifications) {
                generateCertificationsGrid(portfolioData.certifications);
            }

            // Add GitHub stats if available
            this.loadGitHubStats();

            // Add dynamic content
            this.addDynamicContent();

        } catch (error) {
            console.error('Error populating content:', error);
            this.showErrorMessage('Failed to load portfolio content');
        }
    }

    /**
     * Load GitHub statistics dynamically
     */
    async loadGitHubStats() {
        try {
            // This would typically fetch from GitHub API
            // For now, we'll use static data from portfolioData
            const githubStats = portfolioData.github;

            if (githubStats) {
                const statsHTML = generateGitHubStats(githubStats);
                const statsContainer = document.createElement('div');
                statsContainer.innerHTML = statsHTML;
                statsContainer.className = 'github-stats-container';

                // Add to skills section
                const skillsSection = document.getElementById('skills');
                if (skillsSection) {
                    skillsSection.appendChild(statsContainer);
                }
            }
        } catch (error) {
            console.warn('Could not load GitHub stats:', error);
        }
    }

    /**
     * Setup search functionality
     */
    setupSearch() {
        const searchInput = document.getElementById('portfolioSearch');
        if (!searchInput) return;

        searchInput.addEventListener('input', this.debounce((e) => {
            this.performSearch(e.target.value);
        }, 300));
    }

    /**
     * Perform search across portfolio content
     */
    performSearch(query) {
        if (!query.trim()) {
            this.clearSearchResults();
            return;
        }

        const searchResults = this.searchContent(query.toLowerCase());
        this.displaySearchResults(searchResults);
    }

    /**
     * Search through portfolio content
     */
    searchContent(query) {
        const results = [];

        // Search projects
        portfolioData.projects.forEach(project => {
            if (project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.technologies.some(tech => tech.toLowerCase().includes(query))) {
                results.push({
                    type: 'project',
                    title: project.title,
                    description: project.description,
                    section: 'projects'
                });
            }
        });

        // Search skills
        Object.entries(portfolioData.skills).forEach(([category, skills]) => {
            skills.forEach(skill => {
                if (skill.toLowerCase().includes(query)) {
                    results.push({
                        type: 'skill',
                        title: skill,
                        description: `Skill in ${category}`,
                        section: 'skills'
                    });
                }
            });
        });

        // Search certifications
        Object.entries(portfolioData.certifications).forEach(([category, certs]) => {
            certs.forEach(cert => {
                if (cert.toLowerCase().includes(query)) {
                    results.push({
                        type: 'certification',
                        title: cert,
                        description: `Certification in ${category}`,
                        section: 'certifications'
                    });
                }
            });
        });

        return results;
    }

    /**
     * Display search results
     */
    displaySearchResults(results) {
        // Implementation for search results display
        console.log('Search results:', results);
    }

    /**
     * Clear search results
     */
    clearSearchResults() {
        // Implementation for clearing search results
        console.log('Clearing search results');
    }

    /**
     * Setup project filters
     */
    setupFilters() {
        const projectsSection = document.getElementById('projects');
        if (!projectsSection || !portfolioData.projects) return;

        // Add filter buttons
        const filtersHTML = generateProjectFilters(portfolioData.projects);
        const filtersContainer = document.createElement('div');
        filtersContainer.innerHTML = filtersHTML;
        filtersContainer.className = 'filters-container';

        projectsSection.insertBefore(filtersContainer, projectsSection.firstChild.nextSibling);

        // Setup filter event listeners
        const filterButtons = filtersContainer.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterProjects(e.target.dataset.filter);

                // Update active filter button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    /**
     * Filter projects by category
     */
    filterProjects(filter) {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                card.classList.add('animate-fade-in');
            } else {
                const projectData = portfolioData.projects.find(p =>
                    p.title === card.querySelector('.project-title').textContent
                );

                if (projectData && projectData.category.toLowerCase().replace(/\s+/g, '-') === filter) {
                    card.style.display = 'block';
                    card.classList.add('animate-fade-in');
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    /**
     * Setup theme toggle functionality
     */
    setupThemeToggle() {
        // Create theme toggle button
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('aria-label', 'Toggle theme');
        document.body.appendChild(themeToggle);

        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            this.applyTheme(savedTheme);
        }
    }

    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.currentTheme = newTheme;
        this.applyTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    }

    /**
     * Apply theme to the page
     */
    applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);

        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    /**
     * Setup download resume functionality
     */
    setupDownloadResume() {
        const downloadButtons = document.querySelectorAll('#downloadResume, #footerDownload');

        downloadButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadResume();
            });
        });
    }

    /**
     * Handle resume download
     */
    downloadResume() {
        if (this.resumeURL && this.resumeURL !== '#') {
            // Create a temporary link and trigger download
            const link = document.createElement('a');
            link.href = this.resumeURL;
            link.download = 'Jahidul_Arafat_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Track download
            this.trackEvent('resume_download', 'engagement', 'PDF Download');
        } else {
            // Show message that resume will be available soon
            this.showMessage('Resume PDF will be available soon!', 'info');
        }
    }

    /**
     * Set resume URL (to be called when PDF is provided)
     */
    setResumeURL(url) {
        this.resumeURL = url;

        // Update button text/state
        const downloadButtons = document.querySelectorAll('#downloadResume, #footerDownload');
        downloadButtons.forEach(btn => {
            btn.classList.remove('disabled');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-download';
            }
        });
    }

    /**
     * Update last modified date
     */
    updateLastModified() {
        const lastUpdatedElement = document.getElementById('lastUpdated');
        if (lastUpdatedElement) {
            const now = new Date();
            lastUpdatedElement.textContent = now.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }

    /**
     * Setup contact form (if needed)
     */
    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactSubmit(new FormData(contactForm));
        });
    }

    /**
     * Handle contact form submission
     */
    async handleContactSubmit(formData) {
        try {
            this.showMessage('Sending message...', 'info');

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            this.showMessage('Message sent successfully!', 'success');
        } catch (error) {
            this.showMessage('Failed to send message. Please try again.', 'error');
        }
    }

    /**
     * Setup analytics tracking
     */
    setupAnalytics() {
        // Track page views
        this.trackEvent('page_view', 'engagement', 'Portfolio View');

        // Track section views
        const sections = document.querySelectorAll('.section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionName = entry.target.id;
                    this.trackEvent('section_view', 'engagement', sectionName);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // Track external link clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[target="_blank"], a[href^="http"]')) {
                this.trackEvent('external_link_click', 'engagement', e.target.href);
            }
        });
    }

    /**
     * Track events (placeholder for analytics)
     */
    trackEvent(action, category, label) {
        // This would typically send to Google Analytics, Mixpanel, etc.
        console.log('Track event:', { action, category, label });

        // Example: gtag('event', action, { event_category: category, event_label: label });
    }

    /**
     * Add dynamic content
     */
    addDynamicContent() {
        // Add current date to footer
        const currentYear = new Date().getFullYear();
        const footerText = document.querySelector('.footer-text p');
        if (footerText) {
            footerText.textContent = `© ${currentYear} Jahidul Arafat. All rights reserved.`;
        }

        // Add reading time estimation
        this.addReadingTime();

        // Add scroll percentage indicator
        this.addScrollIndicator();
    }

    /**
     * Add reading time estimation
     */
    addReadingTime() {
        const content = document.querySelector('.main');
        if (!content) return;

        const wordCount = content.textContent.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed

        const readingTimeElement = document.createElement('div');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.innerHTML = `<i class="fas fa-clock"></i> ${readingTime} min read`;

        const header = document.querySelector('.header-content');
        if (header) {
            header.appendChild(readingTimeElement);
        }
    }

    /**
     * Add scroll percentage indicator
     */
    addScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.textContent = '0%';
        document.body.appendChild(indicator);

        window.addEventListener('scroll', () => {
            const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            indicator.textContent = `${Math.round(scrolled)}%`;
        }, { passive: true });
    }

    /**
     * Handle page load
     */
    onPageLoad() {
        // Remove loading states
        document.body.classList.add('loaded');

        // Initialize tooltips
        this.initializeTooltips();

        // Setup lazy loading for images
        this.setupLazyLoading();

        // Performance tracking
        this.trackPerformance();
    }

    /**
     * Handle window resize
     */
    onWindowResize() {
        // Update layouts that depend on window size
        this.updateResponsiveElements();
    }

    /**
     * Handle keyboard navigation
     */
    handleKeyboardNavigation(e) {
        // Implement keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'k':
                    e.preventDefault();
                    const searchInput = document.getElementById('portfolioSearch');
                    if (searchInput) searchInput.focus();
                    break;
                case '/':
                    e.preventDefault();
                    this.showHelpModal();
                    break;
            }
        }

        // ESC key handling
        if (e.key === 'Escape') {
            this.closeModals();
        }
    }

    /**
     * Handle errors gracefully
     */
    handleError(error) {
        console.error('Portfolio error:', error);
        this.showErrorMessage('An error occurred. Please refresh the page.');
    }

    /**
     * Show messages to user
     */
    showMessage(message, type = 'info') {
        const messageElement = document.createElement('div');
        messageElement.className = `message message-${type}`;
        messageElement.textContent = message;

        document.body.appendChild(messageElement);

        // Animate in
        setTimeout(() => messageElement.classList.add('show'), 10);

        // Remove after delay
        setTimeout(() => {
            messageElement.classList.remove('show');
            setTimeout(() => messageElement.remove(), 300);
        }, 3000);
    }

    /**
     * Show error message
     */
    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }

    /**
     * Initialize tooltips
     */
    initializeTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');

        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target, e.target.dataset.tooltip);
            });

            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    /**
     * Show tooltip
     */
    showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';

        setTimeout(() => tooltip.classList.add('show'), 10);
    }

    /**
     * Hide tooltip
     */
    hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }

    /**
     * Setup lazy loading for images
     */
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    /**
     * Track performance metrics
     */
    trackPerformance() {
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            this.trackEvent('page_load_time', 'performance', loadTime);
        }
    }

    /**
     * Update responsive elements
     */
    updateResponsiveElements() {
        // Update any elements that need resize handling
        const grids = document.querySelectorAll('.skills-grid, .projects-grid, .certifications-grid');
        grids.forEach(grid => {
            // Force reflow for grid layouts
            grid.style.display = 'none';
            grid.offsetHeight; // Trigger reflow
            grid.style.display = '';
        });
    }

    /**
     * Show help modal
     */
    showHelpModal() {
        // Implementation for help modal
        console.log('Show help modal');
    }

    /**
     * Close all modals
     */
    closeModals() {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => modal.classList.remove('show'));
    }

    /**
     * Debounce utility function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the portfolio application
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Export for global access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}