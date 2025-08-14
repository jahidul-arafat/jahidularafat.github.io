/**
 * Generate architecture grid HTML
 */
function generateArchitectureGrid(architecturesData) {
    const architectureContainer = document.getElementById('architectureGrid');
    if (!architectureContainer) return;

    let architectureHTML = '';

    Object.entries(architecturesData).forEach(([title, description], index) => {
        const staggerClass = `stagger-${(index % 6) + 1}`;
        architectureHTML += `
            <div class="architecture-card scroll-animate ${staggerClass}">
                <h3 class="architecture-title">${title}</h3>
                <p class="architecture-description">${description}</p>
            </div>
        `;
    });

    architectureContainer.innerHTML = architectureHTML;
}

/**
 * Generate bug discoveries timeline
 */
function generateBugDiscoveries(bugData) {
    const bugContainer = document.getElementById('bugDiscoveries');
    if (!bugContainer) return;

    let bugHTML = '';

    bugData.forEach((bug, index) => {
        const staggerClass = `stagger-${(index % 4) + 1}`;
        bugHTML += `
            <div class="bug-discovery-item scroll-animate ${staggerClass}">
                <div class="bug-date">${bug.date}</div>
                <div class="bug-content">
                    <h3 class="bug-title">${bug.title}</h3>
                    <div class="bug-organization">${bug.organization} - ${bug.role}</div>
                    <p class="bug-description">${bug.description}</p>
                    <div class="bug-impact">
                        <strong>Impact:</strong> ${bug.impact}
                    </div>
                </div>
            </div>
        `;
    });

    bugContainer.innerHTML = bugHTML;
}

/**
 * Generate current research grid
 */
function generateCurrentResearchGrid(researchData) {
    const researchContainer = document.getElementById('currentResearchGrid');
    if (!researchContainer) return;

    let researchHTML = '';

    researchData.forEach((research, index) => {
        const staggerClass = `stagger-${(index % 6) + 1}`;
        const achievementsHTML = research.achievements.map(achievement =>
            `<li>${achievement}</li>`
        ).join('');

        researchHTML += `
            <div class="research-card scroll-animate ${staggerClass}">
                <div class="research-header">
                    <h3 class="research-title">${research.title}</h3>
                    <div class="research-meta">
                        ${research.funding ? `<span class="research-funding">${research.funding}</span>` : ''}
                        ${research.category ? `<span class="research-category">${research.category}</span>` : ''}
                    </div>
                    <div class="research-institution">${research.institution} - ${research.role}</div>
                </div>
                <div class="research-achievements">
                    <ul>${achievementsHTML}</ul>
                </div>
            </div>
        `;
    });

    researchContainer.innerHTML = researchHTML;
}

/**
 * Generate publications list
 */
function generatePublicationsList(publicationsData) {
    const publicationsContainer = document.getElementById('publicationsList');
    if (!publicationsContainer) return;

    // Group publications by year (descending)
    const groupedPublications = publicationsData.reduce((acc, pub) => {
        if (!acc[pub.year]) acc[pub.year] = [];
        acc[pub.year].push(pub);
        return acc;
    }, {});

    let publicationsHTML = '';

    Object.keys(groupedPublications)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .forEach(year => {
            publicationsHTML += `<div class="publications-year-group">`;
            publicationsHTML += `<h3 class="publications-year">${year}</h3>`;

            groupedPublications[year].forEach(pub => {
                const statusBadge = pub.status ? `<span class="publication-status status-${pub.status.replace(/\s+/g, '-').toLowerCase()}">${pub.status}</span>` : '';
                const typeBadge = `<span class="publication-type type-${pub.type}">${pub.type}</span>`;

                publicationsHTML += `
                    <div class="publication-item">
                        <div class="publication-header">
                            <h4 class="publication-title">${pub.title}</h4>
                            <div class="publication-badges">
                                ${statusBadge}
                                ${typeBadge}
                            </div>
                        </div>
                        <div class="publication-authors">${pub.authors}</div>
                        <div class="publication-journal">${pub.journal}</div>
                    </div>
                `;
            });

            publicationsHTML += `</div>`;
        });

    publicationsContainer.innerHTML = publicationsHTML;
}

