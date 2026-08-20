import React from 'react';
import { Breed } from '../types';
import { getBreedImageUrl } from '../utils/breedImages';
import { Bookmark, GitCompare, ChevronRight, Shield, Activity, Brain, Users } from 'lucide-react';

interface BreedCardProps {
  breed: Breed;
  onSelect: (breed: Breed) => void;
  isFavorite: boolean;
  onToggleFavorite: (breedId: string) => void;
  isCompared: boolean;
  onToggleCompare: (breedId: string) => void;
  onSelectArchetypeFilter?: (archetype: string) => void;
  priority?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const FALLBACK_DOG_IMAGE = "/images/breeds/golden-retriever.webp";

const formatMetric = (val: string) => val ? val.split(/ \– | \- | \(/)[0].trim() : '';

export const BreedCard: React.FC<BreedCardProps> = ({
  breed,
  onSelect,
  isFavorite,
  onToggleFavorite,
  isCompared,
  onToggleCompare,
  onSelectArchetypeFilter,
  priority = false,
  style,
  className = ''
}) => {
  const imageUrl = breed.imageUrl || getBreedImageUrl(breed.id);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_DOG_IMAGE;
  };

  return (
    <article
      onClick={() => onSelect(breed)}
      style={style}
      className={`group bg-[#141414] rounded-[2rem] border border-white/5 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative cursor-pointer animate-card-fade-in ${className}`}
    >
      
      {/* Top Banner Image with Overlay Actions */}
      <div className="relative h-52 w-full aspect-[16/9] bg-neutral-900 overflow-hidden">
        <img
          src={imageUrl}
          alt={`Fotografía de la raza ${breed.breed}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading={priority ? undefined : "lazy"}
          {...(priority ? { fetchPriority: "high" } : {})}
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />

        {/* Top Header Controls (Category Badge + Action Buttons) */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-start gap-2 z-10">
          {/* Category Tag */}
          <div className="max-w-[60%] truncate">
            {breed.akcGroup && (
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-black/60 text-slate-300 backdrop-blur-md border border-white/5 truncate max-w-full">
                {breed.akcGroup}
              </span>
            )}
          </div>

          {/* Action Buttons Top Right */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(breed.id);
              }}
              aria-label={isCompared ? `Quitar a ${breed.breed} de la comparación` : `Añadir a ${breed.breed} para comparar`}
              title={isCompared ? 'Quitar de comparación' : 'Comparar esta raza'}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-full text-xs backdrop-blur-md border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isCompared
                  ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-black/60 text-slate-200 border-white/10 hover:bg-neutral-800'
              }`}
            >
              <GitCompare className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(breed.id);
              }}
              aria-label={isFavorite ? `Quitar a ${breed.breed} de favoritos` : `Guardar a ${breed.breed} en favoritos`}
              title={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-full text-xs backdrop-blur-md border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isFavorite
                  ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/20'
                  : 'bg-black/60 text-slate-200 border-white/10 hover:bg-neutral-800'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Breed Name & Epithet Banner */}
        <div className="absolute bottom-3.5 left-4 right-4 text-white">
          <h3 className="text-xl font-bold tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
            {breed.breed}
          </h3>
          <p className="text-xs text-amber-300/80 font-medium italic line-clamp-1 mt-0.5">
            "{breed.epithet}"
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Archetypes */}
        {breed.archetypes.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {breed.archetypes.map((arch) => (
              <button
                key={arch}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectArchetypeFilter?.(arch);
                }}
                aria-label={`Filtrar por arquetipo ${arch}`}
                className="text-[10px] font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 inline-flex items-center gap-1"
                title={`Filtrar por arquetipo: ${arch}`}
              >
                <img src="/assets/archetype.svg" alt="" className="w-3 h-3 object-contain shrink-0" />
                <span>{arch}</span>
              </button>
            ))}
          </div>
        )}

        {/* Short Summary */}
        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
          {breed.summary}
        </p>

        {/* Key Traits Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {breed.traits.slice(0, 4).map((trait) => (
            <span
              key={trait}
              className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-900 text-slate-300 border border-white/5"
            >
              #{trait}
            </span>
          ))}
          {breed.traits.length > 4 && (
            <span className="text-[10px] text-neutral-400 py-0.5 px-1 font-medium">
              +{breed.traits.length - 4} más
            </span>
          )}
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 gap-2 text-[11px] bg-neutral-900/80 p-3 rounded-2xl border border-white/5 text-slate-300">
          <div className="flex items-center gap-1.5 truncate" title={`Resiliencia: ${breed.metrics.resiliencia_emocional}`}>
            <Shield className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span className="truncate text-neutral-400">Resiliencia: <span className="font-bold text-white">{formatMetric(breed.metrics.resiliencia_emocional)}</span></span>
          </div>

          <div className="flex items-center gap-1.5 truncate" title={`Sociabilidad: ${breed.metrics.sociabilidad}`}>
            <Users className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            <span className="truncate text-neutral-400">Sociabilidad: <span className="font-bold text-white">{formatMetric(breed.metrics.sociabilidad)}</span></span>
          </div>

          <div className="flex items-center gap-1.5 truncate" title={`Independencia Cognitiva: ${breed.metrics.independencia_cognitiva}`}>
            <Brain className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
            <span className="truncate text-neutral-400">Independencia: <span className="font-bold text-white">{formatMetric(breed.metrics.independencia_cognitiva)}</span></span>
          </div>

          <div className="flex items-center gap-1.5 truncate" title={`Umbral de Estimulación: ${breed.metrics.umbral_de_estimulacion}`}>
            <Activity className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span className="truncate text-neutral-400">Umbral: <span className="font-bold text-white">{formatMetric(breed.metrics.umbral_de_estimulacion)}</span></span>
          </div>
        </div>

      </div>

      {/* Footer Action */}
      <div className="px-5 py-3.5 bg-neutral-900/50 border-t border-white/5 flex items-center justify-end">
        <button
          onClick={() => onSelect(breed)}
          className="min-h-[44px] w-full sm:w-auto flex items-center justify-center gap-1.5 text-xs font-bold text-black bg-amber-500 hover:bg-amber-400 px-4 py-2.5 rounded-full transition-all cursor-pointer shadow-md shadow-amber-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span>Ver Detalles</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </article>
  );
};
