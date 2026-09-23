import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import type { StageInfo } from '../types';

interface StageCardProps {
  stage: StageInfo;
  isActive: boolean;
  onHover: () => void;
}

export const StageCard: React.FC<StageCardProps> = ({ stage, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={onHover}
      data-cursor="EXPLORE"
      className={`rounded-3xl border-2 transition-all duration-300 p-8 flex flex-col justify-between relative cursor-pointer group ${
        isActive
          ? 'bg-[#200f07] text-[#fffbeb] border-[#200f07] shadow-hard-lg scale-[1.03]'
          : 'bg-[#fce498] text-[#200f07] border-[#200f07] shadow-hard hover:-translate-y-1.5'
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-mono tracking-widest uppercase font-black ${
            isActive ? 'text-[#f3b72b]' : 'text-[#c2410c]'
          }`}>
            {stage.number}
          </span>
          <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md font-black ${
            isActive ? 'bg-zinc-900 text-zinc-200 border border-zinc-700' : 'bg-[#200f07]/10 text-[#200f07] border border-[#200f07]/20'
          }`}>
            ARCHITECTURE
          </span>
        </div>

        <h3 className={`text-3xl font-black font-display tracking-tight mb-2 lowercase ${
          isActive ? 'text-white' : 'text-[#200f07]'
        }`}>
          {stage.name}
        </h3>

        {/* Positioning Quote */}
        <div className={`text-xs font-mono p-3.5 rounded-xl border-2 mb-4 font-bold ${
          isActive
            ? 'text-[#fce498] bg-[#c2410c]/30 border-[#c2410c]'
            : 'text-[#200f07] bg-[#200f07]/10 border-[#200f07]/20'
        }`}>
          "{stage.positioning}"
        </div>

        <p className={`text-sm leading-relaxed mb-6 font-bold ${
          isActive ? 'text-zinc-300' : 'text-[#381c0e]'
        }`}>
          {stage.description}
        </p>

        {/* Features Checklist */}
        <div className={`space-y-2.5 mb-8 border-t-2 border-b-2 py-5 ${
          isActive ? 'border-zinc-800' : 'border-[#200f07]/20'
        }`}>
          <div className={`text-xs font-mono uppercase tracking-wider font-black mb-2 ${
            isActive ? 'text-zinc-400' : 'text-[#522915]'
          }`}>
            INCLUDED FEATURES
          </div>
          {stage.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs font-extrabold">
              <Check className={`w-4 h-4 shrink-0 mt-0.5 stroke-[3] ${
                isActive ? 'text-[#f3b72b]' : 'text-[#c2410c]'
              }`} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Target Customers */}
        <div className="mb-8">
          <div className={`text-xs font-mono uppercase tracking-wider font-black mb-2 ${
            isActive ? 'text-zinc-400' : 'text-[#522915]'
          }`}>
            IDEAL FOR
          </div>
          <div className="flex flex-wrap gap-1.5">
            {stage.idealFor.map((target, idx) => (
              <span
                key={idx}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-md font-black ${
                  isActive
                    ? 'bg-zinc-900 border border-zinc-700 text-zinc-200'
                    : 'bg-[#200f07]/10 border border-[#200f07]/20 text-[#200f07]'
                }`}
              >
                {target}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Direct URL Navigation Button */}
      <a
        href={stage.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-4 px-6 rounded-xl font-black text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-between border-2 border-[#200f07] ${
          isActive
            ? 'bg-[#f3b72b] text-[#200f07] hover:bg-[#fffbeb] shadow-hard'
            : 'bg-[#200f07] text-[#fffbeb] hover:bg-[#381c0e] shadow-hard'
        }`}
      >
        <span>Explore Stage {stage.id} →</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
      </a>
    </div>
  );
};
