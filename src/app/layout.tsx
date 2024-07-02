import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const barlow = Barlow({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "500", "600", "700", "800"], // Include all weights
  style: ["normal", "italic"], // Include all styles you require
  display: "swap" // Control how the font is displayed while loading
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-grey-10 text-absolute-white`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}