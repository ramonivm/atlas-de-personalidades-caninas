import React, { useState } from 'react';
import { Filter, RotateCcw, SlidersHorizontal, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FilterState, Facets } from '../types';

interface FilterPanelProps {
  facets: Facets;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalBreeds: number;
  filteredCount: number;
  resetFilters: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  facets,
  filters,
  setFilters,
  totalBreeds,
  filteredCount,
  resetFilters
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeFilterCount = [
    filters.archetype,
    filters.motivation,
    filters.trait,
    filters.resilienceLevel,
    filters.sociabilityLevel,
    filters.independenceLevel,
    filters.searchQuery
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

        <div className="flex items-center gap-2">
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
              className="min-h-[44px] flex items-center gap-1.5 text-xs text-amber-400 hover:text-black bg-amber-500/10 hover:bg-amber-500 px-4 py-2 rounded-full border border-amber-500/30 font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              title="Restablecer todos los filtros"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar ({activeFilterCount})</span>
            </button>
          )}

          {/* Mobile toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden min-h-[44px] flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full border border-neutral-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{isOpen ? 'Ocultar' : 'Filtros'}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Filter Options Grid */}
      <div className={`mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${isOpen ? 'block' : 'hidden md:grid'}`}>
        
        {/* Archetype */}
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
            <option value="" className="bg-neutral-900">Todos los 14 arquetipos</option>
            {facets.archetypes.map(arch => (
              <option key={arch} value={arch} className="bg-neutral-900">{arch}</option>
            ))}
          </select>
        </div>

        {/* Primary Motivation */}
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
            <option value="" className="bg-neutral-900">Todas las motivaciones</option>
            {facets.motivations.slice().sort().map(mot => (
              <option key={mot} value={mot} className="bg-neutral-900">{mot}</option>
            ))}
          </select>
        </div>

        {/* Traits */}
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
            <option value="" className="bg-neutral-900">Todos los rasgos</option>
            {facets.traits.slice().sort().map(trait => (
              <option key={trait} value={trait} className="bg-neutral-900">{trait}</option>
            ))}
          </select>
        </div>

        {/* Resilience Level */}
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
            <option value="" className="bg-neutral-900">Cualquier resiliencia</option>
            <option value="Alta" className="bg-neutral-900">Alta / Muy Alta</option>
            <option value="Media" className="bg-neutral-900">Media</option>
            <option value="Baja" className="bg-neutral-900">Baja / Media-Baja</option>
          </select>
        </div>

        {/* Sociability Level */}
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
            <option value="" className="bg-neutral-900">Cualquier sociabilidad</option>
            <option value="Alta" className="bg-neutral-900">Alta / Muy Alta</option>
            <option value="Media" className="bg-neutral-900">Media</option>
            <option value="Baja" className="bg-neutral-900">Baja / Selectiva</option>
          </select>
        </div>

        {/* Independence Level */}
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
            <option value="" className="bg-neutral-900">Cualquier independencia</option>
            <option value="Alta" className="bg-neutral-900">Alta / Extrema</option>
            <option value="Media" className="bg-neutral-900">Media</option>
            <option value="Baja" className="bg-neutral-900">Baja / Media-Baja</option>
          </select>
        </div>

      </div>

      {/* Active Filter Pills Bar */}
      {activeFilterCount > 0 && (
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">Filtros activos:</span>
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
    </div>
  );
};
