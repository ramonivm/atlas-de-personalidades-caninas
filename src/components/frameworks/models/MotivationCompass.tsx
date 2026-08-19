import React from 'react';
import { ParsedFrameworkSection } from '../frameworkTypes';
import { motion } from 'motion/react';
import { 
  Heart, 
  Users, 
  Target, 
  Eye, 
  Search, 
  Wrench, 
  Compass,
  Sparkles
} from 'lucide-react';

interface MotivationCompassProps {
  sections: ParsedFrameworkSection[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}

const MOTIVATION_ICONS = [
  Heart,
  Users,
  Target,
  Eye,
  Search,
  Wrench,
  Compass
];

// 7 Radial Coordinates on 520x520 SVG Canvas (radius ~175 from center [260, 260])
// 7 items evenly distributed by (360 / 7) = ~51.43 degrees, starting from top -90°
const ANGLES = [
  -90,               // 0: Afecto y Cercanía (Top)
  -90 + 51.43,       // 1: Cooperación Social (-38.57°)
  -90 + 51.43 * 2,   // 2: Control y Orden (+12.86°)
  -90 + 51.43 * 3,   // 3: Activación Visual (+64.29°)
  -90 + 51.43 * 4,   // 4: Exploración Olfativa (+115.71°)
  -90 + 51.43 * 5,   // 5: Resolución Instrumental (+167.14°)
  -90 + 51.43 * 6    // 6: Autonomía (+218.57°)
];

export const MotivationCompass: React.FC<MotivationCompassProps> = ({
  sections,
  selectedIndex,
  onSelectIndex
}) => {
  const center = { x: 260, y: 260 };
  const radius = 175;

  const nodePositions = ANGLES.map((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      cx: center.x + radius * Math.cos(rad),
      cy: center.y + radius * Math.sin(rad),
      angle: angleDeg
    };
  });

  return (
    <div className="flex flex-col h-full justify-between gap-6">
      
      {/* Compass Canvas */}
      <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center p-2">
        
        {/* SVG Dial & Ray Lines */}
        <svg 
          viewBox="0 0 520 520" 
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="compassCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Compass Rings & Cardinal marks */}
          <circle cx={center.x} cy={center.y} r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <circle cx={center.x} cy={center.y} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" />
          <circle cx={center.x} cy={center.y} r="50" fill="url(#compassCenterGlow)" />

          {/* Radiating Rays */}
          {nodePositions.map((pos, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <g key={idx}>
                <line
                  x1={center.x}
                  y1={center.y}
                  x2={pos.cx}
                  y2={pos.cy}
                  stroke={isSelected ? '#f59e0b' : 'rgba(255,255,255,0.08)'}
                  strokeWidth={isSelected ? '2.5' : '1'}
                  strokeDasharray={isSelected ? 'none' : '2 2'}
                  className="transition-all duration-300"
                />

                {isSelected && (
                  <motion.circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r="4"
                    fill="#f59e0b"
                    initial={{ cx: center.x, cy: center.y, opacity: 0 }}
                    animate={{ cx: pos.cx, cy: pos.cy, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Center Nucleus */}
        <div className="absolute z-10 w-24 h-24 rounded-full bg-neutral-900/95 border border-amber-500/40 shadow-xl flex flex-col items-center justify-center text-center p-2 backdrop-blur-sm pointer-events-none">
          <Sparkles className="w-4 h-4 text-amber-400 mb-1" />
          <span className="text-[8px] font-mono uppercase tracking-widest text-amber-400/90 font-bold">
            SISTEMA
          </span>
          <span className="text-[10px] font-bold text-white tracking-tight leading-tight">
            RECOMPENSA
          </span>
        </div>

        {/* 7 Radial Node Controls */}
        {nodePositions.map((pos, idx) => {
          const isSelected = selectedIndex === idx;
          const section = sections[idx];
          if (!section) return null;
          const Icon = MOTIVATION_ICONS[idx] || Sparkles;

          const leftPercent = (pos.cx / 520) * 100;
          const topPercent = (pos.cy / 520) * 100;

          return (
            <button
              key={idx}
              role="button"
              aria-pressed={isSelected}
              aria-label={`Motivación: ${section.cleanTitle}`}
              onClick={() => onSelectIndex(idx)}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className={`absolute z-20 transition-all duration-200 cursor-pointer rounded-2xl p-2 sm:p-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isSelected
                  ? 'bg-neutral-900 border-2 border-amber-500 shadow-xl shadow-amber-500/20 scale-110 ring-4 ring-amber-500/10'
                  : 'bg-[#141414]/90 hover:bg-neutral-800 border border-white/10 hover:border-white/20 opacity-75 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-amber-500 text-black' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  <Icon className="w-3 h-3" />
                </div>
                <span className={`text-[11px] font-bold whitespace-nowrap ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                  {section.cleanTitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Horizontal Quick Selector */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {sections.map((sec, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelectIndex(idx)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                isSelected
                  ? 'bg-amber-500 text-black border-amber-400 font-bold'
                  : 'bg-neutral-900 text-neutral-400 border-white/5'
              }`}
            >
              <span>{sec.cleanTitle}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
