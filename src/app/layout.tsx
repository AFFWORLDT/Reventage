import type React from "react";
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revantage - Premium Real Estate Solutions in Dubai",
  description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai. Expert agents, comprehensive market insights, and exceptional customer service.",
  keywords: "Dubai real estate, luxury properties, off-plan projects, property management, mortgages, conveyancing",
  authors: [{ name: "Revantage" }],
  creator: "Revantage",
  publisher: "Revantage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://revantage.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/favicon.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/images/favicon.webp', sizes: '16x16', type: 'image/webp' },
    ],
    shortcut: '/images/favicon.webp',
    apple: '/images/favicon.webp',
  },
  openGraph: {
    title: "Revantage - Premium Real Estate Solutions in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai.",
    url: 'https://revantage.com',
    siteName: 'Revantage',
    images: [
      {
        url: '/images/new_logo.png',
        width: 1200,
        height: 630,
        alt: 'Revantage Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Revantage - Premium Real Estate Solutions in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai.",
    images: ['/images/new_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfairDisplay.variable} antialiased smooth-scroll`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#c8b180" />
        <meta name="color-scheme" content="light" />
        
        {/* Favicon Configuration */}
        <link rel="icon" type="image/webp" sizes="32x32" href="/images/favicon.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="/images/favicon.webp" />
        <link rel="shortcut icon" href="/images/favicon.webp" />
        <link rel="apple-touch-icon" href="/images/favicon.webp" />
      </head>
      <body className="luxury-bg touch-optimized">
        {children}
      </body>
    </html>
  );
}
