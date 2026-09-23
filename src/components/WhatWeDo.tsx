import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WHAT_WE_DO_ITEMS } from '../data/capabilities';

export const WhatWeDo: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="what-we-do" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t-2 border-[#200f07]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="text-xs font-mono uppercase tracking-widest text-[#c2410c] font-black mb-4">
            CORE PHILOSOPHY
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-[#200f07] mb-6 leading-tight lowercase">
            from presence<br />to product.
          </h2>
          <p className="text-lg text-[#381c0e] font-extrabold leading-relaxed mb-8">
            We design and build digital experiences that help businesses move from simply being online to operating digitally.
          </p>
          <div className="p-5 rounded-2xl border-2 border-[#200f07] bg-[#fce498] text-xs font-mono text-[#200f07] leading-relaxed shadow-hard">
            <span className="text-[#c2410c] font-black">// METAPHOR</span><br />
            Just like a kitchen transforms raw ingredients into a crafted dish, we turn raw ideas into high-performing digital systems.
          </div>
        </div>

        {/* Right Column: Typographic Capabilities List */}
        <div className="lg:col-span-7 flex flex-col divide-y-2 divide-[#200f07]">
          {WHAT_WE_DO_ITEMS.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={item.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`py-6 sm:py-8 transition-all duration-300 cursor-pointer relative group ${
                  isAnyHovered && !isHovered ? 'opacity-40' : 'opacity-100'
                }`}
              >
                {/* Active Accent Line Indicator */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-2 bg-[#c2410c] rounded-r transition-all duration-300 ${
                    isHovered ? 'opacity-100 h-full' : 'opacity-0 h-0'
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pl-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-[#522915] font-black">
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl font-black font-display tracking-tight transition-colors duration-200 lowercase ${
                        isHovered ? 'text-[#c2410c]' : 'text-[#200f07]'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-[#522915] font-black uppercase tracking-widest sm:text-right">
                    STUDIO SERVICE
                  </span>
                </div>

                {/* Animated Description on Hover */}
                {isHovered && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 pl-10 text-sm text-[#200f07] font-bold leading-relaxed max-w-xl"
                  >
                    {item.desc}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
