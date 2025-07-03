import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "When is Black Friday 2025? Countdown Timer | November 28th",
  description: "Black Friday 2025 is on November 28th. See the exact countdown timer showing days, hours, minutes, and seconds until Black Friday starts.",
  keywords: ["black friday 2025", "when is black friday", "black friday countdown", "november 28 2025", "black friday date"],
  authors: [{ name: "Black Friday Countdown" }],
  creator: "Black Friday Countdown",
  publisher: "Black Friday Countdown",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blackfridaycountdown.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Black Friday 2025 Countdown - November 28th",
    description: "See exactly how much time is left until Black Friday 2025 starts on November 28th.",
    url: "https://blackfridaycountdown.com",
    siteName: "Black Friday Countdown",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Black Friday 2025 Countdown Timer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Friday 2025 Countdown - November 28th",
    description: "See exactly how much time is left until Black Friday 2025 starts on November 28th.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
}

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Black Friday 2025",
  startDate: "2025-11-28T00:00:00-05:00",
  endDate: "2025-11-28T23:59:59-05:00",
  description: "Black Friday 2025 - the biggest shopping day of the year with major sales and discounts",
  location: {
    "@type": "Place",
    name: "Worldwide",
    address: "Online and in-store retailers worldwide"
  },
  organizer: {
    "@type": "Organization",
    name: "Retailers Worldwide"
  },
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Orbitron for countdown */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}