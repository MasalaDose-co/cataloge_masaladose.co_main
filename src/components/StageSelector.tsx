import React, { useState } from 'react';
import { STAGES_DATA } from '../data/stages';
import type { StageId } from '../types';
import { StageCard } from './StageCard';
import { StageArchitecture } from './StageArchitecture';

export const StageSelector: React.FC = () => {
  const [activeStage, setActiveStage] = useState<StageId>('01');

  return (
    <section id="stages" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t-2 border-[#200f07]">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-[#200f07] bg-[#fce498] text-[#200f07] font-mono text-xs font-black tracking-widest uppercase mb-4 shadow-hard">
          CHOOSE YOUR DIGITAL STAGE
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-[#200f07] mb-6 leading-[1.05] lowercase">
          how far do you want to take your digital presence?
        </h2>
        <p className="text-lg text-[#381c0e] font-extrabold leading-relaxed">
          Not every business needs the same architecture. Choose the stage that matches where your business is today — starting from essential web presence to a complete SaaS digital platform.
        </p>
      </div>

      {/* Interactive Architecture Visual Section */}
      <div className="mb-16">
        <StageArchitecture activeStage={activeStage} />
      </div>

      {/* Three Stage Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {STAGES_DATA.map((stage) => (
          <StageCard
            key={stage.id}
            stage={stage}
            isActive={activeStage === stage.id}
            onHover={() => setActiveStage(stage.id)}
          />
        ))}
      </div>
    </section>
  );
};
