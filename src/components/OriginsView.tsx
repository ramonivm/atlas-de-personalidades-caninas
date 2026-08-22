import React, { useState, useMemo } from 'react';
import { Breed } from '../types';
import { canineData } from '../data/canineData';
import { COUNTRIES_DATA, CountryOriginData } from '../data/originsData';
import { getBreedImageUrl } from '../utils/breedImages';
import { RealWorldMap } from './RealWorldMap';
import { 
  Dices, 
  ChevronRight, 
  Bookmark, 
  GitCompare, 
  Shield, 
  Sparkles,
  ArrowRight,
  Filter,
  TrendingUp,
  LayoutGrid,
  Map as MapIcon,
  Award
} from 'lucide-react';

interface OriginsViewProps {
  onSelectBreed: (breed: Breed) => void;
  favorites: string[];
  toggleFavorite: (breedId: string) => void;
  comparedBreeds: string[];
  toggleCompare: (breedId: string) => void;
  onExploreWithFilter?: (origin: string) => void;
}

type ViewMode = 'map' | 'cards' | 'ranking';

export const OriginsView: React.FC<OriginsViewProps> = ({
  onSelectBreed,
  favorites,
  toggleFavorite,
  comparedBreeds,
  toggleCompare,
  onExploreWithFilter
}) => {
  // Active selected country
  const [selectedCountryName, setSelectedCountryName] = useState<string>('Reino Unido');
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  const [hoveredCountryName, setHoveredCountryName] = useState<string | null>(null);

  // Group breeds by origin
  const breedsByOrigin = useMemo(() => {
    const map: Record<string, Breed[]> = {};
    canineData.breeds.forEach(b => {
      const origin = b.origen || 'Reino Unido';
      if (!map[origin]) {
        map[origin] = [];
      }
      map[origin].push(b);
    });
    return map;
  }, []);

  // Sorted list of all unique countries
  const countriesList = useMemo(() => {
    const entries = Object.keys(breedsByOrigin).map(name => {
      const info: CountryOriginData = COUNTRIES_DATA[name] || {
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        code: 'XX',
        flag: '🌐',
        region: 'Europa',
        coordinates: { x: 50, y: 50 },
        lat: 20,
        lng: 0,
        summary: `Razas originarias de ${name}.`,
        historicalContext: `Selección genética y tradicional canina en ${name}.`,
        climateAndGeography: 'Región geográfica adaptada a labores caninas específicas.',
        primarySelectionGoal: 'Compañía, guarda o trabajo utilitario.',
        dominantArchetype: 'El Conductor Operante',
        accentColor: '#F59E0B'
      };
      return {
        ...info,
        breeds: breedsByOrigin[name] || [],
        count: (breedsByOrigin[name] || []).length
      };
    });

    return entries.sort((a, b) => b.count - a.count);
  }, [breedsByOrigin]);

  // All countries for interactive display
  const filteredCountries = countriesList;

  // Active country details
  const activeCountry = useMemo(() => {
    return countriesList.find(c => c.name === selectedCountryName) || countriesList[0];
  }, [countriesList, selectedCountryName]);

  // Random travel button (Eye-candy micro-UX)
  const handleRandomTrip = () => {
    const available = countriesList.filter(c => c.name !== selectedCountryName);
    if (available.length > 0) {
      const random = available[Math.floor(Math.random() * available.length)];
      setSelectedCountryName(random.name);
    }
  };

  // Summary statistics
  const totalCountries = countriesList.length;
  const totalBreedsWithOrigin = canineData.breeds.length;

  // Render view mode switcher segmented control
  const renderModeSwitcher = (currentMode: ViewMode) => (
    <div className="bg-neutral-900/80 p-1 rounded-2xl border border-white/10 flex items-center gap-1 backdrop-blur-md w-full sm:w-auto justify-center sm:justify-start">
      <button
        onClick={() => setViewMode('map')}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          currentMode === 'map'
            ? 'bg-amber-500 text-black shadow-md'
            : 'text-neutral-400 hover:text-white'
        }`}
        title="Vista de Mapa Interactivo"
      >
        <MapIcon className="w-3.5 h-3.5" />
        <span>Mapa Radar</span>
      </button>

      <button
        onClick={() => setViewMode('cards')}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          currentMode === 'cards'
            ? 'bg-amber-500 text-black shadow-md'
            : 'text-neutral-400 hover:text-white'
        }`}
        title="Vista de Tarjetas por País"
      >
        <LayoutGrid className="w-3.5 h-3.5" />
        <span>Pasaportes</span>
      </button>

      <button
        onClick={() => setViewMode('ranking')}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          currentMode === 'ranking'
            ? 'bg-amber-500 text-black shadow-md'
            : 'text-neutral-400 hover:text-white'
        }`}
        title="Vista de Aportes Genéticos / Ranking"
      >
        <TrendingUp className="w-3.5 h-3.5" />
        <span>Top Aporte</span>
      </button>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in text-slate-200">
      
      {/* 1. Header & Hero Concept Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#141414] via-[#0D0D0D] to-[#0A0A0A] rounded-[2.5rem] p-6 sm:p-8 border border-white/5 shadow-2xl">
        {/* Glow ambient background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Orígenes Territoriales
          </h1>
          
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Explora cómo el clima, el relieve montañoso, las faenas agrícolas y las tradiciones culturales de cada país esculpieron la genética, la resiliencia y los arquetipos de {totalBreedsWithOrigin} razas en {totalCountries} regiones del planeta.
          </p>
        </div>
      </section>

      {/* 2. Main Content Canvas depending on ViewMode */}
      {viewMode === 'map' && (
        <div className="space-y-8">
          
          {/* MAP CANVAS - FULL WIDTH FOR DESKTOP */}
          <div className="w-full bg-[#141414] rounded-[2.5rem] border border-white/5 shadow-2xl p-5 sm:p-7 flex flex-col justify-between overflow-hidden relative">
            
            {/* New Toolbar: Segmented Control & Random Travel Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-white/5 mb-4 z-10 w-full">
              
              {/* View Mode Switcher (Segmented Control) */}
              {renderModeSwitcher('map')}

              {/* Random Trip Action Button (Outline / Ghost Design) */}
              <button
                onClick={handleRandomTrip}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-transparent border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95 w-full sm:w-auto"
                title="Teletransportarse a un país aleatorio"
              >
                <Dices className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span>Viaje Aleatorio</span>
              </button>

            </div>

            {/* Real World Interactive Map Component (Widescreen Full-Width) */}
            <div className="w-full">
              <RealWorldMap
                countries={filteredCountries}
                selectedCountryName={selectedCountryName}
                onSelectCountry={(name) => setSelectedCountryName(name)}
                hoveredCountryName={hoveredCountryName}
                onHoverCountry={(name) => setHoveredCountryName(name)}
              />
            </div>

            {/* Quick Country Pill Selector (Horizontal Carousel Under Map) */}
            <div className="mt-5 pt-4 border-t border-white/5">
              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2.5 flex items-center justify-between">
                <span>Selección Rápida de Territorios ({filteredCountries.length})</span>
                <span className="text-amber-400 font-mono text-[11px]">{selectedCountryName} seleccionado</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {filteredCountries.map(country => {
                  const isSelected = country.name === selectedCountryName;
                  return (
                    <button
                      key={country.id}
                      onClick={() => setSelectedCountryName(country.name)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-black font-extrabold shadow-lg shadow-amber-500/20 scale-105'
                          : 'bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-white/5'
                      }`}
                    >
                      <span className="text-sm">{country.flag}</span>
                      <span>{country.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isSelected ? 'bg-black text-white font-bold' : 'bg-neutral-800 text-neutral-400'
                      }`}>
                        {country.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* PASAPORTE CANINO & RAZAS AUTÓCTONAS (PANORAMIC WIDESCREEN GRID BELOW MAP) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT COLUMN: PASSPORT & ETOLOGICAL CONTEXT (5 cols on desktop) */}
            <div className="lg:col-span-5 bg-[#141414] rounded-[2.5rem] border border-white/5 shadow-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-start">
              
              {/* Header: Flag, Name & Count */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span className="text-5xl select-none">{activeCountry.flag}</span>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {activeCountry.name}
                        </h2>
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 text-neutral-200 border border-white/10">
                          {activeCountry.code}
                        </span>
                      </div>
                      <span className="text-xs text-amber-400 font-semibold mt-0.5 block">
                        Región: {activeCountry.region} · {activeCountry.count} {activeCountry.count === 1 ? 'raza autóctona' : 'razas registradas'}
                      </span>
                    </div>
                  </div>

                  {onExploreWithFilter && (
                    <button
                      onClick={() => onExploreWithFilter(activeCountry.name)}
                      className="p-2.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-amber-400 transition-colors cursor-pointer"
                      title="Ver en el explorador principal con este filtro"
                    >
                      <Filter className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Country summary statement */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium bg-black/40 p-4 rounded-2xl border border-white/5">
                  "{activeCountry.summary}"
                </p>
              </div>

              {/* Context Insights Grid */}
              <div className="space-y-3 text-xs">
                <div className="bg-neutral-900/70 p-4 rounded-2xl border border-white/5 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Historia y Presión de Selección</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed text-xs">
                    {activeCountry.historicalContext}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-neutral-900/70 p-3.5 rounded-2xl border border-white/5 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">
                      Geografía y Clima
                    </div>
                    <p className="text-slate-300 text-xs leading-snug">
                      {activeCountry.climateAndGeography}
                    </p>
                  </div>

                  <div className="bg-neutral-900/70 p-3.5 rounded-2xl border border-white/5 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">
                      Arquetipo Dominante
                    </div>
                    <p className="text-purple-300 font-semibold text-xs leading-snug flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{activeCountry.dominantArchetype}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-900/70 p-3.5 rounded-2xl border border-white/5 space-y-1">
                  <div className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">
                    Objetivo Primario de Selección
                  </div>
                  <p className="text-slate-200 text-xs font-medium">
                    {activeCountry.primarySelectionGoal}
                  </p>
                </div>
              </div>

              {/* Action Button: Explore with filter */}
              {onExploreWithFilter && (
                <button
                  onClick={() => onExploreWithFilter(activeCountry.name)}
                  className="w-full py-3.5 px-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-500/15 cursor-pointer pt-3.5"
                >
                  <span>Explorar {activeCountry.count} razas en el directorio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

            </div>

            {/* RIGHT COLUMN: RICH BREEDS CARDS OF THIS COUNTRY (7 cols on desktop) */}
            <div className="lg:col-span-7 bg-[#141414] rounded-[2.5rem] border border-white/5 shadow-2xl p-6 sm:p-7 space-y-5">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Razas Originarias de {activeCountry.name}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-mono font-bold">
                      {activeCountry.breeds.length} {activeCountry.breeds.length === 1 ? 'raza' : 'razas'}
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Haz clic en cualquier raza para abrir su ficha técnica completa
                  </p>
                </div>
              </div>

              {/* Breeds Grid (2 columns on wide screens) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[620px] overflow-y-auto pr-1">
                {activeCountry.breeds.map(breed => {
                  const isFav = favorites.includes(breed.id);
                  const isComp = comparedBreeds.includes(breed.id);
                  const imageUrl = breed.imageUrl || getBreedImageUrl(breed.id);

                  return (
                    <div
                      key={breed.id}
                      onClick={() => onSelectBreed(breed)}
                      className="group p-3.5 bg-neutral-900/90 hover:bg-neutral-800/90 border border-white/5 hover:border-amber-500/40 rounded-2xl transition-all flex flex-col justify-between gap-3 cursor-pointer hover:shadow-xl hover:shadow-amber-500/5 relative overflow-hidden"
                    >
                      <div className="flex items-start gap-3.5">
                        <img
                          src={imageUrl}
                          alt={breed.breed}
                          className="w-14 h-14 rounded-xl object-cover bg-black flex-shrink-0 border border-white/10 group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                        <div className="overflow-hidden flex-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                            {breed.breed}
                          </h4>
                          <p className="text-[11px] text-amber-300/85 italic truncate mt-0.5">
                            "{breed.epithet}"
                          </p>
                          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-white/5 text-neutral-400 border border-white/5">
                              {breed.fciGroup}
                            </span>
                            {breed.archetypes[0] && (
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 truncate max-w-[130px]">
                                {breed.archetypes[0]}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-neutral-400 group-hover:text-amber-300 transition-colors flex items-center gap-1">
                          Ver ficha <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>

                        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => toggleCompare(breed.id)}
                            className={`p-1.5 rounded-xl text-xs transition-colors cursor-pointer ${
                              isComp ? 'bg-amber-500 text-black font-bold' : 'bg-black/50 text-neutral-400 hover:text-white'
                            }`}
                            title={isComp ? 'Quitar del comparador' : 'Añadir al comparador'}
                          >
                            <GitCompare className="w-3.5 h-3.5" />
                          </button>
                          
                          <button
                            onClick={() => toggleFavorite(breed.id)}
                            className={`p-1.5 rounded-xl text-xs transition-colors cursor-pointer ${
                              isFav ? 'bg-rose-500 text-white' : 'bg-black/50 text-neutral-400 hover:text-white'
                            }`}
                            title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      )}

      {/* 3. MODE: CARDS VIEW (Passport Cards Grid) */}
      {viewMode === 'cards' && (
        <div className="space-y-6">
          {/* Top Bar for Subviews */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#141414] rounded-2xl p-4 border border-white/5">
            {renderModeSwitcher('cards')}

            <div className="text-xs text-neutral-400">
              Mostrando {filteredCountries.length} territorios caninos
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCountries.map(country => {
              const isSelected = country.name === selectedCountryName;
              return (
                <div
                  key={country.id}
                  onClick={() => {
                    setSelectedCountryName(country.name);
                    setViewMode('map');
                  }}
                  className={`bg-[#141414] rounded-[2rem] p-6 border transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between space-y-4 shadow-xl ${
                    isSelected ? 'border-amber-500 shadow-amber-500/10' : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {country.name}
                        </h3>
                        <span className="text-xs text-neutral-400 font-medium">
                          {country.region}
                        </span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
                      {country.count} {country.count === 1 ? 'raza' : 'razas'}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {country.summary}
                  </p>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 truncate max-w-[70%]">
                      {country.breeds.slice(0, 3).map(b => b.breed).join(', ')}...
                    </span>
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      Ver mapa <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. MODE: RANKING / GENETIC HERITAGE VIEW */}
      {viewMode === 'ranking' && (
        <div className="space-y-6">
          {/* Top Bar for Subviews */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#141414] rounded-2xl p-4 border border-white/5">
            {renderModeSwitcher('ranking')}

            <div className="text-xs font-mono font-bold text-amber-400 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
              {totalCountries} Países Totales
            </div>
          </div>

          <div className="bg-[#141414] rounded-[2.5rem] border border-white/5 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>Jerarquía de Aporte Genético Mundial</span>
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Países clasificados por volumen de razas estandarizadas e integradas en AtlasCanino
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {countriesList.map((country, idx) => {
                const maxBreeds = countriesList[0]?.count || 1;
                const percentage = Math.round((country.count / maxBreeds) * 100);

                return (
                  <div
                    key={country.id}
                    onClick={() => {
                      setSelectedCountryName(country.name);
                      setViewMode('map');
                    }}
                    className="group bg-neutral-900/60 hover:bg-neutral-800/80 p-4 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 min-w-[240px]">
                      <span className="w-6 text-center font-mono font-bold text-sm text-neutral-500 group-hover:text-amber-400">
                        #{idx + 1}
                      </span>
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                          {country.name}
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          {country.region} · {country.dominantArchetype}
                        </div>
                      </div>
                    </div>

                    {/* Relative progress bar */}
                    <div className="flex-1 max-w-md hidden md:block">
                      <div className="h-2 w-full bg-black/60 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-amber-600 to-amber-400"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <span className="text-sm font-bold font-mono text-amber-300">
                        {country.count} {country.count === 1 ? 'raza' : 'razas'}
                      </span>
                      <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
