import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#contact') {
      onOpenContact();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t-2 border-[#200f07] bg-[#190b05] text-[#ebd4b9] py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b-2 border-zinc-800">
        
        {/* Brand Info Column */}
        <div className="md:col-span-5 space-y-4">
          <a href="#" className="inline-flex items-center gap-2.5 text-xl font-black tracking-tight text-white">
            <span className="w-3.5 h-3.5 rounded-full bg-[#f3b72b]"></span>
            <span className="font-mono text-base font-extrabold lowercase tracking-tight text-[#fce498]">
              masaladose<span className="text-[#c2410c]">.co</span>
            </span>
          </a>
          <p className="text-sm text-zinc-400 font-bold max-w-sm leading-relaxed">
            Digital solutions for businesses ready to build online — positioning your presence from a single webpage to a complete digital product engine.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f3b72b] hover:text-[#fce498] transition-colors cursor-pointer font-black"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-white font-black mb-4">
            NAVIGATION
          </div>
          <ul className="space-y-2.5 text-sm font-extrabold">
            {['What We Do', 'Stages', 'Process', 'Capabilities'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => handleNavClick(e, `#${item.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={onOpenContact}
                className="hover:text-white transition-colors duration-200 cursor-pointer text-left font-extrabold"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Services List */}
        <div className="md:col-span-2 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-white font-black mb-4">
            SERVICES
          </div>
          <ul className="space-y-2.5 text-sm text-zinc-400 font-bold">
            <li>Web Development</li>
            <li>AI Development</li>
            <li>SaaS Architecture</li>
            <li>Automation Systems</li>
            <li>UI / UX Design</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:col-span-2 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-white font-black mb-4">
            CONNECT
          </div>
          <ul className="space-y-2.5 text-sm font-bold">
            {['GitHub', 'LinkedIn', 'Instagram'].map((social) => (
              <li key={social}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span>{social}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#f3b72b] transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Rights */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 font-bold">
        <div>© 2026 masaladose.co. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <span className="text-[#fce498] font-black lowercase">your idea. our digital kitchen.</span>
        </div>
      </div>
    </footer>
  );
};
