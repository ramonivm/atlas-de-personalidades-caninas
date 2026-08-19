import React from 'react';
import { Eye } from 'lucide-react';

interface ObservableSignalProps {
  signal: string | null;
}

export const ObservableSignal: React.FC<ObservableSignalProps> = ({ signal }) => {
  if (!signal) return null;

  return (
    <div className="bg-neutral-900/90 border border-white/5 rounded-2xl p-5 space-y-2.5 transition-all">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 animate-pulse" />
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-amber-400/90">
          <Eye className="w-3.5 h-3.5" />
          <span>Cómo lo reconoces en campo</span>
        </div>
      </div>
      <p className="text-sm text-neutral-300 leading-relaxed pl-4 border-l border-amber-500/20">
        {signal}
      </p>
    </div>
  );
};
