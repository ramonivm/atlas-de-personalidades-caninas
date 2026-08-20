import React, { useState, useMemo, useEffect } from 'react';
import { canineData } from './data/canineData';
import { Breed, FilterState } from './types';
import { normalizeText, parseMetricLevel } from './utils/textUtils';
import { mapMotivationGroup, mapTraitGroup } from './utils/dataParser';
import { Header } from './components/Header';
import { FilterPanel } from './components/FilterPanel';
import { BreedCard } from './components/BreedCard';
import { BreedTableView } from './components/BreedTableView';
import { BreedDetailModal } from './components/BreedDetailModal';
import { ArchetypeExplorer } from './components/ArchetypeExplorer';
import { FrameworksView } from './components/FrameworksView';
import { BreedCompare } from './components/BreedCompare';
import { AffinityQuiz } from './components/AffinityQuiz';
import { 
  Dog, 
  Sparkles, 
  Bookmark, 
  GitCompare, 
  Layers, 
  Brain, 
  SlidersHorizontal,
  Info,
  Check,
  ChevronUp,
  LayoutGrid,
  Table
} from 'lucide-react';

export default function App() {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<'explore' | 'quiz' | 'compare' | 'archetypes' | 'frameworks' | 'favorites'>('explore');

  // Scroll to top button visibility state
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    fciGroup: '',
    akcGroup: '',
    archetype: '',
    motivation: '',
    trait: '',
    resilienceLevel: '',
    sociabilityLevel: '',
    independenceLevel: '',
    sortBy: 'name-asc'
  });

  // Selected breed for detail modal
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);

  // View Mode: 'grid' (cards) vs 'table' (compact scanning table)
  const [viewMode, setViewMode] = useState<'grid' | 'table'>(() => {
    try {
      const saved = localStorage.getItem('canine_atlas_view_mode');
      return saved === 'table' ? 'table' : 'grid';
    } catch {
      return 'grid';
    }
  });

  // Sync viewMode to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('canine_atlas_view_mode', viewMode);
    } catch {}
  }, [viewMode]);

  // Favorites & Compared Breed IDs (persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('canine_atlas_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [comparedIds, setComparedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('canine_atlas_compared');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('canine_atlas_favorites', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('canine_atlas_compared', JSON.stringify(comparedIds));
    } catch {}
  }, [comparedIds]);

  // Sync header searchQuery with filters.searchQuery
  useEffect(() => {
    setFilters(prev => ({ ...prev, searchQuery }));
  }, [searchQuery]);

  // Toggle favorite
  const toggleFavorite = (breedId: string) => {
    setFavorites(prev => 
      prev.includes(breedId) ? prev.filter(id => id !== breedId) : [...prev, breedId]
    );
  };

  // Toggle compare
  const toggleCompare = (breedId: string) => {
    setComparedIds(prev => {
      if (prev.includes(breedId)) {
        return prev.filter(id => id !== breedId);
      }
      if (prev.length >= 3) {
        alert('Puedes comparar un máximo de 3 razas al mismo tiempo.');
        return prev;
      }
      return [...prev, breedId];
    });
  };

  // Add breed to compare
  const addBreedToCompare = (breed: Breed) => {
    if (!comparedIds.includes(breed.id)) {
      if (comparedIds.length >= 3) {
        alert('Puedes comparar un máximo de 3 razas al mismo tiempo.');
        return;
      }
      setComparedIds(prev => [...prev, breed.id]);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setFilters({
      searchQuery: '',
      fciGroup: '',
      akcGroup: '',
      archetype: '',
      motivation: '',
      trait: '',
      resilienceLevel: '',
      sociabilityLevel: '',
      independenceLevel: '',
      sortBy: 'name-asc'
    });
  };

  // Filtered Breeds calculation
  const filteredBreeds = useMemo(() => {
    let list = canineData.breeds;

    // Search query
    if (filters.searchQuery.trim()) {
      const q = normalizeText(filters.searchQuery);
      list = list.filter(b => 
        normalizeText(b.breed).includes(q) ||
        normalizeText(b.id).includes(q) ||
        normalizeText(b.title).includes(q) ||
        normalizeText(b.epithet).includes(q) ||
        normalizeText(b.summary).includes(q) ||
        normalizeText(b.fciGroup).includes(q) ||
        (b.akcGroup && normalizeText(b.akcGroup).includes(q)) ||
        b.archetypes.some(a => normalizeText(a).includes(q)) ||
        b.traits.some(t => normalizeText(t).includes(q)) ||
        b.motivations.some(m => normalizeText(m).includes(q))
      );
    }

    // FCI Group
    if (filters.fciGroup) {
      list = list.filter(b => b.fciGroup === filters.fciGroup);
    }

    // AKC Group
    if (filters.akcGroup) {
      list = list.filter(b => b.akcGroup === filters.akcGroup);
    }

    // Archetype
    if (filters.archetype) {
      const targetArch = normalizeText(filters.archetype);
      list = list.filter(b => 
        b.archetypes.some(a => normalizeText(a).includes(targetArch))
      );
    }

    // Motivation
    if (filters.motivation) {
      list = list.filter(b => 
        b.motivations && b.motivations.some(m => mapMotivationGroup(m) === filters.motivation)
      );
    }

    // Trait
    if (filters.trait) {
      list = list.filter(b => 
        b.traits && b.traits.some(t => mapTraitGroup(t) === filters.trait)
      );
    }

    // Resilience
    if (filters.resilienceLevel) {
      list = list.filter(b => 
        parseMetricLevel(b.metrics.resiliencia_emocional) === filters.resilienceLevel
      );
    }

    // Sociability
    if (filters.sociabilityLevel) {
      list = list.filter(b => 
        parseMetricLevel(b.metrics.sociabilidad) === filters.sociabilityLevel
      );
    }

    // Independence
    if (filters.independenceLevel) {
      list = list.filter(b => 
        parseMetricLevel(b.metrics.independencia_cognitiva) === filters.independenceLevel
      );
    }

    // Sorting
    return list.slice().sort((a, b) => {
      if (filters.sortBy === 'name-asc') return a.breed.localeCompare(b.breed);
      if (filters.sortBy === 'name-desc') return b.breed.localeCompare(a.breed);
      if (filters.sortBy === 'fci') return a.fciGroup.localeCompare(b.fciGroup);
      if (filters.sortBy === 'traits-count') return b.traits.length - a.traits.length;
      return 0;
    });
  }, [filters]);

  // Active filter signature for triggering staggered entrance transitions
  const filterSignature = useMemo(() => {
    return `${filters.fciGroup}|${filters.akcGroup}|${filters.archetype}|${filters.motivation}|${filters.trait}|${filters.resilienceLevel}|${filters.sociabilityLevel}|${filters.independenceLevel}|${filters.sortBy}|${filters.searchQuery}`;
  }, [filters]);

  // Favorites Breeds List
  const favoriteBreeds = useMemo(() => {
    return canineData.breeds.filter(b => favorites.includes(b.id));
  }, [favorites]);

  // Compared Breeds List
  const comparedBreedsList = useMemo(() => {
    return canineData.breeds.filter(b => comparedIds.includes(b.id));
  }, [comparedIds]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200 font-sans flex flex-col selection:bg-amber-500 selection:text-black">
      
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        breedCount={canineData.breeds.length}
        filteredCount={filteredBreeds.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        favoritesCount={favorites.length}
        compareCount={comparedIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* VIEW 1: EXPLORE BREEDS */}
        {activeTab === 'explore' && (
          <div className="space-y-6">
            
            {/* Hero / Intro Banner */}
            <div className="bg-[#141414] text-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/5">
              <div className="max-w-2xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                  <Dog className="w-3.5 h-3.5" />
                  <span>Base de Datos Etológica Oficial</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                  Explora el Mapa Mental de 121 Razas Caninas
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Filtra en tiempo real por arquetipos psicológicos, grupos FCI/AKC, umbrales de estimulación, motivación intrínseca e independencia cognitiva.
                </p>
              </div>

              {/* Quick Stat Counter */}
              <div className="grid grid-cols-3 gap-3 bg-neutral-900/90 p-4 rounded-2xl border border-white/5 text-center w-full md:w-auto flex-shrink-0">
                <div>
                  <div className="text-xl font-bold text-amber-500">{canineData.breeds.length}</div>
                  <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Razas</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-purple-400">14</div>
                  <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Arquetipos</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-emerald-400">6</div>
                  <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Marcos</div>
                </div>
              </div>
            </div>

            {/* Filter Panel */}
            <FilterPanel
              facets={canineData.facets}
              breeds={canineData.breeds}
              filters={filters}
              setFilters={setFilters}
              totalBreeds={canineData.breeds.length}
              filteredCount={filteredBreeds.length}
              resetFilters={resetFilters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* Results Header Bar with View Switcher */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-200">
                  {filteredBreeds.length === canineData.breeds.length
                    ? `${filteredBreeds.length} razas registradas`
                    : `Mostrando ${filteredBreeds.length} de ${canineData.breeds.length} razas`}
                </span>
                {filteredBreeds.length < canineData.breeds.length && (
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Filtros aplicados
                  </span>
                )}
              </div>

              {/* View Switcher Controls */}
              <div className="inline-flex items-center p-1 bg-[#141414] border border-white/10 rounded-2xl shadow-inner">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Ver en cuadrícula de tarjetas"
                  aria-pressed={viewMode === 'grid'}
                  className={`min-h-[38px] flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    viewMode === 'grid'
                      ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">Tarjetas</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  aria-label="Ver en tabla compacta"
                  aria-pressed={viewMode === 'table'}
                  className={`min-h-[38px] flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    viewMode === 'table'
                      ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Table className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">Tabla Compacta</span>
                </button>
              </div>
            </div>

            {/* Breeds Output: Grid or Table */}
            {filteredBreeds.length === 0 ? (
              <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-12 text-center max-w-lg mx-auto my-8 shadow-2xl space-y-4">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Dog className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  No se encontraron razas con los filtros aplicados
                </h3>
                <p className="text-xs text-neutral-400">
                  Prueba a limpiar los filtros de búsqueda o seleccionar otros arquetipos/grupos.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full transition-all inline-block cursor-pointer mt-2 shadow-md shadow-amber-500/10"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div key={`grid-${filterSignature}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredBreeds.map((breed, index) => (
                  <BreedCard
                    key={breed.id}
                    breed={breed}
                    priority={index < 4}
                    style={{
                      animationDelay: `${Math.min(index, 15) * 35}ms`
                    }}
                    onSelect={setSelectedBreed}
                    isFavorite={favorites.includes(breed.id)}
                    onToggleFavorite={toggleFavorite}
                    isCompared={comparedIds.includes(breed.id)}
                    onToggleCompare={toggleCompare}
                    onSelectArchetypeFilter={(arch) => {
                      setFilters(prev => ({ ...prev, archetype: arch }));
                    }}
                  />
                ))}
              </div>
            ) : (
              <BreedTableView
                key={`table-${filterSignature}`}
                breeds={filteredBreeds}
                onSelect={setSelectedBreed}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                comparedIds={comparedIds}
                onToggleCompare={toggleCompare}
                onSelectArchetypeFilter={(arch) => {
                  setFilters(prev => ({ ...prev, archetype: arch }));
                }}
              />
            )}

          </div>
        )}

        {/* VIEW 2: AFFINITY QUIZ */}
        {activeTab === 'quiz' && (
          <AffinityQuiz
            breeds={canineData.breeds}
            onSelectBreed={setSelectedBreed}
          />
        )}

        {/* VIEW 3: COMPARE */}
        {activeTab === 'compare' && (
          <BreedCompare
            comparedBreeds={comparedBreedsList}
            onRemoveCompare={toggleCompare}
            onClearCompare={() => setComparedIds([])}
            onSelectBreed={setSelectedBreed}
            allBreeds={canineData.breeds}
            onAddBreedToCompare={addBreedToCompare}
          />
        )}

        {/* VIEW 4: ARCHETYPES */}
        {activeTab === 'archetypes' && (
          <ArchetypeExplorer
            archetypes={canineData.archetypes}
            breeds={canineData.breeds}
            onSelectBreed={setSelectedBreed}
            selectedArchetypeFilter={filters.archetype}
          />
        )}

        {/* VIEW 5: FRAMEWORKS */}
        {activeTab === 'frameworks' && (
          <FrameworksView frameworks={canineData.frameworks} />
        )}

        {/* VIEW 6: FAVORITES / SAVED BREEDS */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <div className="bg-[#141414] text-white p-6 rounded-[2.5rem] border border-white/5 shadow-2xl flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-rose-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                  <Bookmark className="w-4 h-4 fill-current" />
                  <span>Mis Razas Guardadas</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  {favoriteBreeds.length} {favoriteBreeds.length === 1 ? 'Raza Guardada' : 'Razas Guardadas'}
                </h2>
              </div>
              {favorites.length > 0 && (
                <button
                  onClick={() => setFavorites([])}
                  className="text-xs font-bold text-neutral-400 hover:text-white bg-neutral-900 px-4 py-2 rounded-full border border-white/5 cursor-pointer"
                >
                  Vaciar Guardados
                </button>
              )}
            </div>

            {favoriteBreeds.length === 0 ? (
              <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-12 text-center max-w-lg mx-auto my-8 shadow-2xl space-y-4">
                <div className="w-12 h-12 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Aún no has guardado ninguna raza
                </h3>
                <p className="text-xs text-neutral-400">
                  Explora las razas y presiona el ícono del marcador en las tarjetas para guardarlas aquí para acceso rápido.
                </p>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full transition-all inline-block cursor-pointer mt-2 shadow-md shadow-amber-500/10"
                >
                  Ir al Explorador
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-end">
                  <div className="inline-flex items-center p-1 bg-[#141414] border border-white/10 rounded-2xl shadow-inner">
                    <button
                      type="button"
                      onClick={() => setViewMode('grid')}
                      aria-label="Ver en cuadrícula de tarjetas"
                      aria-pressed={viewMode === 'grid'}
                      className={`min-h-[36px] flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                        viewMode === 'grid'
                          ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <LayoutGrid className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">Tarjetas</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('table')}
                      aria-label="Ver en tabla compacta"
                      aria-pressed={viewMode === 'table'}
                      className={`min-h-[36px] flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                        viewMode === 'table'
                          ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Table className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">Tabla</span>
                    </button>
                  </div>
                </div>

                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {favoriteBreeds.map((breed, index) => (
                      <BreedCard
                        key={breed.id}
                        breed={breed}
                        style={{
                          animationDelay: `${Math.min(index, 15) * 35}ms`
                        }}
                        onSelect={setSelectedBreed}
                        isFavorite={true}
                        onToggleFavorite={toggleFavorite}
                        isCompared={comparedIds.includes(breed.id)}
                        onToggleCompare={toggleCompare}
                      />
                    ))}
                  </div>
                ) : (
                  <BreedTableView
                    breeds={favoriteBreeds}
                    onSelect={setSelectedBreed}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    comparedIds={comparedIds}
                    onToggleCompare={toggleCompare}
                  />
                )}
              </div>
            )}
          </div>
        )}

      </main>

      {/* Breed Detail Modal */}
      {selectedBreed && (
        <BreedDetailModal
          key={selectedBreed.id}
          breed={selectedBreed}
          onClose={() => setSelectedBreed(null)}
          isFavorite={favorites.includes(selectedBreed.id)}
          onToggleFavorite={toggleFavorite}
          isCompared={comparedIds.includes(selectedBreed.id)}
          onToggleCompare={toggleCompare}
          onSelectArchetype={(arch) => {
            setFilters(prev => ({ ...prev, archetype: arch }));
            setActiveTab('explore');
          }}
        />
      )}

      {/* Footer */}
      <footer className="bg-[#141414] border-t border-white/5 text-neutral-400 text-xs py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/logoisotipo_atlascanino.svg" 
              alt="AtlasCanino Logo" 
              className="w-5 h-5 object-contain" 
            />
            <span className="font-bold text-white">
              Atlas de Personalidades Caninas
            </span>
            <span className="text-neutral-700">|</span>
            <span>{canineData.breeds.length} Razas • 14 Arquetipos</span>
          </div>

          <p className="text-neutral-400 text-center md:text-right">
            Basado en la exportación etológica del Diccionario de Personalidades Caninas.
          </p>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba en la página"
        title="Volver arriba"
        className={`fixed bottom-6 right-6 z-40 bg-amber-500 hover:bg-amber-400 text-black p-3.5 rounded-full shadow-2xl border border-amber-400/40 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
          showScrollTop ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>

    </div>
  );
}
