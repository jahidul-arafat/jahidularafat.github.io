// ==========================================================================
// Animation Controller and Interactive Effects
// ==========================================================================

class AnimationController {
    constructor() {
        this.scrollAnimationElements = [];
        this.isScrolling = false;
        this.scrollTimeout = null;
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupScrollProgress();
        this.setupParallaxEffects();
        this.setupHoverEffects();
        this.setupNavigationAnimations();
        this.setupTypewriterEffect();
        this.setupBackToTop();
        this.setupPageTransitions();
    }

    /**
     * Setup scroll-triggered animations using Intersection Observer
     */
    setupScrollAnimations() {
        // Create intersection observer
        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Unobserve after animation to improve performance
                    this.scrollObserver.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all scroll animation elements
        this.observeScrollElements();
    }

    /**
     * Observe elements for scroll animations
     */
    observeScrollElements() {
        const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
        scrollElements.forEach(element => {
            this.scrollObserver.observe(element);
        });
    }

    /**
     * Setup scroll progress indicator
     */
    setupScrollProgress() {
        // Create progress bar element
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        // Update progress on scroll
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
        }, { passive: true });
    }

    /**
     * Setup parallax effects for header
     */
    setupParallaxEffects() {
        const header = document.querySelector('.header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            if (!this.isScrolling) {
                requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -0.5;

                    header.style.transform = `translateY(${rate}px)`;
                    this.isScrolling = false;
                });
                this.isScrolling = true;
            }
        }, { passive: true });
    }

    /**
     * Setup hover effects for interactive elements
     */
    setupHoverEffects() {
        // Enhanced hover effects for cards
        const cards = document.querySelectorAll('.section, .project-card, .skill-category, .timeline-item');

        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.addHoverEffect(e.target);
            });

            card.addEventListener('mouseleave', (e) => {
                this.removeHoverEffect(e.target);
            });
        });

        // Social links animation
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.1)';
            });

            link.addEventListener('mouseleave', (e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    /**
     * Add hover effect to element
     */
    addHoverEffect(element) {
        element.style.transform = 'translateY(-5px)';
        element.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
        element.style.transition = 'all 0.3s ease';
    }

    /**
     * Remove hover effect from element
     */
    removeHoverEffect(element) {
        element.style.transform = 'translateY(0)';
        element.style.boxShadow = '';
    }

    /**
     * Setup navigation animations and smooth scrolling
     */
    setupNavigationAnimations() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');

                // Smooth scroll to target
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    this.smoothScrollTo(targetElement);
                }
            });
        });

        // Update active navigation on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveNavigation();
        }, { passive: true });
    }

    /**
     * Smooth scroll to target element
     */
    smoothScrollTo(target) {
        const targetPosition = target.offsetTop - 80; // Account for fixed nav
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }

    /**
     * Easing function for smooth scrolling
     */
    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    /**
     * Update active navigation based on scroll position
     */
    updateActiveNavigation() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Setup typewriter effect for header
     */
    setupTypewriterEffect() {
        const typewriterElements = document.querySelectorAll('.text-typewriter');

        typewriterElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid var(--primary-color)';

            let i = 0;
            const typeTimer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeTimer);
                    // Blinking cursor effect
                    setInterval(() => {
                        element.style.borderRight = element.style.borderRight === 'none'
                            ? '2px solid var(--primary-color)'
                            : 'none';
                    }, 500);
                }
            }, 100);
        });
    }

    /**
     * Setup back to top button
     */
    setupBackToTop() {
        // Create back to top button
        const backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTop';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTopBtn);

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        }, { passive: true });

        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            this.smoothScrollTo(document.body);
        });
    }

    /**
     * Setup page transition effects
     */
    setupPageTransitions() {
        // Add loaded class to body after page load
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');

            // Trigger entrance animations
            this.triggerEntranceAnimations();
        });
    }

    /**
     * Trigger entrance animations for hero section
     */
    triggerEntranceAnimations() {
        const heroElements = document.querySelectorAll('.header-content > *');

        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    /**
     * Animate skill bars when they come into view
     */
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress-fill');

        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';

            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-out';
                bar.style.width = width;
            }, 300);
        });
    }

    /**
     * Animate numbers counting up
     */
    animateNumbers() {
        const numberElements = document.querySelectorAll('[data-count]');

        numberElements.forEach(element => {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current);
            }, 16);
        });
    }

    /**
     * Setup loading animations
     */
    setupLoadingAnimations() {
        const loadingElements = document.querySelectorAll('.loading-animation');

        loadingElements.forEach(element => {
            element.classList.add('animate-pulse');
        });
    }

    /**
     * Setup particle effects (for enhanced visual appeal)
     */
    setupParticleEffects() {
        const header = document.querySelector('.header');
        if (!header) return;

        // Create particle container
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        header.appendChild(particleContainer);

        // Generate particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 20) + 's';
            particleContainer.appendChild(particle);
        }
    }

    /**
     * Cleanup animations on page unload
     */
    cleanup() {
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
        }

        // Remove event listeners
        window.removeEventListener('scroll', this.updateActiveNavigation);
        window.removeEventListener('scroll', this.setupScrollProgress);
    }
}

// Initialize animation controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.animationController = new AnimationController();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.animationController) {
        window.animationController.cleanup();
    }
});

// ==========================================================================
// Utility Animation Functions
// ==========================================================================

/**
 * Fade in element
 */
function fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.display = 'block';

    let opacity = 0;
    const timer = setInterval(() => {
        opacity += 50 / duration;
        if (opacity >= 1) {
            clearInterval(timer);
            opacity = 1;
        }
        element.style.opacity = opacity;
    }, 50);
}

/**
 * Fade out element
 */
function fadeOut(element, duration = 300) {
    let opacity = 1;
    const timer = setInterval(() => {
        opacity -= 50 / duration;
        if (opacity <= 0) {
            clearInterval(timer);
            opacity = 0;
            element.style.display = 'none';
        }
        element.style.opacity = opacity;
    }, 50);
}

/**
 * Slide in element from direction
 */
function slideIn(element, direction = 'up', duration = 500) {
    const directions = {
        up: 'translateY(100%)',
        down: 'translateY(-100%)',
        left: 'translateX(100%)',
        right: 'translateX(-100%)'
    };

    element.style.transform = directions[direction];
    element.style.transition = `transform ${duration}ms ease-out`;

    setTimeout(() => {
        element.style.transform = 'translate(0, 0)';
    }, 10);
}

/**
 * Add ripple effect to buttons
 */
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        this.appendChild(ripple);

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}