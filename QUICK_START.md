# Portfolio Website - Quick Setup Guide

## ✅ What's Been Created

Your modern portfolio website is now ready! Here's what you have:

### 📁 Files & Folders

```
resume/
├── index.html              ← Main website file
├── style.css               ← All styling (light & dark themes)
├── script.js               ← Interactivity & theme toggle
├── Resume_shikhar.pdf      ← Your resume (existing)
├── README.md               ← Detailed documentation
├── resources/              ← Folder for images
│   └── README.md          ← Image setup guide
└── assets/                 ← Additional assets folder
    └── README.md          ← Assets guide

Total: 8 files + 2 folders
```

## 🎯 Features Included

✨ **Modern Design**
- Clean, professional layout
- Gradient accents and smooth animations
- Proper spacing and typography

🌓 **Dark & Light Themes**
- Toggle button in navigation
- Auto-detect system preference
- Persists user choice in browser

📱 **Fully Responsive**
- Desktop optimized
- Tablet friendly
- Mobile responsive (320px+)

⚡ **Performance**
- No dependencies required
- Intersection Observer animations
- Debounced scroll events
- Font Awesome icons from CDN only

♿ **Accessible**
- Semantic HTML5
- WCAG compliant colors
- Keyboard navigation support
- Reduced motion support

## 🚀 Quick Start

### Option 1: View Locally
1. Navigate to the `d:\Shikhar\resume\` folder
2. Double-click `index.html`
3. Website opens in your default browser

### Option 2: Use a Local Server (Recommended)
```bash
# If you have Python installed:
python -m http.server 8000

# Then open: http://localhost:8000
```

## 🎯 Next Steps

### 1. Add Your Profile Picture
- Save a professional photo to `resources/profile.jpg`
- Recommended: 400x400px, JPG format, < 200KB
- See `resources/README.md` for details

### 2. Add Project Images
- Create `resources/projects/` folder
- Add project screenshots (800x400px recommended)
- See `resources/README.md` for image specifications

### 3. Customize Content
- Open `index.html` in your editor (VS Code, Notepad++, etc.)
- Update text, links, and information as needed
- No coding knowledge required!

### 4. Deploy Online
Choose one of these hosting options:

**GitHub Pages (Recommended - FREE)**
1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages → Select main branch
5. Your site is live! (https://yourusername.github.io/repo-name)

**Other Free Options:**
- Netlify (https://netlify.com) - Drag & drop deployment
- Vercel (https://vercel.com) - Connect GitHub repo
- Firebase (https://firebase.google.com) - Google's hosting

## 🎨 Customization Tips

### Change Theme Colors
Edit these in `style.css` (lines 5-15):
```css
:root {
    --primary-color: #0066cc;    /* Change this */
    --accent-color: #0080ff;     /* Change this */
    --secondary-color: #ff6b6b;  /* Change this */
}
```

### Edit Resume Content
All text is in `index.html`. Find and modify:
- Professional summary (line ~85)
- Experience section (line ~160)
- Skills section (line ~240)
- Projects section (line ~310)
- Contact information (line ~430)

### Update Social Links
Find these lines and update URLs:
```html
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourprofile">
<a href="mailto:your.email@gmail.com">
```

## 📋 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Structure & content - edit text here |
| `style.css` | All styling - edit colors/fonts here |
| `script.js` | Theme toggle & navigation - shouldn't need changes |
| `README.md` | Full documentation |
| `resources/` | Store all images here |
| `assets/` | Additional assets (fonts, icons) |

## ✨ Special Features

### Theme Toggle
- Click the moon/sun icon in top-right
- Saves preference automatically
- Respects system dark mode preference

### Smooth Navigation
- Click any nav link
- Page smoothly scrolls to section
- Active link highlights as you scroll

### Animations
- Cards slide up when in view
- Social icons scale on hover
- Buttons have smooth transitions

### Print Support
- Print to PDF from browser (Ctrl+P)
- Automatic light theme for printing
- Clean, readable layout

## 🔍 Verification Checklist

Before deploying, verify:

- [ ] Profile picture added (optional but recommended)
- [ ] All contact info is correct
- [ ] All social links work
- [ ] Resume PDF is accessible
- [ ] Theme toggle works (moon/sun icon)
- [ ] Responsive on mobile (resize browser)
- [ ] All navigation links work
- [ ] No broken links

## 🐛 Common Questions

**Q: Do I need to install anything?**
A: No! Just open index.html in a browser.

**Q: Can I edit without knowing code?**
A: Yes! All content is in index.html. Find the text you want to change and edit it.

**Q: How do I change the colors?**
A: Edit the `--primary-color` and `--accent-color` in style.css

**Q: Where do I add my images?**
A: Put them in the `resources/` folder

**Q: Can I customize the layout?**
A: Yes! All HTML is in index.html, all styles are in style.css

**Q: How do I deploy online?**
A: See "Deploy Online" section above - GitHub Pages is easiest and FREE

## 📞 Support Resources

- **MDN Web Docs**: https://developer.mozilla.org/ (HTML/CSS/JS reference)
- **W3Schools**: https://w3schools.com/ (Tutorials)
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Color Picker**: https://coolors.co/

## 📝 File Editing Tips

### Using VS Code (Recommended)
1. Open folder in VS Code
2. Click on index.html
3. Edit text directly
4. Save (Ctrl+S)
5. Refresh browser to see changes

### Using Notepad
1. Right-click index.html
2. Select "Open with" → Notepad
3. Edit text
4. Save
5. Refresh browser

## 🎉 You're All Set!

Your portfolio website is complete and ready to use. Start with:
1. Adding your profile picture
2. Customizing colors (optional)
3. Deploying to GitHub Pages or Netlify
4. Sharing your portfolio!

For detailed information, see **README.md** in the root folder.

Happy building! 🚀
