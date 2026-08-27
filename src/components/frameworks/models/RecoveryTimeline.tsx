import React from 'react';
import { ParsedFrameworkSection } from '../frameworkTypes';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

interface RecoveryTimelineProps {
  sections: ParsedFrameworkSection[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}

export const RecoveryTimeline: React.FC<RecoveryTimelineProps> = ({
  sections,
  selectedIndex,
  onSelectIndex
}) => {
  return (
    <div className="flex flex-col h-full justify-between gap-6">
      
      {/* Category selector chips */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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

      {/* Qualitative Timeline Stage */}
      <div className="relative w-full aspect-[16/10] max-w-[540px] mx-auto bg-neutral-950/80 rounded-[2rem] border border-white/5 flex flex-col justify-between p-6 overflow-hidden">
        
        {/* Conceptual Axis Header */}
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 border-b border-white/5 pb-2">
          <span className="flex items-center gap-1 text-amber-400 font-bold">
            <Zap className="w-3 h-3" /> EVENTO
          </span>
          <span className="flex items-center gap-1 text-neutral-400">
            PROCESAMIENTO <ArrowRight className="w-3 h-3" />
          </span>
          <span className="flex items-center gap-1 text-emerald-400 font-bold">
            RETORNO A BASELINE
          </span>
        </div>

        {/* Dynamic Qualitative SVG Curves */}
        <div className="relative flex-1 flex items-center justify-center py-4">
          <AnimatePresence mode="wait">
            
            {/* 0: TIEMPO CORTO (Inmediato) */}
            {selectedIndex === 0 && (
              <motion.div
                key="short"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full flex flex-col justify-center"
              >
                <svg viewBox="0 0 450 160" className="w-full h-36">
                  {/* Baseline */}
                  <line x1="20" y1="130" x2="430" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Fast Spike Curve */}
                  <motion.path
                    d="M 20 130 Q 60 130 80 30 Q 110 30 140 130 L 430 130"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  />

                  {/* Highlight Peak Marker */}
                  <circle cx="95" cy="30" r="5" fill="#f59e0b" className="animate-pulse" />
                  <text x="95" y="18" fill="#f59e0b" fontSize="10" fontFamily="monospace" textAnchor="middle">Activación breve</text>
                  <text x="280" y="120" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">Retorno inmediato a reposo</text>
                </svg>
                <div className="text-center">
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Pico rápido · Desvanecimiento inmediato
                  </span>
                </div>
              </motion.div>
            )}

            {/* 1: TIEMPO MEDIO (Secuencial) */}
            {selectedIndex === 1 && (
              <motion.div
                key="medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full flex flex-col justify-center"
              >
                <div className="flex items-center justify-between w-full px-2 max-w-md mx-auto">
                  {/* Event A */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-amber-500/50 flex flex-col items-center justify-center text-center p-1 shadow-lg">
                      <span className="text-[9px] font-mono text-amber-400 font-bold">FASE 1</span>
                      <span className="text-[11px] font-bold text-white">Evento A</span>
                    </div>
                  </div>

                  <div className="flex-1 h-0.5 bg-amber-500/40 relative mx-2 flex items-center justify-center">
                    <div className="w-2 h-2 border-r-2 border-t-2 border-amber-500 rotate-45" />
                  </div>

                  {/* Event B */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-900 border-2 border-amber-500 flex flex-col items-center justify-center text-center p-1 shadow-xl">
                      <span className="text-[9px] font-mono text-amber-400 font-bold">FASE 2</span>
                      <span className="text-[11px] font-bold text-amber-400">Evento B</span>
                    </div>
                  </div>

                  <div className="flex-1 h-0.5 bg-amber-500/40 relative mx-2 flex items-center justify-center">
                    <div className="w-2 h-2 border-r-2 border-t-2 border-amber-500 rotate-45" />
                  </div>

                  {/* Event C */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-emerald-500/50 flex flex-col items-center justify-center text-center p-1 shadow-lg">
                      <span className="text-[9px] font-mono text-emerald-400 font-bold">FASE 3</span>
                      <span className="text-[11px] font-bold text-white">Evento C</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Procesamiento secuencial · Mantenimiento de foco continuo
                  </span>
                </div>
              </motion.div>
            )}

            {/* 2: TIEMPO LARGO (Estacionario) */}
            {selectedIndex === 2 && (
              <motion.div
                key="long"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full flex flex-col justify-center"
              >
                <svg viewBox="0 0 450 160" className="w-full h-36">
                  <line x1="20" y1="130" x2="430" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Plateau Curve */}
                  <motion.path
                    d="M 20 130 Q 50 130 70 40 L 320 40 Q 370 40 430 130"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />

                  <circle cx="195" cy="40" r="5" fill="#f59e0b" />
                  <text x="195" y="24" fill="#f59e0b" fontSize="10" fontFamily="monospace" textAnchor="middle">Meseta persistente (rumia emocional)</text>
                  <text x="390" y="120" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">Retorno lento</text>
                </svg>
                <div className="text-center">
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Estado prolongado · Memoria de persistencia
                  </span>
                </div>
              </motion.div>
            )}

            {/* 3: TASA DE RECUPERACIÓN (Comparativa Cualitativa) */}
            {selectedIndex === 3 && (
              <motion.div
                key="rate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full flex flex-col justify-center"
              >
                <svg viewBox="0 0 450 160" className="w-full h-36">
                  <line x1="20" y1="130" x2="430" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Curve 1: Fast Recovery (Emerald) */}
                  <path
                    d="M 20 130 Q 50 25 80 25 Q 120 25 150 130"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                  />
                  <text x="115" y="16" fill="#10b981" fontSize="9" fontFamily="monospace">Retorno rápido</text>

                  {/* Curve 2: Slow Recovery (Amber) */}
                  <path
                    d="M 20 130 Q 50 45 80 45 Q 220 45 390 130"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <text x="260" y="38" fill="#f59e0b" fontSize="9" fontFamily="monospace">Retorno gradual y lento</text>
                </svg>

                <div className="text-center">
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Diferencial cualitativo de velocidad biológica
                  </span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

    </div>
  );
};
