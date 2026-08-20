import React, { useState, useMemo } from 'react';
import { Filter, RotateCcw, SlidersHorizontal, ChevronDown, ChevronUp, HelpCircle, Search, X } from 'lucide-react';
import { FilterState, Facets, Breed } from '../types';
import { canineData } from '../data/canineData';
import { parseMetricLevel, mapMotivationGroup, mapTraitGroup } from '../utils/dataParser';
import { FilterGuideModal } from './FilterGuideModal';

interface FilterPanelProps {
  facets?: Facets;
  breeds?: Breed[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalBreeds: number;
  filteredCount: number;
  resetFilters: () => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  breeds,
  filters,
  setFilters,
  totalBreeds,
  filteredCount,
  resetFilters,
  searchQuery,
  setSearchQuery
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const currentSearch = searchQuery !== undefined ? searchQuery : filters.searchQuery;

  const handleSearchChange = (val: string) => {
    if (setSearchQuery) {
      setSearchQuery(val);
    }
    setFilters(prev => ({ ...prev, searchQuery: val }));
  };

  const breedList = breeds || canineData.breeds;

  const archetypes = useMemo(() => {
    return Array.from(new Set(breedList.flatMap(b => b.archetypes || []).filter(Boolean))).sort();
  }, [breedList]);

  const motivations = useMemo(() => {
    return Array.from(new Set(breedList.flatMap(b => b.motivations || []).map(mapMotivationGroup).filter(Boolean))).sort();
  }, [breedList]);

  const traits = useMemo(() => {
    return Array.from(new Set(breedList.flatMap(b => b.traits || []).map(mapTraitGroup).filter(Boolean))).sort();
  }, [breedList]);

  const resilienceLevels = useMemo(() => {
    return Array.from(new Set(breedList.map(b => parseMetricLevel(b.metrics?.resiliencia_emocional)).filter(Boolean))).sort();
  }, [breedList]);

  const sociabilityLevels = useMemo(() => {
    return Array.from(new Set(breedList.map(b => parseMetricLevel(b.metrics?.sociabilidad)).filter(Boolean))).sort();
  }, [breedList]);

  const independenceLevels = useMemo(() => {
    return Array.from(new Set(breedList.map(b => parseMetricLevel(b.metrics?.independencia_cognitiva)).filter(Boolean))).sort();
  }, [breedList]);

  const activeFilterCount = [
    filters.archetype,
    filters.motivation,
    filters.trait,
    filters.resilienceLevel,
    filters.sociabilityLevel,
    filters.independenceLevel,
    currentSearch
  ].filter(Boolean).length;

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-6 shadow-2xl mb-8 transition-all">
      {/* Top summary bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 rounded-2xl text-amber-500 border border-amber-500/20">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">
              Filtros Dinámicos
            </h2>
            <p className="text-xs text-neutral-400">
              Mostrando <span className="font-bold text-amber-400">{filteredCount}</span> de {totalBreeds} razas en tiempo real
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Entender Filtros button */}
          <button
            onClick={() => setIsGuideOpen(true)}
            className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-3.5 py-2 rounded-full border border-amber-500/30 font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            title="Guía interactiva para entender los filtros etológicos"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Entender Filtros</span>
          </button>

          {/* Quick Sort dropdown */}
          <div className="flex items-center gap-2 text-xs text-neutral-300 bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800">
            <span className="font-semibold text-slate-400 hidden sm:inline">Orden:</span>
            <select
              value={filters.sortBy}
              aria-label="Ordenar resultados por"
              onChange={(e) => handleFilterChange('sortBy', e.target.value as FilterState['sortBy'])}
              className="bg-transparent font-medium text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg cursor-pointer"
            >
              <option value="name-asc" className="bg-neutral-900">Nombre (A-Z)</option>
              <option value="name-desc" className="bg-neutral-900">Nombre (Z-A)</option>
              <option value="fci" className="bg-neutral-900">Grupo FCI</option>
              <option value="traits-count" className="bg-neutral-900">Más rasgos</option>
            </select>
          </div>

          {/* Reset Filters button */}
          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-black bg-amber-500/10 hover:bg-amber-500 px-4 py-2 rounded-full border border-amber-500/30 font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              title="Restablecer todos los filtros"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar ({activeFilterCount})</span>
            </button>
          )}

          {/* Mobile toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full border border-neutral-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{isOpen ? 'Ocultar' : 'Filtros'}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Second Search Bar inside the Dynamic Filter Box */}
      <div className="mt-5">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 absolute left-4 text-neutral-400 pointer-events-none" />
          <input
            id="filter-search-box-input"
            type="text"
            placeholder="Buscar por raza, arquetipo psicológico, rasgo o motivación..."
            aria-label="Buscar por raza, arquetipo psicológico, rasgo o motivación"
            value={currentSearch}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 text-slate-200 placeholder-neutral-500 text-xs sm:text-sm rounded-2xl pl-11 pr-10 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus:border-amber-500/50 transition-all min-h-[46px]"
          />
          {currentSearch && (
            <button 
              type="button"
              onClick={() => handleSearchChange('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-3 min-h-[32px] min-w-[32px] flex items-center justify-center text-neutral-400 hover:text-white text-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Options Grid - Dynamic filter fields */}
      <div className={`mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ${isOpen ? 'block' : 'hidden md:grid'}`}>
        
        {/* 1. Archetype */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-2 block">
            Arquetipo Psicológico
          </label>
          <select
            value={filters.archetype}
            aria-label="Filtrar por Arquetipo Psicológico"
            onChange={(e) => handleFilterChange('archetype', e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus:border-amber-500/50 cursor-pointer min-h-[44px]"
          >
            <option value="" className="bg-neutral-900">Todos los arquetipos ({archetypes.length})</option>
            {archetypes.map(arch => (
              <option key={arch} value={arch} className="bg-neutral-900">{arch}</option>
            ))}
          </select>
        </div>

        {/* 2. Primary Motivation */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-2 block">
            Motivación Principal
          </label>
          <select
            value={filters.motivation}
            aria-label="Filtrar por Motivación Principal"
            onChange={(e) => handleFilterChange('motivation', e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus:border-amber-500/50 cursor-pointer min-h-[44px]"
          >
            <option value="" className="bg-neutral-900">Todas las motivaciones ({motivations.length})</option>
            {motivations.map(mot => (
              <option key={mot} value={mot} className="bg-neutral-900">{mot}</option>
            ))}
          </select>
        </div>

        {/* 3. Traits */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-2 block">
            Rasgo de Carácter
          </label>
          <select
            value={filters.trait}
            aria-label="Filtrar por Rasgo de Carácter"
            onChange={(e) => handleFilterChange('trait', e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus:border-amber-500/50 cursor-pointer min-h-[44px]"
          >
            <option value="" className="bg-neutral-900">Todos los rasgos ({traits.length})</option>
            {traits.map(trait => (
              <option key={trait} value={trait} className="bg-neutral-900">{trait}</option>
            ))}
          </select>
        </div>

        {/* 4. Resilience Level */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-2 block">
            Resiliencia Emocional
          </label>
          <select
            value={filters.resilienceLevel}
            aria-label="Filtrar por Resiliencia Emocional"
            onChange={(e) => handleFilterChange('resilienceLevel', e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus:border-amber-500/50 cursor-pointer min-h-[44px]"
          >
            <option value="" className="bg-neutral-900">Todas las resiliencias ({resilienceLevels.length})</option>
            {resilienceLevels.map(lvl => (
              <option key={lvl} value={lvl} className="bg-neutral-900">{lvl}</option>
            ))}
          </select>
        </div>

        {/* 5. Sociability Level */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-2 block">
            Sociabilidad
          </label>
          <select
            value={filters.sociabilityLevel}
            aria-label="Filtrar por Sociabilidad"
            onChange={(e) => handleFilterChange('sociabilityLevel', e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus:border-amber-500/50 cursor-pointer min-h-[44px]"
          >
            <option value="" className="bg-neutral-900">Todas las sociabilidades ({sociabilityLevels.length})</option>
            {sociabilityLevels.map(lvl => (
              <option key={lvl} value={lvl} className="bg-neutral-900">{lvl}</option>
            ))}
          </select>
        </div>

        {/* 6. Independence Level */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-2 block">
            Independencia Cognitiva
          </label>
          <select
            value={filters.independenceLevel}
            aria-label="Filtrar por Independencia Cognitiva"
            onChange={(e) => handleFilterChange('independenceLevel', e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus:border-amber-500/50 cursor-pointer min-h-[44px]"
          >
            <option value="" className="bg-neutral-900">Todas las independencias ({independenceLevels.length})</option>
            {independenceLevels.map(lvl => (
              <option key={lvl} value={lvl} className="bg-neutral-900">{lvl}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Active Filter Pills Bar */}
      {activeFilterCount > 0 && (
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">Filtros activos:</span>
          {currentSearch && (
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 text-xs px-3 py-1.5 rounded-full border border-amber-500/30 font-medium">
              Búsqueda: &ldquo;{currentSearch}&rdquo;
              <button onClick={() => handleSearchChange('')} aria-label="Eliminar filtro de búsqueda" className="hover:text-white font-bold ml-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full px-1">✕</button>
            </span>
          )}
          {filters.archetype && (
            <span className="inline-flex items-center gap-1.5 bg-purple-500/10 text-purple-300 text-xs px-3 py-1.5 rounded-full border border-purple-500/30 font-medium">
              Arquetipo: {filters.archetype}
              <button onClick={() => handleFilterChange('archetype', '')} aria-label="Eliminar filtro de arquetipo" className="hover:text-white font-bold ml-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full px-1">✕</button>
            </span>
          )}
          {filters.motivation && (
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-300 text-xs px-3 py-1.5 rounded-full border border-blue-500/30 font-medium">
              Motivación: {filters.motivation}
              <button onClick={() => handleFilterChange('motivation', '')} aria-label="Eliminar filtro de motivación" className="hover:text-white font-bold ml-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full px-1">✕</button>
            </span>
          )}
          {filters.trait && (
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-300 text-xs px-3 py-1.5 rounded-full border border-emerald-500/30 font-medium">
              Rasgo: {filters.trait}
              <button onClick={() => handleFilterChange('trait', '')} aria-label="Eliminar filtro de rasgo" className="hover:text-white font-bold ml-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full px-1">✕</button>
            </span>
          )}
          {filters.resilienceLevel && (
            <span className="inline-flex items-center gap-1.5 bg-neutral-800 text-slate-200 text-xs px-3 py-1.5 rounded-full border border-neutral-700 font-medium">
              Resiliencia: {filters.resilienceLevel}
              <button onClick={() => handleFilterChange('resilienceLevel', '')} aria-label="Eliminar filtro de resiliencia" className="hover:text-white font-bold ml-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full px-1">✕</button>
            </span>
          )}
          {filters.sociabilityLevel && (
            <span className="inline-flex items-center gap-1.5 bg-neutral-800 text-slate-200 text-xs px-3 py-1.5 rounded-full border border-neutral-700 font-medium">
              Sociabilidad: {filters.sociabilityLevel}
              <button onClick={() => handleFilterChange('sociabilityLevel', '')} aria-label="Eliminar filtro de sociabilidad" className="hover:text-white font-bold ml-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full px-1">✕</button>
            </span>
          )}
          {filters.independenceLevel && (
            <span className="inline-flex items-center gap-1.5 bg-neutral-800 text-slate-200 text-xs px-3 py-1.5 rounded-full border border-neutral-700 font-medium">
              Independencia: {filters.independenceLevel}
              <button onClick={() => handleFilterChange('independenceLevel', '')} aria-label="Eliminar filtro de independencia" className="hover:text-white font-bold ml-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full px-1">✕</button>
            </span>
          )}
        </div>
      )}

      {/* Filter Guide Modal */}
      {isGuideOpen && (
        <FilterGuideModal onClose={() => setIsGuideOpen(false)} />
      )}
    </div>
  );
};
