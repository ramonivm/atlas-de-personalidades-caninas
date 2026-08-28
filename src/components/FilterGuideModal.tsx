import React, { useEffect } from 'react';
import { X, HelpCircle } from 'lucide-react';

interface FilterGuideModalProps {
  onClose: () => void;
}

interface FilterGuideCard {
  id: string;
  title: string;
  description: string;
  image: string;
  theme: {
    boxBg: string;
    boxBorder: string;
    titleColor: string;
    hoverBorder: string;
  };
}

const FILTER_GUIDE_CARDS: FilterGuideCard[] = [
  {
    id: 'arquetipo',
    title: 'Arquetipo Psicológico',
    description:
      'Representa el perfil conductual fundamental del perro. Agrupa a las razas según su forma innata de procesar el mundo y reaccionar ante su entorno.',
    image: '/images/infoimages/arquetipos-info.svg',
    theme: {
      boxBg: 'bg-amber-500/10',
      boxBorder: 'border-amber-500/20',
      titleColor: 'text-amber-400',
      hoverBorder: 'hover:border-amber-500/30',
    },
  },
  {
    id: 'motivacion',
    title: 'Motivación Principal',
    description:
      'Indica el impulso central de la raza. Es el estímulo específico que enciende su interés, facilita su aprendizaje y le otorga un propósito en el día a día.',
    image: '/images/infoimages/motivacion-info.svg',
    theme: {
      boxBg: 'bg-blue-500/10',
      boxBorder: 'border-blue-500/20',
      titleColor: 'text-blue-400',
      hoverBorder: 'hover:border-blue-500/30',
    },
  },
  {
    id: 'rasgo',
    title: 'Rasgo de Carácter',
    description:
      'Define la expresión de personalidad más evidente y constante del perro en su interacción diaria, resumiendo sus actitudes principales en la convivencia.',
    image: '/images/infoimages/rasgoscaracter-info.svg',
    theme: {
      boxBg: 'bg-emerald-500/10',
      boxBorder: 'border-emerald-500/20',
      titleColor: 'text-emerald-400',
      hoverBorder: 'hover:border-emerald-500/30',
    },
  },
  {
    id: 'resiliencia',
    title: 'Resiliencia Emocional',
    description:
      'Mide la capacidad del perro para procesar el estrés. Define qué tan rápido puede recuperar su equilibrio y volver a la calma tras enfrentarse a situaciones de tensión o presión ambiental.',
    image: '/images/infoimages/rescilenciaemocional-info.svg',
    theme: {
      boxBg: 'bg-purple-500/10',
      boxBorder: 'border-purple-500/20',
      titleColor: 'text-purple-400',
      hoverBorder: 'hover:border-purple-500/30',
    },
  },
  {
    id: 'sociabilidad',
    title: 'Sociabilidad',
    description:
      'Describe la forma en que el perro establece vínculos y se relaciona con su entorno, tanto con su círculo familiar cercano como con personas o animales desconocidos.',
    image: '/images/infoimages/sociabilidad-info.svg',
    theme: {
      boxBg: 'bg-rose-500/10',
      boxBorder: 'border-rose-500/20',
      titleColor: 'text-rose-400',
      hoverBorder: 'hover:border-rose-500/30',
    },
  },
  {
    id: 'independencia',
    title: 'Independencia Cognitiva',
    description:
      'Refleja el nivel de autonomía del perro en la toma de decisiones. Indica cuánta dirección humana requiere en contraste con su capacidad para actuar y resolver situaciones por su propia cuenta.',
    image: '/images/infoimages/independenciacognitiva-info.svg',
    theme: {
      boxBg: 'bg-teal-500/10',
      boxBorder: 'border-teal-500/20',
      titleColor: 'text-teal-400',
      hoverBorder: 'hover:border-teal-500/30',
    },
  },
];

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
        /* Microanimación sutil para Motivación Principal */
        @keyframes stimulusPulse {
          0%, 14% {
            transform: translate(0px, 0px);
          }
          19% {
            transform: translate(-3px, -12px);
          }
          23% {
            transform: translate(0px, -2px);
          }
          26%, 100% {
            transform: translate(0px, 0px);
          }
        }

        @keyframes dogApproach {
          0%, 24% {
            transform: translate(0px, 0px);
          }
          38%, 58% {
            transform: translate(18px, 6px);
          }
          72%, 100% {
            transform: translate(0px, 0px);
          }
        }

        .anim-stimulus-pulse {
          animation: stimulusPulse 4.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        .anim-dog-move {
          animation: dogApproach 4.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-stimulus-pulse,
          .anim-dog-move {
            animation: none !important;
          }
        }
      `}</style>

      <div className="bg-[#141414] border border-white/10 rounded-[2.5rem] max-w-4xl w-full p-6 sm:p-8 text-white shadow-2xl relative my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center sm:items-start justify-between pb-4 sm:pb-6 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex p-3 bg-amber-500/10 rounded-2xl text-amber-500 border border-amber-500/20">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.25em] text-amber-500">
                Comprensión Etológica
              </span>
              <h2 id="filter-guide-title" className="text-lg sm:text-2xl font-bold tracking-tight text-white">
                Guía para entender los filtros
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar guía"
            className="p-2 sm:p-2.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl sm:rounded-2xl border border-white/5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Cards Grid */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-neutral-800">
          {FILTER_GUIDE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`group bg-neutral-900/90 border border-white/5 ${card.theme.hoverBorder} rounded-2xl p-4 sm:p-5 transition-all hover:bg-neutral-800/60 flex items-start gap-3.5 sm:gap-5`}
            >
              {/* Recuadro visual tintado homogéneo */}
              <div
                className={`w-16 h-16 sm:w-24 sm:h-24 ${card.theme.boxBg} rounded-xl sm:rounded-2xl border ${card.theme.boxBorder} flex-shrink-0 flex items-center justify-center p-1.5 sm:p-2.5`}
              >
                {card.id === 'motivacion' ? (
                  <svg
                    viewBox="0 0 1024 1024"
                    className="w-full h-full object-contain select-none pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
                    aria-hidden="true"
                  >
                    <g id="dog" className="anim-dog-move">
                      <g id="perro" transform="matrix(1.077632,0,0,1.077632,-46.247368,-31)">
                        <g transform="matrix(1,0,0,1,733,264)">
                          <path d="M0,0L6,0L10,4L13,14L13,34L10,50L28,40L44,32L56,25L69,15L75,12L81,13L82,15L81,25L73,45L65,59L57,69L53,76L50,83L51,90L58,111L60,118L60,128L56,137L56,148L62,163L74,183L82,200L82,208L76,215L61,222L44,225L29,224L19,219L12,213L-4,205L-12,198L-17,194L-25,193L-35,195L-45,202L-57,213L-61,221L-68,237L-80,268L-89,285L-92,292L-92,303L-83,330L-74,351L-66,367L-52,392L-42,413L-35,422L-26,432L-16,442L-11,444L3,445L13,448L22,456L29,467L29,473L26,475L20,475L15,477L-21,476L-31,474L-37,471L-46,459L-54,452L-60,444L-63,439L-73,439L-78,434L-82,418L-88,407L-97,395L-107,382L-120,365L-133,347L-143,332L-154,319L-160,310L-159,300L-158,295L-164,297L-170,302L-173,308L-173,323L-168,353L-159,387L-153,406L-149,428L-144,438L-131,457L-126,460L-113,463L-106,469L-100,481L-99,485L-99,492L-102,495L-119,496L-131,496L-148,495L-157,491L-164,485L-170,467L-178,453L-186,449L-190,442L-192,425L-210,375L-221,348L-233,315L-242,299L-243,293L-263,286L-278,278L-292,268L-308,255L-317,249L-318,250L-321,265L-328,285L-334,296L-348,316L-357,327L-367,337L-373,342L-382,356L-387,367L-389,378L-387,390L-381,405L-371,420L-365,427L-360,429L-345,430L-338,434L-330,442L-325,450L-326,455L-339,459L-368,459L-383,457L-388,453L-397,433L-407,419L-416,406L-428,383L-436,370L-437,367L-437,359L-431,349L-419,334L-409,319L-404,306L-402,293L-402,282L-406,270L-408,269L-409,260L-413,261L-415,254L-417,253L-419,248L-425,264L-432,275L-447,297L-455,306L-465,314L-476,326L-485,335L-493,342L-502,352L-513,371L-518,388L-520,404L-520,429L-518,436L-510,447L-509,451L-509,462L-512,467L-514,469L-519,470L-542,470L-552,467L-555,463L-557,453L-557,439L-553,419L-551,400L-549,377L-548,369L-548,345L-545,339L-526,320L-518,307L-511,291L-511,288L-518,296L-524,301L-533,306L-538,307L-544,311L-555,313L-573,313L-580,312L-594,312L-599,313L-601,312L-600,304L-595,296L-586,288L-570,281L-557,276L-545,268L-534,257L-526,244L-518,225L-512,205L-506,166L-501,149L-491,128L-483,117L-472,105L-459,93L-445,83L-424,72L-406,66L-387,62L-367,60L-337,60L-314,62L-286,67L-263,73L-233,81L-218,80L-181,80L-166,81L-155,81L-141,78L-123,73L-103,69L-77,61L-53,56L-42,44L-33,33L-21,21L-14,15L-6,5L0,0ZM74,19L59,30L36,42L18,53L16,56L27,62L31,65L34,65L35,68L41,68L45,78L47,77L50,69L63,51L71,35L76,22L76,19L74,19ZM-23,34L-22,36L-23,34ZM2,6L-6,15L-11,22L-11,24L-14,25L-22,37L-27,35L-34,43L-48,60L-54,68L-56,74L-58,88L-59,75L-59,68L-57,63L-70,65L-100,74L-128,80L-148,86L-162,87L-192,85L-207,85L-234,87L-241,86L-244,84L-270,77L-295,71L-320,67L-331,66L-372,66L-394,69L-410,73L-429,81L-443,89L-455,98L-467,109L-471,115L-476,130L-486,146L-492,158L-496,171L-498,185L-498,210L-501,228L-501,184L-499,170L-492,151L-477,126L-475,118L-479,120L-487,133L-495,149L-500,164L-504,189L-507,208L-515,234L-524,253L-531,263L-542,274L-556,282L-580,291L-589,298L-593,303L-592,305L-579,306L-572,307L-562,307L-552,305L-546,303L-541,304L-532,297L-530,296L-527,296L-523,291L-520,291L-510,280L-507,275L-505,259L-503,249L-505,245L-504,239L-500,231L-501,239L-499,239L-501,244L-503,261L-506,287L-511,304L-518,318L-525,327L-540,342L-542,345L-543,378L-547,418L-552,442L-551,459L-549,462L-543,462L-541,463L-538,460L-536,464L-525,464L-522,462L-518,463L-515,462L-514,458L-516,448L-523,439L-525,434L-525,398L-522,380L-518,368L-505,346L-494,334L-486,327L-463,304L-455,297L-446,285L-437,271L-429,258L-422,242L-407,215L-397,204L-393,202L-392,204L-388,201L-382,197L-379,196L-376,197L-375,195L-372,197L-381,198L-387,204L-393,206L-401,214L-401,216L-390,218L-382,222L-373,230L-364,235L-354,235L-351,233L-351,223L-348,224L-348,222L-344,223L-342,223L-338,225L-337,224L-333,229L-323,237L-315,243L-304,250L-293,259L-282,267L-277,269L-274,272L-264,278L-244,286L-239,287L-232,272L-230,264L-230,253L-231,238L-231,223L-230,223L-230,226L-228,226L-228,238L-227,250L-227,264L-231,279L-237,292L-234,301L-229,308L-218,340L-205,373L-195,399L-189,414L-184,441L-179,446L-173,449L-166,460L-161,472L-158,482L-154,486L-146,489L-135,488L-133,487L-139,475L-135,479L-131,489L-124,491L-118,490L-118,488L-113,490L-116,481L-120,474L-123,471L-118,475L-111,488L-106,487L-108,485L-107,482L-110,474L-115,469L-125,466L-134,463L-141,454L-150,440L-154,432L-157,419L-160,404L-166,385L-174,353L-180,318L-180,311L-177,303L-170,293L-156,285L-142,274L-135,267L-139,272L-147,280L-153,284L-153,286L-145,286L-137,282L-121,271L-107,263L-100,260L-99,262L-111,267L-138,285L-147,289L-153,292L-154,308L-148,316L-136,331L-122,352L-108,371L-94,389L-84,402L-76,418L-73,431L-69,432L-64,431L-57,437L-50,447L-45,451L-41,452L-40,448L-39,457L-33,466L-28,469L-20,469L-15,471L-1,471L0,469L-1,466L2,466L3,470L5,470L6,466L8,471L14,472L18,469L18,467L21,467L19,462L10,453L5,451L-14,449L-22,445L-34,434L-45,420L-55,401L-63,385L-76,361L-84,344L-93,320L-99,303L-99,294L-94,282L-83,261L-74,236L-68,223L-69,220L-79,228L-90,239L-86,233L-77,223L-65,211L-57,204L-52,199L-40,191L-35,190L-35,189L-51,188L-43,187L-23,187L-14,190L-16,185L-25,175L-26,174L-18,181L-10,190L-4,198L7,205L15,209L22,214L28,215L36,218L49,219L61,216L62,214L59,211L57,208L58,203L60,206L59,210L63,214L68,212L70,207L70,210L75,208L77,206L76,199L72,197L71,191L60,170L54,160L50,148L49,142L51,132L55,124L54,119L53,118L50,102L43,85L40,75L29,67L13,58L10,57L9,59L11,67L9,67L8,63L5,56L5,46L8,28L7,12L4,6L2,6ZM-403,219L-409,228L-415,238L-414,243L-408,253L-406,253L-404,262L-402,263L-398,276L-397,293L-399,308L-403,319L-410,331L-431,359L-432,364L-426,376L-418,387L-413,400L-400,419L-392,430L-382,450L-375,452L-371,452L-364,454L-357,454L-354,453L-353,449L-353,452L-349,453L-349,449L-354,445L-355,443L-347,450L-345,453L-335,453L-333,451L-332,448L-337,443L-345,436L-354,435L-364,434L-372,428L-379,419L-388,404L-393,390L-394,387L-394,371L-390,359L-381,342L-374,334L-366,327L-357,318L-344,300L-336,287L-330,273L-325,256L-324,242L-332,235L-344,229L-346,229L-349,237L-357,240L-367,238L-377,232L-387,224L-397,220L-403,219ZM-502,239L-502,242L-502,239ZM-503,247L-502,249L-503,247Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,705,316)">
                          <path d="M0,0L1,0L1,7L-6,17L-4,21L-5,24L-10,18L-1,6L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,730,319)">
                          <path d="M0,0L1,0L1,5L-9,15L-11,16L-10,11L-1,3L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,714,355)">
                          <path d="M0,0L2,1L-4,6L-13,9L-22,8L-22,7L-11,6L-1,1L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,675,380)">
                          <path d="M0,0L1,4L0,17L-1,21L-3,21L-3,10L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,754,388)">
                          <path d="M0,0L5,1L7,10L7,16L4,15L4,13L-5,12L-10,7L-11,2L-9,1L0,0ZM-4,3L-5,7L-2,10L0,10L-1,3L-4,3Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,395,393)">
                          <path d="M0,0L1,2L-4,13L-6,31L-7,31L-7,17L-3,4L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,597,408)">
                          <path d="M0,0L2,3L10,19L12,25L9,22L1,8L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,729,454)">
                          <path d="M0,0L7,1L19,12L23,17L23,19L27,21L28,23L23,21L15,13L8,5L1,2L0,4L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,362,458)">
                          <path d="M0,0L12,4L23,11L21,12L9,7L7,8L0,2L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                        <g transform="matrix(1,0,0,1,618,465)">
                          <path d="M0,0L2,4L2,13L-1,24L-4,27L-4,24L-1,14L0,0Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '0.19px' }} />
                        </g>
                      </g>
                    </g>
                    <g id="stimulus" className="anim-stimulus-pulse">
                      <g id="pelota" transform="matrix(1.077632,0,0,1.077632,875.127632,712.565789)">
                        <path d="M0,0L8,0L18,3L27,9L33,17L36,24L37,29L37,41L33,52L27,60L19,66L10,69L-4,69L-15,65L-24,57L-29,48L-31,42L-31,28L-27,18L-23,12L-16,6L-6,1L0,0ZM-1,6L-6,7L-14,11L-21,18L-26,28L-26,34L-24,34L-26,35L-26,42L-22,51L-15,59L-4,64L1,64L6,63L10,64L20,59L27,53L32,43L33,37L33,34L31,25L27,17L18,9L10,6L-1,6Z" style={{ fill: 'rgb(21,130,255)', fillRule: 'nonzero', stroke: 'rgb(21,130,255)', strokeWidth: '2.32px' }} />
                      </g>
                    </g>
                  </svg>
                ) : (
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    width={300}
                    height={300}
                  />
                )}
              </div>

              {/* Contenido textual */}
              <div className="space-y-1 sm:space-y-1.5 flex-1 min-w-0">
                <h3 className={`text-sm sm:text-base font-bold ${card.theme.titleColor} tracking-wide`}>
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer (Desktop only) */}
        <div className="hidden sm:flex mt-6 pt-4 border-t border-white/10 items-center justify-between text-xs text-neutral-400 flex-shrink-0">
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
