import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Flex } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'The Sake Company',
    template: '%s | The Sake Company',
  },
  description: 'A creative portfolio and content-driven site for The Sake Company.',
  openGraph: {
    title: 'The Sake Company',
    description: 'A creative portfolio and content-driven site for The Sake Company.',
    url: 'https://thesakecompany.com',
    siteName: 'The Sake Company',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Sake Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Sake Company',
    description: 'A creative portfolio and content-driven site for The Sake Company.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${roboto.variable} font-sans bg-white text-black dark:bg-black dark:text-white min-h-screen`}>{children}</body>
    </html>
  );
}
