import React from 'react';
import { ParsedFrameworkSection } from '../frameworkTypes';
import { motion } from 'motion/react';
import { Flame, ShieldCheck, User, Sparkles, Briefcase, MapPin, Compass } from 'lucide-react';

interface EmotionalRegulationMapProps {
  sections: ParsedFrameworkSection[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}

const REGULATION_ICONS = [User, Sparkles, Briefcase, MapPin, Compass];

export const EmotionalRegulationMap: React.FC<EmotionalRegulationMapProps> = ({
  sections,
  selectedIndex,
  onSelectIndex
}) => {
  // SVG Canvas configuration
  // Width: 600, Height: 420
  // Start: (70, 210), End: (530, 210)
  // 5 Intermediate node positions (x: 300, y: [60, 135, 210, 285, 360])
  const startPt = { x: 70, y: 210 };
  const endPt = { x: 530, y: 210 };

  const nodeYCoords = [60, 135, 210, 285, 360];

  return (
    <div className="flex flex-col h-full justify-between gap-6">
      {/* Diagram container */}
      <div className="relative w-full aspect-[4/3] max-w-[560px] mx-auto flex items-center justify-center p-2">
        
        {/* SVG Pathways */}
        <svg
          viewBox="0 0 600 420"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="activeRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* 5 Bezier Curves connecting Start -> Intermediate -> End */}
          {nodeYCoords.map((ny, idx) => {
            const isSelected = selectedIndex === idx;
            // Bezier path: M 70 210 C 180 210, 190 ny, 300 ny C 410 ny, 420 210, 530 210
            const d = `M ${startPt.x} ${startPt.y} C 180 ${startPt.y}, 190 ${ny}, 300 ${ny} C 410 ${ny}, 420 ${endPt.y}, ${endPt.x} ${endPt.y}`;

            return (
              <g key={idx}>
                {/* Passive path */}
                <path
                  d={d}
                  fill="none"
                  stroke={isSelected ? 'url(#activeRouteGrad)' : 'rgba(255, 255, 255, 0.08)'}
                  strokeWidth={isSelected ? '3' : '1.5'}
                  strokeDasharray={isSelected ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />

                {/* Animated Flow Pulse when active */}
                {isSelected && (
                  <motion.circle
                    r="4.5"
                    fill="#f59e0b"
                    initial={{ offsetDistance: '0%' }}
                    animate={{
                      cx: [startPt.x, 300, endPt.x],
                      cy: [startPt.y, ny, endPt.y]
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut'
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Start Node: ACTIVACIÓN */}
        <div 
          style={{ left: '11.6%', top: '50%', transform: 'translate(-50%, -50%)' }}
          className="absolute z-10 w-20 sm:w-24 h-20 sm:h-24 rounded-2xl bg-neutral-900/95 border border-amber-500/30 flex flex-col items-center justify-center text-center p-2 shadow-xl backdrop-blur-sm pointer-events-none"
        >
          <Flame className="w-5 h-5 text-amber-500 mb-1 animate-pulse" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 font-bold">
            ORIGEN
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight">
            ACTIVACIÓN
          </span>
        </div>

        {/* 5 Intermediate Interactive Strategy Nodes */}
        {nodeYCoords.map((ny, idx) => {
          const isSelected = selectedIndex === idx;
          const section = sections[idx];
          if (!section) return null;
          const Icon = REGULATION_ICONS[idx] || Sparkles;

          const topPercent = (ny / 420) * 100;

          return (
            <button
              key={idx}
              role="button"
              aria-pressed={isSelected}
              aria-label={`Ruta de regulación: ${section.cleanTitle}`}
              onClick={() => onSelectIndex(idx)}
              style={{
                left: '50%',
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className={`absolute z-20 transition-all duration-200 cursor-pointer rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 text-left flex items-center gap-2.5 max-w-[210px] sm:max-w-[240px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isSelected
                  ? 'bg-neutral-900 border-2 border-amber-500 shadow-xl shadow-amber-500/20 scale-105 ring-4 ring-amber-500/10'
                  : 'bg-[#141414]/90 hover:bg-neutral-800 border border-white/10 hover:border-white/20 opacity-75 hover:opacity-100'
              }`}
            >
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                isSelected ? 'bg-amber-500 text-black' : 'bg-neutral-800 text-neutral-400'
              }`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 pr-1">
                <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                  {section.cleanTitle}
                </div>
                <div className="text-[10px] font-mono text-amber-400/90 truncate">
                  Vía 0{idx + 1}
                </div>
              </div>
            </button>
          );
        })}

        {/* End Node: CALMA / EQUILIBRIO */}
        <div 
          style={{ left: '88.3%', top: '50%', transform: 'translate(-50%, -50%)' }}
          className="absolute z-10 w-20 sm:w-24 h-20 sm:h-24 rounded-2xl bg-neutral-900/95 border border-emerald-500/30 flex flex-col items-center justify-center text-center p-2 shadow-xl backdrop-blur-sm pointer-events-none"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
            DESTINO
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight">
            CALMA
          </span>
        </div>

      </div>

      {/* Mobile Horizontal Quick Selector */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {sections.map((sec, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelectIndex(idx)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                isSelected
                  ? 'bg-amber-500 text-black border-amber-400 font-bold'
                  : 'bg-neutral-900 text-neutral-400 border-white/5'
              }`}
            >
              <span>Vía 0{idx + 1}: {sec.cleanTitle}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
