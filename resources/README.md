# Resources Folder Guide

This folder is designated for all media assets including images, videos, and documents for your portfolio website.

## Folder Structure

```
resources/
├── profile.jpg              # Your profile picture
├── images/                  # General images
│   └── [add images here]
└── projects/                # Project screenshots
    ├── shopper-scrap.jpg
    ├── todo-master.jpg
    └── [add more project images]
```

## Image Recommendations

### Profile Picture
- **Filename**: `profile.jpg` or `profile.png`
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **File Size**: < 200KB (optimized)
- **Description**: Professional headshot or avatar

### Project Images
- **Size**: 800x400px (16:9 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: < 300KB per image
- **Description**: Screenshot or preview of the project

### Other Assets
- Using webp format for better compression
- Optimize all images for web using tools like TinyPNG or ImageOptim
- Consider using SVG for icons and logos

## How to Add Images

1. **Save images to this folder** (resources/)
2. **Update HTML** with image src paths:
   ```html
   <img src="resources/profile.jpg" alt="Description">
   ```
3. **Optimize before uploading** for faster loading

## Image Optimization Tools

- **TinyPNG**: https://tinypng.com/
- **ImageOptim**: https://imageoptim.com/
- **Squoosh**: https://squoosh.app/

## Attribution

If using images from other sources:
- Add proper attribution
- Ensure proper licensing
- Use royalty-free images from:
  - Unsplash
  - Pexels
  - Pixabay
  - Flaticon

---

**Note**: Currently using Font Awesome icons as placeholders. You can replace them with actual images by updating the HTML and adding image files to this folder.
