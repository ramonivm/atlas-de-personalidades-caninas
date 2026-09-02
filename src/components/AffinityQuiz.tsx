import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { affinityProfiles } from '../data/affinityProfiles';
import type {
  AffinityActivity,
  AffinityAloneTime,
  AffinityAnswers,
  AffinityEnvironment,
  AffinityExperience,
  AffinityHousehold,
  AffinityMentalTime,
  AffinityPreference,
  AffinityResult,
  Breed,
} from '../types';
import { getBreedImageUrl } from '../utils/breedImages';
import { rankAffinity } from '../utils/affinityEngine';

interface AffinityQuizProps {
  breeds: Breed[];
  onSelectBreed: (breed: Breed) => void;
}

interface QuizDraft {
  experience: AffinityExperience | null;
  activity: AffinityActivity | null;
  mentalTime: AffinityMentalTime | null;
  aloneTime: AffinityAloneTime | null;
  environment: AffinityEnvironment | null;
  household: AffinityHousehold[];
  householdAnswered: boolean;
  preferences: AffinityPreference[];
}

interface ChoiceOption<T extends string> {
  id: T;
  label: string;
  description: string;
}

interface SingleChoiceQuestionProps<T extends string> {
  number: number;
  title: string;
  options: ChoiceOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  columns?: 2 | 3 | 4;
}

interface RankedMatch {
  breed: Breed;
  result: AffinityResult;
}

const initialAnswers: QuizDraft = {
  experience: null,
  activity: null,
  mentalTime: null,
  aloneTime: null,
  environment: null,
  household: [],
  householdAnswered: false,
  preferences: [],
};

const experienceOptions: ChoiceOption<AffinityExperience>[] = [
  { id: 'first_dog', label: 'Será mi primer perro', description: 'Prefiero una convivencia fácil de aprender y manejar.' },
  { id: 'some_experience', label: 'Tengo algo de experiencia', description: 'Ya he convivido con perros y conozco sus cuidados básicos.' },
  { id: 'experienced', label: 'Tengo experiencia', description: 'Puedo sostener una educación constante y manejar cierta intensidad.' },
  { id: 'advanced', label: 'Experiencia avanzada', description: 'He trabajado con perros exigentes o de carácter fuerte.' },
];

const activityOptions: ChoiceOption<AffinityActivity>[] = [
  { id: 'low', label: 'Actividad tranquila', description: 'Paseos breves y una rutina de baja intensidad.' },
  { id: 'moderate', label: 'Actividad moderada', description: 'Paseos diarios y actividad regular sin alta exigencia.' },
  { id: 'high', label: 'Vida activa', description: 'Paseos largos, excursiones o ejercicio frecuente.' },
  { id: 'very_high', label: 'Actividad muy alta', description: 'Deporte, carrera o trabajo físico intenso casi a diario.' },
];

const mentalTimeOptions: ChoiceOption<AffinityMentalTime>[] = [
  { id: 'low', label: 'Momentos breves', description: 'Actividades simples algunos días de la semana.' },
  { id: 'moderate', label: 'Tiempo moderado', description: 'Juegos o práctica breve casi todos los días.' },
  { id: 'high', label: 'Tiempo frecuente', description: 'Entrenamiento y desafíos variados cada día.' },
  { id: 'very_high', label: 'Dedicación alta', description: 'Trabajo mental estructurado y avanzado a diario.' },
];

const aloneTimeOptions: ChoiceOption<AffinityAloneTime>[] = [
  { id: 'rarely', label: 'Casi nunca', description: 'Generalmente habrá alguien en casa.' },
  { id: 'short', label: 'Hasta 3 horas', description: 'Quedará solo durante periodos breves.' },
  { id: 'half_day', label: 'Entre 4 y 6 horas', description: 'Pasará solo una parte importante del día.' },
  { id: 'full_day', label: 'Entre 7 y 9 horas', description: 'Quedará solo durante una jornada habitual.' },
];