/**
 * Generate repositories grid
 */
function generateRepositoriesGrid(repositoriesData) {
    const repoContainer = document.getElementById('repositoriesGrid');
    if (!repoContainer) return;

    // Group repositories by category
    const groupedRepos = repositoriesData.reduce((acc, repo) => {
        if (!acc[repo.category]) acc[repo.category] = [];
        acc[repo.category].push(repo);
        return acc;
    }, {});

    let repoHTML = '';

    Object.entries(groupedRepos).forEach(([category, repos]) => {
        repoHTML += `
            <div class="repo-category-section">
                <h3 class="repo-category-title">${category}</h3>
                <div class="repo-category-grid">
        `;

        repos.forEach((repo, index) => {
            const staggerClass = `stagger-${(index % 4) + 1}`;
            const linksHTML = repo.links.map(link =>
                `<a href="${link.url}" class="repo-link" target="_blank" rel="noopener noreferrer">
                    ${getIconForLinkType(getLinkType(link.url))} ${link.label}
                </a>`
            ).join('');

            repoHTML += `
                <div class="repo-card scroll-animate ${staggerClass}">
                    <h4 class="repo-title">${repo.title}</h4>
                    ${repo.description ? `<p class="repo-description">${repo.description}</p>` : ''}
                    <div class="repo-links">
                        ${linksHTML}
                    </div>
                </div>
            `;
        });

        repoHTML += `
                </div>
            </div>
        `;
    });

    repoContainer.innerHTML = repoHTML;
}

/**
 * Helper function to determine link type from URL
 */
function getLinkType(url) {
    if (url.includes('github.com')) return 'github';
    if (url.includes('gitlab.com')) return 'gitlab';
    if (url.includes('pypi.org') || url.includes('test.pypi.org')) return 'package';
    if (url.includes('jahidularafat.github.io')) return 'demo';
    return 'external';
}

/**
 * Generate complete experience timeline with all details
 */
function generateCompleteExperienceTimeline(experienceData) {
    const timelineContainer = document.querySelector('.timeline');
    if (!timelineContainer) return;

    let timelineHTML = '';

    experienceData.forEach((job, index) => {
        const staggerClass = `stagger-${(index % 4) + 1}`;
        const highlightsHTML = job.highlights.map(highlight =>
            `<li>${highlight}</li>`
        ).join('');

        timelineHTML += `
            <div class="timeline-item scroll-animate ${staggerClass}">
                <div class="job-header">
                    <div class="job-title">${job.title}</div>
                    <div class="company">${job.company}</div>
                    <div class="job-meta">
                        <span class="duration">${job.duration}</span>
                        ${job.location ? `<span class="location">${job.location}</span>` : ''}
                        ${job.type ? `<span class="job-type">${job.type}</span>` : ''}
                    </div>
                </div>
                <ul class="job-highlights">
                    ${highlightsHTML}
                </ul>
            </div>
        `;
    });

    timelineContainer.innerHTML = timelineHTML;
}

/**
 * Generate complete education list
 */
function generateCompleteEducationList(educationData) {
    const educationContainer = document.querySelector('.education-list');
    if (!educationContainer) return;

    let educationHTML = '';

    educationData.forEach((edu, index) => {
        const staggerClass = `stagger-${(index % 4) + 1}`;

        educationHTML += `
            <div class="education-item scroll-animate ${staggerClass}">
                <div class="education-degree">${edu.degree}</div>
                <div class="education-school">${edu.institution}${edu.location ? `, ${edu.location}` : ''}</div>
                <div class="education-details">
                    <span class="education-duration">${edu.duration}</span>
                    ${edu.gpa ? `<span class="education-gpa">${edu.gpa}</span>` : ''}
                </div>
                ${edu.specialization ? `<div class="education-specialization">${edu.specialization}</div>` : ''}
            </div>
        `;
    });

    educationContainer.innerHTML = educationHTML;
}

/**
 * Generate enhanced professional summary
 */
