import React from 'react';
import { Breed } from '../types';
import { getBreedImageUrl } from '../utils/breedImages';
import { parseMetricLevel } from '../utils/dataParser';
import { 
  Shield, 
  Activity, 
  Brain, 
  Users, 
  Flame
} from 'lucide-react';

interface BreedTableViewProps {
  breeds: Breed[];
  onSelect: (breed: Breed) => void;
  favorites?: string[];
  onToggleFavorite?: (breedId: string) => void;
  comparedIds?: string[];
  onToggleCompare?: (breedId: string) => void;
  onSelectArchetypeFilter?: (archetype: string) => void;
}

const FALLBACK_DOG_IMAGE = "/images/breeds/golden-retriever.webp";

/**
 * Returns color-coded style classes based on sanitized metric level
 */
function getMetricBadgeClass(levelStr: string) {
  const parsed = parseMetricLevel(levelStr);
  switch (parsed) {
    case 'Muy Alta':
    case 'Extrema':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    case 'Alta':
    case 'Media-Alta':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    case 'Media':
      return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
    case 'Media-Baja':
    case 'Baja':
    case 'Muy Baja':
      return 'bg-neutral-800 text-neutral-400 border-white/5';
    default:
      return 'bg-neutral-800 text-slate-300 border-white/5';
  }
}

