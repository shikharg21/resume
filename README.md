# Shikhar Gupta - Portfolio Website

A modern, responsive, single-page portfolio website with dark and light theme support.

## 📁 Project Structure

```
resume/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with dark/light themes
├── script.js           # JavaScript for interactivity
├── Resume_shikhar.pdf  # PDF Resume (download link)
├── resources/          # Folder for images and media
│   ├── profile.jpg     # Profile picture (add here)
│   └── projects/       # Project images
├── assets/             # Additional assets
└── README.md           # This file
```

## 🎨 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes with system preference detection
- **Smooth Navigation**: Smooth scrolling between sections with active link highlighting
- **Modern UI**: Clean, professional design with gradient accents
- **Performance Optimized**: Uses intersection observers for smooth animations
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Print Friendly**: Optimized for printing the portfolio

## 📋 Sections

1. **Navigation Bar** - Sticky navbar with theme toggle
2. **Hero Section** - Introduction with call-to-action buttons
3. **About** - Professional summary with statistics
4. **Experience** - Detailed work history and key contributions
5. **Skills** - Organized tech stack and specializations
6. **Projects** - Featured projects with descriptions
7. **Education** - Educational background
8. **Contact** - Contact information and social links
9. **Footer** - Credits and information

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone or download the portfolio files
2. Place all files in the same directory
3. Open `index.html` in a web browser
4. That's it! The website is ready to use.

## 📸 Adding Images

### Profile Picture
1. Add your profile picture to the `resources/` folder
2. Name it `profile.jpg` (or your preferred name)
3. To display it, replace the avatar placeholder in `index.html`:

```html
<div class="hero-image">
    <img src="resources/profile.jpg" alt="Shikhar Gupta" class="profile-pic">
</div>
```

Then add this CSS to `style.css`:
```css
.profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-xl);
}
```

### Project Images
1. Create a `resources/projects/` folder
2. Add project images (recommended size: 800x400px)
3. Update the project cards in `index.html`:

```html
<div class="project-image">
    <img src="resources/projects/project-name.jpg" alt="Project Name">
</div>
```

## 🎨 Customizing Theme Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #0066cc;      /* Main accent color */
    --accent-color: #0080ff;       /* Secondary accent */
    --secondary-color: #ff6b6b;    /* Highlight color */
    /* ... more colors ... */
}
```

For dark theme, modify the `[data-theme="dark"]` selector:

```css
[data-theme="dark"] {
    --background-color: #0a0e27;
    /* ... dark colors ... */
}
```

## 🔧 Modifying Content

All resume content is in `index.html`. Simply edit the text, links, and information as needed:

- **Update contact information** in the Contact section
- **Modify experiences** in the Experience section
- **Add/remove skills** in the Skills section
- **Update projects** in the Projects section
- **Change social links** in the footer and throughout

## 🌐 Deployment

### GitHub Pages
1. Push your files to a GitHub repository
2. Go to Settings → Pages
3. Select your branch as the source
4. Your portfolio will be live at `https://username.github.io/`

### Other Hosting Options
- **Netlify**: Drag and drop your files
- **Vercel**: Connect your GitHub repo
- **Firebase Hosting**: Follow Firebase deployment guide
- **Standard Web Hosting**: FTP upload to your host

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⌨️ Keyboard Navigation

- **Click theme toggle button** or press it for dark/light mode
- **Smooth scroll** on all navigation links
- **Tab navigation** works throughout the site

## 🎯 JavaScript Features

The portfolio includes:
- Theme detection and persistence (localStorage)
- Active navigation link highlighting
- Smooth scrolling
- Intersection Observer animations
- Debounced scroll events for performance
- Print stylesheet support
- Responsive utilities

Access theme functions in browser console:
```javascript
portfolio.getCurrentTheme()      // Get current theme
portfolio.setTheme('dark')       // Set theme
portfolio.toggleTheme()          // Toggle theme
```

## 📝 Tips for Best Results

1. **Keep it updated** - Update your resume and projects regularly
2. **Use high-quality images** - Compress images for faster loading
3. **Test on mobile** - Use DevTools to test responsiveness
4. **Update links** - Ensure all social and project links are correct
5. **Check navigation** - Make sure all section links work properly

## 🐛 Troubleshooting

### Theme not persisting?
- Clear browser cache and localStorage
- Check browser's localStorage is enabled

### Images not showing?
- Verify file paths are correct
- Check file names match the src attribute
- Ensure image files are in the correct folder

### Styles not loading?
- Clear cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that style.css is in the same folder as index.html

## 📄 License

This portfolio template is free to use and modify for personal use.

## 💡 Future Enhancements

Consider adding:
- Blog section with posts
- Testimonials from colleagues
- Interactive project filters
- Contact form functionality
- Animation effects on scroll
- Animated metrics counters
- Search functionality

---

**Happy coding!** Feel free to customize and make this portfolio your own. 🎉