function generateEnhancedSummary(summaryText) {
    const summaryContainer = document.querySelector('.summary-text');
    if (!summaryContainer) return;

    // Split the long summary into paragraphs for better readability
    const paragraphs = summaryText.split('. ').reduce((acc, sentence, index, array) => {
        const paragraphIndex = Math.floor(index / 3); // 3 sentences per paragraph
        if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
        acc[paragraphIndex].push(sentence + (index < array.length - 1 ? '.' : ''));
        return acc;
    }, []);

    const summaryHTML = paragraphs.map(paragraph =>
        `<p>${paragraph.join(' ')}</p>`
    ).join('');

    summaryContainer.innerHTML = summaryHTML;
}

/**
 * Generate achievements and awards section
 */
function generateAchievements() {
    const achievements = [
        {
            icon: "🏆",
            title: "World's 2nd Highest AWS Solutions Architect Score",
            description: "97% - Global Recognition"
        },
        {
            icon: "🎓",
            title: "NSF Presidential Graduate Research Fellow",
            description: "Top Distinction Fellowship"
        },
        {
            icon: "⭐",
            title: "500+ GitHub Stars",
            description: "Across 20+ Open Source Repositories"
        },
        {
            icon: "🔒",
            title: "Top 4% Global Cybersecurity Ranking",
            description: "TryHackMe Platform"
        },
        {
            icon: "🏛️",
            title: "Program Committee Member",
            description: "EASE 2025 International Conference"
        },
        {
            icon: "🔍",
            title: "Critical Bug Discoveries",
            description: "Oracle Cloud Console & MySQL PaaS"
        }
    ];

    return generateAchievementBadges(achievements);
}

/**
 * Generate statistics dashboard
 */
function generateStatsDashboard() {
    const stats = [
        { number: "10+", label: "Years Experience", icon: "fas fa-calendar" },
        { number: "35+", label: "Certifications", icon: "fas fa-certificate" },
        { number: "100+", label: "Technical Workshops", icon: "fas fa-chalkboard-teacher" },
        { number: "15+", label: "Publications", icon: "fas fa-file-alt" },
        { number: "10M+", label: "Users Served", icon: "fas fa-users" },
        { number: "600K/min", label: "Transaction Capacity", icon: "fas fa-tachometer-alt" }
    ];

    return `
        <div class="stats-dashboard">
            ${stats.map(stat => `
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="${stat.icon}"></i>
                    </div>
                    <div class="stat-content">
                        <div class="stat-number" data-count="${stat.number.replace(/[^0-9]/g, '')}">${stat.number}</div>
                        <div class="stat-label">${stat.label}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * Initialize all components
 */
function initializeAllComponents() {
    if (typeof portfolioData === 'undefined') {
        console.error('Portfolio data not loaded');
        return;
    }

    try {
        // Generate all sections
        if (portfolioData.skills) generateSkillsGrid(portfolioData.skills);
        if (portfolioData.keyArchitectures) generateArchitectureGrid(portfolioData.keyArchitectures);
        if (portfolioData.bugDiscoveries) generateBugDiscoveries(portfolioData.bugDiscoveries);
        if (portfolioData.currentResearch) generateCurrentResearchGrid(portfolioData.currentResearch);
        if (portfolioData.publications) generatePublicationsList(portfolioData.publications);
        if (portfolioData.topRepositories) generateRepositoriesGrid(portfolioData.topRepositories);
        if (portfolioData.certifications) generateCertificationsGrid(portfolioData.certifications);
        if (portfolioData.experience) generateCompleteExperienceTimeline(portfolioData.experience);
        if (portfolioData.education) generateCompleteEducationList(portfolioData.education);
        if (portfolioData.professionalSummary) generateEnhancedSummary(portfolioData.professionalSummary);

        // Add stats dashboard to header
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            const statsHTML = generateStatsDashboard();
            const statsContainer = document.createElement('div');
            statsContainer.innerHTML = statsHTML;
            statsContainer.className = 'stats-container';
            headerContent.appendChild(statsContainer);
        }

        // Add achievements section
        const achievementsHTML = generateAchievements();
        const achievementsContainer = document.createElement('div');
        achievementsContainer.innerHTML = `
            <div class="achievements-section">
                <h3>Key Achievements</h3>
                ${achievementsHTML}
            </div>
        `;
        achievementsContainer.className = 'achievements-container';

        const summarySection = document.getElementById('summary');
        if (summarySection) {
            summarySection.appendChild(achievementsContainer);
        }

        console.log('All components initialized successfully');
    } catch (error) {
        console.error('Error initializing components:', error);
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for all scripts to load
    setTimeout(initializeAllComponents, 100);
});// ==========================================================================
// Component Generation Functions
// ==========================================================================

