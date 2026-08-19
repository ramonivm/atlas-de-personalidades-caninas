import React, { useState, useEffect } from 'react';
import { Framework } from '../../types';

interface FrameworkNavigatorProps {
  frameworks: Framework[];
  selectedFrameworkId: string;
  onSelectFramework: (id: string) => void;
}

export const FrameworkNavigator: React.FC<FrameworkNavigatorProps> = ({
  frameworks,
  selectedFrameworkId,
  onSelectFramework
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`sticky top-[60px] sm:top-[70px] z-30 bg-[#0A0A0A]/95 backdrop-blur-xl -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-y border-white/5 transition-all duration-300 ease-out ${
        isScrolled ? 'py-2 shadow-2xl shadow-black/80' : 'py-3'
      }`}
    >
      {/* Horizontal Scrollable Row of Pills */}
      <div 
        role="tablist" 
        aria-label="Navegación de los 6 Marcos Etológicos"
        className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none relative z-10 py-0.5"
      >
        {frameworks.map((fw) => {
          const isSelected = fw.id === selectedFrameworkId;
          const numStr = fw.number ? String(fw.number).padStart(2, '0') : '01';

          return (
            <button
              key={fw.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`framework-panel-${fw.id}`}
              id={`framework-tab-${fw.id}`}
              onClick={() => onSelectFramework(fw.id)}
              className={`group flex-shrink-0 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2.5 border text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isScrolled ? 'px-3.5 py-1.5' : 'px-4 py-2'
              } ${
                isSelected
                  ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-md shadow-amber-500/10'
                  : 'bg-neutral-900 border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
              }`}
            >
              {/* Number Circle */}
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[11px] font-bold transition-colors ${
                  isSelected 
                    ? 'bg-black text-amber-400' 
                    : 'bg-neutral-800 text-neutral-300 border border-white/10 group-hover:bg-neutral-700'
                }`}
              >
                {numStr}
              </div>

              {/* Title */}
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap truncate tracking-tight">
                {fw.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
