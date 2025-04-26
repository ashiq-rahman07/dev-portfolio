import type { Metadata } from "next";

import "./globals.css";

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export const metadata:Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio made with Next.js 15 + Tailwind CSS',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-lightBg dark:bg-darkBg`}>
        {children}
      </body>
    </html>
  )
}
