

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
     
       <>
        <Navbar/>
         
         {children}
      
       </>
         
     
  
  );
}