import React, { useState } from 'react';
import { Breed, QuizAnswers, PriorityTrait } from '../types';
import { Sparkles, Check, RotateCcw, Dog, ChevronRight, Award, Shield, Heart } from 'lucide-react';
import { getBreedImageUrl } from '../utils/breedImages';

interface AffinityQuizProps {
  breeds: Breed[];
  onSelectBreed: (breed: Breed) => void;
}

export const AffinityQuiz: React.FC<AffinityQuizProps> = ({ breeds, onSelectBreed }) => {
  const [answers, setAnswers] = useState<QuizAnswers>({
    experience: 'intermediate',
    activity: 'moderate',
    space: 'house_yard',
    timeWithDog: 'part_time',
    priorityTraits: ['affection']
  });

  const [submittedAnswers, setSubmittedAnswers] = useState<QuizAnswers | null>(null);

  const togglePriorityTrait = (traitId: PriorityTrait) => {
    setAnswers(prev => {
      const current = prev.priorityTraits || [];
      if (current.includes(traitId)) {
        if (current.length > 1) {
          return { ...prev, priorityTraits: current.filter(t => t !== traitId) };
        }
        return prev;
      } else {
        if (current.length < 2) {
          return { ...prev, priorityTraits: [...current, traitId] };
        } else {
          return { ...prev, priorityTraits: [current[1], traitId] };
        }
      }
    });
  };

  // Algorithm to calculate affinity score (0 to 100%) for a breed given criteria
  const calculateAffinity = (breed: Breed, criteria: QuizAnswers): number => {
    let score = 70; // baseline

    // 1. Activity & Energy
    const ind = breed.metrics.independencia_cognitiva.toLowerCase();
    const isHighEnergy = breed.motivations.some(m => ['Movimiento', 'Acción', 'Carrera', 'Caza', 'Trabajo'].includes(m)) ||
      breed.traits.some(t => ['Energía', 'Hiperactividad', 'Vitalidad', 'Vivacidad'].includes(t));

    if (criteria.activity === 'low') {
      if (isHighEnergy) score -= 20;
      else score += 10;
    } else if (criteria.activity === 'high' || criteria.activity === 'extreme') {
      if (isHighEnergy) score += 15;
    }

    // 2. Space (apartment vs house vs rural)
    const isGiantOrHighGuard = breed.summary.toLowerCase().includes('gigante') || 
      breed.fciGroup.includes('Molosoides') ||
      breed.archetypes.some(a => a.includes('Territorial') || a.includes('Guardia'));

    if (criteria.space === 'apartment') {
      if (isGiantOrHighGuard || isHighEnergy) score -= 15;
      if (breed.traits.some(t => ['Calma', 'Adaptabilidad', 'Serenidad'].includes(t))) score += 10;
    } else if (criteria.space === 'rural_nature') {
      if (isGiantOrHighGuard || isHighEnergy) score += 10;
    }

    // 3. Experience
    const isHardForNovice = ind.includes('extrema') || ind.includes('alta') || 
      breed.traits.some(t => ['Terquedad', 'Obstinación', 'Agresividad'].includes(t));
    if (criteria.experience === 'novice') {
      if (isHardForNovice) score -= 25;
      if (breed.traits.some(t => ['Amabilidad', 'Gentileza', 'Docilidad', 'Cooperación'].includes(t))) score += 15;
    }

    // 4. Time available & Separation Tolerance
    const isHighAttachment = breed.archetypes.some(a => a.includes('Apego Extremo') || a.includes('Apego Frágil'));
    if (criteria.timeWithDog === 'few_hours') {
      if (isHighAttachment) score -= 20;
      if (ind.includes('alta') || ind.includes('extrema')) score += 10;
    } else if (criteria.timeWithDog === 'full_time') {
      if (isHighAttachment) score += 15;
    }

    // 5. Priority Traits (Evaluates up to 2 qualities)
    if (criteria.priorityTraits && criteria.priorityTraits.length > 0) {
      criteria.priorityTraits.forEach(trait => {
        if (trait === 'affection') {
          if (breed.traits.some(t => ['Afecto', 'Afiliación', 'Ternura', 'Devoción', 'Calidez'].includes(t))) score += 12;
        } else if (trait === 'protection') {
          if (breed.archetypes.some(a => a.includes('Protección') || a.includes('Guardia')) ||
              breed.traits.some(t => ['Protección', 'Vigilancia', 'Coraje'].includes(t))) score += 12;
        } else if (trait === 'independence') {
          if (ind.includes('alta') || ind.includes('extrema')) score += 12;
        } else if (trait === 'trainability') {
          if (breed.traits.some(t => ['Inteligencia', 'Cooperación', 'Disciplina', 'Enfoque'].includes(t))) score += 12;
        } else if (trait === 'calm') {
          if (breed.traits.some(t => ['Calma', 'Serenidad', 'Templanza', 'Silencio', 'Paciencia'].includes(t))) score += 12;
        }
      });
    }

    // Clamp score between 45% and 99%
    return Math.min(99, Math.max(45, score));
  };

  const handleCalculate = () => {
    setSubmittedAnswers({ ...answers });
  };

  const handleClear = () => {
    setAnswers({
      experience: 'intermediate',
      activity: 'moderate',
      space: 'house_yard',
      timeWithDog: 'part_time',
      priorityTraits: ['affection']
    });
    setSubmittedAnswers(null);
  };

  const topMatches = submittedAnswers
    ? breeds
        .map(b => ({ breed: b, score: calculateAffinity(b, submittedAnswers) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
    : [];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Quiz Header */}
      <div className="bg-[#141414] text-white p-6 sm:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Algoritmo de Compatibilidad Etológica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Descubre las Razas con Mayor Afinidad Contigo
          </h2>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            Responde 5 breves preguntas sobre tu estilo de vida, espacio y experiencia para evaluar la compatibilidad con las 121 razas de nuestro atlas.
          </p>
        </div>
      </div>

      {/* Quiz Form */}
      <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-6 text-slate-200">
        
        {/* Q1: Experiencia */}
        <div>
          <label className="block text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">
            1. ¿Cuál es tu nivel de experiencia con perros?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'novice', label: 'Primerizo / Principiante', desc: 'Busco razas dóciles y fáciles de llevar' },
              { id: 'intermediate', label: 'Experiencia Media', desc: 'He tenido perros y conozco normas de educación' },
              { id: 'expert', label: 'Guía Experto / Avanzado', desc: 'Manejo razas de alta intensidad o carácter fuerte' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, experience: opt.id as any }))}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  answers.experience === opt.id
                    ? 'border-amber-500 bg-amber-500/10 text-white font-bold ring-2 ring-amber-500/20'
                    : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300'
                }`}
              >
                <div className="text-xs font-bold">{opt.label}</div>
                <div className="text-[11px] text-neutral-400 font-normal mt-1">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Q2: Actividad */}
        <div>
          <label className="block text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">
            2. ¿Cuál es tu nivel de actividad física diaria?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {[
              { id: 'low', label: 'Tranquilo / Pasivo', desc: 'Paseos cortos relajados' },
              { id: 'moderate', label: 'Moderado', desc: '1 a 2 horas de paseo diario' },
              { id: 'high', label: 'Muy Activo', desc: 'Deportes, outdoor y senderismo' },
              { id: 'extreme', label: 'Atleta / Trabajo', desc: 'Carrera o entrenamiento diario intenso' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, activity: opt.id as any }))}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  answers.activity === opt.id
                    ? 'border-amber-500 bg-amber-500/10 text-white font-bold ring-2 ring-amber-500/20'
                    : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300'
                }`}
              >
                <div className="text-xs font-bold">{opt.label}</div>
                <div className="text-[11px] text-neutral-400 font-normal mt-1">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Q3: Espacio */}
        <div>
          <label className="block text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">
            3. ¿Qué espacio de vivienda tienes?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'apartment', label: 'Piso / Apartamento', desc: 'Espacio urbano interior' },
              { id: 'house_yard', label: 'Casa con Jardín', desc: 'Espacio privado al aire libre' },
              { id: 'rural_nature', label: 'Finca / Campo / Naturaleza', desc: 'Gran espacio y entorno rural' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, space: opt.id as any }))}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  answers.space === opt.id
                    ? 'border-amber-500 bg-amber-500/10 text-white font-bold ring-2 ring-amber-500/20'
                    : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300'
                }`}
              >
                <div className="text-xs font-bold">{opt.label}</div>
                <div className="text-[11px] text-neutral-400 font-normal mt-1">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Q4: Tiempo disponible */}
        <div>
          <label className="block text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">
            4. ¿Cuánto tiempo pasarás en casa con el perro?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'few_hours', label: 'Pocas horas (Trabajo fuera)', desc: 'Necesita buena autorregulación en soledad' },
              { id: 'part_time', label: 'Tiempo parcial / Híbrido', desc: 'Compañía en mañanas/tardes' },
              { id: 'full_time', label: 'Tiempo completo / Teletrabajo', desc: 'Siempre acompañado en casa' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, timeWithDog: opt.id as any }))}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  answers.timeWithDog === opt.id
                    ? 'border-amber-500 bg-amber-500/10 text-white font-bold ring-2 ring-amber-500/20'
                    : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300'
                }`}
              >
                <div className="text-xs font-bold">{opt.label}</div>
                <div className="text-[11px] text-neutral-400 font-normal mt-1">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Q5: Prioridades */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">
              5. ¿Qué cualidades priorizas más en un perro?
            </label>
            <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Selecciona hasta 2 cualidades ({answers.priorityTraits?.length || 0}/2)
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {[
              { id: 'affection' as const, label: 'Afecto y Cariño', icon: '💖' },
              { id: 'protection' as const, label: 'Guarda / Protección', icon: '🛡️' },
              { id: 'independence' as const, label: 'Autonomía / Calma', icon: '🐾' },
              { id: 'trainability' as const, label: 'Adiestrabilidad', icon: '🎓' },
              { id: 'calm' as const, label: 'Serenidad y Paz', icon: '🌿' }
            ].map(opt => {
              const isSelected = answers.priorityTraits?.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => togglePriorityTrait(opt.id)}
                  aria-pressed={isSelected}
                  className={`p-3.5 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 relative ${
                    isSelected
                      ? 'border-amber-500 bg-amber-500/10 text-white ring-2 ring-amber-500/20 shadow-md shadow-amber-500/10'
                      : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300'
                  }`}
                >
                  <span className="text-lg">{opt.icon}</span>
                  <span>{opt.label}</span>
                  {isSelected && (
                    <span className="absolute top-2 right-2 w-4 h-4 bg-amber-500 text-black rounded-full flex items-center justify-center text-[10px] font-extrabold shadow-sm">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Calculate & Reset Buttons */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleCalculate}
            className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full shadow-lg shadow-amber-500/10 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Sparkles className="w-4 h-4" />
            <span>Calcular razas compatibles</span>
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-slate-300 hover:text-white font-medium rounded-full border border-white/10 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <RotateCcw className="w-4 h-4 text-neutral-400" />
            <span>Limpiar Criterios</span>
          </button>
        </div>

      </div>

      {/* Results Section */}
      {submittedAnswers && (
        <div className="bg-[#141414] text-slate-200 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl space-y-6 animate-fade-in border border-white/5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-4">
            <div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">
                Resultados de Compatibilidad
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Las 6 Razas con Mayor Afinidad para Ti
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setSubmittedAnswers(null)}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 bg-neutral-900 px-4 py-2 rounded-full border border-white/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ocultar Resultados</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topMatches.map(({ breed, score }) => (
              <div
                key={breed.id}
                onClick={() => onSelectBreed(breed)}
                className="bg-neutral-900 hover:bg-neutral-800 border border-white/5 hover:border-amber-500/40 rounded-[2rem] p-5 cursor-pointer transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={breed.imageUrl || getBreedImageUrl(breed.id)}
                    alt={`Fotografía de la raza ${breed.breed}`}
                    className="w-14 h-14 aspect-square rounded-2xl object-cover border border-white/5 shrink-0"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg";
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate min-w-0">
                        {breed.breed}
                      </h4>
                      <div className="bg-amber-500 text-black font-bold text-xs px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 shrink-0">
                        <Award className="w-3.5 h-3.5" />
                        <span>{score}% Compat.</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400 italic line-clamp-1 mt-0.5">
                      "{breed.epithet}"
                    </p>
                    <span className="text-[10px] text-amber-500 font-semibold block mt-0.5">
                      {breed.fciGroup.split(':')[0]}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {breed.summary}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-bold">
                  <span>Ver perfil de la raza</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
