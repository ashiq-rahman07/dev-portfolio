import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import Footer from '@/components/sections/Footer';


const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ashiqur Rahman | Portfolio',
  description: 'Ashiqur Rahman\'s personal portfolio showcasing skills, projects, and experience in web development.',  
  icons: {
    icon: '/coding.png',
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <html lang="en">
        <body
          className={`${poppins.className} bg-lightBg dark:bg-darkBg transition-colors duration-500`}
        >
     
         
          {children}
          <Footer/>
        </body>
      </html>
  
  );
}