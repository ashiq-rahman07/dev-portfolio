// ClientSideAnimations.tsx - Client-side Component (with "use client")
"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './Sidebar';

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
         <main className="flex relative">
  <Sidebar />
  <div className="flex-1 md:ml-72 w-full z-10 overflow-y-auto scroll-smooth">
    {children}
  </div>
</main>
      </motion.div>
    </AnimatePresence>
  );
}
