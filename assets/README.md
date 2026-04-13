# Assets Folder Guide

This folder is for additional stylesheets, fonts, and utility files.

## Folder Structure

```
assets/
├── fonts/              # Custom web fonts (if needed)
├── icons/              # SVG icons or icon fonts
└── [other assets]
```

## Adding Custom Fonts

If you want to use custom fonts:

1. Download font files (TTF, WOFF, or WOFF2)
2. Place them in the `fonts/` subfolder
3. Add to CSS:
   ```css
   @font-face {
       font-family: 'CustomFont';
       src: url('assets/fonts/custom-font.woff2') format('woff2'),
            url('assets/fonts/custom-font.woff') format('woff');
   }
   
   body {
       font-family: 'CustomFont', sans-serif;
   }
   ```

## Icons

The portfolio currently uses **Font Awesome 6.4.0** from CDN. If you want to use custom SVG icons:

1. Create an `icons/` subfolder
2. Add your SVG files
3. Reference them with `<img>` tags or inline SVG

## Font Resources

- **Google Fonts**: https://fonts.google.com/
- **Font Awesome**: https://fontawesome.com/
- **Material Icons**: https://fonts.google.com/icons

---

**Tip**: Keep external CDN dependencies for performance. Only add custom assets if necessary.
