// Fun Facts Data Structure
const funFacts = [
    {
        id: 'ai-training-scale',
        title: '🚀 AI Training at Scale: The Data Explosion',
        summary: 'The largest AI models require petabytes of data and millions of dollars to train',
        excerpt: 'The largest AI models today are trained on billions of parameters using petabytes of data. GPT-style models require computational resources that cost millions of dollars to train, demanding specialized hardware farms with thousands of GPUs working in parallel.',
        category: 'Computing',
        emoji: '🚀',
        content: `# AI Training at Scale: The Data Explosion

The largest AI models today are trained on billions of parameters using petabytes of data. GPT-style models require computational resources that cost millions of dollars to train, demanding specialized hardware farms with thousands of GPUs working in parallel. A single training run can consume as much electricity as a small town uses in a year!`
    },
    {
        id: 'ai-emergence',
        title: '✨ The Emergence Phenomenon: Unexpected Intelligence',
        summary: 'AI models develop unexpected capabilities that weren\'t explicitly trained for',
        excerpt: 'AI models sometimes develop unexpected capabilities that weren\'t explicitly trained for, called "emergent behaviors." A language model trained only to predict the next word suddenly becomes capable of solving math problems...',
        category: 'Intelligence',
        emoji: '✨',
        content: `# The Emergence Phenomenon: Unexpected Intelligence

AI models sometimes develop unexpected capabilities that weren't explicitly trained for, called "emergent behaviors." A language model trained only to predict the next word suddenly becomes capable of solving math problems, writing code, and explaining complex concepts. Scientists are still puzzled about why these abilities emerge unexpectedly during scaling!`
    },
    {
        id: 'ai-hallucination',
        title: '🤥 The Hallucination Problem: AI Confidence Gone Wrong',
        summary: 'Modern AI confidently generates completely false information with absolute certainty',
        excerpt: 'Modern AI systems can confidently generate completely false information, a phenomenon called "hallucination." A language model might cite fake research papers or invent historical events...',
        category: 'Challenges',
        emoji: '🤥',
        content: `# The Hallucination Problem: AI Confidence Gone Wrong

Modern AI systems can confidently generate completely false information, a phenomenon called "hallucination." A language model might cite fake research papers, invent historical events, or describe non-existent technologies with absolute certainty. The more confident the AI sounds, the more convincing the lie becomes—making hallucinations a serious challenge in real-world deployments.`
    },
    {
        id: 'ai-turing-test',
        title: '🧠 The Turing Test is Already Broken',
        summary: 'Modern chatbots regularly fool humans, but passing the test is no longer the goal',
        excerpt: 'Alan Turing proposed his famous test in 1950, and modern chatbots regularly fool humans. Yet, many AI researchers argue that passing the Turing test is no longer meaningful...',
        category: 'History',
        emoji: '🧠',
        content: `# The Turing Test is Already Broken

Alan Turing proposed his famous test in 1950 to determine if a machine could exhibit intelligent behavior. Modern chatbots regularly fool humans into believing they're talking to another person. Yet, many AI researchers argue that passing the Turing test is no longer meaningful—the real challenge is creating AI that's trustworthy, interpretable, and aligned with human values.`
    },
    {
        id: 'ai-attention',
        title: '🎯 The Attention Mechanism: How AI Actually "Thinks"',
        summary: 'The breakthrough behind modern AI that lets models focus on relevant information',
        excerpt: 'The breakthrough behind modern AI (Transformers) is a mechanism called "attention" that lets AI focus on relevant parts of input. It\'s surprisingly simple yet profoundly effective...',
        category: 'Technology',
        emoji: '🎯',
        content: `# The Attention Mechanism: How AI Actually "Thinks"

The breakthrough behind modern AI (Transformers) is a mechanism called "attention" that lets AI focus on relevant parts of input. It's surprisingly simple yet profoundly effective—similar to how humans focus on important details. Each token in text can attend to every other token, creating billions of relationships that somehow encode language understanding. We still don't fully understand why it works so well!`
    }
];

// Carousel State
let currentFactIndex = 0;
let autoRotateInterval = null;

