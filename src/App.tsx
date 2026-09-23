import { useState } from 'react';
import TargetCursor from './components/TargetCursor';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { StageSelector } from './components/StageSelector';
import { StageComparison } from './components/StageComparison';
import { Process } from './components/Process';
import { Capabilities } from './components/Capabilities';
import { BrandStatement } from './components/BrandStatement';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => setIsContactModalOpen(true);
  const handleCloseContact = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-[#f3b72b] text-[#200f07] relative font-sans font-bold overflow-x-hidden">
      {/* Intro Preloader Animation Screen */}
      <IntroAnimation onComplete={() => console.log('Intro animation finished')} />

      {/* GSAP TargetCursor in Coffee Brown */}
      <TargetCursor 
        spinDuration={2.5}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#200f07"
        cursorColorOnTarget="#c2410c"
        targetSelector="a, button, .cursor-target"
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Sections */}
      <main id="main-content">
        {/* Section 09 & 10: Hero with Abstract Blueprint System & Scroll Prompt */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Section 12: What We Do (From presence to product) */}
        <WhatWeDo />

        {/* Section 13, 14, 15, 16 & 17: Stage Selector centerpiece with live Interactive Architecture */}
        <StageSelector />

        {/* Section 18: Stage Comparison Matrix */}
        <StageComparison />

        {/* Section 19: Process (From idea to launch) */}
        <Process />

        {/* Section 20: Capabilities (What we can build) */}
        <Capabilities />

        {/* Section 21: Brand Statement (We don't just build websites...) */}
        <BrandStatement />

        {/* Section 23: Final CTA */}
        <FinalCTA onOpenContact={handleOpenContact} />
      </main>

      {/* Section 24: Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Section 22: Project Inquiry Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}

export default App;
