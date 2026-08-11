import React, { useState } from 'react';
import { Framework } from '../types';
import { Brain, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

interface FrameworksViewProps {
  frameworks: Framework[];
}

export const FrameworksView: React.FC<FrameworksViewProps> = ({ frameworks }) => {
  const [selectedFwId, setSelectedFwId] = useState<string>(frameworks[0]?.id || '');

  const currentFw = frameworks.find(f => f.id === selectedFwId) || frameworks[0];

  return (
    <div className="space-y-6">
      
      {/* Hero Banner for Frameworks */}
      <div className="bg-[#141414] text-white p-6 sm:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Marco de Clasificación Etológica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Los 6 Marcos de Psicología Canina
          </h2>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            Entiende los canales biológicos mediante los cuales los perros regulan sus emociones, forman vínculos, canalizan estímulos y procesan la información.
          </p>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
        {frameworks.map((fw) => {
          const isSelected = fw.id === currentFw.id;
          return (
            <button
              key={fw.id}
              onClick={() => setSelectedFwId(fw.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/10 font-bold'
                  : 'bg-neutral-900 text-slate-300 hover:bg-neutral-800 border border-white/5'
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                isSelected ? 'bg-black text-amber-400' : 'bg-neutral-800 text-neutral-400'
              }`}>
                {fw.number}
              </span>
              <span>{fw.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Framework Detail Card */}
      {currentFw && (
        <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-6">
          <div className="border-b border-white/5 pb-5">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">
              Eje de Evaluación #{currentFw.number}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 capitalize tracking-tight">
              {currentFw.title}
            </h3>
            {currentFw.summary && (
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                {currentFw.summary}
              </p>
            )}
          </div>

          {/* Subsections */}
          <div className="space-y-4">
            {currentFw.sections.map((sec, idx) => (
              <div key={idx} className="bg-neutral-900/90 border border-white/5 rounded-2xl p-5 space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{sec.title}</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
