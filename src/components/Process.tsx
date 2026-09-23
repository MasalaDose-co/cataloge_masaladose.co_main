import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS_STEPS } from '../data/process';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" ref={containerRef} className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t-2 border-[#200f07]">
      <div className="max-w-3xl mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-[#c2410c] font-black mb-3">
          STUDIO METHODOLOGY
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#200f07] mb-6 lowercase">
          from idea to launch.
        </h2>
        <p className="text-lg text-[#381c0e] font-extrabold leading-relaxed">
          A disciplined four-step execution recipe for transforming business objectives into dependable digital systems.
        </p>
      </div>

      {/* 4-Step Process Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-[#200f07] space-y-16">
        {/* Animated Active Progress Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[-2px] top-0 w-1.5 bg-[#200f07] origin-top shadow-sm"
        />

        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Step Marker Circle */}
            <div className="absolute -left-[32px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full border-2 border-[#200f07] bg-[#f3b72b] group-hover:bg-[#200f07] transition-colors duration-200"></div>

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 p-8 rounded-3xl border-2 border-[#200f07] bg-[#fce498] group-hover:bg-[#fffbeb] transition-all duration-300 shadow-hard hover:-translate-y-1">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-[#fffbeb] font-black px-2.5 py-1 rounded bg-[#200f07]">
                    STEP {step.number}
                  </span>
                  <span className="text-xs font-mono text-[#522915] font-black uppercase">
                    {step.tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#200f07] mb-3 lowercase">
                  {step.title}
                </h3>
                <p className="text-sm text-[#381c0e] font-extrabold leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Detail bullet points */}
              <div className="lg:w-72 shrink-0 pt-4 lg:pt-0 lg:border-l-2 border-[#200f07]/20 lg:pl-6">
                <div className="text-[11px] font-mono text-[#522915] uppercase tracking-widest font-black mb-3">
                  KEY DELIVERABLES
                </div>
                <ul className="space-y-2 text-xs text-[#200f07] font-bold">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#c2410c]"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
