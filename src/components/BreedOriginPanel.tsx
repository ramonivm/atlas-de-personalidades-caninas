import React from 'react';
import { Globe2, Shield, Sparkles, Target } from 'lucide-react';
import { getBreedOrigin } from '../utils/breedOrigin';

export function BreedOriginPanel({ origin }: { origin?: string }) {
  const { name, flag, content } = getBreedOrigin(origin);
  return (
    <div className="space-y-5 break-words">
      <h3 className="text-xl sm:text-2xl font-bold text-white flex items-start gap-3">
        {flag && <span aria-hidden="true">{flag}</span>}
        <span className="min-w-0">{name}</span>
      </h3>
      {content ? <>
        <p className="text-sm text-slate-300 leading-relaxed bg-[#141414] border border-white/5 border-l-4 border-l-amber-500 rounded-2xl p-5">
          {content.summary}
        </p>
        <section className="bg-[#141414] border border-amber-500/20 rounded-2xl p-5 space-y-2">
          <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] flex items-center gap-2">
            <Shield className="w-4 h-4 shrink-0" aria-hidden="true" />Historia y presión de selección
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">{content.historicalContext}</p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <section className="min-w-0 bg-[#141414] border border-white/5 rounded-2xl p-5 space-y-2">
            <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />Geografía y clima
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{content.climateAndGeography}</p>
          </section>
          <section className="min-w-0 bg-[#141414] border border-white/5 rounded-2xl p-5 space-y-2">
            <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />Arquetipo dominante
            </h4>
            <p className="text-sm text-purple-300 font-semibold leading-relaxed">{content.dominantArchetype}</p>
          </section>
        </div>
        <section className="bg-[#141414] border border-white/5 rounded-2xl p-5 space-y-2">
          <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] flex items-center gap-2">
            <Target className="w-4 h-4 shrink-0" aria-hidden="true" />Objetivo primario de selección
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">{content.primarySelectionGoal}</p>
        </section>
      </> : <p className="text-sm text-neutral-300 leading-relaxed bg-[#141414] border border-white/5 rounded-2xl p-5">
        La información de este origen no está disponible todavía.
      </p>}
    </div>
  );
}