const environmentOptions: ChoiceOption<AffinityEnvironment>[] = [
  { id: 'quiet_apartment', label: 'Departamento tranquilo', description: 'Poco espacio y necesito evitar ruidos frecuentes.' },
  { id: 'urban_flexible', label: 'Departamento o zona urbana', description: 'Puedo ofrecer paseos y tolero algo de actividad o vocalización.' },
  { id: 'residential_house', label: 'Casa en zona residencial', description: 'Más espacio y una rutina habitual de barrio.' },
  { id: 'rural', label: 'Entorno rural o amplio', description: 'Espacio exterior y menos restricciones de ruido.' },
];

const householdOptions: Array<ChoiceOption<AffinityHousehold> & { icon: string }> = [
  { id: 'young_children', label: 'Niños pequeños', description: 'Convivirá habitualmente con niños pequeños.', icon: '🧒' },
  { id: 'dogs', label: 'Otros perros', description: 'Compartirá el hogar con uno o más perros.', icon: '🐕' },
  { id: 'cats_small_animals', label: 'Gatos u otros animales', description: 'Convivirá con gatos o animales pequeños.', icon: '🐈' },
];

const preferenceOptions: Array<ChoiceOption<AffinityPreference> & { icon: string }> = [
  { id: 'closeness', label: 'Cercanía y afecto', description: 'Un perro que busque compartir y estar cerca.', icon: '💛' },
  { id: 'calm', label: 'Calma en casa', description: 'Una presencia tranquila en la convivencia cotidiana.', icon: '🌿' },
  { id: 'cooperation', label: 'Facilidad para cooperar', description: 'Disposición para aprender y trabajar en conjunto.', icon: '🤝' },
  { id: 'independence', label: 'Mayor independencia', description: 'Autonomía y menor necesidad de atención constante.', icon: '🐾' },
  { id: 'protection', label: 'Protección y vigilancia', description: 'Atención al entorno y tendencia protectora.', icon: '🛡️' },
  { id: 'sport_work', label: 'Deporte o trabajo', description: 'Motivación para actividades exigentes y con propósito.', icon: '🎯' },
];

const columnClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const;

