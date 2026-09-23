import React from 'react';
import { motion } from 'framer-motion';

export const BlueprintVisual: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0"></div>

      {/* SVG Technical Blueprint Wiring Lines */}
      <svg className="w-full h-full absolute inset-0 z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueprint-coffee-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#200f07" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#c2410c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#200f07" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Diagonal Technical Wiring Lines */}
        <motion.line
          x1="5%" y1="15%" x2="45%" y2="15%"
          stroke="url(#blueprint-coffee-stroke)" strokeWidth="2" strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.line
          x1="45%" y1="15%" x2="65%" y2="38%"
          stroke="url(#blueprint-coffee-stroke)" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Connected Node Dots */}
        <motion.circle
          cx="45%" cy="15%" r="5" fill="#200f07"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="65%" cy="38%" r="5" fill="#c2410c"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2.8, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};
