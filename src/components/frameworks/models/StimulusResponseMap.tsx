import React from 'react';
import { ParsedFrameworkSection } from '../frameworkTypes';
import { motion } from 'motion/react';
import { Zap, ShieldAlert, ArrowUpRight, ArrowDownLeft, Disc, EyeOff, Radio } from 'lucide-react';

interface StimulusResponseMapProps {
  sections: ParsedFrameworkSection[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}

// 6 peripheral response node coordinates on a 500x500 SVG canvas (radius ~170 from center [250, 250])
// Angles: 0: Escalamiento (top, 270°), 1: Repliegue (bottom-left, 150°), 2: Contención (left, 210°),
// 3: Intervención (top-right, 330°), 4: Desconexión (bottom-right, 30°), 5: Absorción (bottom, 90°)
const NODE_COORDINATES = [
  { cx: 250, cy: 75, angle: -90, label: 'Escalamiento', desc: '↑ Intensifica', icon: ArrowUpRight },
  { cx: 405, cy: 160, angle: -30, label: 'Intervención', desc: '→ Actúa', icon: Zap },
  { cx: 405, cy: 340, angle: 30, label: 'Desconexión', desc: '— Filtra', icon: EyeOff },
  { cx: 250, cy: 425, angle: 90, label: 'Absorción', desc: '○ Procesa', icon: Disc },
  { cx: 95, cy: 340, angle: 150, label: 'Repliegue', desc: '↙ Crea distancia', icon: ArrowDownLeft },
  { cx: 95, cy: 160, angle: 210, label: 'Contención', desc: '● Contiene', icon: ShieldAlert }
];

export const StimulusResponseMap: React.FC<StimulusResponseMapProps> = ({
  sections,
  selectedIndex,
  onSelectIndex
}) => {
  const center = { x: 250, y: 250 };

  return (
    <div className="flex flex-col h-full justify-between gap-6">
      
      {/* Visual Model Canvas */}
      <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center p-2">
        
        {/* SVG Connective Layer */}
        <svg 
          viewBox="0 0 500 500" 
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <defs>
            {/* Ambient Radial Gradient for Center */}
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Concentric subtle radar circles */}
          <circle cx={center.x} cy={center.y} r="80" fill="none" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
          <circle cx={center.x} cy={center.y} r="175" fill="none" stroke="rgba(255,255,255,0.04)" />
          <circle cx={center.x} cy={center.y} r="60" fill="url(#centerGlow)" />

          {/* Connection vectors between Center and Peripheral Nodes */}
          {NODE_COORDINATES.map((coord, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <g key={idx}>
                {/* Passive line */}
                <line
                  x1={center.x}
                  y1={center.y}
                  x2={coord.cx}
                  y2={coord.cy}
                  stroke={isSelected ? '#f59e0b' : 'rgba(255,255,255,0.1)'}
                  strokeWidth={isSelected ? '2.5' : '1'}
                  strokeDasharray={isSelected ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />

                {/* Active energy pulse particle */}
                {isSelected && (
                  <motion.circle
                    cx={coord.cx}
                    cy={coord.cy}
                    r="4"
                    fill="#f59e0b"
                    initial={{ cx: center.x, cy: center.y, opacity: 0 }}
                    animate={{ cx: coord.cx, cy: coord.cy, opacity: [0, 1, 0.8] }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Stimulus Nucleus */}
        <div className="absolute z-10 w-24 h-24 rounded-full bg-neutral-900/95 border border-amber-500/40 shadow-xl flex flex-col items-center justify-center text-center p-2 backdrop-blur-sm pointer-events-none">
          <Radio className="w-4 h-4 text-amber-400 mb-1 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/90 font-bold">
            Sobrecarga
          </span>
          <span className="text-xs font-bold text-white tracking-tight">
            ESTÍMULO
          </span>
        </div>

        {/* 6 Peripheral Interactive HTML Buttons */}
        {NODE_COORDINATES.map((coord, idx) => {
          const isSelected = selectedIndex === idx;
          const section = sections[idx];
          if (!section) return null;
          const Icon = coord.icon;

          // Convert canvas 500x500 coordinates to percentages for robust responsive CSS placement
          const leftPercent = (coord.cx / 500) * 100;
          const topPercent = (coord.cy / 500) * 100;

          return (
            <button
              key={idx}
              role="button"
              aria-pressed={isSelected}
              aria-label={`Seleccionar patrón: ${section.cleanTitle}`}
              onClick={() => onSelectIndex(idx)}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className={`absolute z-20 transition-all duration-200 cursor-pointer rounded-2xl p-2.5 sm:p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isSelected
                  ? 'bg-neutral-900 border-2 border-amber-500 shadow-xl shadow-amber-500/20 scale-105 ring-4 ring-amber-500/10'
                  : 'bg-[#141414]/90 hover:bg-neutral-800 border border-white/10 hover:border-white/20 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-amber-500 text-black' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 pr-1">
                  <div className={`text-xs font-bold whitespace-nowrap ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                    {section.cleanTitle}
                  </div>
                  <div className="text-[10px] font-mono text-amber-400/90 whitespace-nowrap">
                    {coord.desc}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Horizontal Quick Selector */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {sections.map((sec, idx) => {
          const isSelected = selectedIndex === idx;
          const desc = NODE_COORDINATES[idx]?.desc || '';
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
              <span>{sec.cleanTitle}</span>
              <span className="opacity-75 text-[10px] ml-1.5 font-mono">{desc}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
};
