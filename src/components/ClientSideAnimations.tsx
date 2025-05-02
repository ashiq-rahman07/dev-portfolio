// ClientSideAnimations.tsx - Client-side Component (with "use client")
"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';


export default function ClientSideAnimations({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : ''}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
    
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />

      </motion.div>
    </AnimatePresence>
  );
}