/**
 * Generate skills grid HTML
 */
function generateSkillsGrid(skillsData) {
    const skillsContainer = document.getElementById('skillsGrid');
    if (!skillsContainer) return;

    let skillsHTML = '';

    Object.entries(skillsData).forEach(([category, skills], index) => {
        const staggerClass = `stagger-${(index % 6) + 1}`;
        skillsHTML += `
            <div class="skill-category scroll-animate ${staggerClass}">
                <h3>${category}</h3>
                <div class="skill-tags">
                    ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;
    });

    skillsContainer.innerHTML = skillsHTML;
}

/**
 * Generate projects grid HTML
 */
function generateProjectsGrid(projectsData) {
    const projectsContainer = document.getElementById('projectsGrid');
    if (!projectsContainer) return;

    // Separate featured and regular projects
    const featuredProjects = projectsData.filter(project => project.featured);
    const regularProjects = projectsData.filter(project => !project.featured);

    // Display featured projects first, then regular ones
    const sortedProjects = [...featuredProjects, ...regularProjects];

    let projectsHTML = '';

    sortedProjects.forEach((project, index) => {
        const staggerClass = `stagger-${(index % 8) + 1}`;
        const featuredBadge = project.featured ? '<span class="featured-badge">⭐ Featured</span>' : '';

        const linksHTML = project.links.map(link => {
            const icon = getIconForLinkType(link.type);
            return `<a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer">
                        ${icon} ${link.label}
                    </a>`;
        }).join('');

        const thumbnailContent = generateProjectThumbnail(project);

        projectsHTML += `
            <div class="project-card scroll-animate ${staggerClass} ${project.featured ? 'featured-project' : ''}">
                ${project.featured ? featuredBadge : ''}
                ${thumbnailContent}
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="project-tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${linksHTML}
                </div>
            </div>
        `;
    });

    projectsContainer.innerHTML = projectsHTML;
}

/**
 * Generate project thumbnail based on category
 */
function generateProjectThumbnail(project) {
    const categoryIcons = {
        'Security Research': '🔒',
        'AI/ML': '🤖',
        'Cloud Architecture': '☁️',
        'Industry Collaboration': '🤝',
        'Research Tools': '🔬',
        'Educational Tools': '📚',
        'Database Tools': '🗄️',
        'Security Tools': '🛡️',
        'Security Education': '🎓',
        'Streaming Infrastructure': '📡'
    };

    const icon = categoryIcons[project.category] || '💻';

    return `
        <div class="project-thumbnail">
            <span class="project-icon">${icon}</span>
            <span class="project-category">${project.category}</span>
        </div>
    `;
}

/**
 * Get icon for different link types
 */
function getIconForLinkType(type) {
    const icons = {
        'github': '<i class="fab fa-github"></i>',
        'gitlab': '<i class="fab fa-gitlab"></i>',
        'demo': '<i class="fas fa-external-link-alt"></i>',
        'package': '<i class="fas fa-box"></i>',
        'docs': '<i class="fas fa-book"></i>',
        'paper': '<i class="fas fa-file-pdf"></i>'
    };
    return icons[type] || '<i class="fas fa-link"></i>';
}

/**
 * Generate certifications grid HTML
 */
function generateCertificationsGrid(certsData) {
    const certsContainer = document.getElementById('certificationsGrid');
    if (!certsContainer) return;

    let certsHTML = '';

    Object.entries(certsData).forEach(([category, certifications], index) => {
        const staggerClass = `stagger-${(index % 6) + 1}`;
        certsHTML += `
            <div class="cert-category scroll-animate ${staggerClass}">
                <h3>${category}</h3>
                <ul class="cert-list">
                    ${certifications.map(cert => `<li>${cert}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    certsContainer.innerHTML = certsHTML;
}

/**
 * Generate company showcase for FAANG-style display
 */
function generateCompanyShowcase(companiesData) {
    // This can be used to create a separate companies section if needed
    const currentCompany = companiesData.current;
    const previousCompanies = companiesData.previous;

    return `
        <div class="companies-showcase">
            <div class="current-company">
                <span class="company-logo">${currentCompany.logo}</span>
                <div class="company-info">
                    <div class="company-name">${currentCompany.name}</div>
                    <div class="company-role">${currentCompany.role}</div>
                    <div class="company-period">${currentCompany.period}</div>
                </div>
            </div>
            <div class="previous-companies">
                ${previousCompanies.map(company => `
                    <div class="company-item">
                        <span class="company-logo">${company.logo}</span>
                        <div class="company-info">
                            <div class="company-name">${company.name}</div>
                            <div class="company-role">${company.role}</div>
                            <div class="company-period">${company.period}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/**
 * Generate GitHub stats display
 */
function generateGitHubStats(githubData) {
    return `
        <div class="github-stats">
            <div class="stat-item">
                <div class="stat-number">${githubData.totalStars}</div>
                <div class="stat-label">GitHub Stars</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${githubData.totalRepos}</div>
                <div class="stat-label">Repositories</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${githubData.contributions}</div>
                <div class="stat-label">Contributions</div>
            </div>
        </div>
    `;
}

/**
 * Generate research section content
 */
function generateResearchContent(researchData) {
    const publicationsHTML = researchData.publications.map(pub => `
        <div class="publication-item">
            <strong>${pub.year}:</strong> "${pub.title}" 
            <em>${pub.journal}</em>
            ${pub.status ? `<span class="publication-status">(${pub.status})</span>` : ''}
        </div>
    `).join('');

    const committeesHTML = researchData.committees.map(committee => `
        <div class="committee-item">
            <i class="fas fa-users"></i> ${committee}
        </div>
    `).join('');

    return `
        <div class="research-highlight">
            <h3>Current Research Focus (2024-Present)</h3>
            <ul>
                ${researchData.currentFocus.map(focus => `<li><strong>${focus}</strong></li>`).join('')}
            </ul>
        </div>
        
        <div class="publications-list">
            <h3>Selected Publications</h3>
            ${publicationsHTML}
        </div>
        
        <div class="committees-list">
            <h3>Academic Service</h3>
            ${committeesHTML}
        </div>
    `;
}

/**
 * Create a loading spinner component
 */
function createLoadingSpinner() {
    return `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>Loading content...</p>
        </div>
    `;
}

/**
 * Create error message component
 */
function createErrorMessage(message) {
    return `
        <div class="error-container">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error: ${message}</p>
        </div>
    `;
}

/**
 * Create success message component
 */
function createSuccessMessage(message) {
    return `
        <div class="success-container">
            <i class="fas fa-check-circle"></i>
            <p>${message}</p>
        </div>
    `;
}

/**
 * Generate contact information section
 */
function generateContactInfo(contactData) {
    return `
        <div class="contact-section">
            <div class="contact-methods">
                <div class="contact-method">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:${contactData.email}">${contactData.email}</a>
                </div>
                <div class="contact-method">
                    <i class="fas fa-phone"></i>
                    <a href="tel:${contactData.phone}">${contactData.phone}</a>
                </div>
                <div class="contact-method">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${contactData.location}</span>
                </div>
            </div>
            <div class="social-methods">
                <a href="${contactData.linkedin}" target="_blank" class="social-method">
                    <i class="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <a href="${contactData.github}" target="_blank" class="social-method">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                </a>
                <a href="${contactData.gitlab}" target="_blank" class="social-method">
                    <i class="fab fa-gitlab"></i>
                    <span>GitLab</span>
                </a>
                <a href="${contactData.research}" target="_blank" class="social-method">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Research</span>
                </a>
            </div>
        </div>
    `;
}

/**
 * Generate navigation menu
 */
function generateNavigation() {
    const navItems = [
        { href: '#summary', label: 'Summary', icon: 'fas fa-user-tie' },
        { href: '#experience', label: 'Experience', icon: 'fas fa-briefcase' },
        { href: '#skills', label: 'Skills', icon: 'fas fa-code' },
        { href: '#projects', label: 'Projects', icon: 'fas fa-project-diagram' },
        { href: '#research', label: 'Research', icon: 'fas fa-microscope' },
        { href: '#education', label: 'Education', icon: 'fas fa-graduation-cap' },
        { href: '#certifications', label: 'Certifications', icon: 'fas fa-certificate' }
    ];

    return navItems.map(item => `
        <li>
            <a href="${item.href}" class="nav-link">
                <i class="${item.icon}"></i>
                <span>${item.label}</span>
            </a>
        </li>
    `).join('');
}

/**
 * Generate breadcrumb navigation
 */
function generateBreadcrumb(currentSection) {
    return `
        <nav class="breadcrumb">
            <a href="#header">Home</a>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current">${currentSection}</span>
        </nav>
    `;
}

/**
 * Generate skill progress bars (alternative visualization)
 */
function generateSkillBars(skillsData) {
    const skillLevels = {
        'Expert': 95,
        'Advanced': 85,
        'Intermediate': 70,
        'Proficient': 60
    };

    let skillBarsHTML = '';

    Object.entries(skillsData).forEach(([category, skills]) => {
        skillBarsHTML += `
            <div class="skill-category-bars">
                <h3>${category}</h3>
                <div class="skill-bars">
                    ${skills.slice(0, 5).map(skill => {
            const level = Math.floor(Math.random() * 30) + 70; // Random level between 70-100
            return `
                            <div class="skill-bar">
                                <div class="skill-name">${skill}</div>
                                <div class="skill-progress">
                                    <div class="skill-progress-fill" style="width: ${level}%"></div>
                                </div>
                                <div class="skill-percentage">${level}%</div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    });

    return skillBarsHTML;
}

/**
 * Generate project filters
 */
function generateProjectFilters(projectsData) {
    const categories = [...new Set(projectsData.map(project => project.category))];

    const filtersHTML = categories.map(category => `
        <button class="filter-btn" data-filter="${category.toLowerCase().replace(/\s+/g, '-')}">
            ${category}
        </button>
    `).join('');

    return `
        <div class="project-filters">
            <button class="filter-btn active" data-filter="all">All Projects</button>
            ${filtersHTML}
        </div>
    `;
}

/**
 * Generate timeline for experience section
 */
function generateExperienceTimeline(experienceData) {
    return experienceData.map((job, index) => `
        <div class="timeline-item scroll-animate stagger-${(index % 4) + 1}">
            <div class="job-title">${job.title}</div>
            <div class="company">${job.company}</div>
            <div class="duration">${job.duration}</div>
            <ul class="job-highlights">
                ${job.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

/**
 * Generate testimonials section (for future use)
 */
function generateTestimonials(testimonialsData) {
    return testimonialsData.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <p>"${testimonial.content}"</p>
            </div>
            <div class="testimonial-author">
                <div class="author-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <div class="author-info">
                    <div class="author-name">${testimonial.name}</div>
                    <div class="author-title">${testimonial.title}</div>
                    <div class="author-company">${testimonial.company}</div>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Generate achievement badges
 */
function generateAchievementBadges(achievements) {
    return achievements.map(achievement => `
        <div class="achievement-badge">
            <div class="badge-icon">${achievement.icon}</div>
            <div class="badge-content">
                <div class="badge-title">${achievement.title}</div>
                <div class="badge-description">${achievement.description}</div>
            </div>
        </div>
    `).join('');
}

/**
 * Generate back to top button
 */
function generateBackToTop() {
    return `
        <button id="backToTop" class="back-to-top" aria-label="Back to top">
            <i class="fas fa-chevron-up"></i>
        </button>
    `;
}

/**
 * Generate search functionality
 */
function generateSearchBox() {
    return `
        <div class="search-container">
            <input type="text" id="portfolioSearch" class="search-input" placeholder="Search projects, skills, or experience...">
            <button class="search-btn" aria-label="Search">
                <i class="fas fa-search"></i>
            </button>
        </div>
    `;
}