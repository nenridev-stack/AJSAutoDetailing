import type { Metadata } from 'next';
import {
  HeroSection,
  ServicesOverview,
  GalleryPreview,
  BeforeAfterSlider,
  TestimonialsSection,
  TrustBar,
  CTASection,
} from '@/components/home';

export const metadata: Metadata = {
  title: "AJ'S Auto Detailing | Premium Car Detailing",
  description:
    'Professional auto detailing services in your area. Full interior/exterior, ceramic coating, and wash packages for sedans, SUVs, and trucks.',
  openGraph: {
    title: "AJ'S Auto Detailing | Premium Car Detailing",
    description:
      'Professional auto detailing services. Full detail, ceramic coating, and wash packages with transparent pricing.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AJ'S Auto Detailing | Premium Car Detailing",
    description:
      'Professional auto detailing services. Full detail, ceramic coating, and wash packages with transparent pricing.',
  },
};

/**
 * Home page — assembles all sections with animations.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <GalleryPreview />
      <BeforeAfterSlider />
      <TestimonialsSection />
      <TrustBar />
      <CTASection />
    </>
  );
}
