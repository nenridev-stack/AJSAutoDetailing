import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Brisbane Blackline Detailing | Professional Car Detailing',
    template: '%s | Brisbane Blackline Detailing',
  },
  description:
    'Professional auto detailing services in Brisbane, Australia. Full interior/exterior, ceramic coating, and basic wash packages for sedans, SUVs, and trucks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-dvh font-sans antialiased bg-black text-white">
        <Navigation />
        <main className="pt-0">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
