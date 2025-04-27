// RootLayout.tsx - Server-side Layout (with no "use client")
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
  // Import the client-side animations

import "./globals.css";
import ClientSideAnimations from "@/components/ClientSideAnimations";

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio made with Next.js 15 + Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-lightBg dark:bg-darkBg transition-colors duration-500`}>
        <ClientSideAnimations>{children}</ClientSideAnimations>  {/* Wrap with ClientSideAnimations */}
      </body>
    </html>
  );
}