// Initialize Fun Facts Carousel
function initializeFunFacts() {
    const carouselContainer = document.getElementById('fun-facts-carousel');
    if (!carouselContainer) return;

    renderFunFactCards();
    createIndicators();
    startAutoRotate();

    // Navigation buttons
    const prevBtn = document.getElementById('prevFactBtn');
    const nextBtn = document.getElementById('nextFactBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopAutoRotate();
        previousFact();
        if (autoRotateCheckbox && autoRotateCheckbox.checked) {
            startAutoRotate();
        }
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopAutoRotate();
        nextFact();
        if (autoRotateCheckbox && autoRotateCheckbox.checked) {
            startAutoRotate();
        }
    });

    // Auto-rotate toggle
    const autoRotateCheckbox = document.getElementById('autoRotateCheckbox');
    if (autoRotateCheckbox) {
        autoRotateCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                startAutoRotate();
            } else {
                stopAutoRotate();
            }
        });
    }
}

// Render Fun Fact Cards
function renderFunFactCards() {
    const carouselContainer = document.getElementById('fun-facts-carousel');
    if (!carouselContainer) return;

    carouselContainer.innerHTML = '';

    funFacts.forEach((fact, index) => {
        const card = document.createElement('div');
        card.className = `fun-fact-card ${index === currentFactIndex ? 'active' : ''}`;
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="fun-fact-emoji">${fact.emoji}</div>
            <h3 class="fun-fact-title">${fact.title}</h3>
            <p class="fun-fact-excerpt">${fact.excerpt}</p>
            <span class="fun-fact-category">${fact.category}</span>
            <button class="btn-read-more" onclick="expandFunFact(${index})">
                Read More <i class="fas fa-arrow-right"></i>
            </button>
        `;

        carouselContainer.appendChild(card);
    });

    updateCarouselPosition();
}

// Create Indicators
function createIndicators() {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!indicatorsContainer) return;

    indicatorsContainer.innerHTML = '';
    funFacts.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `fact-indicator ${index === currentFactIndex ? 'active' : ''}`;
        indicator.setAttribute('aria-label', `Go to fact ${index + 1}`);
        indicator.addEventListener('click', () => {
            stopAutoRotate();
            jumpToFact(index);
            if (document.getElementById('autoRotateCheckbox')?.checked) {
                startAutoRotate();
            }
        });
        indicatorsContainer.appendChild(indicator);
    });
}

// Update Carousel Position
function updateCarouselPosition() {
    const carousel = document.getElementById('fun-facts-carousel');
    if (!carousel) return;

    const offset = currentFactIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;

    // Update indicator
    const indicators = document.querySelectorAll('.fact-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentFactIndex);
    });
}

// Navigate to Next Fact
function nextFact() {
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    renderFunFactCards();
    createIndicators();
}

// Navigate to Previous Fact
function previousFact() {
    currentFactIndex = (currentFactIndex - 1 + funFacts.length) % funFacts.length;
    renderFunFactCards();
    createIndicators();
}

// Jump to Specific Fact
function jumpToFact(index) {
    currentFactIndex = index;
    renderFunFactCards();
    createIndicators();
}

// Auto-rotate Carousel
function startAutoRotate() {
    if (autoRotateInterval) return;

    autoRotateInterval = setInterval(() => {
        nextFact();
    }, 5000); // Rotate every 5 seconds
}

// Stop Auto-rotation
function stopAutoRotate() {
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
    }
}

// Expand Fun Fact in Modal
function expandFunFact(index) {
    const fact = funFacts[index];
    const modal = document.getElementById('funFactModal');
    
    if (!modal) return;

    document.getElementById('factModalTitle').textContent = fact.title;
    document.getElementById('factModalContent').innerHTML = `
        <div class="fun-fact-modal-body" style="padding: 2rem;">
            <div style="text-align: center; font-size: 3rem; margin-bottom: 1rem;">${fact.emoji}</div>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">${fact.category}</p>
            ${convertMarkdownToHtml(fact.content)}
        </div>
    `;

    modal.style.display = 'flex';

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

// Simple Markdown to HTML Converter
function convertMarkdownToHtml(markdown) {
    let html = markdown
        // Headers
        .replace(/^### (.*?)$/gm, '<h3 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--primary-color);">$1</h3>')
        .replace(/^## (.*?)$/gm, '<h2 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--primary-color);">$1</h2>')
        .replace(/^# (.*?)$/gm, '<h1 style="margin-bottom: 1.5rem; color: var(--primary-color);">$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--accent-color);">$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Code
        .replace(/`(.*?)`/g, '<code style="background-color: var(--surface-color); padding: 0.2rem 0.5rem; border-radius: 0.25rem; font-family: monospace;">$1</code>')
        // Line breaks
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');

    return `<p>${html}</p>`;
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initializeFunFacts();
});
