# Image Placement Guide

## Logo
- Place your logo file as: `public/brand/logo_ourcar.png`
- The logo will be displayed as a circle (40px in nav, 48px in footer)
- Recommended: square image, at least 200x200px

## Hero Background (optional)
- Place as: `public/brand/hero/hero-bg.jpg`
- Recommended: 1920x1080px minimum
- Currently using an Unsplash placeholder

## Gallery Images (Before/After)
Place your before/after images in: `public/brand/gallery/`

Naming convention:
- `public/brand/gallery/before-1.jpg` + `public/brand/gallery/after-1.jpg`
- `public/brand/gallery/before-2.jpg` + `public/brand/gallery/after-2.jpg`
- etc.

Recommended: 1200x800px, JPEG or WebP format

## Team/Owner Photo
- Place as: `public/brand/team/owner.jpg`
- Recommended: 400x400px minimum, square crop

## Vehicle Type Images (for booking form)
- `public/brand/vehicles/sedan.png`
- `public/brand/vehicles/suv.png`
- `public/brand/vehicles/truck.png`

Once you add real images, update the paths in:
- `src/data/gallery.ts` (gallery before/after pairs)
- `src/components/home/GalleryPreview.tsx` (home page preview)
- `src/components/home/BeforeAfterSlider.tsx` (hero slider)
