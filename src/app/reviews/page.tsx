import type { Metadata } from 'next';
import { ReviewsContent } from './ReviewsContent';

export const metadata: Metadata = {
  title: "Customer Reviews | AJ'S Auto Detailing",
  description:
    'Read verified customer reviews of our auto detailing services. See why car owners trust us for ceramic coating, full details, and basic washes.',
  openGraph: {
    title: "Customer Reviews | AJ'S Auto Detailing",
    description:
      'Read verified customer reviews of our auto detailing services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Customer Reviews | AJ'S Auto Detailing",
    description:
      'Read verified customer reviews of our auto detailing services.',
  },
};

/**
 * Reviews page — server component shell that exports metadata for SEO.
 * Renders the client ReviewsContent component for pagination interactivity.
 */
export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-black">
      <ReviewsContent />
    </main>
  );
}
