// ===========================
// Dynamic Year in Footer
// ===========================

function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===========================
// Calculate Years of Experience
// ===========================

function calculateYearsOfExperience() {
    const startDate = new Date('2021-02-23');
    const today = new Date();
    
    let years = today.getFullYear() - startDate.getFullYear();
    const monthDifference = today.getMonth() - startDate.getMonth();
    
    // If birthday hasn't occurred this year yet, subtract 1
    if (monthDifference < 0) {
        years--;
    }
    
    return years;
}

function updateYearsOfExperience() {
    const yearsElement = document.getElementById('yearsOfExperience');
    if (yearsElement) {
        const years = calculateYearsOfExperience();
        yearsElement.textContent = years + '+';
    }
}

// ===========================
// Theme Toggle Functionality
// ===========================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const THEME_STORAGE_KEY = 'theme-preference';

// Initialize theme from localStorage or system preference
function initializeTheme() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme) {
        htmlElement.setAttribute('data-theme', storedTheme);
    } else {
        const theme = prefersDark ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', theme);
    }
    
    updateThemeIcon();
}

// Update theme icon based on current theme
function updateThemeIcon() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const icon = themeToggle.querySelector('i');
    
    if (currentTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    updateThemeIcon();
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        const newTheme = e.matches ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        updateThemeIcon();
    }
});

// ===========================
// Navigation Active Link
// ===========================

const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Update active link on click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ===========================
// Smooth Scroll for Navigation Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-category, .project-card, .experience-item, .education-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Highlight Current Section
// ===========================

function setInitialActiveLink() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === hash) {
                link.classList.add('active');
            }
        });
    } else {
        navLinks[0].classList.add('active');
    }
}

// ===========================
// Performance: Debounce Scroll Events
// ===========================

let scrollTimeout;

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        updateActiveLink();
    });
}, { passive: true });

// ===========================
// Initialize
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setInitialActiveLink();
    updateActiveLink();
    updateYearsOfExperience();
    updateCurrentYear();
});

// ===========================
// Mobile Menu Support (if added in future)
// ===========================

// Add event listener to close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Mobile menu close logic here if needed
    });
});

// ===========================
// Mobile Touch Optimization
// ===========================

// Prevent double tap zoom on buttons and links
document.addEventListener('touchend', function(e) {
    // This can help with mobile responsiveness
}, false);

// Detect if device is mobile/tablet
function isMobileOrTablet() {
    const userAgent = window.navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

// Optimize for touch devices
if (isMobileOrTablet()) {
    document.documentElement.classList.add('touch-device');
}

// Handle viewport orientation changes
window.addEventListener('orientationchange', () => {
    // Adjust layout on orientation change if needed
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Improve scroll performance on mobile
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveLink();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ===========================
// Print Styles Support
// ===========================

window.addEventListener('beforeprint', () => {
    htmlElement.setAttribute('data-theme', 'light');
});

window.addEventListener('afterprint', () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme) {
        htmlElement.setAttribute('data-theme', storedTheme);
    }
});

// ===========================
// Keyboard Navigation Enhancement
// ===========================

document.addEventListener('keydown', (e) => {
    // Provide keyboard navigation for theme toggle
    if (e.key === 'Escape') {
        // Can add more keyboard shortcuts here
    }
});

// ===========================
// Analytics Helper (Optional - can be extended)
// ===========================

function trackNavigation(sectionName) {
    // Placeholder for analytics tracking
    console.log(`Navigated to: ${sectionName}`);
}

// ===========================
// Utility Functions
// ===========================

// Get current theme
function getCurrentTheme() {
    return htmlElement.getAttribute('data-theme');
}

// Set theme programmatically
function setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        updateThemeIcon();
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Export functions if needed
window.portfolio = {
    getCurrentTheme,
    setTheme,
    toggleTheme
};
