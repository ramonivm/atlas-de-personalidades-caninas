import React, { useState, useRef, useEffect } from 'react';
import { Breed } from '../types';
import { getBreedImageUrl } from '../utils/breedImages';
import { normalizeText } from '../utils/textUtils';
import { X, GitCompare, Shield, Users, Brain, Activity, Heart, Search, Plus } from 'lucide-react';

interface BreedCompareProps {
  comparedBreeds: Breed[];
  onRemoveCompare: (breedId: string) => void;
  onClearCompare: () => void;
  onSelectBreed: (breed: Breed) => void;
  allBreeds: Breed[];
  onAddBreedToCompare: (breed: Breed) => void;
}

export const BreedCompare: React.FC<BreedCompareProps> = ({
  comparedBreeds,
  onRemoveCompare,
  onClearCompare,
  onSelectBreed,
  allBreeds,
  onAddBreedToCompare
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const availableBreeds = allBreeds.filter(
    (b) => !comparedBreeds.some((cb) => cb.id === b.id)
  );

  const filteredBreeds = availableBreeds.filter((b) => {
    const q = normalizeText(searchQuery);
    if (!q) return true;
    return (
      normalizeText(b.breed).includes(q) ||
      normalizeText(b.id).includes(q) ||
      normalizeText(b.epithet).includes(q) ||
      normalizeText(b.summary).includes(q) ||
      b.archetypes.some((a) => normalizeText(a).includes(q)) ||
      b.traits.some((t) => normalizeText(t).includes(q))
    );
  });

  const handleSelectBreedToCompare = (breed: Breed) => {
    onAddBreedToCompare(breed);
    setSearchQuery('');
    setIsDropdownOpen(false);
  };

  if (comparedBreeds.length === 0) {
    return (
      <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-6 sm:p-10 text-center max-w-3xl mx-auto my-8 shadow-2xl space-y-6">
        <div className="w-16 h-16 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto">
          <GitCompare className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Comparador de Razas Caninas
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed mt-2 max-w-lg mx-auto">
            Busca y selecciona de 2 a 3 razas para comparar sus arquetipos, resiliencia emocional, sociabilidad, independencia y motivación intrínseca lado a lado.
          </p>
        </div>

        {/* Search Bar for Empty State */}
        <div className="relative max-w-xl mx-auto text-left" ref={dropdownRef}>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder={`Buscar entre las ${allBreeds.length} razas para comparar...`}
              aria-label="Buscar razas para comparar"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsDropdownOpen(true);
              }}
              onFocus={() => setIsDropdownOpen(true)}
              className="w-full bg-neutral-900 border border-neutral-800 text-slate-100 placeholder-neutral-500 text-sm rounded-full pl-12 pr-10 py-3.5 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Limpiar campo de búsqueda"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs p-1 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Autocomplete Results Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#181818] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-40 max-h-80 overflow-y-auto divide-y divide-white/5">
              {filteredBreeds.length > 0 ? (
                filteredBreeds.slice(0, 20).map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleSelectBreedToCompare(b)}
                    className="w-full p-3 flex items-center justify-between gap-3 text-left hover:bg-amber-500/10 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={b.imageUrl || getBreedImageUrl(b.id)}
                        alt={b.breed}
                        className="w-10 h-10 rounded-xl object-cover bg-neutral-800 border border-white/10"
                      />
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                          {b.breed}
                        </p>
                        <p className="text-xs text-neutral-400 italic truncate max-w-xs">
                          {b.epithet}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-neutral-800 text-slate-300 group-hover:bg-amber-500 group-hover:text-black rounded-full transition-all flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" />
                      Añadir
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-neutral-400">
                  No se encontraron razas que coincidan con "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick picker suggestions */}
        <div className="pt-4 border-t border-white/5">
          <p className="text-[10px] font-bold text-amber-500 mb-3 uppercase tracking-[0.2em]">
            Sugerencias populares:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {allBreeds.slice(0, 8).map((b) => (
              <button
                key={b.id}
                onClick={() => onAddBreedToCompare(b)}
                className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-amber-500 text-slate-300 hover:text-black border border-white/5 transition-all cursor-pointer flex items-center gap-1"
              >
                <Plus className="w-3 h-3 text-amber-500" />
                <span>{b.breed}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#141414] text-white p-6 rounded-[2.5rem] border border-white/5 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
            <GitCompare className="w-4 h-4" />
            <span>Matriz Comparativa Etológica</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Comparando {comparedBreeds.length} {comparedBreeds.length === 1 ? 'Raza' : 'Razas'}
          </h2>
        </div>

        <div className="flex items-center flex-wrap gap-3">
          {/* Search Box for Adding More Breeds */}
          {comparedBreeds.length < 3 && (
            <div className="relative" ref={dropdownRef}>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Buscar y añadir raza..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                  className="bg-neutral-900 border border-neutral-800 text-slate-200 placeholder-neutral-500 text-xs rounded-full pl-9 pr-8 py-2.5 w-64 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown List */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-[#181818] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-40 max-h-72 overflow-y-auto divide-y divide-white/5">
                  {filteredBreeds.length > 0 ? (
                    filteredBreeds.slice(0, 15).map((b) => (
                      <button
                        key={b.id}
                        onClick={() => handleSelectBreedToCompare(b)}
                        className="w-full p-2.5 flex items-center gap-3 text-left hover:bg-amber-500/10 transition-colors cursor-pointer group"
                      >
                        <img
                          src={b.imageUrl || getBreedImageUrl(b.id)}
                          alt={b.breed}
                          className="w-8 h-8 rounded-lg object-cover bg-neutral-800 border border-white/10"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white group-hover:text-amber-400 truncate">
                            {b.breed}
                          </p>
                          <p className="text-[10px] text-neutral-400 italic truncate">
                            {b.epithet}
                          </p>
                        </div>
                        <Plus className="w-4 h-4 text-amber-500 shrink-0" />
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-neutral-400">
                      Sin resultados para "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <button
            onClick={onClearCompare}
            className="px-4 py-2.5 text-xs font-bold text-rose-300 hover:text-rose-100 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-full transition-all cursor-pointer"
          >
            Limpiar todo
          </button>
        </div>
      </div>

      {/* VISTA MOBILE: TABLA VERTICAL (< md) */}
      <div className="block md:hidden space-y-4">
        {/* Cabecera Fija / Sticky con Foto, Nombre y Botón Eliminar */}
        <div className="sticky top-[56px] z-20 bg-[#0A0A0A]/95 backdrop-blur-md pt-2 pb-3 border-b border-white/10 -mx-4 px-4">
          <div className={`grid gap-2 ${
            comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
          }`}>
            {comparedBreeds.map((breed) => {
              const imageUrl = breed.imageUrl || getBreedImageUrl(breed.id);
              return (
                <div key={breed.id} className="bg-[#141414] border border-white/10 rounded-2xl p-2.5 flex flex-col justify-between relative shadow-lg">
                  <button
                    type="button"
                    onClick={() => onRemoveCompare(breed.id)}
                    className="absolute -top-1.5 -right-1.5 p-1 rounded-full bg-rose-600 text-white hover:bg-rose-700 shadow-md cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                    title={`Quitar ${breed.breed} de comparación`}
                    aria-label={`Quitar ${breed.breed} de comparación`}
                  >
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>

                  <div className="flex items-center gap-2">
                    <img
                      src={imageUrl}
                      alt={breed.breed}
                      className="w-10 h-10 rounded-xl object-cover border border-white/10 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-white truncate leading-tight">
                        {breed.breed}
                      </h4>
                      <p className="text-[10px] text-amber-400 italic truncate mt-0.5">
                        "{breed.epithet}"
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectBreed(breed)}
                    className="mt-2 w-full text-[10px] font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 py-1 rounded-lg border border-amber-500/20 transition-colors text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
                  >
                    Ver Ficha
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filas de Atributos Agrupados lado a lado */}
        <div className="space-y-3 pt-1">
          
          {/* Fila: Arquetipos */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 space-y-2">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
              Arquetipos Psicológicos
            </span>
            <div className={`grid gap-2 ${
              comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {comparedBreeds.map(b => (
                <div key={b.id} className="bg-neutral-900/90 p-2 rounded-xl border border-white/5 flex flex-wrap gap-1">
                  {b.archetypes.map(a => (
                    <span key={a} className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded-full font-bold text-[9px] border border-purple-500/20">
                      {a}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Fila: Resiliencia Emocional */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-neutral-300 text-[10px] font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Resiliencia Emocional</span>
            </div>
            <div className={`grid gap-2 ${
              comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {comparedBreeds.map(b => (
                <div key={b.id} className="bg-neutral-900/90 p-2.5 rounded-xl border border-white/5">
                  <p className="font-bold text-white text-xs">
                    {b.metrics.resiliencia_emocional}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fila: Sociabilidad */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-neutral-300 text-[10px] font-bold uppercase tracking-widest">
              <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Sociabilidad</span>
            </div>
            <div className={`grid gap-2 ${
              comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {comparedBreeds.map(b => (
                <div key={b.id} className="bg-neutral-900/90 p-2.5 rounded-xl border border-white/5">
                  <p className="font-bold text-white text-xs">
                    {b.metrics.sociabilidad}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fila: Independencia Cognitiva */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-neutral-300 text-[10px] font-bold uppercase tracking-widest">
              <Brain className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>Independencia Cognitiva</span>
            </div>
            <div className={`grid gap-2 ${
              comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {comparedBreeds.map(b => (
                <div key={b.id} className="bg-neutral-900/90 p-2.5 rounded-xl border border-white/5">
                  <p className="font-bold text-white text-xs">
                    {b.metrics.independencia_cognitiva}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fila: Umbral de Estimulación */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-neutral-300 text-[10px] font-bold uppercase tracking-widest">
              <Activity className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Umbral de Estimulación</span>
            </div>
            <div className={`grid gap-2 ${
              comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {comparedBreeds.map(b => (
                <div key={b.id} className="bg-neutral-900/90 p-2.5 rounded-xl border border-white/5">
                  <p className="font-bold text-white text-xs">
                    {b.metrics.umbral_de_estimulacion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fila: Motivación Intrínseca */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-neutral-300 text-[10px] font-bold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Motivación Intrínseca</span>
            </div>
            <div className={`grid gap-2 ${
              comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {comparedBreeds.map(b => (
                <div key={b.id} className="bg-neutral-900/90 p-2.5 rounded-xl border border-white/5">
                  <p className="font-bold text-white text-[11px] leading-tight">
                    {b.metrics.motivacion_intrinseca}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fila: Rasgos Clave */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 space-y-2">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
              Rasgos Clave
            </span>
            <div className={`grid gap-2 ${
              comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {comparedBreeds.map(b => (
                <div key={b.id} className="bg-neutral-900/90 p-2 rounded-xl border border-white/5 flex flex-wrap gap-1">
                  {b.traits.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-neutral-800 text-slate-300 rounded-full font-medium text-[9px] border border-white/5">
                      #{t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Fila: Grupo Clasificación */}
          <div className="bg-[#141414] border border-white/5 rounded-2xl p-3 space-y-2">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
              Grupo FCI
            </span>
            <div className={`grid gap-2 ${
              comparedBreeds.length === 1 ? 'grid-cols-1' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
            }`}>
              {comparedBreeds.map(b => (
                <div key={b.id} className="bg-neutral-900/90 p-2.5 rounded-xl border border-white/5">
                  <p className="text-[10px] text-amber-400 font-semibold leading-tight">{b.fciGroup}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* VISTA DESKTOP: TARJETAS EN Malla (>= md) */}
      <div className="hidden md:block overflow-x-auto pb-4">
        <div className={`grid gap-5 ${
          comparedBreeds.length === 1 ? 'grid-cols-1 max-w-xl mx-auto' : comparedBreeds.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
        }`}>
          
          {comparedBreeds.map((breed) => {
            const imageUrl = breed.imageUrl || getBreedImageUrl(breed.id);

            return (
              <div key={breed.id} className="bg-[#141414] border border-white/5 rounded-[2.5rem] shadow-xl flex flex-col justify-between overflow-hidden">
                
                {/* Header Image */}
                <div className="relative h-48 w-full bg-neutral-900">
                  <img src={imageUrl} alt={breed.breed} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                  
                  <button
                    onClick={() => onRemoveCompare(breed.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/80 text-slate-200 hover:text-white hover:bg-rose-600 border border-white/10 transition-colors cursor-pointer"
                    title="Quitar de comparación"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold tracking-tight leading-tight">
                      {breed.breed}
                    </h3>
                    <p className="text-xs text-amber-400 font-serif italic truncate mt-0.5">
                      "{breed.epithet}"
                    </p>
                  </div>
                </div>

                {/* Metrics Breakdown */}
                <div className="p-5 space-y-4 flex-1 text-xs text-slate-300">
                  
                  {/* Archetypes */}
                  <div>
                    <span className="font-bold text-amber-500 uppercase text-[10px] block mb-1.5 tracking-[0.2em]">
                      Arquetipos
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {breed.archetypes.map(a => (
                        <span key={a} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full font-bold text-[10px] border border-purple-500/20">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Resiliencia */}
                  <div className="bg-neutral-900/90 p-3 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-medium mb-1">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Resiliencia Emocional</span>
                    </div>
                    <p className="font-bold text-white text-sm">
                      {breed.metrics.resiliencia_emocional}
                    </p>
                  </div>

                  {/* Sociabilidad */}
                  <div className="bg-neutral-900/90 p-3 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-medium mb-1">
                      <Users className="w-3.5 h-3.5 text-blue-400" />
                      <span>Sociabilidad</span>
                    </div>
                    <p className="font-bold text-white text-sm">
                      {breed.metrics.sociabilidad}
                    </p>
                  </div>

                  {/* Independencia */}
                  <div className="bg-neutral-900/90 p-3 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-medium mb-1">
                      <Brain className="w-3.5 h-3.5 text-purple-400" />
                      <span>Independencia Cognitiva</span>
                    </div>
                    <p className="font-bold text-white text-sm">
                      {breed.metrics.independencia_cognitiva}
                    </p>
                  </div>

                  {/* Umbral */}
                  <div className="bg-neutral-900/90 p-3 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-medium mb-1">
                      <Activity className="w-3.5 h-3.5 text-amber-400" />
                      <span>Umbral de Estimulación</span>
                    </div>
                    <p className="font-bold text-white text-sm">
                      {breed.metrics.umbral_de_estimulacion}
                    </p>
                  </div>

                  {/* Motivación Intrínseca */}
                  <div className="bg-neutral-900/90 p-3 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-medium mb-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400" />
                      <span>Motivación Intrínseca</span>
                    </div>
                    <p className="font-bold text-white text-xs">
                      {breed.metrics.motivacion_intrinseca}
                    </p>
                  </div>

                  {/* Motivadores y Rasgos */}
                  <div>
                    <span className="font-bold text-amber-500 uppercase text-[10px] block mb-1.5 tracking-[0.2em]">
                      Rasgos Clave
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {breed.traits.map(t => (
                        <span key={t} className="px-2.5 py-0.5 bg-neutral-900 text-slate-300 rounded-full font-medium text-[10px] border border-white/5">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Button */}
                <div className="p-4 bg-neutral-900/50 border-t border-white/5">
                  <button
                    onClick={() => onSelectBreed(breed)}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full transition-all cursor-pointer shadow-md shadow-amber-500/10"
                  >
                    Ver Ficha Completa
                  </button>
                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
};
