import React, { useEffect } from 'react';
import { X, HelpCircle } from 'lucide-react';

interface FilterGuideModalProps {
  onClose: () => void;
}

export const FilterGuideModal: React.FC<FilterGuideModalProps> = ({ onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="filter-guide-title"
    >
      <style>{`
        /* 1. Arquetipo Psicológico: Core Pulse + Wave Expand */
        @keyframes corePulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.35); opacity: 1; }
        }
        @keyframes waveExpand {
          0% { transform: scale(0.6); opacity: 0.9; stroke-width: 2.5px; }
          100% { transform: scale(1.7); opacity: 0; stroke-width: 0.5px; }
        }
        .group:hover .anim-core {
          animation: corePulse 1.4s ease-in-out infinite;
          transform-origin: 32px 38px;
        }
        .group:hover .anim-wave {
          animation: waveExpand 1.4s ease-out infinite;
          transform-origin: 32px 38px;
        }

        /* 2. Motivación Principal: Target Flutter + Ear Alert */
        @keyframes butterflyFlutter {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(4px, -6px) rotate(12deg); }
          50% { transform: translate(-2px, -10px) rotate(-12deg); }
          75% { transform: translate(4px, -4px) rotate(6deg); }
        }
        @keyframes earAlert {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-12deg); }
        }
        .group:hover .anim-butterfly {
          animation: butterflyFlutter 1.5s ease-in-out infinite;
          transform-origin: 50px 20px;
        }
        .group:hover .anim-ear {
          animation: earAlert 1.2s ease-in-out infinite;
          transform-origin: 22px 18px;
        }

        /* 3. Rasgo de Carácter: Head Tilt + Tail Wag */
        @keyframes headTilt {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(9deg); }
        }
        @keyframes tailWag {
          0%, 100% { transform: rotate(-14deg); }
          50% { transform: rotate(14deg); }
        }
        .group:hover .anim-head {
          animation: headTilt 1.2s ease-in-out infinite;
          transform-origin: 32px 36px;
        }
        .group:hover .anim-tail {
          animation: tailWag 0.5s ease-in-out infinite;
          transform-origin: 48px 38px;
        }

        /* 4. Resiliencia Emocional: Shake Off */
        @keyframes shakeOff {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70% { transform: translateX(-3px); }
          20%, 40%, 60%, 80% { transform: translateX(3px); }
          90% { transform: translateX(0); }
        }
        .group:hover .anim-shake {
          animation: shakeOff 0.9s ease-in-out infinite;
          transform-origin: center;
        }

        /* 5. Sociabilidad: Left & Right Approach + Sparkle Pop */
        @keyframes dogLeftApproach {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes dogRightApproach {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-4px); }
        }
        @keyframes sparklePop {
          0% { transform: scale(0.2); opacity: 0; }
          50%, 80% { transform: scale(1.35); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .group:hover .anim-dog-left {
          animation: dogLeftApproach 1.2s ease-in-out infinite;
          transform-origin: 18px 36px;
        }
        .group:hover .anim-dog-right {
          animation: dogRightApproach 1.2s ease-in-out infinite;
          transform-origin: 46px 36px;
        }
        .group:hover .anim-sparkle {
          animation: sparklePop 1.2s ease-in-out infinite;
          transform-origin: 32px 20px;
        }

        /* 6. Independencia Cognitiva: Dog Forward + Wind Flow */
        @keyframes dogForward {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes windFlow {
          0% { transform: translateX(0); opacity: 0.2; }
          50% { transform: translateX(-6px); opacity: 0.8; }
          100% { transform: translateX(-12px); opacity: 0; }
        }
        .group:hover .anim-dog-forward {
          animation: dogForward 1.3s ease-in-out infinite;
          transform-origin: 32px 32px;
        }
        .group:hover .anim-wind {
          animation: windFlow 1.1s linear infinite;
          transform-origin: center;
        }
      `}</style>

      <div className="bg-[#141414] border border-white/10 rounded-[2.5rem] max-w-4xl w-full p-6 sm:p-8 text-white shadow-2xl relative my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500 border border-amber-500/20">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-500 block">
                Comprensión Etológica
              </span>
              <h2 id="filter-guide-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Guía para entender los filtros
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar guía"
            className="p-2.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-2xl border border-white/5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-neutral-800">
          
          {/* 1. Arquetipo Psicológico */}
          <div className="group bg-neutral-900/90 border border-white/5 hover:border-amber-500/30 rounded-2xl p-5 transition-all hover:bg-neutral-800/60 flex items-start gap-4 sm:gap-5">
            <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400" fill="none" stroke="currentColor">
                {/* Expanding wave ring around core */}
                <circle className="anim-wave" cx="32" cy="38" r="14" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Anatomical Dog Head & Chest Silhouette */}
                {/* Ear */}
                <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" d="M 28 14 C 25 14 20 20 22 28 C 24 28 27 24 29 20 Z" />
                {/* Dog Profile: Crown -> Forehead -> Stop -> Snout -> Nose -> Jaw -> Throat -> Chest -> Neck */}
                <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 22 28 C 21 22 23 16 28 14 C 32 14 35 17 38 22 C 41 23 46 25 50 25 C 52 25 53 27 52 29 C 50 31 46 32 40 33 C 36 38 33 46 33 54" />
                <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 22 28 C 19 36 17 44 16 54" />
                {/* Mouth line */}
                <path strokeWidth="2" strokeLinecap="round" d="M 40 33 L 45 32" />
                {/* Nose dot */}
                <circle cx="51" cy="27" r="2" fill="currentColor" />
                {/* Eye */}
                <circle cx="38" cy="23" r="2" fill="currentColor" />

                {/* Core / Glowing Heart */}
                <path
                  className="anim-core"
                  fill="currentColor"
                  stroke="none"
                  d="M 32 34 C 30.5 32 27.5 32 26 34 C 24.5 36 25 38.5 27 40.5 L 32 45 L 37 40.5 C 39 38.5 39.5 36 38 34 C 36.5 32 33.5 32 32 34 Z"
                />
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-amber-400 tracking-wide">
                Arquetipo Psicológico
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Representa el perfil conductual fundamental del perro. Agrupa a las razas según su forma innata de procesar el mundo y reaccionar ante su entorno.
              </p>
            </div>
          </div>

          {/* 2. Motivación Principal */}
          <div className="group bg-neutral-900/90 border border-white/5 hover:border-blue-500/30 rounded-2xl p-5 transition-all hover:bg-neutral-800/60 flex items-start gap-4 sm:gap-5">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400" fill="none" stroke="currentColor">
                {/* Flight trail towards target */}
                <path strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" strokeLinecap="round" d="M 36 29 C 41 26 44 23 50 20" />
                
                {/* Target Butterfly / Reward Object */}
                <g className="anim-butterfly">
                  <path strokeWidth="1.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.3" d="M 50 20 C 47 16 43 18 45 22 C 47 25 50 24 50 24 C 50 24 53 25 55 22 C 57 18 53 16 50 20 Z" />
                  <path strokeWidth="1.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.3" d="M 50 20 C 47 24 43 22 45 18 C 47 15 50 16 50 16 C 50 16 53 15 55 18 C 57 22 53 24 50 20 Z" />
                  <circle cx="50" cy="20" r="1.5" fill="currentColor" />
                </g>

                {/* Anatomical Dog Profile Head */}
                {/* Alert Ear */}
                <path className="anim-ear" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" d="M 22 18 L 16 7 L 26 14 Z" />
                {/* Head, Muzzle, Jaw, Neck */}
                <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 12 50 C 13 40 15 30 20 22 C 24 22 28 24 31 27 L 38 28 C 41 28 42 30 41 32 C 39 34 35 35 30 35 C 26 39 23 45 22 50" />
                {/* Nose dot */}
                <circle cx="41" cy="30" r="2" fill="currentColor" />
                {/* Eye */}
                <circle cx="29" cy="25" r="2" fill="currentColor" />
                {/* Collar */}
                <path strokeWidth="2" strokeLinecap="round" d="M 14 46 L 22 47" stroke="currentColor" />
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-blue-400 tracking-wide">
                Motivación Principal
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Indica el impulso central de la raza. Es el estímulo específico que enciende su interés, facilita su aprendizaje y le otorga un propósito en el día a día.
              </p>
            </div>
          </div>

          {/* 3. Rasgo de Carácter */}
          <div className="group bg-neutral-900/90 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-5 transition-all hover:bg-neutral-800/60 flex items-start gap-4 sm:gap-5">
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400" fill="none" stroke="currentColor">
                {/* Wagging Tail behind */}
                <path className="anim-tail" strokeWidth="3" strokeLinecap="round" d="M 48 38 C 53 32 56 24 53 18" />
                
                {/* Frontal Dog Head Group */}
                <g className="anim-head">
                  {/* Left Ear */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" d="M 21 20 L 11 12 L 15 28 Z" />
                  {/* Right Ear */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" d="M 43 20 L 53 12 L 49 28 Z" />
                  {/* Head & Cheek Outline */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 21 20 C 28 18 36 18 43 20 C 47 28 45 38 38 46 C 34 49 30 49 26 46 C 19 38 17 28 21 20 Z" />
                  {/* Muzzle Patch */}
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" d="M 26 34 C 29 32 35 32 38 34 C 40 40 36 45 32 45 C 28 45 24 40 26 34 Z" />
                  {/* Eyes */}
                  <circle cx="26" cy="28" r="2.5" fill="currentColor" />
                  <circle cx="38" cy="28" r="2.5" fill="currentColor" />
                  {/* Nose */}
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" d="M 29 35 C 31 34 33 34 35 35 C 36 37 34 39 32 39 C 30 39 28 37 29 35 Z" />
                  {/* Tongue / Smile */}
                  <path strokeWidth="2" strokeLinecap="round" d="M 32 39 L 32 42 C 32 44 33 44 33 42" />
                </g>
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-emerald-400 tracking-wide">
                Rasgo de Carácter
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Define la expresión de personalidad más evidente y constante del perro en su interacción diaria, resumiendo sus actitudes principales en la convivencia.
              </p>
            </div>
          </div>

          {/* 4. Resiliencia Emocional */}
          <div className="group bg-neutral-900/90 border border-white/5 hover:border-purple-500/30 rounded-2xl p-5 transition-all hover:bg-neutral-800/60 flex items-start gap-4 sm:gap-5">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-16 h-16 sm:w-20 sm:h-20 text-purple-400" fill="none" stroke="currentColor">
                {/* Calm Ground Line */}
                <line x1="10" y1="52" x2="54" y2="52" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
                
                {/* Standing Dog Profile Vibrating on X */}
                <g className="anim-shake">
                  {/* Ear */}
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" d="M 38 13 L 34 22 L 42 20 Z" />
                  {/* Dog Body: Nose -> Head -> Back -> Tail -> Rear Leg -> Belly -> Front Leg -> Chest -> Neck -> Muzzle */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 48 22 C 45 20 42 18 38 18 C 34 18 28 22 22 24 C 18 25 15 28 14 32 C 11 26 9 22 11 18" />
                  {/* Back Leg Left */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 18 32 L 16 42 L 14 52" />
                  {/* Back Leg Right */}
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" d="M 22 32 L 20 42 L 19 52" />
                  {/* Front Leg Right */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 38 34 L 39 44 L 40 52" />
                  {/* Front Leg Left */}
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" d="M 34 34 L 34 44 L 33 52" />
                  {/* Underline Belly & Chest */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 18 32 C 22 35 32 35 38 34 C 42 30 46 26 48 22" />
                  {/* Eye & Nose */}
                  <circle cx="44" cy="21" r="1.5" fill="currentColor" />
                  <circle cx="48.5" cy="22" r="1.5" fill="currentColor" />
                </g>
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-purple-400 tracking-wide">
                Resiliencia Emocional
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Mide la capacidad del perro para procesar el estrés. Define qué tan rápido puede recuperar su equilibrio y volver a la calma tras enfrentarse a situaciones de tensión o presión ambiental.
              </p>
            </div>
          </div>

          {/* 5. Sociabilidad */}
          <div className="group bg-neutral-900/90 border border-white/5 hover:border-rose-500/30 rounded-2xl p-5 transition-all hover:bg-neutral-800/60 flex items-start gap-4 sm:gap-5">
            <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-16 h-16 sm:w-20 sm:h-20 text-rose-400" fill="none" stroke="currentColor">
                {/* Center Heart / Sparkle */}
                <g className="anim-sparkle">
                  <path
                    fill="currentColor"
                    stroke="none"
                    d="M 32 16 C 30.5 14 27.5 14 26 16 C 24.5 18 25 20.5 27 22.5 L 32 27 L 37 22.5 C 39 20.5 39.5 18 38 16 C 36.5 14 33.5 14 32 16 Z"
                  />
                </g>

                {/* Full Body Dog Left Facing Right */}
                <g className="anim-dog-left">
                  {/* Tail */}
                  <path strokeWidth="2" strokeLinecap="round" d="M 6 26 C 4 22 5 18 8 16" />
                  {/* Body & Head */}
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M 8 32 C 10 26 15 25 21 24 C 23 20 25 18 27 21 L 30 22 C 31 22 31 23 30 24 C 28 25 25 26 23 29 C 20 33 16 33 12 33 Z" />
                  {/* Ear */}
                  <path strokeWidth="1.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.3" d="M 23 20 L 20 15 L 25 17 Z" />
                  {/* Legs */}
                  <path strokeWidth="2" strokeLinecap="round" d="M 12 33 L 10 44 M 15 33 L 14 44 M 22 30 L 22 44 M 24 30 L 25 44" />
                </g>

                {/* Full Body Dog Right Facing Left */}
                <g className="anim-dog-right">
                  {/* Tail */}
                  <path strokeWidth="2" strokeLinecap="round" d="M 58 26 C 60 22 59 18 56 16" />
                  {/* Body & Head */}
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M 56 32 C 54 26 49 25 43 24 C 41 20 39 18 37 21 L 34 22 C 33 22 33 23 34 24 C 36 25 39 26 41 29 C 44 33 48 33 52 33 Z" />
                  {/* Ear */}
                  <path strokeWidth="1.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.3" d="M 41 20 L 44 15 L 39 17 Z" />
                  {/* Legs */}
                  <path strokeWidth="2" strokeLinecap="round" d="M 52 33 L 54 44 M 49 33 L 50 44 M 42 30 L 42 44 M 40 30 L 39 44" />
                </g>
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-rose-400 tracking-wide">
                Sociabilidad
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Describe la forma en que el perro establece vínculos y se relaciona con su entorno, tanto con su círculo familiar cercano como con personas o animales desconocidos.
              </p>
            </div>
          </div>

          {/* 6. Independencia Cognitiva */}
          <div className="group bg-neutral-900/90 border border-white/5 hover:border-teal-500/30 rounded-2xl p-5 transition-all hover:bg-neutral-800/60 flex items-start gap-4 sm:gap-5">
            <div className="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-16 h-16 sm:w-20 sm:h-20 text-teal-400" fill="none" stroke="currentColor">
                {/* Clear Trail / Hill Curve */}
                <path strokeWidth="2.5" strokeLinecap="round" d="M 8 52 C 20 48 36 46 56 50" />
                
                {/* Wind lines flowing left */}
                <g className="anim-wind">
                  <line x1="38" y1="16" x2="22" y2="16" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
                  <line x1="44" y1="22" x2="28" y2="22" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 3" />
                </g>

                {/* Standing Dog Full Body Silhouette Moving Forward */}
                <g className="anim-dog-forward">
                  {/* Raised Proud Tail */}
                  <path strokeWidth="2.5" strokeLinecap="round" d="M 18 26 C 14 20 12 14 16 10" />
                  {/* Ear */}
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.25" d="M 38 14 L 34 22 L 42 19 Z" />
                  {/* Head, Neck, Chest, Body, Rump */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 48 23 C 45 21 42 19 38 19 C 34 19 28 23 22 25 C 18 26 16 30 18 34 C 24 37 34 37 40 35 C 44 32 46 28 48 23 Z" />
                  {/* Muzzle tip & Nose */}
                  <path strokeWidth="2" strokeLinecap="round" d="M 48 23 L 51 24" />
                  <circle cx="51" cy="24" r="1.5" fill="currentColor" />
                  {/* Eye */}
                  <circle cx="43" cy="22" r="1.5" fill="currentColor" />
                  {/* Legs walking confidently */}
                  <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M 21 34 L 18 48 M 25 34 L 26 48 M 38 35 L 36 48 M 41 35 L 43 48" />
                </g>
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-teal-400 tracking-wide">
                Independencia Cognitiva
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Refleja el nivel de autonomía del perro en la toma de decisiones. Indica cuánta dirección humana requiere en contraste con su capacidad para actuar y resolver situaciones por su propia cuenta.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 flex-shrink-0">
          <span>Atlas de Personalidades Caninas • Guía de Filtros</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full transition-all cursor-pointer shadow-md shadow-amber-500/10"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
