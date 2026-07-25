import type { GalleryItem } from '@/types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    category: 'basic-wash',
    vehicleType: 'Sedan',
    beforeImage: {
      src: '/brand/before-wash-car(slider).jpeg',
      alt: 'Car before wash - dirty exterior needing cleaning',
      width: 1200,
      height: 800,
    },
    afterImage: {
      src: '/brand/after-wash-car(slider).jpeg',
      alt: 'Car after professional wash - clean and shiny',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'gallery-2',
    category: 'full-detail',
    vehicleType: 'SUV',
    beforeImage: {
      src: '/brand/before-wash-car(slider).jpeg',
      alt: 'SUV before detailing - pre-wash condition',
      width: 1200,
      height: 800,
    },
    afterImage: {
      src: '/brand/after-wash-car(slider).jpeg',
      alt: 'SUV after full professional detailing',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'gallery-3',
    category: 'ceramic-coating',
    vehicleType: 'Sedan',
    beforeImage: {
      src: '/brand/before-wash-car(slider).jpeg',
      alt: 'Vehicle before ceramic coating preparation',
      width: 1200,
      height: 800,
    },
    afterImage: {
      src: '/brand/after-wash-car(slider).jpeg',
      alt: 'Vehicle after ceramic coating - protected finish',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'gallery-4',
    category: 'basic-wash',
    vehicleType: 'Truck',
    beforeImage: {
      src: '/brand/before-wash-car(slider).jpeg',
      alt: 'Truck before basic wash service',
      width: 1200,
      height: 800,
    },
    afterImage: {
      src: '/brand/after-wash-car(slider).jpeg',
      alt: 'Truck after wash with foam application',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'gallery-5',
    category: 'full-detail',
    vehicleType: 'Sedan',
    beforeImage: {
      src: '/brand/before-wash-car(slider).jpeg',
      alt: 'Sedan before full detail - needs attention',
      width: 1200,
      height: 800,
    },
    afterImage: {
      src: '/brand/after-wash-car(slider).jpeg',
      alt: 'Sedan after full detail - showroom condition',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'gallery-6',
    category: 'ceramic-coating',
    vehicleType: 'SUV',
    beforeImage: {
      src: '/brand/before-wash-car(slider).jpeg',
      alt: 'SUV before ceramic coating application',
      width: 1200,
      height: 800,
    },
    afterImage: {
      src: '/brand/after-wash-car(slider).jpeg',
      alt: 'SUV after detailing process',
      width: 1200,
      height: 800,
    },
  },
];

/**
 * Filter gallery items by category. "all" returns the full list.
 */
export function filterGalleryByCategory(
  items: GalleryItem[],
  category: string
): GalleryItem[] {
  if (category === 'all') return items;
  return items.filter((item) => item.category === category);
}
