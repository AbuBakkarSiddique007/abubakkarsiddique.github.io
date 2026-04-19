import type { Metadata } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "abubakkar-portfolio | Junior Full Stack Developer",
  description:
    "Modern, professional personal portfolio for recruiters and collaborators.",
  openGraph: {
    title: "Abu Bakkar Siddique | Junior Full Stack Developer",
    description: "Modern, professional personal portfolio for recruiters and collaborators.",
    siteName: "Abu Bakkar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Bakkar Siddique | Junior Full Stack Developer",
    description: "Modern, professional personal portfolio for recruiters and collaborators.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

import { Sidebar } from "@/components/sidebar";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-[#050505] text-foreground`}
      >
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
