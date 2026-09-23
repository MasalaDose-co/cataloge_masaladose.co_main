import React from 'react';
import { motion } from 'framer-motion';

export const ScrollIndicator: React.FC = () => {
  const scrollToNextSection = () => {
    const nextEl = document.querySelector('#what-we-do');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={scrollToNextSection}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="group flex flex-col items-center gap-3 cursor-pointer focus:outline-none"
      aria-label="Scroll to explore"
    >
      <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#59341c] font-bold group-hover:text-[#27140b] transition-colors duration-200">
        SCROLL TO EXPLORE
      </span>
      <div className="w-[2px] h-10 bg-[#27140b]/20 rounded-full overflow-hidden relative">
        <motion.div
          animate={{
            y: [0, 40, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-1/2 bg-[#27140b] rounded-full"
        />
      </div>
    </motion.button>
  );
};
