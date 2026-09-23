import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total animation sequence duration before sliding up
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 700); // Allow slide-up exit animation to finish
    }, 3400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#f3b72b] flex flex-col items-center justify-center p-6 select-none border-b-4 border-[#200f07]"
        >
          {/* Background Technical Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
            {/* Brand Title: masaladose.co */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-4 h-4 rounded-full bg-[#200f07] animate-ping"></span>
              <h1 className="text-4xl sm:text-6xl font-black font-mono lowercase tracking-tight text-[#200f07]">
                masaladose<span className="text-[#c2410c]">.co</span>
              </h1>
            </motion.div>

            {/* Synced Connector Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
              className="w-32 h-[3px] bg-[#200f07] mb-6 origin-center"
            />

            {/* Tagline Reveal: your idea. our digital kitchen. */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="space-y-1"
            >
              <p className="text-2xl sm:text-4xl font-extrabold font-display lowercase tracking-tight text-[#200f07]">
                your idea.
              </p>
              <p className="text-2xl sm:text-4xl font-extrabold font-display lowercase tracking-tight text-[#c2410c]">
                our digital kitchen.
              </p>
            </motion.div>

            {/* Loading Status Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-12 flex items-center gap-2 text-xs font-mono font-black text-[#522915] uppercase tracking-widest"
            >
              <span>INITIALIZING STUDIO ENGINE</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
