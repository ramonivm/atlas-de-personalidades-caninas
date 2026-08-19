import React from 'react';
import { ParsedFrameworkSection } from '../frameworkTypes';
import { motion, AnimatePresence } from 'motion/react';
import { User, Dog as DogIcon, Shield, Layers, Repeat, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface BondRelationshipMapProps {
  sections: ParsedFrameworkSection[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}

export const BondRelationshipMap: React.FC<BondRelationshipMapProps> = ({
  sections,
  selectedIndex,
  onSelectIndex
}) => {
  return (
    <div className="flex flex-col h-full justify-between gap-6">
      
      {/* Category selector chips inside model */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {sections.map((sec, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              role="button"
              aria-pressed={isSelected}
              onClick={() => onSelectIndex(idx)}
              className={`px-3 py-2.5 rounded-2xl text-left transition-all cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isSelected
                  ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/10'
                  : 'bg-neutral-900/90 text-neutral-300 hover:text-white border-white/5 hover:border-white/10'
              }`}
            >
              <div className="text-[10px] font-mono opacity-80">0{idx + 1}</div>
              <div className="text-xs font-bold truncate">{sec.cleanTitle}</div>
            </button>
          );
        })}
      </div>

      {/* Interactive Geometry Stage */}
      <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto bg-neutral-950/80 rounded-[2rem] border border-white/5 flex items-center justify-center p-6 overflow-hidden">
        
        {/* Subtle coordinate grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* Dynamic Geometry SVG & Nodes */}
        <AnimatePresence mode="wait">
          
          {/* 0: FUSIÓN (Simbiosis) */}
          {selectedIndex === 0 && (
            <motion.div
              key="fusion"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Overlapping glowing auras */}
              <div className="absolute w-52 h-52 rounded-full bg-amber-500/15 blur-2xl animate-pulse" />
              <div className="absolute w-36 h-36 rounded-full border border-amber-500/30 border-dashed" />
              <div className="absolute w-44 h-44 rounded-full border border-white/10" />

              {/* Two overlapping nodes */}
              <div className="relative flex items-center justify-center -space-x-6">
                <div className="w-24 h-24 rounded-full bg-neutral-900 border-2 border-amber-500/80 flex flex-col items-center justify-center text-center p-2 shadow-2xl z-10">
                  <User className="w-5 h-5 text-amber-400 mb-0.5" />
                  <span className="text-[10px] font-bold text-white uppercase">HUMANO</span>
                </div>
                <div className="w-24 h-24 rounded-full bg-amber-500/20 border-2 border-amber-500 flex flex-col items-center justify-center text-center p-2 shadow-2xl z-20 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mb-1 animate-ping" />
                  <span className="text-[10px] font-bold text-amber-300 uppercase">PERRO</span>
                </div>
              </div>

              <div className="absolute bottom-3 text-center">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Órbitas superpuestas · Límite difuso
                </span>
              </div>
            </motion.div>
          )}

          {/* 1: COOPERATIVO (Equipo) */}
          {selectedIndex === 1 && (
            <motion.div
              key="cooperative"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex flex-col items-center justify-center gap-6"
            >
              {/* Shared functional field line */}
              <div className="relative w-full max-w-xs flex items-center justify-between px-4">
                
                {/* SVG Bidirectional Sync Flow */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 60">
                  <line x1="60" y1="30" x2="220" y2="30" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" />
                  <circle cx="140" cy="30" r="4" fill="#f59e0b" className="animate-pulse" />
                </svg>

                {/* Human Node */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-neutral-900 border-2 border-white/20 flex flex-col items-center justify-center text-center p-2 shadow-xl">
                  <User className="w-5 h-5 text-white mb-0.5" />
                  <span className="text-[10px] font-bold text-white uppercase">HUMANO</span>
                </div>

                {/* Sync Badge */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg font-bold">
                  <Repeat className="w-4 h-4" />
                </div>

                {/* Dog Node */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-neutral-900 border-2 border-amber-500 flex flex-col items-center justify-center text-center p-2 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 mb-1" />
                  <span className="text-[10px] font-bold text-amber-400 uppercase">PERRO</span>
                </div>
              </div>

              <div className="text-center">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Nodos equivalentes · Bidireccional
                </span>
              </div>
            </motion.div>
          )}

          {/* 2: FUNCIONAL (Referencial) */}
          {selectedIndex === 2 && (
            <motion.div
              key="functional"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex flex-col items-center justify-center gap-4"
            >
              {/* Reference Anchor (Top: Human) */}
              <div className="w-24 h-16 rounded-2xl bg-neutral-900 border-2 border-white/30 flex items-center justify-center gap-2 shadow-xl px-3">
                <User className="w-4 h-4 text-white" />
                <div className="text-left">
                  <div className="text-[9px] font-mono text-neutral-400 uppercase">REFERENCIA</div>
                  <div className="text-xs font-bold text-white">HUMANO</div>
                </div>
              </div>

              {/* Directional Vector Arrow */}
              <div className="w-0.5 h-12 bg-amber-500 relative flex items-center justify-center">
                <div className="w-2 h-2 border-r-2 border-b-2 border-amber-500 rotate-45 translate-y-4" />
              </div>

              {/* Structured Follower (Bottom: Dog) */}
              <div className="w-24 h-16 rounded-2xl bg-neutral-900 border-2 border-amber-500 flex items-center justify-center gap-2 shadow-xl px-3">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="text-left">
                  <div className="text-[9px] font-mono text-amber-400/90 uppercase">ESTRUCTURA</div>
                  <div className="text-xs font-bold text-amber-400">PERRO</div>
                </div>
              </div>

              <div className="mt-2 text-center">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Relación estructurada · Humano como ancla
                </span>
              </div>
            </motion.div>
          )}

          {/* 3: PARALELO (Coexistencia) */}
          {selectedIndex === 3 && (
            <motion.div
              key="parallel"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex flex-col items-center justify-center gap-5"
            >
              <div className="w-full max-w-xs space-y-4">
                
                {/* Lane 1: Human Trajectory */}
                <div className="relative flex items-center gap-3">
                  <div className="w-16 h-12 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 h-0.5 bg-white/20 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-r border-t border-white/40 rotate-45" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 whitespace-nowrap">Trayectoria A</span>
                </div>

                {/* Lane 2: Dog Trajectory */}
                <div className="relative flex items-center gap-3">
                  <div className="w-16 h-12 rounded-xl bg-neutral-900 border-2 border-amber-500 flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>
                  <div className="flex-1 h-0.5 bg-amber-500 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-amber-500 rotate-45" />
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 whitespace-nowrap">Trayectoria B</span>
                </div>

              </div>

              <div className="text-center">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Vectores paralelos · Autonomía coexistente
                </span>
              </div>
            </motion.div>
          )}

          {/* 4: TERRITORIAL (Patrimonial) */}
          {selectedIndex === 4 && (
            <motion.div
              key="territorial"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Outer Protective Perimeter */}
              <div className="absolute w-56 h-56 rounded-full border-2 border-amber-500/40 border-dashed flex items-center justify-center" />
              <div className="absolute w-44 h-44 rounded-full bg-amber-500/5" />

              {/* Orbiting Dog Node as Guardian Perimeter */}
              <div className="absolute top-4 right-10 w-16 h-16 rounded-2xl bg-neutral-900 border-2 border-amber-500 flex flex-col items-center justify-center text-center p-1 shadow-xl z-20">
                <Shield className="w-4 h-4 text-amber-400 mb-0.5" />
                <span className="text-[9px] font-bold text-amber-400 uppercase">PERRO</span>
              </div>

              {/* Protected Center: Human */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-neutral-900 border-2 border-white/20 flex flex-col items-center justify-center text-center p-2 shadow-2xl">
                <User className="w-5 h-5 text-white mb-0.5" />
                <span className="text-[9px] font-mono text-neutral-400 uppercase">ACTIVO PROTEGIDO</span>
                <span className="text-[11px] font-bold text-white">HUMANO</span>
              </div>

              <div className="absolute bottom-3 text-center">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Perímetro de custodia · Protección patrimonial
                </span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </div>
  );
};
