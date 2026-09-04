import React, { useMemo, useState, useEffect } from 'react';
import {
  AlertTriangle,
  Armchair,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Flame,
  Footprints,
  HeartHandshake,
  Home,
  Mountain,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Zap,
} from 'lucide-react';
import { affinityProfiles } from '../data/affinityProfiles';
import {
  IconSunMorning,
  IconHourglass,
  IconTarget,
  IconSparkles,
  IconBuildingCompact,
  IconHouseInhabited,
  IconBrainNotebook,
  IconBuildingComplex,
  IconMoon,
  IconHouseResidential,
  IconMountains,
  IconClock,
} from './icons/ModuleBIcons';
import {
  IconCatsOrSmallAnimals,
  IconGreaterIndependence,
  IconAdultsOnly,
  IconSportOrWork,
  IconSmallChildren,
  IconAffectionAndCloseness,
  IconProtectionAndVigilance,
  IconOtherDogs,
  IconCalmAtHome,
  IconEaseOfCooperation,
} from './icons/ModuleCIcons';
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
  tag?: string;
  icon?: React.ComponentType<{ className?: string }> | string;
}

interface SteppeChoiceQuestionProps<T extends string> {
  number: number;
  title: string;
  options?: ChoiceOption<T>[];
  value?: T | null;
  onChange?: (value: T) => void;
  isComplete?: boolean;
  isActive?: boolean;
  columns?: 2 | 3 | 4;
  children?: React.ReactNode;
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
  {
    id: 'first_dog',
    label: 'Será mi primer perro',
    description: 'Prefiero una convivencia fácil de aprender y manejar.',
    tag: 'Nivel principiante',
    icon: Compass,
  },
  {
    id: 'some_experience',
    label: 'Tengo algo de experiencia',
    description: 'Ya he convivido con perros y conozco sus cuidados básicos.',
    tag: 'Nivel intermedio',
    icon: FileText,
  },
  {
    id: 'experienced',
    label: 'Tengo experiencia',
    description: 'Puedo sostener una educación constante y manejar cierta intensidad.',
    tag: 'Nivel autónomo',
    icon: ShieldCheck,
  },
  {
    id: 'advanced',
    label: 'Experiencia avanzada',
    description: 'He trabajado con perros exigentes o de carácter fuerte.',
    tag: 'Manejo experto',
    icon: Award,
  },
];

const activityOptions: ChoiceOption<AffinityActivity>[] = [
  {
    id: 'low',
    label: 'Actividad tranquila',
    description: 'Paseos breves y una rutina de baja intensidad.',
    tag: 'Energía baja',
    icon: Footprints,
  },
  {
    id: 'moderate',
    label: 'Actividad moderada',
    description: 'Paseos diarios y actividad regular sin alta exigencia.',
    tag: 'Energía media',
    icon: Clock,
  },
  {
    id: 'high',
    label: 'Vida activa',
    description: 'Paseos largos, excursiones o ejercicio frecuente.',
    tag: 'Energía alta',
    icon: Mountain,
  },
  {
    id: 'very_high',
    label: 'Actividad muy alta',
    description: 'Deporte, carrera o trabajo físico intenso casi a diario.',
    tag: 'Energía muy alta',
    icon: Flame,
  },
];

const mentalTimeOptions: ChoiceOption<AffinityMentalTime>[] = [
  { id: 'low', label: 'Momentos breves', description: 'Actividades simples algunos días de la semana.', icon: IconHourglass },
  { id: 'moderate', label: 'Tiempo moderado', description: 'Juegos o práctica breve casi todos los días.', icon: IconBrainNotebook },
  { id: 'high', label: 'Tiempo frecuente', description: 'Entrenamiento y desafíos variados cada día.', icon: IconSparkles },
  { id: 'very_high', label: 'Dedicación alta', description: 'Trabajo mental estructurado y avanzado a diario.', icon: IconTarget },
];