function SingleChoiceQuestion<T extends string>({
  number,
  title,
  options,
  value,
  onChange,
  columns = 4,
}: SingleChoiceQuestionProps<T>) {
  return (
    <fieldset>
      <legend className="block text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">
        {number}. {title}
      </legend>
      <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-3`}>
        {options.map(option => {
          const isSelected = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              aria-pressed={isSelected}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${isSelected
                ? 'border-amber-500 bg-amber-500/10 text-white ring-2 ring-amber-500/20'
                : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300'
              }`}
            >
              <div className="text-xs font-bold">{option.label}</div>
              <div className="text-[11px] text-neutral-400 font-normal mt-1 leading-relaxed">{option.description}</div>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export const AffinityQuiz: React.FC<AffinityQuizProps> = ({ breeds, onSelectBreed }) => {
  const [answers, setAnswers] = useState<QuizDraft>(initialAnswers);
  const [submittedAnswers, setSubmittedAnswers] = useState<AffinityAnswers | null>(null);
  const [showValidation, setShowValidation] = useState(false);

  const updateAnswers = (updater: (previous: QuizDraft) => QuizDraft) => {
    setAnswers(updater);
    setSubmittedAnswers(null);
    setShowValidation(false);
  };

  const toggleHousehold = (household: AffinityHousehold) => {
    updateAnswers(previous => ({
      ...previous,
      householdAnswered: true,
      household: previous.household.includes(household)
        ? previous.household.filter(item => item !== household)
        : [...previous.household, household],
    }));
  };

  const selectNoHouseholdConditions = () => {
    updateAnswers(previous => ({ ...previous, household: [], householdAnswered: true }));
  };

  const togglePreference = (preference: AffinityPreference) => {
    updateAnswers(previous => {
      if (previous.preferences.includes(preference)) {
        return { ...previous, preferences: previous.preferences.filter(item => item !== preference) };
      }
      if (previous.preferences.length === 2) return previous;
      return { ...previous, preferences: [...previous.preferences, preference] };
    });
  };

  const isComplete = Boolean(
    answers.experience &&
    answers.activity &&
    answers.mentalTime &&
    answers.aloneTime &&
    answers.environment &&
    answers.householdAnswered &&
    answers.preferences.length > 0,
  );

  const handleCalculate = () => {
    if (!isComplete) {
      setShowValidation(true);
      return;
    }
    setSubmittedAnswers({
      experience: answers.experience!,
      activity: answers.activity!,
      mentalTime: answers.mentalTime!,
      aloneTime: answers.aloneTime!,
      environment: answers.environment!,
      household: answers.household,
      preferences: answers.preferences,
    });
    setShowValidation(false);
  };

  const handleClear = () => {
    setAnswers(initialAnswers);
    setSubmittedAnswers(null);
    setShowValidation(false);
  };

  const topMatches = useMemo<RankedMatch[]>(() => {
    if (!submittedAnswers) return [];
    const breedById = new Map(breeds.map(breed => [breed.id, breed]));
    return rankAffinity(affinityProfiles, submittedAnswers)
      .slice(0, 6)
      .map(result => {
        const breed = breedById.get(result.breedId);
        return breed ? { breed, result } : null;
      })
      .filter((match): match is RankedMatch => match !== null);
  }, [breeds, submittedAnswers]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-[#141414] text-white p-6 sm:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Test de Afinidad</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Descubre las razas con mayor afinidad contigo</h2>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            Responde siete preguntas breves sobre tu experiencia, rutina y convivencia para comparar tu perfil con las {breeds.length} razas del atlas.
          </p>
        </div>
      </div>

      <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-7 text-slate-200">
        <SingleChoiceQuestion number={1} title="¿Cuál es tu experiencia con perros?" options={experienceOptions} value={answers.experience} onChange={experience => updateAnswers(previous => ({ ...previous, experience }))} />
        <SingleChoiceQuestion number={2} title="¿Cuánta actividad física puedes ofrecer cada día?" options={activityOptions} value={answers.activity} onChange={activity => updateAnswers(previous => ({ ...previous, activity }))} />
        <SingleChoiceQuestion number={3} title="¿Cuánto tiempo puedes dedicar a educación y estimulación mental?" options={mentalTimeOptions} value={answers.mentalTime} onChange={mentalTime => updateAnswers(previous => ({ ...previous, mentalTime }))} />
        <SingleChoiceQuestion number={4} title="¿Cuánto tiempo quedará solo habitualmente?" options={aloneTimeOptions} value={answers.aloneTime} onChange={aloneTime => updateAnswers(previous => ({ ...previous, aloneTime }))} />
        <SingleChoiceQuestion number={5} title="¿Cómo es el entorno donde vivirá?" options={environmentOptions} value={answers.environment} onChange={environment => updateAnswers(previous => ({ ...previous, environment }))} />

        <fieldset>
          <legend className="block text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">6. ¿Con quién deberá convivir el perro?</legend>
          <p className="text-[11px] text-neutral-400 mb-3">Puedes seleccionar todas las opciones que correspondan.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              type="button"
              onClick={selectNoHouseholdConditions}
              aria-pressed={answers.householdAnswered && answers.household.length === 0}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${answers.householdAnswered && answers.household.length === 0
                ? 'border-amber-500 bg-amber-500/10 text-white ring-2 ring-amber-500/20'
                : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300'
              }`}
            >
              <div className="text-lg mb-1">🏠</div>
              <div className="text-xs font-bold">Ninguna de estas opciones</div>
              <div className="text-[11px] text-neutral-400 font-normal mt-1 leading-relaxed">No habrá niños pequeños ni otros animales en casa.</div>
            </button>
            {householdOptions.map(option => {
              const isSelected = answers.household.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => toggleHousehold(option.id)}
                  aria-pressed={isSelected}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${isSelected
                    ? 'border-amber-500 bg-amber-500/10 text-white ring-2 ring-amber-500/20'
                    : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300'
                  }`}
                >
                  <div className="text-lg mb-1">{option.icon}</div>
                  <div className="text-xs font-bold">{option.label}</div>
                  <div className="text-[11px] text-neutral-400 font-normal mt-1 leading-relaxed">{option.description}</div>
                  {isSelected && <span className="absolute top-3 right-3 w-5 h-5 bg-amber-500 text-black rounded-full flex items-center justify-center"><Check className="w-3 h-3" /></span>}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <legend className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">7. ¿Qué tipo de relación buscas con el perro?</legend>
            <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Elige 1 o 2 ({answers.preferences.length}/2)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {preferenceOptions.map(option => {
              const isSelected = answers.preferences.includes(option.id);
              const isUnavailable = answers.preferences.length === 2 && !isSelected;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => togglePreference(option.id)}
                  aria-pressed={isSelected}
                  aria-disabled={isUnavailable}
                  disabled={isUnavailable}
                  className={`p-4 rounded-2xl border text-left transition-all relative ${isSelected
                    ? 'border-amber-500 bg-amber-500/10 text-white ring-2 ring-amber-500/20 cursor-pointer'
                    : isUnavailable
                      ? 'border-white/5 bg-neutral-900/50 text-neutral-600 cursor-not-allowed'
                      : 'border-white/5 bg-neutral-900 hover:bg-neutral-800 text-slate-300 cursor-pointer'
                  }`}
                >
                  <div className="text-lg mb-1">{option.icon}</div>
                  <div className="text-xs font-bold">{option.label}</div>
                  <div className="text-[11px] text-neutral-400 font-normal mt-1 leading-relaxed">{option.description}</div>
                  {isSelected && <span className="absolute top-3 right-3 w-5 h-5 bg-amber-500 text-black rounded-full flex items-center justify-center"><Check className="w-3 h-3" /></span>}
                </button>
              );
            })}
          </div>
        </fieldset>

        {showValidation && !isComplete && (
          <div role="alert" className="flex items-start gap-2.5 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-xs text-amber-100">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Responde las siete preguntas y elige al menos una cualidad para calcular tu afinidad.</span>
          </div>
        )}

        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={handleCalculate} className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full shadow-lg shadow-amber-500/10 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
            <Sparkles className="w-4 h-4" /><span>Calcular razas afines</span>
          </button>
          <button type="button" onClick={handleClear} className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-slate-300 hover:text-white font-medium rounded-full border border-white/10 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
            <RotateCcw className="w-4 h-4 text-neutral-400" /><span>Limpiar respuestas</span>
          </button>
        </div>
      </div>

      {submittedAnswers && (
        <div className="bg-[#141414] text-slate-200 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl space-y-6 animate-fade-in border border-white/5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-4">
            <div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">Resultados de afinidad</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Las 6 razas con mayor afinidad contigo</h3>
            </div>
            <button type="button" onClick={() => setSubmittedAnswers(null)} className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 bg-neutral-900 px-4 py-2 rounded-full border border-white/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
              <RotateCcw className="w-3.5 h-3.5" /><span>Ocultar resultados</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topMatches.map(({ breed, result }) => (
              <article key={breed.id} onClick={() => onSelectBreed(breed)} className="bg-neutral-900 hover:bg-neutral-800 border border-white/5 hover:border-amber-500/40 rounded-[2rem] p-5 cursor-pointer transition-all flex flex-col justify-between group relative overflow-hidden space-y-3.5">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors w-full truncate">{breed.breed}</h4>
                  <p className="text-xs text-neutral-400 italic line-clamp-1 mt-0.5">“{breed.epithet}”</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={breed.imageUrl || getBreedImageUrl(breed.id)}
                    alt={`Fotografía de la raza ${breed.breed}`}
                    className="w-16 h-16 aspect-square rounded-2xl object-cover border border-white/5 shrink-0"
                    onError={event => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = '/images/breeds/golden-retriever.webp';
                    }}
                  />
                  <div className="flex flex-col items-start gap-1.5 min-w-0">
                    <div className="inline-flex items-center gap-1 bg-amber-500 text-black font-bold text-[11px] px-2.5 py-1 rounded-full shadow-sm shrink-0">
                      <Award className="w-3.5 h-3.5" /><span>{result.displayScore}/10 Afinidad</span>
                    </div>
                    <span className="text-[10px] text-amber-500 font-semibold truncate max-w-full">{breed.fciGroup.split(':')[0]}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {result.strengths.slice(0, 2).map(strength => (
                    <div key={strength} className="flex items-start gap-2 text-[11px] text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /><span>{strength}</span>
                    </div>
                  ))}
                  {result.considerations[0] && (
                    <div className="flex items-start gap-2 text-[11px] text-neutral-400 leading-relaxed">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /><span>{result.considerations[0]}</span>
                    </div>
                  )}
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-bold">
                  <span>Ver perfil de la raza</span><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
