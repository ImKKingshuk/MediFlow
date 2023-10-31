import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Default Comps/Navbar";
import Footer from "@/Components/Default Comps/Footer";
import { ThemeProvider } from "@/Components/Providers/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediFlow",
  description: "MediFlow: Revolutionizing Healthcare Scheduling in India",
  referrer: "origin-when-cross-origin",
  keywords: ["Doctor", "Hospital Management", "Mediflow"],
  authors: [{ name: "@ImKKingshuk" }, { name: "MediFlow Team" }],

  publisher: "MediFlow Team",
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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
