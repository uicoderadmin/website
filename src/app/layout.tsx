import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import FooterSection from "@/components/common/footer-section";

const barlow = Barlow({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "500", "600", "700", "800"], // Include all weights
  style: ["normal", "italic"], // Include all styles you require
  display: "swap" // Control how the font is displayed while loading
});

export const metadata: Metadata = {
  title: "The UI Coders - Elevate Your Digital Presence",
  description:
    "Experience excellence in digital craftsmanship with The UI Coders.",
  keywords: [
    "UI Coders",
    "Web Development",
    "Web Design",
    "Digital Agency",
    "E-commerce Solutions",
    "Mobile App Development",
    "UI/UX Design"
  ],
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" }
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "The UI Coders",
    description: "Elevate Your Digital Presence with Our Expert Services.",
    url: "https://www.theuicoders.com",
    siteName: "The UI Coders",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "The UI Coders Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@theuicoders",
    creator: "@theuicoders",
    title: "The UI Coders - Elevate Your Digital Presence",
    description:
      "Experience excellence in digital craftsmanship with The UI Coders.",
    images: ["/android-chrome-192x192.png"]
  },
  alternates: {
    canonical: "https://www.theuicoders.com"
  },
  metadataBase: new URL("https://www.theuicoders.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-grey-10 text-absolute-white`}>
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
