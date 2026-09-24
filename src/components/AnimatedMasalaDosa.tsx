import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Flame, Utensils } from 'lucide-react';

export const AnimatedMasalaDosa: React.FC = () => {
  const [freq, setFreq] = useState({ x: 0.015, y: 0.025 });
  const [scale, setScale] = useState(12);
  const [isHovered, setIsHovered] = useState(false);

  // Continuous subtle liquid/heat-wave distortion loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    let startTime = performance.now();

    const animateDistortion = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;

      // Smooth subtle sine-wave oscillations for crystal-clear heat-wave distortion
      const fx = 0.006 + Math.sin(elapsed * 1.2) * 0.003;
      const fy = 0.010 + Math.cos(elapsed * 1.6) * 0.004;
      const currentScale = isHovered 
        ? 14 + Math.sin(elapsed * 3) * 4 
        : 6 + Math.sin(elapsed * 1.5) * 2;

      setFreq({ x: fx, y: fy });
      setScale(currentScale);

      animationFrameId = requestAnimationFrame(animateDistortion);
    };

    animationFrameId = requestAnimationFrame(animateDistortion);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className="relative w-full max-w-lg mx-auto flex items-center justify-center p-2 select-none"
    >
      {/* Hidden SVG Filter Definition for Image Distortion */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="dosaDistortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${freq.x} ${freq.y}`}
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={scale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Outer Tech Blueprint Aura Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-dashed border-[#200f07]/20 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-dotted border-[#c2410c]/25 pointer-events-none"
      />

      {/* Floating Blueprint Badges */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 left-2 sm:-left-4 z-30 px-3.5 py-1.5 rounded-xl border-2 border-[#200f07] bg-[#fce498] text-[#200f07] font-mono text-xs font-black shadow-hard flex items-center gap-1.5"
      >
        <Flame className="w-3.5 h-3.5 text-[#c2410c]" />
        <span>HEATWAVE DISTORTION</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-2 right-0 sm:-right-4 z-30 px-3.5 py-1.5 rounded-xl border-2 border-[#200f07] bg-[#200f07] text-[#fffbeb] font-mono text-xs font-black shadow-hard flex items-center gap-1.5"
      >
        <Zap className="w-3.5 h-3.5 text-[#f3b72b]" />
        <span>LIVE MASALA ENGINE</span>
      </motion.div>

      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -left-6 sm:-left-10 -translate-y-1/2 z-30 hidden sm:flex px-2.5 py-1 rounded-lg border border-[#200f07] bg-[#fffbeb] text-[#200f07] font-mono text-[10px] font-bold shadow-sm items-center gap-1"
      >
        <Sparkles className="w-3 h-3 text-[#d97706]" />
        <span>WARP ACTIVE</span>
      </motion.div>

      {/* Main Container Frame with Hard Shadow */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-10 w-full aspect-square max-w-[380px] sm:max-w-[430px] rounded-3xl border-4 border-[#200f07] bg-[#fce498] p-6 shadow-hard-xl flex flex-col items-center justify-between overflow-hidden cursor-pointer group"
        data-cursor="DISTORT DOSA"
      >
        {/* Background Grid inside Dosa Frame */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Top Floating Animated Steam */}
        <div className="absolute top-4 flex gap-10 z-20 pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <motion.svg
              key={i}
              width="24"
              height="50"
              viewBox="0 0 24 50"
              fill="none"
              animate={{
                y: [-4, -25, -4],
                opacity: [0.1, 0.75, 0],
                scaleX: [1, 1.3, 1]
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'easeInOut'
              }}
            >
              <path
                d="M12 45 C 4 35, 20 25, 12 15 C 6 8, 16 4, 12 0"
                stroke="#c2410c"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </motion.svg>
          ))}
        </div>

        {/* Center Display: The Uploaded Dosa Image with Realtime Distortion Filter */}
        <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center my-auto z-10 p-1">
          <motion.img
            src="/dosa-transparent.png"
            alt="South Indian Masala Dosa"
            className="w-full h-full object-contain transition-transform duration-300 ease-out"
            style={{
              filter: 'url(#dosaDistortion) drop-shadow(0 18px 25px rgba(32, 15, 7, 0.4))',
              transform: isHovered ? 'scale(1.12)' : 'scale(1.05)'
            }}
          />
        </div>

        {/* Bottom Technical Spec Footer Banner */}
        <div className="relative z-20 w-full pt-2 border-t-2 border-[#200f07] flex items-center justify-between text-[#200f07] font-mono text-[11px] font-black tracking-wider bg-[#fce498]">
          <div className="flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5 text-[#c2410c]" />
            <span>MASALA DOSA ARCHITECTURE</span>
          </div>
          <span className="text-[#c2410c] font-extrabold">
            {isHovered ? '[ HIGH WARP ]' : '[ WARP: 12px ]'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
