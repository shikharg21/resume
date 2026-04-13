# Portfolio Website - Features & Customization Reference

## 🎨 Theme System

### How It Works
```javascript
// Automatic theme detection:
// 1. Checks localStorage for saved preference
// 2. Falls back to system preference (light/dark)
// 3. Persists user selection

// Access theme functions:
portfolio.getCurrentTheme()      // Returns 'light' or 'dark'
portfolio.setTheme('dark')       // Set to dark theme
portfolio.setTheme('light')      // Set to light theme
portfolio.toggleTheme()          // Toggle between themes
```

### Theme Colors

**Light Theme (Default)**
```css
--background-color: #ffffff;     /* Page background */
--surface-color: #f5f5f5;        /* Card/section background */
--text-color: #1a1a1a;          /* Main text */
--text-secondary: #666666;      /* Secondary text */
--primary-color: #0066cc;       /* Links & accents */
--accent-color: #0080ff;        /* Hover & gradients */
--secondary-color: #ff6b6b;     /* Highlights */
--border-color: #e0e0e0;        /* Borders */
```

**Dark Theme**
```css
--background-color: #0a0e27;    /* Very dark blue */
--surface-color: #1a1f3a;       /* Dark blue */
--text-color: #ffffff;          /* White text */
--text-secondary: #b0b0b0;      /* Light gray text */
--primary-color: #5b9fff;       /* Lighter blue */
--accent-color: #7ab8ff;        /* Light cyan */
```

### Customize Theme Colors

1. Open `style.css`
2. Find `:root { ... }` section (lines 5-20)
3. Edit color values:
   ```css
   --primary-color: #0066cc;    /* Change this */
   --accent-color: #0080ff;
   --secondary-color: #ff6b6b;
   ```
4. Save and refresh browser

## 📐 Layout Structure

### Main Sections
```
┌─────────────────────────┐
│    Navigation Bar       │ (sticky)
├─────────────────────────┤
│    Hero Section         │ (welcome + buttons)
├─────────────────────────┤
│    About Section        │ (summary + stats)
├─────────────────────────┤
│    Experience Section   │ (timeline + details)
├─────────────────────────┤
│    Skills Section       │ (tag clouds)
├─────────────────────────┤
│    Projects Section     │ (cards)
├─────────────────────────┤
│    Education Section    │ (timeline)
├─────────────────────────┤
│    Contact Section      │ (info + CTA)
├─────────────────────────┤
│    Footer              │
└─────────────────────────┘
```

## 🔧 Responsive Breakpoints

```css
/* Desktop */
Max-width: 1200px container
Multiple columns layout

/* Tablet (768px and below) */
2-column grid → 1-column
Hero content stacks
Navigation optimized

/* Mobile (480px and below) */
Single column layout
Larger touch targets
Optimized spacing
```

## 🎯 Navigation Features

### Active Link Indicator
- Current section is highlighted
- Updates automatically on scroll
- Smooth underline animation

### Smooth Scrolling
- Click any navigation link
- Page smoothly scrolls to section
- Browser history preserved

### Keyboard Support
- Tab through links
- Enter to activate
- Theme toggle focusable

## ✨ Animation Effects

### Element Animations
```css
/* Hover effects */
- Cards translate up (-10px)
- Buttons scale/shadow
- Links change color

/* Scroll animations */
- Elements fade in on enter view
- Subtle slide-up effect
- Respect prefers-reduced-motion
```

### Custom Animations

**Float Animation** (hero section)
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
```

### Add Custom Animation Example

```css
/* In style.css */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Apply to element */
.project-card {
    animation: slideInLeft 0.6s ease;
}
```

## 📊 Spacing System

```css
--spacing-xs: 0.5rem    (8px)
--spacing-sm: 1rem      (16px)
--spacing-md: 1.5rem    (24px)
--spacing-lg: 2rem      (32px)
--spacing-xl: 3rem      (48px)
```

### Usage Example
```css
margin-bottom: var(--spacing-lg);    /* 32px margin */
padding: var(--spacing-md);          /* 24px padding */
gap: var(--spacing-sm);              /* 16px gap */
```

## 🔤 Typography

```css
--font-size-xs: 0.75rem     (12px)
--font-size-sm: 0.875rem    (14px)
--font-size-base: 1rem      (16px)
--font-size-lg: 1.125rem    (18px)
--font-size-xl: 1.5rem      (24px)
--font-size-2xl: 2rem       (32px)
--font-size-3xl: 2.5rem     (40px)
--font-size-4xl: 3rem       (48px)