const aloneTimeOptions: ChoiceOption<AffinityAloneTime>[] = [
  { id: 'rarely', label: 'Casi nunca', description: 'Generalmente habrá alguien en casa.', icon: IconHouseInhabited },
  { id: 'short', label: 'Hasta 3 horas', description: 'Quedará solo durante periodos breves.', icon: IconSunMorning },
  { id: 'half_day', label: 'Entre 4 y 6 horas', description: 'Pasará solo una parte importante del día.', icon: IconClock },
  { id: 'full_day', label: 'Entre 7 y 9 horas', description: 'Quedará solo durante una jornada habitual.', icon: IconMoon },
];

const environmentOptions: ChoiceOption<AffinityEnvironment>[] = [
  { id: 'quiet_apartment', label: 'Departamento tranquilo', description: 'Poco espacio y necesito evitar ruidos frecuentes.', icon: IconBuildingCompact },
  { id: 'urban_flexible', label: 'Departamento o zona urbana', description: 'Puedo ofrecer paseos y tolero algo de actividad o vocalización.', icon: IconBuildingComplex },
  { id: 'residential_house', label: 'Casa en zona residencial', description: 'Más espacio y una rutina habitual de barrio.', icon: IconHouseResidential },
  { id: 'rural', label: 'Entorno rural o amplio', description: 'Espacio exterior y menos restricciones de ruido.', icon: IconMountains },
];

const householdOptions: ChoiceOption<AffinityHousehold>[] = [
  { id: 'adults_only', label: 'Solo adultos', description: 'Usuarios individuales o familias solo de adultos.', icon: IconAdultsOnly },
  { id: 'young_children', label: 'Niños pequeños', description: 'Convivirá habitualmente con niños pequeños.', icon: IconSmallChildren },
  { id: 'dogs', label: 'Otros perros', description: 'Compartirá el hogar con uno o más perros.', icon: IconOtherDogs },
  { id: 'cats_small_animals', label: 'Gatos u otros animales', description: 'Convivirá con gatos o animales pequeños.', icon: IconCatsOrSmallAnimals },
];

const preferenceOptions: ChoiceOption<AffinityPreference>[] = [
  { id: 'closeness', label: 'Cercanía y afecto', description: 'Un perro que busque compartir y estar cerca.', icon: IconAffectionAndCloseness },
  { id: 'calm', label: 'Calma en casa', description: 'Una presencia tranquila en la convivencia cotidiana.', icon: IconCalmAtHome },
  { id: 'cooperation', label: 'Facilidad para cooperar', description: 'Disposición para aprender y trabajar en conjunto.', icon: IconEaseOfCooperation },
  { id: 'independence', label: 'Mayor independencia', description: 'Autonomía y menor necesidad de atención constante.', icon: IconGreaterIndependence },
  { id: 'protection', label: 'Protección y vigilancia', description: 'Atención al entorno y tendencia protectora.', icon: IconProtectionAndVigilance },
  { id: 'sport_work', label: 'Deporte o trabajo', description: 'Motivación para actividades exigentes y con propósito.', icon: IconSportOrWork },
];

const columnClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const;

