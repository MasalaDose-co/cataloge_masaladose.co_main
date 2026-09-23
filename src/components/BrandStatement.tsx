import React from 'react';
import { motion } from 'framer-motion';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-32 sm:py-44 px-6 sm:px-8 max-w-7xl mx-auto border-t-2 border-[#200f07] my-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#c2410c] font-black">
            OUR CORE PROMISE
          </p>
          <h2 className="text-4xl sm:text-7xl font-black font-display tracking-tight text-[#200f07] leading-[1.05] lowercase">
            We don't just build websites.<br />
            <span className="text-[#c2410c]">
              We build digital systems.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl text-[#381c0e] font-extrabold max-w-2xl mx-auto leading-relaxed"
        >
          From a single landing page to a complete SaaS platform, masaladose.co helps turn business ideas into usable digital products.
        </motion.p>
      </div>
    </section>
  );
};
