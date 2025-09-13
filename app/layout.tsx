import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "HATTA - AI Consulting",
  description:
    "AI consulting company specializing in graph machine learning and topological deep learning. Translating complex non-Euclidean methods into practical business solutions.",
  keywords: [
    "AI consulting",
    "graph machine learning",
    "topological deep learning",
    "graph neural networks",
    "non-euclidean AI",
    "machine learning consulting",
    "artificial intelligence",
    "data science",
    "research consulting",
  ],
  icons: {
    icon: "/android-chrome-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: "HATTA.ai" }],
  openGraph: {
    title: "HATTA.ai - AI Consulting & Graph Machine Learning",
    description:
      "AI consulting company specializing in graph machine learning and topological deep learning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HATTA.ai - AI Consulting & Graph Machine Learning",
    description:
      "AI consulting company specializing in graph machine learning and topological deep learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hatta.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body className={`${cormorant.className} antialiased`}>{children}</body>
    </html>
  );
}
