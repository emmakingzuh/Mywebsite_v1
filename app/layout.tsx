import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import { studio } from '@/lib/site-content';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600'],
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const siteUrl = 'https://emmykingzstudios.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${studio.name} — ${studio.tagline.join(' ')}`,
    template: `%s — ${studio.shortName}`,
  },
  description: studio.description,
  keywords: [
    'motion graphics',
    '2D animation',
    '3D animation',
    'augmented reality',
    'creative direction',
    'creative studio',
    'motion design',
    'visual storytelling',
    'Emmykingz Studios',
    'Emmanuel Okechukwu',
  ],
  authors: [{ name: studio.name }],
  creator: studio.name,
  publisher: studio.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: studio.name,
    title: `${studio.name} — ${studio.tagline.join(' ')}`,
    description: studio.description,
    images: [
      {
        url: 'https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: `${studio.name} — Creative Studio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${studio.name} — ${studio.tagline.join(' ')}`,
    description: studio.description,
    images: [
      'https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'design',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: studio.name,
  description: studio.description,
  url: siteUrl,
  email: studio.email,
  founder: {
    '@type': 'Person',
    name: 'Emmanuel Okechukwu',
    jobTitle: 'Creative Director',
  },
  knowsAbout: [
    'Motion Graphics',
    '2D Animation',
    '3D Animation',
    'Augmented Reality',
    'Creative Direction',
  ],
  sameAs: studio.social.map((s) => s.href),
};

const orgData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: studio.name,
  url: siteUrl,
  email: studio.email,
  description: studio.description,
  foundingDate: '2019',
  founder: {
    '@type': 'Person',
    name: 'Emmanuel Okechukwu',
  },
  sameAs: studio.social.map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans-editorial bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
        />
        {children}
      </body>
    </html>
  );
}
