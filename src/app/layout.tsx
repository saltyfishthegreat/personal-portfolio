"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation"; // Import usePathname

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// We removed global metadata here as this is a client component.
// Individual page.tsx files can export their own metadata.

import PillNavbar from "../components/PillNavbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get current pathname
  const isWorkPage = pathname === "/work"; // Check if it's the work page

  const bodyClassName = `${geistSans.variable} ${geistMono.variable} antialiased bg-custom-beige`;
  return (
    <html lang="en">
      <body className={bodyClassName}>
        <PillNavbar />

        {/* Video Background for all pages */}
        <video
          className="fixed inset-0 z-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
          src="/bg.mp4"
        />

        {isWorkPage ? (
          children // Render children directly for work page
        ) : (
          <main className="max-w-5xl mx-auto mt-28 mb-12 bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              {children}
            </div>
            <Footer />
          </main>
        )}
      </body>
    </html>
  );
}
