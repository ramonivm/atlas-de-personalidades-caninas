import React, { useState, useRef, useEffect } from 'react';
import { Breed } from '../types';
import { getBreedImageUrl } from '../utils/breedImages';
import { normalizeText } from '../utils/textUtils';
import { 
  X, 
  GitCompare, 
  Shield, 
  Users, 
  Brain, 
  Activity, 
  Heart, 
  Search, 
  Plus, 
  BarChart3, 
  LayoutGrid, 
  Layers,
  Sparkles,
  Info,
  Table,
  TrendingUp,
  Award,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from 'recharts';

interface BreedCompareProps {
  comparedBreeds: Breed[];
  onRemoveCompare: (breedId: string) => void;
  onClearCompare: () => void;
  onSelectBreed: (breed: Breed) => void;
  allBreeds: Breed[];
  onAddBreedToCompare: (breed: Breed) => void;
}

// Convert qualitative metric descriptions to normalized 1-5 numeric scale
function parseMetricScore(val: string | undefined): number {
  if (!val) return 3;
  const s = val.toLowerCase();
  
  if (
    s.includes('extrema') || 
    s.includes('extremo') || 
    s.includes('muy alta') || 
    s.includes('muy alto') || 
    s.includes('máxima') || 
    s.includes('máximo')
  ) {
    return 5;
  }
  if (
    s.includes('media - alta') || 
    s.includes('media-alta') || 
    s.includes('medio - alto') || 
    s.includes('medio-alto') ||
    s.includes('moderadamente alta') || 
    s.includes('moderado - alto')
  ) {
    return 4.2;
  }
  if (s.includes('alta') || s.includes('alto') || s.includes('elevada') || s.includes('elevado')) {
    return 4;
  }
  if (
    s.includes('media - baja') || 
    s.includes('media-baja') || 
    s.includes('medio - bajo') || 
    s.includes('medio-bajo') ||
    s.includes('moderadamente baja') || 
    s.includes('selectiva') || 
    s.includes('reservad')
  ) {
    return 2.8;
  }
  if (
    s.includes('media') || 
    s.includes('medio') || 
    s.includes('moderada') || 
    s.includes('moderado') || 
    s.includes('neutra') || 
    s.includes('equilibrad')
  ) {
    return 3;
  }
  if (
    s.includes('muy baja') || 
    s.includes('muy bajo') || 
    s.includes('mínima') || 
    s.includes('mínimo')
  ) {
    return 1;
  }
  if (s.includes('baja') || s.includes('bajo')) {
    return 2;
  }
  return 3;
}

const METRICS_CONFIG = [
  {
    key: 'resiliencia',
    label: 'Resiliencia Emocional',
    shortLabel: 'Resiliencia',
    metricKey: 'resiliencia_emocional' as const,
    description: 'Gestión del estrés, estabilidad y recuperación tras conflicto',
    icon: Shield,
    color: '#34D399'
  },
  {
    key: 'sociabilidad',
    label: 'Sociabilidad',
    shortLabel: 'Sociabilidad',
    metricKey: 'sociabilidad' as const,
    description: 'Disposición hacia personas extrañas y otros perros',
    icon: Users,
    color: '#38BDF8'
  },
  {
    key: 'independencia',
    label: 'Independencia Cognitiva',
    shortLabel: 'Independencia',
    metricKey: 'independencia_cognitiva' as const,
    description: 'Autonomía de juicio y resolución sin guía constante',
    icon: Brain,
    color: '#A855F7'
  },
  {
    key: 'umbral',
    label: 'Umbral de Estimulación',
    shortLabel: 'Umbral',
    metricKey: 'umbral_de_estimulacion' as const,
    description: 'Tolerancia ambiental antes de activar respuestas motoras',
    icon: Activity,
    color: '#F59E0B'
  }
];

const BREED_PALETTE = [
  { fill: '#F59E0B', border: '#B45309', badgeBg: 'bg-amber-500/15', text: 'text-amber-400' },   // Breed 1 (Amber)
  { fill: '#38BDF8', border: '#0284C7', badgeBg: 'bg-sky-500/15', text: 'text-sky-400' },       // Breed 2 (Sky)
  { fill: '#34D399', border: '#059669', badgeBg: 'bg-emerald-500/15', text: 'text-emerald-400' }, // Breed 3 (Emerald)
  { fill: '#F43F5E', border: '#BE123C', badgeBg: 'bg-rose-500/15', text: 'text-rose-400' }       // Breed 4 fallback
];

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
  const [viewMode, setViewMode] = useState<'both' | 'chart' | 'table' | 'matrix'>('both');
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

  // Prepare Recharts BarChart data
  const chartData = METRICS_CONFIG.map((metric) => {
    const item: Record<string, any> = {
      metric: metric.shortLabel,
      fullMetric: metric.label,
      description: metric.description
    };
    comparedBreeds.forEach((breed) => {
      const rawVal = breed.metrics[metric.metricKey];
      item[breed.id] = parseMetricScore(rawVal);
      item[`${breed.id}_raw`] = rawVal;
      item[`${breed.id}_name`] = breed.breed;
    });
    return item;
  });

  // Custom Tooltip for Recharts
  const CustomChartTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const metricInfo = METRICS_CONFIG.find((m) => m.shortLabel === label);
      return (
        <div className="bg-[#141414]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-4 text-xs space-y-3 min-w-[240px] z-50">
          <div>
            <div className="flex items-center gap-1.5 font-bold text-white text-sm">
              {metricInfo && <metricInfo.icon className="w-4 h-4 text-amber-400" />}
              <span>{metricInfo?.label || label}</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
              {metricInfo?.description}
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/10">
            {payload.map((entry: any, i: number) => {
              const breedId = entry.dataKey;
              const breed = comparedBreeds.find((b) => b.id === breedId);
              const rawVal = entry.payload[`${breedId}_raw`];
              const score = entry.value;

              return (
                <div key={breedId} className="flex items-center justify-between gap-3 bg-neutral-900/60 p-2 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="font-bold text-slate-200 truncate">
                      {breed?.breed || entry.name}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1 justify-end">
                      <span className="font-extrabold text-white text-xs">{score}</span>
                      <span className="text-[10px] text-neutral-500">/ 5</span>
                    </div>
                    {rawVal && (
                      <span className="text-[10px] text-neutral-400 block max-w-[130px] truncate">
                        {rawVal}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
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
            Busca y selecciona de 2 a 3 razas para comparar sus arquetipos, gráficos de temperamento, resiliencia emocional, sociabilidad, independencia y motivación intrínseca lado a lado.
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
      
      {/* Top Banner & Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#141414] text-white p-6 rounded-[2.5rem] border border-white/5 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
            <GitCompare className="w-4 h-4" />
            <span>Matriz & Gráficos Comparativos</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Comparando {comparedBreeds.length} {comparedBreeds.length === 1 ? 'Raza' : 'Razas'}
          </h2>
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          {/* View Mode Switcher */}
          <div className="flex items-center bg-neutral-900 p-1 rounded-full border border-neutral-800 text-xs">
            <button
              onClick={() => setViewMode('both')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                viewMode === 'both'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Mostrar todo (combinado)"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Combinada</span>
            </button>
            <button
              onClick={() => setViewMode('chart')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                viewMode === 'chart'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Mostrar gráfico radial y métricas"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Gráfico</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Mostrar tabla resumen comparativa"
            >
              <Table className="w-3.5 h-3.5" />
              <span>Tabla</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Mostrar solo fichas detalladas"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Fichas</span>
            </button>
          </div>

          {/* Search Box for Adding More Breeds */}
          {comparedBreeds.length < 3 && (
            <div className="relative" ref={dropdownRef}>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Buscar y añadir..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                  className="bg-neutral-900 border border-neutral-800 text-slate-200 placeholder-neutral-500 text-xs rounded-full pl-9 pr-8 py-2 w-44 sm:w-56 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
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
            className="px-3.5 py-2 text-xs font-bold text-rose-300 hover:text-rose-100 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-full transition-all cursor-pointer"
          >
            Limpiar
          </button>
        </div>
      </div>

      {/* SECCIÓN DE FICHAS Y MATRIZ DETALLADA */}
      {(viewMode === 'both' || viewMode === 'matrix') && (
        <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-4 sm:p-7 shadow-2xl overflow-hidden">
          
          {/* TABLA ORIGINAL PARA ESCRITORIO (>= md) */}
          <div className="hidden md:block w-full overflow-x-auto overscroll-x-contain rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse min-w-[600px] table-fixed">
              
              {/* CABECERA: Avatares y Nombres */}
              <thead>
                <tr className="border-b border-white/10">
                  <th className="sticky left-0 z-20 bg-neutral-900 border-r border-white/10 p-4 shadow-[2px_0_5px_rgba(0,0,0,0.5)] w-40 sm:w-48 align-bottom">
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                      Parámetro
                    </span>
                  </th>
                  {comparedBreeds.map((breed, index) => {
                    const imageUrl = breed.imageUrl || getBreedImageUrl(breed.id);
                    const palette = BREED_PALETTE[index % BREED_PALETTE.length];

                    return (
                      <th key={`header-${breed.id}`} className="p-4 border-r border-white/10 last:border-r-0 bg-[#141414] align-top min-w-[160px] relative">
                        {/* Botón Quitar Raza */}
                        <button
                          type="button"
                          onClick={() => onRemoveCompare(breed.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-rose-600/90 text-white hover:bg-rose-600 shadow-md cursor-pointer z-10 transition-transform active:scale-95"
                          title="Quitar de la comparación"
                        >
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </button>

                        <div className="flex flex-row items-center text-left gap-3">
                          {/* Columna Izquierda: Foto */}
                          <div className="relative shrink-0">
                            <img
                              src={imageUrl}
                              alt={breed.breed}
                              className="w-14 h-14 aspect-square object-cover rounded-xl border border-white/10 shadow-sm"
                            />
                            <span
                              className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-[#141414]"
                              style={{ backgroundColor: palette.fill }}
                            />
                          </div>
                          
                          {/* Columna Derecha: Textos y Botón */}
                          <div className="flex flex-col items-start gap-1">
                            <h4 className="text-sm font-bold text-white leading-tight">
                              {breed.breed}
                            </h4>
                            <button
                              type="button"
                              onClick={() => onSelectBreed(breed)}
                              className="px-3 py-1 text-[10px] font-bold text-black bg-amber-500 hover:bg-amber-400 rounded-full transition-all cursor-pointer shadow-md active:scale-95"
                            >
                              Ver Ficha
                            </button>
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {/* CUERPO DE LA TABLA: Datos Comparativos */}
              <tbody className="divide-y divide-white/10">
                
                {/* Fila: Arquetipos */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <th className="sticky left-0 z-10 bg-neutral-900 border-r border-white/10 p-3 shadow-[2px_0_5px_rgba(0,0,0,0.5)] align-middle">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Arquetipos Psicológicos
                    </span>
                  </th>
                  {comparedBreeds.map((breed) => (
                    <td key={`arq-${breed.id}`} className="p-3 border-r border-white/10 last:border-r-0 bg-[#141414] align-middle">
                      <div className="flex flex-wrap gap-1">
                        {breed.archetypes.map((a) => (
                          <span
                            key={a}
                            className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-[10px] font-semibold border border-purple-500/20 leading-none"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Fila: Resiliencia Emocional */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <th className="sticky left-0 z-10 bg-neutral-900 border-r border-white/10 p-3 shadow-[2px_0_5px_rgba(0,0,0,0.5)] align-middle">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Resiliencia Emocional</span>
                    </div>
                  </th>
                  {comparedBreeds.map((breed) => (
                    <td key={`res-${breed.id}`} className="p-3 border-r border-white/10 last:border-r-0 bg-[#141414] align-middle">
                      <span className="text-xs font-bold text-white">
                        {breed.metrics.resiliencia_emocional}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Fila: Sociabilidad */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <th className="sticky left-0 z-10 bg-neutral-900 border-r border-white/10 p-3 shadow-[2px_0_5px_rgba(0,0,0,0.5)] align-middle">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Sociabilidad</span>
                    </div>
                  </th>
                  {comparedBreeds.map((breed) => (
                    <td key={`soc-${breed.id}`} className="p-3 border-r border-white/10 last:border-r-0 bg-[#141414] align-middle">
                      <span className="text-xs font-bold text-white">
                        {breed.metrics.sociabilidad}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Fila: Independencia Cognitiva */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <th className="sticky left-0 z-10 bg-neutral-900 border-r border-white/10 p-3 shadow-[2px_0_5px_rgba(0,0,0,0.5)] align-middle">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Brain className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Independencia Cognitiva</span>
                    </div>
                  </th>
                  {comparedBreeds.map((breed) => (
                    <td key={`ind-${breed.id}`} className="p-3 border-r border-white/10 last:border-r-0 bg-[#141414] align-middle">
                      <span className="text-xs font-bold text-white">
                        {breed.metrics.independencia_cognitiva}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Fila: Umbral de Estimulación */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <th className="sticky left-0 z-10 bg-neutral-900 border-r border-white/10 p-3 shadow-[2px_0_5px_rgba(0,0,0,0.5)] align-middle">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Activity className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Umbral Estimulación</span>
                    </div>
                  </th>
                  {comparedBreeds.map((breed) => (
                    <td key={`umb-${breed.id}`} className="p-3 border-r border-white/10 last:border-r-0 bg-[#141414] align-middle">
                      <span className="text-xs font-bold text-white">
                        {breed.metrics.umbral_de_estimulacion}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Fila: Motivación Intrínseca */}
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <th className="sticky left-0 z-10 bg-neutral-900 border-r border-white/10 p-3 shadow-[2px_0_5px_rgba(0,0,0,0.5)] align-middle">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Motivación Intrínseca</span>
                    </div>
                  </th>
                  {comparedBreeds.map((breed) => (
                    <td key={`mot-${breed.id}`} className="p-3 border-r border-white/10 last:border-r-0 bg-[#141414] align-middle">
                      <span className="text-xs font-medium text-slate-300 leading-snug">
                        {breed.metrics.motivacion_intrinseca}
                      </span>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>

          {/* VISTA MÓVIL: STACKED MATRIX (< md) */}
          <div className="block md:hidden w-full">
            
            {/* Cabecera de Razas (Sticky) */}
            <div className="sticky top-0 z-20 bg-[#141414] flex gap-2 pb-4 border-b border-white/10 pt-2">
              {comparedBreeds.map((breed, index) => {
                const imageUrl = breed.imageUrl || getBreedImageUrl(breed.id);
                const palette = BREED_PALETTE[index % BREED_PALETTE.length];

                return (
                  <div key={`mob-head-${breed.id}`} className="flex-1 flex flex-col items-center text-center relative">
                    {/* Botón Quitar Raza */}
                    <button
                      type="button"
                      onClick={() => onRemoveCompare(breed.id)}
                      className="absolute -top-1 -right-1 p-1 rounded-full bg-rose-600 text-white hover:bg-rose-500 shadow-md cursor-pointer z-10 transition-transform active:scale-95"
                      title={`Quitar ${breed.breed}`}
                    >
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </button>

                    {/* Foto */}
                    <div className="relative">
                      <img
                        src={imageUrl}
                        alt={breed.breed}
                        className="w-12 h-12 rounded-lg object-cover border border-white/10 shadow-sm"
                      />
                      <span
                        className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-[#141414]"
                        style={{ backgroundColor: palette.fill }}
                      />
                    </div>

                    {/* Nombre */}
                    <h4 className="text-[11px] font-bold text-white leading-tight mt-2 line-clamp-2">
                      {breed.breed}
                    </h4>

                    {/* Botón Ficha */}
                    <button
                      type="button"
                      onClick={() => onSelectBreed(breed)}
                      className="mt-1.5 px-2 py-0.5 text-[9px] font-bold text-black bg-amber-500 hover:bg-amber-400 rounded-full transition-all cursor-pointer shadow-sm active:scale-95"
                    >
                      Ficha
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Iteración por Parámetros */}
            <div className="pt-2 space-y-1">
              
              {/* Parámetro 1: Arquetipos Psicológicos */}
              <div>
                <div className="w-full text-center text-[10px] text-amber-500 font-bold uppercase tracking-widest py-2 bg-neutral-900/50 my-2 rounded">
                  Arquetipos Psicológicos
                </div>
                <div className="flex gap-2 items-stretch">
                  {comparedBreeds.map((breed) => (
                    <div key={`mob-arq-${breed.id}`} className="flex-1 bg-neutral-900/30 p-2 rounded-lg text-center flex flex-col justify-center gap-1">
                      {breed.archetypes.map((a) => (
                        <span
                          key={a}
                          className="px-1.5 py-0.5 bg-purple-500/10 text-purple-300 rounded text-[9px] font-semibold border border-purple-500/20 leading-tight"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Parámetro 2: Resiliencia Emocional */}
              <div>
                <div className="w-full text-center text-[10px] text-amber-500 font-bold uppercase tracking-widest py-2 bg-neutral-900/50 my-2 rounded flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Resiliencia Emocional</span>
                </div>
                <div className="flex gap-2 items-stretch">
                  {comparedBreeds.map((breed) => (
                    <div key={`mob-res-${breed.id}`} className="flex-1 bg-neutral-900/30 p-2 rounded-lg text-center flex flex-col justify-center">
                      <span className="text-[11px] font-bold text-white leading-tight">
                        {breed.metrics.resiliencia_emocional}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parámetro 3: Sociabilidad */}
              <div>
                <div className="w-full text-center text-[10px] text-amber-500 font-bold uppercase tracking-widest py-2 bg-neutral-900/50 my-2 rounded flex items-center justify-center gap-1">
                  <Users className="w-3 h-3 text-blue-400 shrink-0" />
                  <span>Sociabilidad</span>
                </div>
                <div className="flex gap-2 items-stretch">
                  {comparedBreeds.map((breed) => (
                    <div key={`mob-soc-${breed.id}`} className="flex-1 bg-neutral-900/30 p-2 rounded-lg text-center flex flex-col justify-center">
                      <span className="text-[11px] font-bold text-white leading-tight">
                        {breed.metrics.sociabilidad}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parámetro 4: Independencia Cognitiva */}
              <div>
                <div className="w-full text-center text-[10px] text-amber-500 font-bold uppercase tracking-widest py-2 bg-neutral-900/50 my-2 rounded flex items-center justify-center gap-1">
                  <Brain className="w-3 h-3 text-purple-400 shrink-0" />
                  <span>Independencia Cognitiva</span>
                </div>
                <div className="flex gap-2 items-stretch">
                  {comparedBreeds.map((breed) => (
                    <div key={`mob-ind-${breed.id}`} className="flex-1 bg-neutral-900/30 p-2 rounded-lg text-center flex flex-col justify-center">
                      <span className="text-[11px] font-bold text-white leading-tight">
                        {breed.metrics.independencia_cognitiva}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parámetro 5: Umbral de Estimulación */}
              <div>
                <div className="w-full text-center text-[10px] text-amber-500 font-bold uppercase tracking-widest py-2 bg-neutral-900/50 my-2 rounded flex items-center justify-center gap-1">
                  <Activity className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>Umbral Estimulación</span>
                </div>
                <div className="flex gap-2 items-stretch">
                  {comparedBreeds.map((breed) => (
                    <div key={`mob-umb-${breed.id}`} className="flex-1 bg-neutral-900/30 p-2 rounded-lg text-center flex flex-col justify-center">
                      <span className="text-[11px] font-bold text-white leading-tight">
                        {breed.metrics.umbral_de_estimulacion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parámetro 6: Motivación Intrínseca */}
              <div>
                <div className="w-full text-center text-[10px] text-amber-500 font-bold uppercase tracking-widest py-2 bg-neutral-900/50 my-2 rounded flex items-center justify-center gap-1">
                  <Heart className="w-3 h-3 text-rose-400 shrink-0" />
                  <span>Motivación Intrínseca</span>
                </div>
                <div className="flex gap-2 items-stretch">
                  {comparedBreeds.map((breed) => (
                    <div key={`mob-mot-${breed.id}`} className="flex-1 bg-neutral-900/30 p-2 rounded-lg text-center flex flex-col justify-center">
                      <span className="text-[11px] font-medium text-slate-300 leading-snug">
                        {breed.metrics.motivacion_intrinseca}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* SECCIÓN DEL GRÁFICO COMPARATIVO Y TABLA RESUMEN */}
      {(viewMode === 'both' || viewMode === 'chart' || viewMode === 'table') && (
        <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-5 sm:p-7 shadow-2xl space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                <BarChart3 className="w-4 h-4" />
                <span>Perfil de Temperamento Comparado (Escala 1 a 5)</span>
              </div>
              <p className="text-xs text-neutral-400">
                Puntajes normalizados a partir del desglose etológico de cada raza.
              </p>
            </div>

            {/* Custom Interactive Legend with Breed Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {comparedBreeds.map((breed, index) => {
                const palette = BREED_PALETTE[index % BREED_PALETTE.length];
                return (
                  <div
                    key={breed.id}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 ${palette.badgeBg}`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: palette.fill }}
                    />
                    <span className={`text-xs font-bold ${palette.text}`}>
                      {breed.breed}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gráfico Radial + Tarjetas de Métricas (Oculto en modo exclusivo 'table') */}
          {viewMode !== 'table' && (
            <div className="flex flex-col lg:flex-row gap-6 mt-6 items-stretch">
              {/* Recharts Radar Chart Container */}
              <div className="w-full lg:w-1/2 h-72 lg:h-[400px] bg-neutral-900/30 rounded-2xl border border-white/5 p-4 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                    <PolarGrid stroke="#333333" />
                    <PolarAngleAxis
                      dataKey="metric"
                      tick={{ fill: '#A3A3A3', fontSize: 11, fontWeight: 600 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 5]}
                      tick={{ fill: '#737373', fontSize: 10 }}
                      tickCount={6}
                      axisLine={false}
                    />
                    <Tooltip
                      content={<CustomChartTooltip />}
                      cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                    />
                    {comparedBreeds.map((breed, index) => {
                      const palette = BREED_PALETTE[index % BREED_PALETTE.length];
                      return (
                        <Radar
                          key={breed.id}
                          dataKey={breed.id}
                          name={breed.breed}
                          stroke={palette.fill}
                          fill={palette.fill}
                          fillOpacity={0.4}
                          strokeWidth={2}
                          animationDuration={800}
                        />
                      );
                    })}
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Temperament Highlights Card */}
              <div className="w-full lg:w-1/2 flex flex-col gap-3 justify-center">
                {METRICS_CONFIG.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.key} className="bg-neutral-900/80 border border-white/5 p-3.5 rounded-2xl">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-xs font-bold text-white">{m.label}</span>
                      </div>
                      <div className="space-y-1 text-[11px]">
                        {comparedBreeds.map((b, idx) => {
                          const palette = BREED_PALETTE[idx % BREED_PALETTE.length];
                          const raw = b.metrics[m.metricKey];
                          return (
                            <div key={b.id} className="flex justify-between items-center text-neutral-300">
                              <span className="text-neutral-400 font-medium pr-4">
                                {b.breed}:
                              </span>
                              <span className={`font-bold ${palette.text} text-right text-balance`}>
                                {raw}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TABLA RESUMEN COMPARATIVA DE MÉTRICAS NUMÉRICAS */}
          <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white tracking-tight">
                  Tabla Resumen: Comparativa Numérica de Temperamento
                </h4>
              </div>
              <span className="text-[11px] text-neutral-400 bg-neutral-900/90 border border-white/5 px-3 py-1 rounded-full">
                Escala cuantitativa estandarizada de 1.0 a 5.0
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/5 bg-neutral-900/40">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-white/5 bg-neutral-900/80 text-xs font-semibold text-neutral-400">
                    <th className="py-3.5 px-4 w-1/3">Dimensión Psico-Etológica</th>
                    {comparedBreeds.map((breed, idx) => {
                      const palette = BREED_PALETTE[idx % BREED_PALETTE.length];
                      return (
                        <th key={breed.id} className="py-3.5 px-4 text-left">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={breed.imageUrl || getBreedImageUrl(breed.id)}
                              alt={breed.breed}
                              className="w-7 h-7 rounded-lg object-cover bg-neutral-800 border border-white/10"
                            />
                            <div className="min-w-0">
                              <span className={`block font-bold text-xs ${palette.text} truncate`}>
                                {breed.breed}
                              </span>
                              <span className="text-[10px] text-neutral-400 block truncate max-w-[130px]">
                                {breed.fciGroup?.split(':')[0] || breed.akcGroup}
                              </span>
                            </div>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs">
                  {METRICS_CONFIG.map((m) => {
                    const Icon = m.icon;
                    // Find max score among compared breeds for this metric to highlight leader
                    const scores = comparedBreeds.map((b) => parseMetricScore(b.metrics[m.metricKey]));
                    const maxScore = Math.max(...scores);
                    const hasLeader = comparedBreeds.length > 1 && new Set(scores).size > 1;

                    return (
                      <tr key={m.key} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-4 align-top">
                          <div className="flex items-start gap-2.5">
                            <div className="p-1.5 rounded-lg bg-neutral-800/80 border border-white/5 text-amber-400 shrink-0 mt-0.5">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <p className="font-bold text-white text-xs">{m.label}</p>
                              <p className="text-[11px] text-neutral-400 leading-snug mt-0.5 max-w-xs">
                                {m.description}
                              </p>
                            </div>
                          </div>
                        </td>

                        {comparedBreeds.map((breed, idx) => {
                          const palette = BREED_PALETTE[idx % BREED_PALETTE.length];
                          const raw = breed.metrics[m.metricKey];
                          const score = parseMetricScore(raw);
                          const isLeader = hasLeader && score === maxScore;
                          const pct = Math.min(100, Math.max(10, (score / 5) * 100));

                          return (
                            <td key={breed.id} className="py-4 px-4 align-top">
                              <div className="space-y-2">
                                <div className="flex items-baseline justify-between gap-2">
                                  <div className="flex items-baseline gap-1">
                                    <span className="text-base font-extrabold text-white font-mono tabular-nums">
                                      {score.toFixed(1)}
                                    </span>
                                    <span className="text-[10px] text-neutral-500 font-medium">/ 5.0</span>
                                  </div>

                                  {isLeader && (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25 flex items-center gap-1 shrink-0">
                                      <Award className="w-2.5 h-2.5" />
                                      Mayor
                                    </span>
                                  )}
                                </div>

                                {/* Mini Progress Bar */}
                                <div className="w-full bg-neutral-800/80 h-1.5 rounded-full overflow-hidden">
                                  <div
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{
                                      width: `${pct}%`,
                                      backgroundColor: palette.fill
                                    }}
                                  />
                                </div>

                                {/* Qualitative descriptor */}
                                <p className="text-[11px] text-neutral-300 leading-tight">
                                  {raw || 'No especificado'}
                                </p>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}

                  {/* Fila Resumen: Promedio de Intensidad Etológica */}
                  <tr className="bg-neutral-900/60 font-semibold border-t-2 border-white/10">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-amber-400" />
                        <div>
                          <span className="text-xs font-bold text-white block">
                            Índice Promedio de Intensidad
                          </span>
                          <span className="text-[10px] text-neutral-400 font-normal">
                            Media aritmética de las 4 dimensiones clave
                          </span>
                        </div>
                      </div>
                    </td>

                    {comparedBreeds.map((breed, idx) => {
                      const palette = BREED_PALETTE[idx % BREED_PALETTE.length];
                      const totalScore = METRICS_CONFIG.reduce(
                        (acc, m) => acc + parseMetricScore(breed.metrics[m.metricKey]),
                        0
                      );
                      const avgScore = (totalScore / METRICS_CONFIG.length).toFixed(2);
                      const avgPct = (Number(avgScore) / 5) * 100;

                      return (
                        <td key={breed.id} className="py-3.5 px-4">
                          <div className="space-y-1.5">
                            <div className="flex items-baseline gap-1">
                              <span className={`text-base font-black font-mono tabular-nums ${palette.text}`}>
                                {avgScore}
                              </span>
                              <span className="text-[10px] text-neutral-500">/ 5.00</span>
                            </div>
                            <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${avgPct}%`,
                                  backgroundColor: palette.fill
                                }}
                              />
                            </div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Fila Resumen: Motivación Intrínseca */}
                  <tr className="bg-neutral-900/30">
                    <td className="py-3.5 px-4 text-xs font-bold text-neutral-300">
                      <div className="flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5 text-amber-400" />
                        <span>Motivación Intrínseca</span>
                      </div>
                    </td>

                    {comparedBreeds.map((breed, idx) => {
                      const palette = BREED_PALETTE[idx % BREED_PALETTE.length];
                      return (
                        <td key={breed.id} className="py-3.5 px-4">
                          <span className={`text-[11px] font-medium ${palette.text}`}>
                            {breed.metrics.motivacion_intrinseca || 'No especificada'}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

