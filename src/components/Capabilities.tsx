import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES_DATA } from '../data/capabilities';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t-2 border-[#200f07]">
      <div className="max-w-3xl mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-[#c2410c] font-black mb-3">
          TECHNICAL SCOPE
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#200f07] mb-6 lowercase">
          what we can build.
        </h2>
        <p className="text-lg text-[#381c0e] font-extrabold leading-relaxed">
          Five specialized engineering disciplines designed to cover every touchpoint of modern digital product development.
        </p>
      </div>

      {/* 5 Editorial Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CAPABILITIES_DATA.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl border-2 border-[#200f07] bg-[#fce498] hover:bg-[#fffbeb] transition-all duration-300 flex flex-col justify-between group shadow-hard hover:-translate-y-1.5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-display tracking-wider text-[#200f07] lowercase">
                  {cat.title}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#200f07] border border-[#200f07] text-[#fffbeb] font-black">
                  0{idx + 1}
                </span>
              </div>
              <p className="text-xs font-mono text-[#522915] font-extrabold mb-6 leading-relaxed border-b-2 border-[#200f07]/20 pb-4">
                {cat.subtitle}
              </p>

              {/* Items List */}
              <ul className="space-y-3">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3 text-sm text-[#200f07] font-extrabold group-hover:text-[#c2410c] transition-colors">
                    <span className="w-2 h-2 rounded-full bg-[#c2410c] group-hover:scale-125 transition-transform"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 text-[11px] font-mono text-[#522915] uppercase tracking-widest font-black flex items-center justify-between">
              <span>masaladose // capability</span>
              <span className="text-[#200f07] opacity-0 group-hover:opacity-100 transition-opacity font-black">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
