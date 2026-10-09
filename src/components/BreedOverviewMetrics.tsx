import React from 'react';
import { Activity, Brain, Heart, Shield, Users } from 'lucide-react';
import type { BreedMetrics } from '../types';
import { getUnambiguousMetricScore } from '../utils/metricScore';

const LEVEL_METRICS = [
  { key: 'resiliencia_emocional', label: 'Resiliencia Emocional', icon: Shield, color: 'text-emerald-400' },
  { key: 'umbral_de_estimulacion', label: 'Umbral de Estimulación', icon: Activity, color: 'text-amber-400' },
  { key: 'independencia_cognitiva', label: 'Independencia Cognitiva', icon: Brain, color: 'text-purple-400' },
] as const;

export function BreedOverviewMetrics({ metrics }: { metrics: BreedMetrics }) {
  return (
    <section className="bg-[#141414] border border-white/5 rounded-2xl p-5">
      <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] pb-3 border-b border-white/5">Métricas</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <div className="min-w-0 divide-y divide-white/5">
          {LEVEL_METRICS.map(({ key, label, icon: Icon, color }) => {
            const value = metrics[key];
            const score = getUnambiguousMetricScore(value);
            return <div key={key} className="py-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <Icon className={`w-4 h-4 shrink-0 ${color}`} aria-hidden="true" />
                <span>{label}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pl-6">
                <p className="text-sm font-bold text-white break-words min-w-0">{value}</p>
                {score !== null && <div role="meter" aria-label={label} aria-valuemin={1} aria-valuemax={5} aria-valuenow={score} aria-valuetext={`${value}. Nivel ${score} de 5 en la escala de Comparar.`} className={`flex items-center gap-2 ${color}`}>
                  <span className="flex gap-1" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map(level => <span key={level} className={`w-3 h-2 rounded-sm border ${level <= score ? 'bg-current border-current' : 'border-neutral-600 bg-transparent'}`} />)}
                  </span>
                  <span className="text-[10px] font-semibold text-neutral-300" aria-hidden="true">{score}/5</span>
                </div>}
              </div>
            </div>;
          })}
        </div>
        <div className="min-w-0 divide-y divide-white/5 border-t border-white/5 md:border-t-0">
          {([
            { label: 'Motivación', value: metrics.motivacion_intrinseca, icon: Heart, color: 'text-rose-400' },
            { label: 'Sociabilidad', value: metrics.sociabilidad, icon: Users, color: 'text-blue-400' },
          ]).map(({ label, value, icon: Icon, color }) => <div key={label} className="py-4 space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <Icon className={`w-4 h-4 shrink-0 ${color}`} aria-hidden="true" /><span>{label}</span>
            </div>
            <p className="text-sm text-white font-semibold leading-relaxed pl-6 break-words">{value}</p>
          </div>)}
        </div>
      </div>
    </section>
  );
}
