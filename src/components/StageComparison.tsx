import React from 'react';
import { Check, Minus } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/comparison';

export const StageComparison: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t-2 border-[#200f07]">
      <div className="max-w-2xl mb-12">
        <div className="text-xs font-mono uppercase tracking-widest text-[#c2410c] font-black mb-3">
          ARCHITECTURE BREAKDOWN
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-[#200f07] mb-4 lowercase">
          different needs. different architecture.
        </h2>
        <p className="text-[#381c0e] font-extrabold text-sm sm:text-base">
          A clear side-by-side technical breakdown of capabilities unlocked across Presence, Growth, and Scale stages.
        </p>
      </div>

      {/* Comparison Table Container */}
      <div className="rounded-3xl border-2 border-[#200f07] bg-[#fce498] overflow-hidden shadow-hard-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-[#200f07] bg-[#200f07] text-[#fffbeb]">
                <th className="py-5 px-6 text-sm font-mono font-black w-1/3">
                  CAPABILITY / FEATURE
                </th>
                <th className="py-5 px-6 text-center text-sm font-mono text-[#f3b72b] font-black w-1/5">
                  STAGE 01<br />
                  <span className="text-xs text-zinc-300 font-bold">PRESENCE</span>
                </th>
                <th className="py-5 px-6 text-center text-sm font-mono text-[#f3b72b] font-black w-1/5">
                  STAGE 02<br />
                  <span className="text-xs text-zinc-300 font-bold">GROWTH</span>
                </th>
                <th className="py-5 px-6 text-center text-sm font-mono text-[#f3b72b] font-black w-1/5">
                  STAGE 03<br />
                  <span className="text-xs text-zinc-300 font-bold">SCALE</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-[#200f07]/20 text-sm font-bold">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#200f07]/10 transition-colors duration-150"
                >
                  <td className="py-4 px-6 text-[#200f07]">
                    <div className="font-extrabold">{row.feature}</div>
                    {row.note && (
                      <div className="text-[11px] font-mono text-[#522915] font-bold mt-0.5">{row.note}</div>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.stage1 ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#200f07]/20 text-[#200f07]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    ) : (
                      <Minus className="w-4 h-4 text-[#200f07]/30 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.stage2 ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#200f07]/30 text-[#200f07]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    ) : (
                      <Minus className="w-4 h-4 text-[#200f07]/30 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.stage3 ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#200f07] text-[#fffbeb] shadow-sm">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    ) : (
                      <Minus className="w-4 h-4 text-[#200f07]/30 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
