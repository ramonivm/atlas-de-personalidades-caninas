import React, { useState } from 'react';
import { ParsedFrameworkSection } from '../frameworkTypes';
import { motion, AnimatePresence } from 'motion/react';
import { SlidersHorizontal, Shuffle, Layers, Shield } from 'lucide-react';

interface PlasticityMapProps {
  sections: ParsedFrameworkSection[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}

export const PlasticityMap: React.FC<PlasticityMapProps> = ({
  sections,
  selectedIndex,
  onSelectIndex
}) => {
  // Context state simulation (0, 1, 2)
  const [contextVariant, setContextVariant] = useState(0);

  const toggleContext = () => {
    setContextVariant((prev) => (prev + 1) % 3);
  };

  return (
    <div className="flex flex-col h-full justify-between gap-6">
      
      {/* 2-Option Spectrum Selector */}
      <div className="grid grid-cols-2 gap-3">
        {sections.map((sec, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              role="button"
              aria-pressed={isSelected}
              onClick={() => onSelectIndex(idx)}
              className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isSelected
                  ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/10'
                  : 'bg-neutral-900/90 text-neutral-300 hover:text-white border-white/5 hover:border-white/10'
              }`}
            >
              <div className="text-[10px] font-mono opacity-80 uppercase">
                {idx === 0 ? 'Adaptación' : 'Especialización'}
              </div>
              <div className="text-xs sm:text-sm font-bold truncate mt-0.5">
                {sec.cleanTitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Spectrum Bar Header */}
      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 px-4">
        <span className={selectedIndex === 0 ? 'text-amber-400 font-bold' : ''}>
          ● MÁXIMA PLASTICIDAD
        </span>
        <div className="flex-1 h-px bg-white/10 mx-3 relative">
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-500 transition-all duration-300"
            style={{ left: selectedIndex === 0 ? '10%' : '90%' }}
          />
        </div>
        <span className={selectedIndex === 1 ? 'text-amber-400 font-bold' : ''}>
          ESPECIALIZACIÓN PURA ●
        </span>
      </div>

      {/* Interactive Lattice / Grid Stage */}
      <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto bg-neutral-950/80 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center p-6 overflow-hidden">
        
        {/* Dynamic Lattice Display */}
        <AnimatePresence mode="wait">
          {selectedIndex === 0 ? (
            /* Plasticity High: Morphing Lattice */
            <motion.div
              key={`plastic-${contextVariant}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className={`grid gap-3 transition-all duration-500 ${
                contextVariant === 0 
                  ? 'grid-cols-3' 
                  : contextVariant === 1 
                    ? 'grid-cols-2 rotate-45' 
                    : 'grid-cols-4 -rotate-12'
              }`}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    layout
                    className="w-10 h-10 rounded-xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-amber-300 font-mono text-[10px] font-bold shadow-lg"
                  >
                    {contextVariant === 0 ? '□' : contextVariant === 1 ? '◇' : '○'}
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-2">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Estructura dinámica: Se reorganiza según la demanda
                </span>
              </div>
            </motion.div>
          ) : (
            /* Rigidity: Fixed Rigid Matrix */
            <motion.div
              key={`rigid-${contextVariant}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              {/* Context shifts around it, but lattice stays 100% rigid */}
              <div className="relative p-6 rounded-3xl border border-dashed border-white/10">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-lg bg-neutral-900 border-2 border-white/40 flex items-center justify-center text-neutral-300 font-mono text-[10px] font-bold"
                    >
                      ■
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-2">
                <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-white/5">
                  Estructura fija: Máximo desempeño solo en su rol
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Environmental Context Shift Simulator Button */}
        <button
          onClick={toggleContext}
          className="mt-4 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-2 cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <Shuffle className="w-3.5 h-3.5 text-amber-400" />
          <span>Probar cambio de contexto #{contextVariant + 1}</span>
        </button>

      </div>

    </div>
  );
};
