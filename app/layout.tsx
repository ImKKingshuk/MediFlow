"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Default Comps/Navbar";
import Footer from "@/Components/Default Comps/Footer";
import { ThemeProvider } from "@/Components/Providers/ThemeProvider";
import BottomToTop from "@/Components/Default Comps/BottomToTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediFlow",
  description: "MediFlow: Revolutionizing Healthcare Scheduling in India",
  referrer: "origin-when-cross-origin",
  keywords: ["Doctor", "Hospital Management", "Mediflow"],
  authors: [{ name: "@ImKKingshuk" }, { name: "MediFlow Team" }],

  publisher: "MediFlow Team",
  metadataBase: new URL("https://mediflow.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  openGraph: {
    title: "MediFlow",
    description: "MediFlow: Revolutionizing Healthcare Scheduling in India",
    url: "https://nextjs.org",
    siteName: "MediFlow",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <div className="py-[8rem] ">{children}</div>
          <Footer />
          <BottomToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