function ChoiceButtonMedallion({
  option,
  isSelected,
  onClick,
  disabled = false,
}: {
  option: ChoiceOption<string>;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={isSelected}
      aria-disabled={disabled}
      className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between relative group select-none min-h-[210px] ${
        isSelected
          ? 'border-amber-500/90 ring-1 ring-amber-500/50 bg-gradient-to-b from-amber-500/15 via-[#181613] to-[#121212] shadow-xl shadow-amber-500/10 text-white scale-[1.01] cursor-pointer'
          : disabled
            ? 'border-stone-800/40 bg-[#161616]/50 text-stone-600 cursor-not-allowed opacity-60'
            : 'border-stone-800/90 bg-[#161616] hover:bg-[#1a1a1a] hover:border-stone-700 text-stone-300 cursor-pointer'
      }`}
    >
      <div className="flex flex-col items-center justify-center pt-2 pb-4 text-center w-full">
        {option.icon ? (
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
            {isSelected ? (
              <svg className="absolute inset-0 w-full h-full text-amber-500 animate-fade-in" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.85" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: 'center' }} />
                <circle cx="50" cy="50" r="34" className="fill-amber-500/20" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="5" x2="50" y2="12" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
                <line x1="50" y1="88" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
                <line x1="5" y1="50" x2="12" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
                <line x1="88" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
              </svg>
            ) : (
              <svg className="absolute inset-0 w-full h-full text-stone-600 transition-colors duration-300 group-hover:text-amber-500/60" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                <circle cx="50" cy="50" r="34" className="fill-[#1a1815]" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <line x1="50" y1="7" x2="50" y2="12" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="88" x2="50" y2="93" stroke="currentColor" strokeWidth="1.5" />
                <line x1="7" y1="50" x2="12" y2="50" stroke="currentColor" strokeWidth="1.5" />
                <line x1="88" y1="50" x2="93" y2="50" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
            {(() => {
              const IconComponent = option.icon as React.ComponentType<{ className?: string }>;
              return <IconComponent className={`relative z-10 w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 ${isSelected ? 'text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]' : 'text-amber-500/50 group-hover:text-amber-400'}`} />
            })()}
          </div>
        ) : (
          <div className="w-20 h-20 sm:w-24 sm:h-24" />
        )}
      </div>

      <div className="space-y-1.5 flex-1 text-left w-full">
        <div className={`text-sm sm:text-base font-bold tracking-tight leading-snug transition-colors ${isSelected ? 'text-white' : 'text-stone-100 group-hover:text-white'}`}>
          {option.label}
        </div>
        <div className={`text-xs font-normal leading-relaxed min-h-[38px] transition-colors ${isSelected ? 'text-stone-300' : 'text-stone-400 group-hover:text-stone-300'}`}>
          {option.description}
        </div>
      </div>

      {/* Bottom Section: Left-aligned Context micro-pill */}
      {option.tag && (
        <div className="pt-3 mt-3 border-t border-stone-800/80 flex items-center justify-start w-full">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide transition-all ${
              isSelected
                ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold'
                : 'bg-stone-900/90 border border-stone-800 text-stone-400 group-hover:text-stone-300 group-hover:border-stone-700'
            }`}
          >
            {option.tag}
          </span>
        </div>
      )}
    </button>
  );
}

