import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import PrismLoader from "@/components/PrismLoader";

// Define metadata for the entire site
export const metadata = {
  metadataBase: new URL('https://prismbrowser.tech'),
  title: {
    default: "PrismSpace | The AI browser home for builders",
    template: "%s | PrismSpace"
  },
  description: "PrismSpace is an AI browser home for people who build, research, and ship with multiple models in one focused workspace.",
  authors: [{ name: "PrismSpace team" }],
  creator: "PrismSpace",
  publisher: "PrismSpace",
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
    siteName: "PrismSpace",
    title: "PrismSpace | The AI browser home for builders",
    description: "An AI browser home for people who build, research, and ship with multiple models in one focused workspace.",
    images: [
      {
        url: "/prism-preview.png",
        width: 1200,
        height: 630,
        alt: "PrismSpace AI browser workspace",
        type: "image/png",
      },
      {
        url: "/prism-preview.webp",
        width: 1200,
        height: 630,
        alt: "PrismSpace AI browser workspace",
        type: "image/webp",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@prismaibrowser",
    creator: "@prismaibrowser",
    title: "PrismSpace | The AI browser home for builders",
    description: "An AI browser home for people who build, research, and ship with multiple models in one focused workspace.",
    images: ["/prism-preview.png"],
  },
  
  // Additional metadata
  applicationName: "PrismSpace",
  referrer: "origin-when-cross-origin",
  category: "technology",
  alternates: { canonical: "/" },
  verification: {
    google: "msoo0pyLyvehcd-VVsa0Zs9WbBO9N1d1Y0TvyUXD9Qo",
  },
  
  // Favicon and icon configuration
  icons: {
    icon: [
      {
        url: '/prism-icon.png',
        sizes: 'any',
      },
      {
        url: '/prism-icon.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/prism-icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: '/prism-icon.png',
    apple: '/prism-icon.png',
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
        {/* Site-wide presentation hints */}
        <meta name="theme-color" content="#060010" />
        {/* Organization and site identity for search engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://prismbrowser.tech/#organization",
                "name": "PrismSpace",
                "url": "https://prismbrowser.tech",
                "logo": "https://prismbrowser.tech/prism-icon.png"
              },
              {
                "@type": "WebSite",
                "@id": "https://prismbrowser.tech/#website",
                "name": "PrismSpace",
                "url": "https://prismbrowser.tech",
                "description": "An AI browser home for people who build, research, and ship with multiple models.",
                "publisher": { "@id": "https://prismbrowser.tech/#organization" }
              }
            ]
          })}
        </script>
      </head>
      <body>
        <SmoothScrollProvider>
          <PrismLoader />
          {children}
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
