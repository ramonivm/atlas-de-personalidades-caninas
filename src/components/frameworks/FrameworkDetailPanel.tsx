import React from 'react';
import { ParsedFrameworkSection } from './frameworkTypes';
import { ObservableSignal } from './ObservableSignal';
import { motion, AnimatePresence } from 'motion/react';

interface FrameworkDetailPanelProps {
  frameworkNumber: number | null;
  section: ParsedFrameworkSection;
  totalSections: number;
}

export const FrameworkDetailPanel: React.FC<FrameworkDetailPanelProps> = ({
  frameworkNumber,
  section,
  totalSections
}) => {
  return (
    <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-5 sm:p-8 flex flex-col justify-between h-full shadow-xl relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      {/* Symmetric Top Header Bar matching left panel */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 min-h-[40px] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 font-bold">
            Definición y Mecanismo
          </span>
        </div>
        <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2.5 py-0.5 rounded-full border border-white/5">
          Patrón {section.index + 1} de {totalSections}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${frameworkNumber}-${section.index}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative z-10 flex-1 flex flex-col justify-between w-full space-y-4"
        >
          {/* Title & Descriptor */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              {section.cleanTitle}
            </h3>

            {section.descriptor && (
              <div className="inline-block text-xs font-mono text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                {section.descriptor}
              </div>
            )}
          </div>

          {/* Definition (Qué ocurre / Mecanismo) */}
          <div className="space-y-2 flex-1">
            <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
              <span>Mecanismo Biológico</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
              {section.description}
            </p>
          </div>

          {/* Observable Signal */}
          <ObservableSignal signal={section.signal} />
        </motion.div>
      </AnimatePresence>

      {/* Pagination hint / quick nav */}
      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 relative z-10">
        <span className="text-[11px] font-medium text-neutral-400">
          Haz clic en cualquier nodo del modelo para examinar su mecanismo
        </span>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSections }).map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === section.index ? 'w-5 bg-amber-500' : 'w-1.5 bg-neutral-800'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
