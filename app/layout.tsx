import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Default Comps/Navbar";
import Footer from "@/Components/Default Comps/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediFlow",
  description: "MediFlow: Revolutionizing Healthcare Scheduling in India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