function SteppeChoiceQuestion<T extends string>({
  number,
  title,
  options,
  value,
  onChange,
  isComplete = false,
  isActive = false,
  columns = 4,
  children,
}: SteppeChoiceQuestionProps<T>) {
  return (
    <fieldset className="space-y-3.5">
      <legend className="sr-only">
        {number}. {title}
      </legend>
      <div className="flex items-center gap-3">
        {isComplete ? (
          <span className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center shadow-[0_0_16px_rgba(245,158,11,0.5)] border-2 border-amber-300 shrink-0 transition-all duration-500">
            <Check className="w-4 h-4 stroke-[3]" />
          </span>
        ) : isActive ? (
          <span className="w-8 h-8 rounded-full bg-amber-500/15 border-2 border-amber-400 text-amber-300 font-mono font-bold text-xs flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.3)] animate-pulse shrink-0 transition-all duration-500">
            {number < 10 ? `0${number}` : number}
          </span>
        ) : (
          <span className="w-8 h-8 rounded-full bg-[#181818] border border-stone-800 text-stone-600 font-mono font-bold text-xs flex items-center justify-center shrink-0 transition-all duration-500">
            {number < 10 ? `0${number}` : number}
          </span>
        )}
        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
          {title}
        </h4>
      </div>

      {children ? (
        children
      ) : (
        <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-3.5 sm:gap-4`}>
          {options?.map(option => (
            <ChoiceButtonMedallion
              key={option.id}
              option={option as ChoiceOption<string>}
              isSelected={value === option.id}
              onClick={() => onChange && onChange(option.id)}
            />
          ))}
        </div>
      )}
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
    updateAnswers(previous => {
      if (household === 'adults_only') {
        return {
          ...previous,
          householdAnswered: true,
          household: previous.household.includes('adults_only') ? [] : ['adults_only'],
        };
      }

      const newHousehold = previous.household.includes(household)
        ? previous.household.filter(item => item !== household)
        : [...previous.household.filter(h => h !== 'adults_only'), household];

      return {
        ...previous,
        householdAnswered: true,
        household: newHousehold,
      };
    });
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

  type QuizStep = 'A' | 'B' | 'C' | 'results';
  const [currentStep, setCurrentStep] = useState<QuizStep>('A');
  const [validationMsg, setValidationMsg] = useState<string | null>(null);

  // Loading / Calculation State for final analysis
  const [isCalculating, setIsCalculating] = useState(false);
  const [calcProgress, setCalcProgress] = useState(0);
  const [activeBreedIndex, setActiveBreedIndex] = useState(0);

  const previewBreeds = useMemo(
    () => [
      'Golden Retriever',
      'Border Collie',
      'Beagle',
      'Pastor Alemán',
      'Galgo Español',
      'Boyero de Berna',
      'Caniche Gigante',
      'Jack Russell Terrier',
      'Labrador Retriever',
    ],
    [],
  );

  useEffect(() => {
    if (!isCalculating) return;
    const startTime = Date.now();
    const duration = 1000; // 1.0 second
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setCalcProgress(progress);
      setActiveBreedIndex(prev => (prev + 1) % previewBreeds.length);
      if (elapsed >= duration) {
        clearInterval(interval);
        setIsCalculating(false);
        setCurrentStep('results');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isCalculating, previewBreeds]);

  const isComplete = Boolean(
    answers.experience &&
    answers.activity &&
    answers.mentalTime &&
    answers.aloneTime &&
    answers.environment &&
    answers.householdAnswered &&
    answers.preferences.length > 0,
  );

  const moduleACount = (answers.experience ? 1 : 0) + (answers.activity ? 1 : 0);
  const moduleAComplete = moduleACount === 2;

  const moduleBCount = (answers.mentalTime ? 1 : 0) + (answers.aloneTime ? 1 : 0) + (answers.environment ? 1 : 0);
  const moduleBComplete = moduleBCount === 3;

  const moduleCCount = (answers.householdAnswered ? 1 : 0) + (answers.preferences.length > 0 ? 1 : 0);
  const moduleCComplete = moduleCCount === 2;

  const totalQuestions = 7;
  const answeredCount = moduleACount + moduleBCount + moduleCCount;
  const progressPercentage = Math.round((answeredCount / totalQuestions) * 100);

  const handleNextFromA = () => {
    if (!moduleAComplete) {
      setValidationMsg('Por favor responde las 2 preguntas del Módulo 1 para avanzar.');
      return;
    }
    setValidationMsg(null);
    setCurrentStep('B');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextFromB = () => {
    if (!moduleBComplete) {
      setValidationMsg('Por favor responde las 3 preguntas del Módulo 2 para avanzar.');
      return;
    }
    setValidationMsg(null);
    setCurrentStep('C');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishSurvey = () => {
    if (!moduleCComplete) {
      setValidationMsg('Por favor indica con quién convivirá el perro y elige al menos una cualidad preferida.');
      return;
    }
    if (!isComplete) {
      setValidationMsg('Existen preguntas pendientes en módulos anteriores.');
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
    setValidationMsg(null);
    setIsCalculating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topMatches = useMemo<RankedMatch[]>(() => {
    if (!submittedAnswers) return [];
    const breedById = new Map(breeds.map(breed => [breed.id, breed]));
    return rankAffinity(affinityProfiles, submittedAnswers)
      .slice(0, 12)
      .map(result => {
        const breed = breedById.get(result.breedId);
        return breed ? { breed, result } : null;
      })
      .filter((match): match is RankedMatch => match !== null);
  }, [breeds, submittedAnswers]);

  if (isCalculating) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 px-4 animate-fade-in text-center pb-28">
        <div className="bg-[#131313] border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-7 relative overflow-hidden">
          {/* Subtle warm glow background */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Circular Progress & Percentage */}
          <div className="relative z-10 flex flex-col items-center py-8">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-stone-800"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * calcProgress) / 100}
                  strokeLinecap="round"
                  className="text-amber-400 transition-all duration-75"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-mono font-bold text-white">{calcProgress}%</span>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-8">
              Calculando compatibilidad con las {breeds.length} razas registradas
            </h3>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="w-full space-y-6 animate-fade-in">
        <div className="bg-[#141414] text-white p-6 sm:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Resultados de afinidad</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Las 12 razas con mayor afinidad contigo</h2>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Calculado a partir de tu perfil de rutina, disponibilidad de tiempo, entorno habitable y cualidades de convivencia deseadas.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setCurrentStep('C');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-slate-300 hover:text-white border border-white/10 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Modificar respuestas</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {topMatches.map(({ breed, result }) => (
            <article
              key={breed.id}
              onClick={() => onSelectBreed(breed)}
              className="group cursor-pointer relative overflow-hidden rounded-[2rem] border border-white/5 shadow-xl transition-all hover:border-amber-500/40 aspect-square flex flex-col justify-between bg-neutral-900"
            >
              {/* Background Image full bleed */}
              <div className="absolute inset-0 z-0">
                <img
                  src={breed.imageUrl || getBreedImageUrl(breed.id)}
                  alt={`Fotografía de la raza ${breed.breed}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={event => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = '/images/breeds/golden-retriever.webp';
                  }}
                />
              </div>

              {/* Gradient Overlay for bottom text readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-black/10 pointer-events-none" />

              {/* Top area - Top right badge */}
              <div className="relative z-20 flex justify-end p-4 sm:p-5 pointer-events-none">
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-amber-500/30 text-amber-400 rounded-full px-3 py-1 shadow-lg">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-90">Afinidad</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-base font-bold leading-none">{result.displayScore}</span>
                    <span className="text-[10px] font-bold opacity-70 leading-none">/10</span>
                  </div>
                </div>
              </div>

              {/* Bottom area - Breed Name & Points */}
              <div className="relative z-20 p-4 sm:p-5 flex flex-col justify-end gap-2 sm:gap-2.5">
                <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors truncate drop-shadow-md">
                  {breed.breed}
                </h4>

                <div className="space-y-1.5 min-h-0">
                  {result.strengths.slice(0, 2).map(strength => (
                    <div key={strength} className="flex items-start gap-2 text-[10px] sm:text-[11px] text-slate-200 leading-tight drop-shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 drop-shadow-md" />
                      <span className="line-clamp-2">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6 pb-20">
      {/* Cabecera Principal Compacta */}
      <div className="bg-[#141414] text-white p-5 sm:p-7 rounded-[2rem] border border-white/5 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test de Afinidad</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Descubre las razas con mayor afinidad contigo</h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
              3 módulos temáticos • 7 preguntas breves sobre tu rutina y convivencia para comparar con las {breeds.length} razas del atlas.
            </p>
          </div>

          {/* Indicador de módulo activo compacto */}
          <div className="flex items-center gap-1.5 bg-neutral-900/90 border border-white/5 px-3 py-1.5 rounded-full text-xs shrink-0">
            <span className="text-neutral-400 font-medium">Módulo:</span>
            <span className="font-bold text-amber-400">
              {currentStep === 'A' && '1 de 3 (Perfil & Rutina)'}
              {currentStep === 'B' && '2 de 3 (Disponibilidad & Espacio)'}
              {currentStep === 'C' && '3 de 3 (Sociabilidad & Relación)'}
            </span>
          </div>
        </div>
      </div>

      {/* Banner de validación si falta alguna respuesta */}
      {validationMsg && (
        <div role="alert" className="flex items-start gap-2.5 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-5 py-3.5 text-xs text-amber-100 animate-fade-in">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>{validationMsg}</span>
        </div>
      )}

      {/* PANTALLA: MÓDULO 01 (Steppe Control Pathway) */}
      {currentStep === 'A' && (
        <section className="bg-[#121212] border border-stone-800/90 rounded-[2rem] p-4 sm:p-6 lg:p-7 shadow-2xl space-y-5 text-slate-200 relative overflow-hidden animate-fade-in">
          {/* Cabecera del Módulo 1 en tono cercano y claro */}
          <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-stone-800/80">
            <div className="space-y-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-mono font-bold border border-amber-500/20">
                <UserCheck className="w-3.5 h-3.5" />
                <span>MÓDULO 1 • PASO 1 DE 3</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight pt-0.5">
                Tu experiencia y ritmo de vida
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Cuéntanos sobre tu convivencia previa con perros y el tiempo de actividad que puedes compartir cada día para orientar las opciones más compatibles contigo.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                  moduleAComplete
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 flex items-center gap-1.5 font-bold'
                    : moduleACount === 1
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 font-medium'
                    : 'bg-stone-900 text-stone-500 border-stone-800'
                }`}
              >
                {moduleAComplete && <CheckCircle2 className="w-3.5 h-3.5" />}
                {moduleAComplete ? '2/2 completadas' : `${moduleACount}/2 respondidas`}
              </span>
            </div>
          </div>

          {/* Preguntas 1 y 2 con filamento conector sutil */}
          <div className="space-y-3">
            {/* Pregunta 1 */}
            <SteppeChoiceQuestion
              number={1}
              title="¿Cuál es tu experiencia con perros?"
              options={experienceOptions}
              value={answers.experience}
              isComplete={Boolean(answers.experience)}
              isActive={!answers.experience}
              onChange={experience => {
                setValidationMsg(null);
                updateAnswers(previous => ({ ...previous, experience }));
              }}
            />

            {/* Filamento sutil conector entre preguntas */}
            <div className="flex items-center gap-3.5 pl-3.5 my-2" aria-hidden="true">
              <div className="w-0.5 h-10 sm:h-12 rounded-full overflow-hidden bg-stone-800/90 relative">
                <div
                  className={`w-full rounded-full transition-all duration-700 ease-out ${
                    answers.experience
                      ? 'h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                      : 'h-0'
                  }`}
                />
              </div>
              <div className="text-xs transition-colors duration-500">
                {answers.experience && !answers.activity ? (
                  <span className="text-amber-400/90 font-medium flex items-center gap-1.5 animate-fade-in">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    Continúa con la siguiente pregunta
                  </span>
                ) : answers.experience && answers.activity ? (
                  <span className="text-emerald-400/80 font-medium flex items-center gap-1.5 animate-fade-in">
                    <Check className="w-3 h-3 stroke-[3]" />
                    Paso completado
                  </span>
                ) : (
                  <span className="text-stone-500 text-[11px]">
                    Elige tu respuesta para avanzar
                  </span>
                )}
              </div>
            </div>

            {/* Pregunta 2 */}
            <SteppeChoiceQuestion
              number={2}
              title="¿Cuánta actividad física puedes ofrecer cada día?"
              options={activityOptions}
              value={answers.activity}
              isComplete={Boolean(answers.activity)}
              isActive={Boolean(answers.experience && !answers.activity)}
              onChange={activity => {
                setValidationMsg(null);
                updateAnswers(previous => ({ ...previous, activity }));
              }}
            />

            {/* Filamento sutil conector hacia el avance */}
            <div className="flex items-center gap-3.5 pl-3.5 my-1" aria-hidden="true">
              <div className="w-0.5 h-7 sm:h-9 rounded-full overflow-hidden bg-stone-800/90 relative">
                <div
                  className={`w-full rounded-full transition-all duration-700 ease-out ${
                    answers.activity
                      ? 'h-full bg-gradient-to-b from-amber-400 to-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]'
                      : 'h-0'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Barra de avance sin tecnicismos */}
          <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs">
              {moduleAComplete ? (
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Módulo 1 completado</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-stone-400 font-normal">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Responde ambas preguntas para continuar</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleNextFromA}
              disabled={!moduleAComplete}
              className={`px-8 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                moduleAComplete
                  ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99]'
                  : 'bg-stone-900/90 border border-stone-800 text-stone-600 cursor-not-allowed'
              }`}
            >
              <span>Continuar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* PANTALLA: MÓDULO 2 (Disponibilidad & Espacio) */}
      {currentStep === 'B' && (
        <section className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-6 text-slate-200 relative overflow-hidden animate-fade-in">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold border border-amber-500/20">
                <Home className="w-3.5 h-3.5" />
                <span>MÓDULO 2 • PASO 2 DE 3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight pt-1">
                Disponibilidad &amp; Espacio
              </h3>
              <p className="text-xs text-neutral-400">
                Estimulación mental, horas en soledad y características del entorno habitable.
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                moduleBComplete
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 flex items-center gap-1.5 font-bold'
                  : 'bg-neutral-900 text-neutral-400 border-white/5'
              }`}
            >
              {moduleBComplete && <CheckCircle2 className="w-3.5 h-3.5" />}
              {moduleBComplete ? '3/3 completadas' : `${moduleBCount}/3 preguntas`}
            </span>
          </div>

          <div className="space-y-3">
            <SteppeChoiceQuestion
              number={3}
              title="¿Cuánto tiempo puedes dedicar a educación y estimulación mental?"
              options={mentalTimeOptions}
              value={answers.mentalTime}
              isComplete={Boolean(answers.mentalTime)}
              isActive={!answers.mentalTime}
              onChange={mentalTime => {
                setValidationMsg(null);
                updateAnswers(previous => ({ ...previous, mentalTime }));
              }}
            />

            {/* Filamento sutil conector entre preguntas */}
            <div className="flex items-center gap-3.5 pl-3.5 my-2" aria-hidden="true">
              <div className="w-0.5 h-10 sm:h-12 rounded-full overflow-hidden bg-stone-800/90 relative">
                <div
                  className={`w-full rounded-full transition-all duration-700 ease-out ${
                    answers.mentalTime
                      ? 'h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                      : 'h-0'
                  }`}
                />
              </div>
            </div>

            <SteppeChoiceQuestion
              number={4}
              title="¿Cuánto tiempo quedará solo habitualmente?"
              options={aloneTimeOptions}
              value={answers.aloneTime}
              isComplete={Boolean(answers.aloneTime)}
              isActive={Boolean(answers.mentalTime && !answers.aloneTime)}
              onChange={aloneTime => {
                setValidationMsg(null);
                updateAnswers(previous => ({ ...previous, aloneTime }));
              }}
            />

            {/* Filamento sutil conector entre preguntas */}
            <div className="flex items-center gap-3.5 pl-3.5 my-2" aria-hidden="true">
              <div className="w-0.5 h-10 sm:h-12 rounded-full overflow-hidden bg-stone-800/90 relative">
                <div
                  className={`w-full rounded-full transition-all duration-700 ease-out ${
                    answers.aloneTime
                      ? 'h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                      : 'h-0'
                  }`}
                />
              </div>
            </div>

            <SteppeChoiceQuestion
              number={5}
              title="¿Cómo es el entorno donde vivirá?"
              options={environmentOptions}
              value={answers.environment}
              isComplete={Boolean(answers.environment)}
              isActive={Boolean(answers.aloneTime && !answers.environment)}
              onChange={environment => {
                setValidationMsg(null);
                updateAnswers(previous => ({ ...previous, environment }));
              }}
            />
          </div>

          {/* Botones de navegación del Módulo 2 */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setValidationMsg(null);
                setCurrentStep('A');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-slate-300 hover:text-white font-medium rounded-full border border-white/10 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Volver al Módulo 1</span>
            </button>
            <button
              type="button"
              onClick={handleNextFromB}
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full shadow-lg shadow-amber-500/10 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Continuar al Módulo 3</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* PANTALLA: MÓDULO 3 (Sociabilidad y Relación) */}
      {currentStep === 'C' && (
        <section className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-6 text-slate-200 relative overflow-hidden animate-fade-in">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold border border-amber-500/20">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>MÓDULO 3 • PASO 3 DE 3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight pt-1">
                Sociabilidad y Relación
              </h3>
              <p className="text-xs text-neutral-400">
                Convivencia en el hogar con niños o animales, y cualidades de vínculo deseadas.
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                moduleCComplete
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 flex items-center gap-1.5 font-bold'
                  : 'bg-neutral-900 text-neutral-400 border-white/5'
              }`}
            >
              {moduleCComplete && <CheckCircle2 className="w-3.5 h-3.5" />}
              {moduleCComplete ? '2/2 completadas' : `${moduleCCount}/2 preguntas`}
            </span>
          </div>

          <div className="space-y-3">
            <SteppeChoiceQuestion
              number={6}
              title="¿Con quién deberá convivir el perro?"
              isComplete={answers.householdAnswered}
              isActive={!answers.householdAnswered}
            >
              <p className="text-[11px] text-neutral-400 mb-3 pl-[3.25rem]">Puedes seleccionar todas las opciones que correspondan.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {householdOptions.map(option => (
                  <ChoiceButtonMedallion
                    key={option.id}
                    option={option as ChoiceOption<string>}
                    isSelected={answers.household.includes(option.id)}
                    onClick={() => {
                      setValidationMsg(null);
                      toggleHousehold(option.id);
                    }}
                  />
                ))}
              </div>
            </SteppeChoiceQuestion>

            {/* Filamento sutil conector entre preguntas */}
            <div className="flex items-center gap-3.5 pl-3.5 my-2" aria-hidden="true">
              <div className="w-0.5 h-10 sm:h-12 rounded-full overflow-hidden bg-stone-800/90 relative">
                <div
                  className={`w-full rounded-full transition-all duration-700 ease-out ${
                    answers.householdAnswered
                      ? 'h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                      : 'h-0'
                  }`}
                />
              </div>
            </div>

            <SteppeChoiceQuestion
              number={7}
              title="¿Qué tipo de relación buscas con el perro?"
              isComplete={answers.preferences.length > 0}
              isActive={answers.householdAnswered && answers.preferences.length === 0}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pl-[3.25rem]">
                <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Elige 1 o 2 ({answers.preferences.length}/2)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {preferenceOptions.map(option => {
                  const isSelected = answers.preferences.includes(option.id);
                  const isUnavailable = answers.preferences.length === 2 && !isSelected;
                  return (
                    <ChoiceButtonMedallion
                      key={option.id}
                      option={option as ChoiceOption<string>}
                      isSelected={isSelected}
                      disabled={isUnavailable}
                      onClick={() => {
                        setValidationMsg(null);
                        togglePreference(option.id);
                      }}
                    />
                  );
                })}
              </div>
            </SteppeChoiceQuestion>
          </div>

          {/* Botón de Terminar Encuesta en Módulo 3 */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setValidationMsg(null);
                setCurrentStep('B');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-slate-300 hover:text-white font-medium rounded-full border border-white/10 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Volver al Módulo 2</span>
            </button>
            <button
              type="button"
              onClick={handleFinishSurvey}
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full shadow-lg shadow-amber-500/10 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Sparkles className="w-4 h-4" />
              <span>Terminar la encuesta</span>
            </button>
          </div>
        </section>
      )}

      {/* Barra de progreso inferior delgada y sticky con estado de avance y filtro preliminar */}
      <div
        role="region"
        aria-label="Progreso del test de afinidad"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-t border-stone-800/80 px-4 sm:px-8 py-2.5 shadow-2xl transition-all"
      >
        <div className="max-w-6xl mx-auto flex items-center gap-4 sm:gap-6">
          <div className="flex items-center shrink-0">
            <div className="inline-flex items-center gap-2.5 bg-stone-900 border border-stone-700/80 px-3 py-1.5 rounded-lg shadow-inner">
              <div className="flex items-center gap-1.5 font-mono font-bold text-amber-400">
                <span>{answeredCount}</span>
                <span className="text-stone-500">/</span>
                <span>{totalQuestions}</span>
                <span className="text-stone-400 font-sans font-normal text-[11px] ml-0.5">Respondidas</span>
              </div>

              {/* Separador visual redondo (dot) */}
              <span className="w-1.5 h-1.5 rounded-full bg-stone-600" aria-hidden="true" />

              <div className="flex items-center gap-1 font-mono font-bold text-emerald-400">
                <span>{progressPercentage}%</span>
                <span className="text-emerald-500/80 font-sans font-normal text-[11px] hidden sm:inline">Completado</span>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-1">
            {/* Medidor de barra de progreso más alta ocupando el espacio restante */}
            <div className="w-full h-2.5 sm:h-3 bg-stone-800 rounded-full overflow-hidden border border-white/5 relative shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                style={{ width: `${progressPercentage}%` }}
                role="progressbar"
                aria-valuenow={answeredCount}
                aria-valuemin={0}
                aria-valuemax={totalQuestions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
