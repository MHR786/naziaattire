import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nazia Attire - Premium Pakistani Women\'s Fashion',
  description: 'Discover elegant Pakistani women\'s fashion at Nazia Attire. From traditional lawn suits to contemporary formal wear, celebrate your heritage with style. Premium quality clothing with authentic Pakistani craftsmanship.',
  keywords: 'Pakistani fashion, women clothing, lawn suits, formal wear, traditional dresses, Pakistani designer wear, Karachi fashion, women\'s ethnic wear',
  authors: [{ name: 'Nazia Attire' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Nazia Attire - Premium Pakistani Women\'s Fashion',
    description: 'Elegant Pakistani women\'s fashion celebrating heritage with style',
    type: 'website',
    locale: 'en_PK',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}