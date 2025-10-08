import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the entire site
export const metadata = {
  metadataBase: new URL('https://prismbrowser.tech'),
  title: {
    default: "Prism AI Browser - Next Generation Web Browser",
    template: "%s | Prism AI Browser"
  },
  description: "Experience the future of web browsing with Prism Browser. Features AI-powered automation, voice commands, MCP integrations, accessibility enhancements, and developer tools. Built on Zen Browser with advanced AI capabilities.",
  keywords: "AI browser, web browser, automation, voice commands, MCP integrations, Zen browser, developer tools, accessibility, AI automation, Prism Mode, browser extension, AI assistant",
  authors: [{ name: "Prism Browser Team" }],
  creator: "Prism Browser",
  publisher: "Prism Browser",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prismbrowser.tech",
    siteName: "Prism AI Browser",
    title: "Prism AI Browser - Next Generation Web Browser",
    description: "Experience the future of web browsing with Prism Browser. Features AI-powered automation, voice commands, MCP integrations, accessibility enhancements, and developer tools.",
    images: [
      {
        url: "/prism-preview.png",
        width: 1200,
        height: 630,
        alt: "Prism Browser - AI-Powered Web Browser",
        type: "image/png",
      },
      {
        url: "/prism-preview.webp",
        width: 1200,
        height: 630,
        alt: "Prism Browser - AI-Powered Web Browser",
        type: "image/webp",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@PrismBrowser",
    creator: "@PrismBrowser",
    title: "Prism AI Browser - Next Generation Web Browser",
    description: "Experience the future of web browsing with AI-powered automation, voice commands, and developer tools.",
    images: ["/prism-preview.png"],
  },
  
  // Additional metadata
  applicationName: "Prism Browser",
  referrer: "origin-when-cross-origin",
  category: "technology",
  alternates: {
    canonical: "https://prismbrowser.tech"
  },
  
  // Favicon and icon configuration
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },
  
  // Manifest for PWA support
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Remove the generateMetadata function since we're using the exported metadata object above

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="msoo0pyLyvehcd-VVsa0Zs9WbBO9N1d1Y0TvyUXD9Qo" />
        
        {/* Favicon links with cache busting */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png" />
        
        {/* Additional meta tags for better social sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#060010" />
        <meta name="msapplication-TileColor" content="#060010" />
        <meta name="msapplication-TileImage" content="/favicon-32x32.png" />
        
        {/* Additional Open Graph tags */}
        <meta property="og:site_name" content="Prism AI Browser" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prismbrowser.tech" />
        
        {/* Twitter specific meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrismBrowser" />
        <meta name="twitter:creator" content="@PrismBrowser" />
        <meta name="twitter:domain" content="prismbrowser.tech" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="San Francisco" />
        <meta name="distribution" content="global" />
        
        {/* Preload important assets */}
        <link rel="preload" href="/prism-preview.png" as="image" />
        <link rel="preload" href="/nav-logo.png" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured data for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Prism AI Browser",
            "url": "https://prismbrowser.tech",
            "description": "Experience the future of web browsing with Prism Browser. Features AI-powered automation, voice commands, MCP integrations, accessibility enhancements, and developer tools.",
            "publisher": {
              "@type": "Organization",
              "name": "Prism Browser",
              "logo": {
                "@type": "ImageObject",
                "url": "https://prismbrowser.tech/favicon-32x32.png"
              }
            }
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}