export const BreedTableView: React.FC<BreedTableViewProps> = ({
  breeds,
  onSelect,
  onSelectArchetypeFilter
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_DOG_IMAGE;
  };

  return (
    <div className="bg-[#141414] border border-white/5 rounded-[2rem] shadow-2xl overflow-hidden animate-card-fade-in w-full">
      <div className="overflow-x-auto custom-scrollbar w-full">
        <table className="w-full text-left border-collapse table-auto">
          <thead>
            <tr className="border-b border-white/5 bg-neutral-900/90 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <th scope="col" className="py-3 pl-3 sm:pl-5 pr-2">
                Raza & Grupo
              </th>
              <th scope="col" className="py-3 px-2 w-[140px] sm:w-[170px]">
                Arquetipo
              </th>
              <th scope="col" className="py-3 px-1 text-center w-[75px]">
                <span className="inline-flex items-center gap-0.5 justify-center" title="Resiliencia Emocional">
                  <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Resil.</span>
                </span>
              </th>
              <th scope="col" className="py-3 px-1 text-center w-[75px]">
                <span className="inline-flex items-center gap-0.5 justify-center" title="Sociabilidad">
                  <Users className="w-3 h-3 text-blue-400 shrink-0" />
                  <span>Sociab.</span>
                </span>
              </th>
              <th scope="col" className="py-3 pl-1 pr-0 text-center w-[65px]">
                <span className="inline-flex items-center gap-0.5 justify-center" title="Independencia Cognitiva">
                  <Brain className="w-3 h-3 text-purple-400 shrink-0" />
                  <span>Indep.</span>
                </span>
              </th>
              <th scope="col" className="py-3 pl-0 pr-1 text-center w-[65px]">
                <span className="inline-flex items-center gap-0.5 justify-center" title="Umbral de Estimulación">
                  <Activity className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>Umbral</span>
                </span>
              </th>
              <th scope="col" className="py-3 pl-1 pr-3 sm:pr-5 text-center w-[75px]">
                <span className="inline-flex items-center gap-0.5 justify-center" title="Motivación Intrínseca">
                  <Flame className="w-3 h-3 text-rose-400 shrink-0" />
                  <span>Motiv.</span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs">
            {breeds.map((breed, index) => {
              const imageUrl = breed.imageUrl || getBreedImageUrl(breed.id);
              const mainArchetype = breed.archetypes[0];

              const resLevel = parseMetricLevel(breed.metrics.resiliencia_emocional) || 'Media';
              const socLevel = parseMetricLevel(breed.metrics.sociabilidad) || 'Media';
              const indLevel = parseMetricLevel(breed.metrics.independencia_cognitiva) || 'Media';
              const umbLevel = parseMetricLevel(breed.metrics.umbral_de_estimulacion) || 'Media';
              const motLevel = parseMetricLevel(breed.metrics.motivacion_intrinseca) || 'Media';

              return (
                <tr
                  key={breed.id}
                  onClick={() => onSelect(breed)}
                  className="group hover:bg-neutral-800/50 cursor-pointer transition-colors duration-150"
                  style={{
                    animationDelay: `${Math.min(index, 20) * 20}ms`
                  }}
                >
                  {/* Breed Info & Thumbnail */}
                  <td className="py-2.5 pl-3 sm:pl-5 pr-1">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-neutral-900 border border-white/10 shrink-0 group-hover:border-amber-500/50 transition-colors shadow-inner">
                        <img
                          src={imageUrl}
                          alt={breed.breed}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="min-w-0 max-w-[150px] sm:max-w-[180px] lg:max-w-[220px]">
                        <div className="font-bold text-white group-hover:text-amber-400 transition-colors truncate text-xs">
                          {breed.breed}
                        </div>
                        {breed.epithet && (
                          <div className="text-[10px] text-slate-400 italic truncate">
                            &ldquo;{breed.epithet}&rdquo;
                          </div>
                        )}
                        {breed.akcGroup && (
                          <span className="inline-block text-[8px] uppercase tracking-wider font-medium px-1 py-0.2 rounded bg-neutral-900 text-neutral-400 border border-white/5 truncate max-w-[110px]">
                            {breed.akcGroup}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Archetype */}
                  <td className="py-2.5 px-1">
                    {mainArchetype ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectArchetypeFilter?.(mainArchetype);
                        }}
                        aria-label={`Filtrar por arquetipo ${mainArchetype}`}
                        title={`Filtrar por arquetipo: ${mainArchetype}`}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all cursor-pointer text-left max-w-[130px] sm:max-w-[150px] truncate"
                      >
                        <img src="/assets/archetype.svg" alt="" className="w-2.5 h-2.5 object-contain shrink-0" />
                        <span className="truncate">{mainArchetype}</span>
                      </button>
                    ) : (
                      <span className="text-[10px] text-neutral-500">-</span>
                    )}
                  </td>

                  {/* Resilience */}
                  <td className="py-2.5 px-1 text-center">
                    <span 
                      title={`Resiliencia: ${breed.metrics.resiliencia_emocional}`}
                      className={`inline-block text-[9.5px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap ${getMetricBadgeClass(breed.metrics.resiliencia_emocional)}`}
                    >
                      {resLevel}
                    </span>
                  </td>

                  {/* Sociability */}
                  <td className="py-2.5 px-1 text-center w-[75px]">
                    <span 
                      title={`Sociabilidad: ${breed.metrics.sociabilidad}`}
                      className={`inline-block text-[9.5px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap ${getMetricBadgeClass(breed.metrics.sociabilidad)}`}
                    >
                      {socLevel}
                    </span>
                  </td>

                  {/* Cognitive Independence */}
                  <td className="py-2.5 pl-1 pr-0 text-center w-[65px]">
                    <span 
                      title={`Independencia cognitiva: ${breed.metrics.independencia_cognitiva}`}
                      className={`inline-block text-[9.5px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap ${getMetricBadgeClass(breed.metrics.independencia_cognitiva)}`}
                    >
                      {indLevel}
                    </span>
                  </td>

                  {/* Stimulation Threshold */}
                  <td className="py-2.5 pl-0 pr-1 text-center w-[65px]">
                    <span 
                      title={`Umbral de estimulación: ${breed.metrics.umbral_de_estimulacion}`}
                      className={`inline-block text-[9.5px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap ${getMetricBadgeClass(breed.metrics.umbral_de_estimulacion)}`}
                    >
                      {umbLevel}
                    </span>
                  </td>

                  {/* Intrinsic Motivation */}
                  <td className="py-2.5 pl-1 pr-3 sm:pr-5 text-center w-[75px]">
                    <span 
                      title={`Motivación intrínseca: ${breed.metrics.motivacion_intrinseca}`}
                      className={`inline-block text-[9.5px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap ${getMetricBadgeClass(breed.metrics.motivacion_intrinseca)}`}
                    >
                      {motLevel}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
