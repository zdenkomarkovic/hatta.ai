import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HATTA.ai - AI Consulting & Graph Machine Learning",
  description: "AI consulting company specializing in graph machine learning and topological deep learning. Translating complex non-Euclidean methods into practical business solutions.",
  keywords: [
    "AI consulting",
    "graph machine learning",
    "topological deep learning",
    "graph neural networks",
    "non-euclidean AI",
    "machine learning consulting",
    "artificial intelligence",
    "data science",
    "research consulting"
  ],
  authors: [{ name: "HATTA.ai" }],
  openGraph: {
    title: "HATTA.ai - AI Consulting & Graph Machine Learning",
    description: "AI consulting company specializing in graph machine learning and topological deep learning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HATTA.ai - AI Consulting & Graph Machine Learning",
    description: "AI consulting company specializing in graph machine learning and topological deep learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );