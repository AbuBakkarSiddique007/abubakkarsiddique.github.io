import type { Metadata } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://abubakkar-portfolio-xi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abu Bakkar Siddique | Full Stack Developer",
    template: "%s | Abu Bakkar Siddique",
  },
  description:
    "Full Stack Developer specializing in TypeScript, React, Next.js, Node.js, Prisma, MongoDB, and PostgreSQL. Building scalable, high-performance web applications.",
  keywords: [
    "Abu Bakkar Siddique",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Software Engineer",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Abu Bakkar Siddique" }],
  creator: "Abu Bakkar Siddique",
  publisher: "Abu Bakkar Siddique",
  applicationName: "Abu Bakkar Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Abu Bakkar Portfolio",
    title: "Abu Bakkar Siddique | Full Stack Developer",
    description:
      "Full Stack Developer building scalable, high-performance web applications with TypeScript, React, Next.js, and Node.js. Open to new opportunities.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Abu Bakkar Siddique | Full Stack Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Bakkar Siddique | Full Stack Developer",
    description:
      "Full Stack Developer building scalable, high-performance web applications with TypeScript, React, Next.js, and Node.js.",
    images: ["/banner.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abu Bakkar Siddique",
  url: BASE_URL,
  image: `${BASE_URL}/abubakkar.webp`,
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://github.com/AbuBakkarSiddique007",
    "https://www.linkedin.com/in/abubakkar-dev",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
  ],
};

import { Sidebar } from "@/components/sidebar";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-[#050505] text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:px-8 lg:px-12">
          <Sidebar />
          <main className="flex-1 w-full min-w-0 py-4 lg:py-12 flex flex-col">
            <div className="flex-1">
              {children}
            </div>

            <footer className="mt-16 pt-8 pb-4 border-t border-border/40 flex items-center justify-center text-sm text-muted-foreground text-center px-4">
              <p>© {new Date().getFullYear()} Abu Bakkar Siddique. All rights reserved.</p>
            </footer>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
