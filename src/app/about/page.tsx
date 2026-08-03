import type { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn the story behind Brisbane Blackline Detailing, our certifications, and the service area we cover in Brisbane, Australia.',
};

export default function AboutPage() {
  return <AboutContent />;
}