--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

## 🟠 Border Radius

```css
--radius-sm: 0.5rem     (8px)
--radius-md: 0.75rem    (12px)
--radius-lg: 1rem       (16px)
--radius-xl: 1.5rem     (24px)
```

## 🔀 Transitions

```css
--transition: all 0.3s ease;
```

### Apply to Elements
```css
.element {
    transition: var(--transition);
}

.element:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
```

## 📱 Responsive Text

### Hero Heading
```css
Desktop: 3rem (48px)
Tablet:  2rem (32px)
Mobile:  1.5rem (24px)
```

### Section Titles
```css
Desktop: 2.5rem (40px)
Tablet:  2rem (32px)
Mobile:  1.5rem (24px)
```

## 🎨 Gradient Examples

### Linear Gradient (used throughout)
```css
background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
```

### Text Gradient
```css
h1 {
    background: linear-gradient(135deg, #0066cc, #0080ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

## 🔗 Social Media Icons

Positions and styling:
- Hero section: Small icons (40px)
- Contact section: Large icons (50px)
- Footer: Standard icons

Update URLs in HTML:
```html
<a href="https://github.com/yourusername" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

Available icons via Font Awesome:
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn
- `fa-twitter` - Twitter
- `fa-envelope` - Email
- `fa-link` - Website

## 📄 Print Styles

Automatically switches to light theme when printing:
```css
@media print {
    body {
        background: white;
        color: black;
    }
}
```

Print with Ctrl+P or Cmd+P in browser.

## ♿ Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Landmark sections
- Image alt text
- Link descriptions

### Color Contrast
All text meets WCAG AA standards:
- Ratio: 4.5:1 for normal text
- Ratio: 3:1 for large text

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

## 🚀 Performance Optimization

### Current Optimizations
1. **No external JS frameworks** - Vanilla JS only
2. **CSS Variables** - Single source of truth
3. **Intersection Observer** - Lazy animate elements
4. **Debounced scroll** - Smooth performance
5. **Mobile-first CSS** - Progressive enhancement

### Further Optimizations

**Compress Images**
```bash
# Use tools like:
# TinyPNG, ImageOptim, or Squoosh
# Target: < 200KB for profile, < 300KB for projects
```

**Minify CSS & JS** (if deploying)
```bash
# Use online tools or build tools
# Reduces file size by ~40%
```

## 🔍 Testing Checklist

### Desktop Testing
- [ ] All sections visible and readable
- [ ] Theme toggle works
- [ ] Navigation links work
- [ ] Hover effects visible
- [ ] Animations smooth

### Tablet Testing
- [ ] Single column layout
- [ ] Touch targets adequate (44px min)
- [ ] No horizontal scroll
- [ ] Theme toggle accessible

### Mobile Testing
- [ ] Stack layout works
- [ ] Text readable (16px min)
- [ ] Buttons easily tappable
- [ ] No content overflow
- [ ] Images scale properly

### Browser Testing
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📋 Section-Specific Notes

### Hero Section
- Gradient background
- Call-to-action buttons
- Social links
- Avatar placeholder (replace with image)

### Experience Cards
- Left border accent
- Product/company info
- Achievement highlights
- Period badges

### Skill Tags
- Gradient background
- Hover scale effect
- Organized by category
- Easy to add/remove

### Project Cards
- Image area with gradient
- Tech stack tags
- Achievement highlight
- Project links

### Contact Section
- Information cards
- Icon + text layout
- Social media icons
- Multiple contact methods

## 🎯 Quick Edit Locations

Find and edit:
- **Email**: Search `shikharg21@gmail.com`
- **Phone**: Search `8586909827`
- **Location**: Search `Delhi NCR`
- **GitHub**: Search `github.com/shikharg21`
- **LinkedIn**: Search `linkedin.com/in/shikharg21`

---

For more information, see README.md and QUICK_START.md
