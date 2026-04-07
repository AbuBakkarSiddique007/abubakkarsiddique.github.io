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
};

import { Sidebar } from "@/components/sidebar";

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
          <main className="flex-1 w-full min-w-0 py-4 lg:py-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
