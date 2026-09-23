import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { StageId } from '../types';
import { Layout, Database, Sparkles, Cpu, Layers, FormInput, Activity } from 'lucide-react';

interface StageArchitectureProps {
  activeStage: StageId;
}

export const StageArchitecture: React.FC<StageArchitectureProps> = ({ activeStage }) => {
  return (
    <div className="w-full h-full min-h-[360px] rounded-3xl border-2 border-[#200f07] bg-[#200f07] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-hard-lg text-[#fffbeb]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none"></div>

      {/* Header Label */}
      <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-4 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#f3b72b] animate-ping"></div>
          <span className="text-xs font-mono tracking-widest text-[#fce498] font-black uppercase">
            LIVE SYSTEM DIAGRAM // STAGE {activeStage}
          </span>
        </div>
        <span className="text-[10px] font-mono px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[#f3b72b] font-black">
          {activeStage === '01' ? 'PRESENCE_V1' : activeStage === '02' ? 'GROWTH_V2' : 'SCALE_ENTERPRISE_V3'}
        </span>
      </div>

      {/* Main Diagram Canvas */}
      <div className="relative z-10 my-auto py-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* STAGE 01 ARCHITECTURE DIAGRAM */}
          {activeStage === '01' && (
            <motion.div
              key="stage-01-arch"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm flex flex-col items-center gap-4"
            >
              <div className="w-full p-6 rounded-2xl border-2 border-[#f3b72b] bg-zinc-900/90 shadow-lg flex flex-col items-center text-center gap-3">
                <div className="p-3.5 rounded-xl bg-[#f3b72b] text-[#200f07]">
                  <Layout className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-mono font-black text-white tracking-wider">SINGLE-PAGE WEBSITE</div>
                  <div className="text-xs text-zinc-300 mt-1 font-bold">Responsive • High-Speed • Essential Info</div>
                </div>
                <div className="w-full pt-4 border-t border-zinc-800">
                  <div className="w-full py-2.5 rounded-xl bg-[#f3b72b] text-[#200f07] text-xs font-mono font-black uppercase">
                    CALL TO ACTION / CONTACT
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STAGE 02 ARCHITECTURE DIAGRAM */}
          {activeStage === '02' && (
            <motion.div
              key="stage-02-arch"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md flex flex-col items-center gap-4"
            >
              {/* Top Website Box */}
              <div className="px-7 py-3.5 rounded-xl border-2 border-[#f3b72b] bg-zinc-900 text-white font-mono text-xs font-black tracking-wider flex items-center gap-2.5 shadow-lg">
                <Layout className="w-5 h-5 text-[#f3b72b]" />
                MULTI-PAGE WEBSITE & CMS
              </div>

              {/* Animated Particle Stream Line */}
              <div className="w-1 h-6 bg-gradient-to-b from-[#f3b72b] to-zinc-700 relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="w-full h-3 bg-[#fce498]"
                />
              </div>

              {/* Middle 3 Columns */}
              <div className="grid grid-cols-3 gap-3 w-full">
                <div className="p-3.5 rounded-xl border border-zinc-700 bg-zinc-900/90 text-center flex flex-col items-center gap-1.5 shadow-sm">
                  <FormInput className="w-5 h-5 text-[#f3b72b]" />
                  <span className="text-[11px] font-mono text-zinc-200 font-black">FORMS</span>
                </div>
                <div className="p-3.5 rounded-xl border border-zinc-700 bg-zinc-900/90 text-center flex flex-col items-center gap-1.5 shadow-sm">
                  <Database className="w-5 h-5 text-[#f3b72b]" />
                  <span className="text-[11px] font-mono text-zinc-200 font-black">DATABASE</span>
                </div>
                <div className="p-3.5 rounded-xl border border-zinc-700 bg-zinc-900/90 text-center flex flex-col items-center gap-1.5 shadow-sm">
                  <Layers className="w-5 h-5 text-[#f3b72b]" />
                  <span className="text-[11px] font-mono text-zinc-200 font-black">CMS</span>
                </div>
              </div>

              {/* Connector down to Automation */}
              <div className="w-1 h-6 bg-zinc-700"></div>

              {/* Bottom Automation node */}
              <div className="w-full py-3 rounded-xl border-2 border-[#c2410c] bg-[#c2410c] text-white font-mono text-xs font-black flex items-center justify-center gap-2 shadow-md">
                <Activity className="w-4 h-4 text-amber-200" />
                BUSINESS AUTOMATION & EMAIL PIPELINES
              </div>
            </motion.div>
          )}

          {/* STAGE 03 ARCHITECTURE DIAGRAM */}
          {activeStage === '03' && (
            <motion.div
              key="stage-03-arch"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-lg flex flex-col items-center gap-3.5"
            >
              {/* Frontend Node */}
              <div className="px-7 py-3 rounded-xl border-2 border-[#f3b72b] bg-zinc-900 text-white font-mono text-xs font-black tracking-wider flex items-center gap-2.5 shadow-xl">
                <Layout className="w-5 h-5 text-[#f3b72b]" />
                FRONTEND / SAAS APP PLATFORM
              </div>

              <div className="w-1 h-4 bg-[#f3b72b]"></div>

              {/* API Gateway */}
              <div className="px-6 py-2 rounded-xl border-2 border-zinc-600 bg-zinc-900 text-[#fce498] font-mono text-xs font-black shadow-md">
                SECURE API GATEWAY
              </div>

              <div className="w-1 h-4 bg-zinc-700"></div>

              {/* 3 Core Services */}
              <div className="grid grid-cols-3 gap-3 w-full">
                <div className="p-3 rounded-xl border border-zinc-700 bg-zinc-900/90 text-center flex flex-col items-center gap-1.5">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <span className="text-[10px] font-mono text-zinc-200 font-black">DATABASE</span>
                </div>
                <div className="p-3 rounded-xl border-2 border-[#c2410c] bg-[#c2410c] text-center flex flex-col items-center gap-1.5 shadow-md">
                  <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />
                  <span className="text-[10px] font-mono text-white font-black">AI ENGINE</span>
                </div>
                <div className="p-3 rounded-xl border border-zinc-700 bg-zinc-900/90 text-center flex flex-col items-center gap-1.5">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] font-mono text-zinc-200 font-black">AUTOMATION</span>
                </div>
              </div>

              <div className="w-1 h-4 bg-zinc-700"></div>

              {/* Admin Dashboard output */}
              <div className="w-full py-3 rounded-xl border-2 border-[#f3b72b] bg-gradient-to-r from-zinc-900 via-[#c2410c] to-zinc-900 text-center text-white font-mono text-xs font-black flex items-center justify-center gap-2 shadow-lg">
                <Activity className="w-4 h-4 text-[#f3b72b]" />
                ADMIN DASHBOARD & REAL-TIME ANALYTICS
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="border-t-2 border-zinc-800 pt-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 z-10 font-bold">
        <span>ARCHITECTURE VISUALIZATION</span>
        <span className="text-[#f3b72b] font-black lowercase">masaladose studio</span>
      </div>
    </div>
  );
};
