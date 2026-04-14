// ===========================
// Blog Posts Data
// ===========================

const blogPosts = [
    {
        id: 'building-scalable-systems',
        title: 'Building Scalable Systems: Architecture & Performance',
        author: 'Shikhar Gupta',
        date: 'April 10, 2026',
        readTime: '6 min read',
        excerpt: 'Building production-grade systems has taught me invaluable lessons about scalability, performance, and user experience at enterprise scale.',
        category: 'Architecture',
        image: '📈',
        content: `# Building Scalable Systems: Architecture & Performance

Building production-grade systems has taught me invaluable lessons about scalability, performance, and user experience. In this post, I'll share key insights from developing features that handle analysis of massive codebases and process billions of data points.

## The Challenge

When you're working with enterprise-scale codebases containing millions of lines of code, performance isn't optional—it's critical. Traditional approaches that work for small projects completely break down at scale.

## Key Principles

### 1. **Modular Architecture**
The power of modularity cannot be overstated. By breaking down complex operations into smaller, manageable components, we achieved a 90% reduction in migration effort and improved maintainability across the board.

### 2. **Zero-Downtime Operations**
One of the proudest achievements in any production system is building backup and restore features that allow seamless updates without disrupting users. This requires rethinking how we approach data consistency and synchronization.

### 3. **Smart Caching Strategies**
For systems processing billions of tokens and data points, caching is everything. We implemented multi-level caching strategies:
- In-memory caches for frequently accessed data
- Database-level caching for intermediate results
- Distributed caching for multi-node deployments

## Technical Takeaways

- Always design for parallelization from day one
- Invest in monitoring and observability early
- Make performance a feature, not an afterthought
- Document your assumptions about scale
- Measure everything - you can't optimize what you don't measure

## Looking Forward

The future of large-scale systems lies in AI-powered insights. We're exploring machine learning models that can learn from historical patterns to provide smarter, faster recommendations and predictions.

---`
    },
    {
        id: 'modern-authentication',
        title: 'Modern Authentication in Enterprise Software: OAuth2 Deep Dive',
        author: 'Shikhar Gupta',
        date: 'April 5, 2026',
        readTime: '8 min read',
        excerpt: 'Authentication might seem straightforward, but implementing modern, secure, and user-friendly authentication at enterprise scale is more nuanced than it appears.',
        category: 'Security',
        image: '🔐',
        content: `# Modern Authentication in Enterprise Software: OAuth2 Deep Dive

Authentication might seem straightforward, but implementing modern, secure, and user-friendly authentication at enterprise scale is more nuanced than it appears. Here's what I learned implementing OAuth2-based Single Sign-On (SSO) for enterprise clients.

## Why OAuth2?

OAuth2 has become the industry standard for good reason:
- **Security**: No passwords stored in your system
- **Flexibility**: Works with multiple identity providers
- **User Experience**: Seamless single sign-on across applications
- **Compliance**: Aligns with modern security standards like SOC 2

## Implementation Challenges

### Challenge 1: Token Management
Managing token lifecycle (generation, validation, refresh, revocation) requires careful consideration.

### Challenge 2: Multi-Provider Support
Different organizations use different identity providers (Okta, Azure AD, Google, etc.). Building abstraction layers to support multiple providers was essential.

### Challenge 3: Backward Compatibility
You can't simply remove legacy authentication overnight. We implemented OAuth2 alongside existing systems, allowing gradual migration.

## Best Practices

1. **Always use HTTPS** - Non-negotiable for authentication
2. **Implement token rotation** - Minimize blast radius of compromised tokens
3. **Use secure storage** - Never store tokens in localStorage
4. **Monitor for anomalies** - Implement anomaly detection
5. **Document thoroughly** - Good docs reduce security mistakes

## Real-World Impact

Implementing OAuth2 in enterprise environments resulted in:
- 60% reduction in support tickets related to authentication
- Faster onboarding for new clients
- Better compliance with industry security standards
- Improved user experience with seamless SSO

## The Human Side

The most overlooked aspect of authentication? User communication. Clear documentation about what data you're accessing and why builds trust with your users.`
    },
    {
        id: 'security-analysis',
        title: 'Security Best Practices: Identifying & Preventing Vulnerabilities',
        author: 'Shikhar Gupta',
        date: 'March 28, 2026',
        readTime: '7 min read',
        excerpt: 'Code analysis is a critical defense against security vulnerabilities. Learn how to effectively detect and prevent common vulnerability patterns in your applications.',
        category: 'Security',
        image: '🛡️',
        content: `# Security Best Practices: Identifying & Preventing Vulnerabilities

Security is a critical concern in modern software development. Whether working with code analysis tools or building secure applications, understanding vulnerability patterns is essential. Here are insights on how to effectively detect and prevent security issues.

## Understanding the Threat Landscape

The OWASP Top 10 represents the most critical security risks in web applications:
1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Authentication Failures
8. Data Integrity Failures
9. Logging and Monitoring Failures
10. SSRF (Server-Side Request Forgery)

## Understanding Vulnerabilities

Building security into your codebase requires understanding both the vulnerability type and common coding patterns that lead to it.

### Example: SQL Injection Prevention

\`\`\`java
// VULNERABLE: String concatenation
String query = "SELECT * FROM users WHERE id = " + userId;

// SECURE: Parameterized queries
String query = "SELECT * FROM users WHERE id = ?";
PreparedStatement stmt = connection.prepareStatement(query);
stmt.setInt(1, userId);
\`\`\`

## The Data Flow Problem

One of the hardest parts of vulnerability detection is tracing data flow through your application. A user input might be:
1. Read from a network request
2. Processed by middleware
3. Validated by a custom function
4. Passed to a database query

Missing any step in this chain introduces risk.

## Future Approaches

Advanced approaches include:
- Machine learning models to reduce false positives
- Learning from historical patterns
- Predicting vulnerability hotspots
- Automated remediation suggestions

## Practical Recommendations

For development teams:
1. **Integrate security testing early** - Don't wait until the end
2. **Use baseline scans** - Establish what secure code looks like
3. **Automate remediation** - Many issues have automated fixes
4. **Keep dependencies updated** - New vulnerabilities emerge constantly
5. **Combine multiple approaches** - Use both static and dynamic analysis
6. **Security training** - Developers are your first line of defense

## The Future of Security

The future isn't just about finding vulnerabilities—it's about:
- Preventing them in the design phase
- Making security frictionless for developers
- Automating remediation
- Shifting left (testing earlier in the process)

---`
    }
];

// ===========================
// Blog Loading Functions
// ===========================

function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-grid');
    if (!blogContainer) return;

    blogContainer.innerHTML = blogPosts.map(post => `
        <article class="blog-card">
            <div class="blog-image">${post.image}</div>
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span class="blog-date">${post.date}</span>
                    <span class="blog-read-time">${post.readTime}</span>
                </div>
                <a href="#" class="blog-read-more" data-blog-id="${post.id}">Read More →</a>
            </div>
        </article>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.blog-read-more').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = e.target.dataset.blogId;
            openBlogModal(postId);
        });
    });
}

function openBlogModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="blog-modal-content">
            <button class="modal-close">&times;</button>
            <article class="blog-full-content">
                <div class="blog-full-header">
                    <span class="blog-category">${post.category}</span>
                    <h1>${post.title}</h1>
                    <div class="blog-meta">
                        <span class="blog-author">By ${post.author}</span>
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-read-time">${post.readTime}</span>
                    </div>
                </div>
                <div class="blog-body">
                    ${post.content}
                </div>
            </article>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close button handler
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    });

    // Escape key to close
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// ===========================
// Initialize Blog on Page Load
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
});
