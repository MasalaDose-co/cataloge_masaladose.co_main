import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Stages', href: '#stages' },
    { name: 'Process', href: '#process' },
    { name: 'Capabilities', href: '#capabilities' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#c2410c] origin-left z-50 pointer-events-none"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'solid-mustard-navbar py-4 shadow-md'
            : 'bg-[#f3b72b] py-6 border-b-2 border-[#200f07]/30'
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo in Lowercase masaladose.co */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xl font-black tracking-tight text-[#200f07] focus:outline-none"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-[#200f07] group-hover:scale-125 transition-transform duration-200"></span>
          <span className="font-mono text-base font-extrabold lowercase tracking-tight">
            masaladose<span className="text-[#c2410c]">.co</span>
          </span>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-extrabold text-[#522915]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#200f07] transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#200f07] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right: Desktop CTA Button with Solid Hard Shadow */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            data-cursor="CONTACT"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#200f07] text-[#fffbeb] hover:bg-[#381c0e] border-2 border-[#200f07] text-sm font-black tracking-wide transition-all duration-200 shadow-hard hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#f3b72b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-[#200f07] hover:bg-[#200f07]/10 transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-[#f3b72b] z-50 flex flex-col justify-between p-8 border-t-2 border-[#200f07] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#522915] font-black mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-3xl font-black text-[#200f07] hover:text-[#c2410c] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t-2 border-[#200f07]/20 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 rounded-xl bg-[#200f07] text-[#fffbeb] font-black text-center flex items-center justify-center gap-2 transition-colors shadow-hard"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5 text-[#f3b72b]" />
            </button>
            <div className="text-center text-xs text-[#522915] font-mono font-bold lowercase">
              masaladose.co — digital solutions studio
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
