import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Flame } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  const scrollToStages = () => {
    const stagesEl = document.querySelector('#stages');
    if (stagesEl) {
      stagesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t-2 border-[#200f07]">
      <div className="relative rounded-3xl border-2 border-[#200f07] bg-[#200f07] p-10 sm:p-20 overflow-hidden shadow-hard-lg text-center text-[#fffbeb]">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f3b72b] bg-[#f3b72b]/20 text-[#fce498] font-mono text-xs font-black tracking-widest uppercase"
          >
            <Flame className="w-4 h-4 text-[#f3b72b]" />
            HAVE SOMETHING COOKING?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl font-black font-display tracking-tight text-white leading-tight lowercase"
          >
            let's build it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-300 font-extrabold max-w-xl mx-auto leading-relaxed"
          >
            Tell us what you're imagining. We'll help turn it into a dependable digital experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-5"
          >
            <button
              onClick={onOpenContact}
              data-cursor="START"
              className="px-8 py-4 rounded-xl bg-[#f3b72b] hover:bg-[#fffbeb] text-[#200f07] font-black text-sm tracking-wide transition-all duration-200 border-2 border-white shadow-md hover:-translate-y-1 flex items-center gap-3 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToStages}
              data-cursor="EXPLORE"
              className="px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border-2 border-zinc-700 font-black text-sm tracking-wide transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            >
              Explore Stages →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
