import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import { BlueprintVisual } from './BlueprintVisual';
import { ScrollIndicator } from './ScrollIndicator';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToStages = () => {
    const stagesEl = document.querySelector('#stages');
    if (stagesEl) {
      stagesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-36 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden bg-[#f3b72b]">
      {/* Abstract Blueprint Grid Background */}
      <BlueprintVisual />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl my-auto">
        {/* Eyebrow in lowercase masaladose.co */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#200f07] bg-[#fce498] text-[#200f07] font-mono text-xs font-black tracking-widest lowercase mb-8 shadow-hard"
        >
          <Flame className="w-4 h-4 text-[#c2410c] animate-bounce" />
          digital solutions / masaladose.co
        </motion.div>

        {/* Main Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-[#200f07] leading-[1.01] mb-6 lowercase"
        >
          your idea.<br />
          <span className="text-[#381c0e] font-bold">our digital </span>
          <span className="text-[#c2410c]">
            kitchen.
          </span>
        </motion.h1>

        {/* Supporting Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-2xl font-extrabold text-[#200f07] max-w-2xl mb-4 leading-relaxed"
        >
          We turn ideas into digital experiences, products and systems.
        </motion.p>

        {/* Detailed Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base sm:text-lg text-[#381c0e] max-w-2xl mb-10 leading-relaxed font-bold"
        >
          <span className="font-black text-[#200f07]">masaladose.co</span> helps businesses build, launch and scale their digital presence — from elegant websites to AI-powered platforms, SaaS products and automated business systems.
        </motion.p>

        {/* Call to Actions with Hard Shadow Offset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center gap-5"
        >
          <button
            onClick={scrollToStages}
            data-cursor="EXPLORE"
            className="group px-8 py-4 rounded-xl bg-[#200f07] hover:bg-[#381c0e] text-[#fffbeb] font-black text-sm tracking-wide transition-all duration-200 border-2 border-[#200f07] shadow-hard hover:-translate-y-1 flex items-center gap-3 cursor-pointer"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 text-[#f3b72b] group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          <button
            onClick={onOpenContact}
            data-cursor="START"
            className="px-8 py-4 rounded-xl bg-[#fce498] hover:bg-[#fffbeb] text-[#200f07] border-2 border-[#200f07] font-black text-sm tracking-wide transition-all duration-200 shadow-hard hover:-translate-y-1 cursor-pointer"
          >
            Start a Project
          </button>
        </motion.div>
      </div>

      {/* Hero Bottom Scroll Indicator */}
      <div className="relative z-10 flex justify-center pt-8">
        <ScrollIndicator />
      </div>
    </section>
  );
};
