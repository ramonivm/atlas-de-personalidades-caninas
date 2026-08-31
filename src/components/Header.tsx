import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Layers, 
  GitCompare, 
  Sparkles, 
  Bookmark, 
  Brain,
  Globe2,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import { canineData } from '../data/canineData';

interface HeaderProps {
  activeTab: 'explore' | 'quiz' | 'compare' | 'archetypes' | 'frameworks' | 'origins' | 'favorites';
  setActiveTab: (tab: 'explore' | 'quiz' | 'compare' | 'archetypes' | 'frameworks' | 'origins' | 'favorites') => void;
  breedCount: number;
  filteredCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favoritesCount: number;
  compareCount: number;
  archetypeCount?: number;
  frameworkCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  breedCount: _breedCount,
  filteredCount,
  searchQuery,
  setSearchQuery,
  favoritesCount,
  compareCount,
  archetypeCount = canineData.archetypes?.length || 14,
  frameworkCount = canineData.frameworks?.length || 6
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openPopover, setOpenPopover] = useState<'tools' | 'behavioral' | null>(null);
  
  const desktopNavRef = useRef<HTMLDivElement>(null);

  const isToolsActive = activeTab === 'quiz' || activeTab === 'compare';
  const isBehavioralActive = activeTab === 'archetypes' || activeTab === 'frameworks';

  // Handle outside click and Escape key to close popovers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node)) {
        setOpenPopover(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPopover(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleTabClick = (tab: 'explore' | 'quiz' | 'compare' | 'archetypes' | 'frameworks' | 'origins' | 'favorites') => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    setOpenPopover(null);
  };

  const togglePopover = (popover: 'tools' | 'behavioral') => {
    setOpenPopover(prev => (prev === popover ? null : popover));
  };

  return (
    <header className="bg-neutral-950/90 text-slate-200 border-b border-white/5 sticky top-0 z-30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        {/* Fila superior / barra unificada: Logo, Navegación al medio y Búsqueda a la derecha */}
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo & Title */}
          <div 
            className="cursor-pointer flex items-center shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" 
            onClick={() => handleTabClick('explore')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTabClick('explore');
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Ir a la página de inicio del explorador de razas"
          >
            <img 
              src="/assets/logonavbaratlascanino.svg" 
              alt="AtlasCanino Logo" 
              className="h-8 sm:h-10 md:h-11 w-auto object-contain"
              width="200"
              height="48"
            />
          </div>

          {/* Menú de navegación Desktop (>= md) alineado a la izquierda */}
          <div className="hidden md:flex items-center justify-start flex-1 ml-4 lg:ml-8" ref={desktopNavRef}>
            <nav className="flex items-center gap-1 bg-neutral-900/90 p-1 rounded-full border border-neutral-800/80 shrink-0 shadow-lg shadow-black/30">
              {/* 1. Explorador */}
              <button
                type="button"
                onClick={() => handleTabClick('explore')}
                className={`min-h-[36px] flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'explore'
                    ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Explorador</span>
              </button>

              {/* 2. Orígenes */}
              <button
                type="button"
                onClick={() => handleTabClick('origins')}
                className={`min-h-[36px] flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'origins'
                    ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>Orígenes</span>
              </button>

              {/* 3. Herramientas Popover Trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => togglePopover('tools')}
                  aria-expanded={openPopover === 'tools'}
                  aria-haspopup="true"
                  aria-controls="popover-tools"
                  className={`min-h-[36px] flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isToolsActive
                      ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/10'
                      : openPopover === 'tools'
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                  }`}
                >
                  <span>Herramientas</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openPopover === 'tools' ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Popover de Herramientas */}
                {openPopover === 'tools' && (
                  <div 
                    id="popover-tools"
                    role="menu"
                    aria-orientation="vertical"
                    className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 w-80 sm:w-[340px] bg-neutral-950/95 p-3 rounded-2xl border border-neutral-800/90 shadow-2xl shadow-black/80 backdrop-blur-xl z-50 animate-content-fade-in"
                  >
                    {/* Cabecera Informativa */}
                    <div className="px-2 pt-1 pb-2.5 mb-1.5 border-b border-white/5 select-none">
                      <div className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                        HERRAMIENTAS
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-tight">
                        Interactúa con los datos del Atlas.
                      </p>
                    </div>

                    {/* Opciones */}
                    <div className="space-y-1">
                      {/* Test Afinidad */}
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => handleTabClick('quiz')}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                          activeTab === 'quiz'
                            ? 'bg-amber-500/15 border border-amber-500/30 text-white'
                            : 'hover:bg-neutral-900 border border-transparent text-neutral-300 hover:text-white'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                          activeTab === 'quiz' ? 'bg-amber-500 text-black font-bold' : 'bg-neutral-900 text-neutral-300 border border-white/5'
                        }`}>
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-xs font-bold leading-none ${
                              activeTab === 'quiz' ? 'text-amber-400' : 'text-slate-100'
                            }`}>
                              Test Afinidad
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                            Encuentra las razas más afines a ti.
                          </p>
                        </div>
                      </button>

                      {/* Comparar */}
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => handleTabClick('compare')}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                          activeTab === 'compare'
                            ? 'bg-amber-500/15 border border-amber-500/30 text-white'
                            : 'hover:bg-neutral-900 border border-transparent text-neutral-300 hover:text-white'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                          activeTab === 'compare' ? 'bg-amber-500 text-black font-bold' : 'bg-neutral-900 text-neutral-300 border border-white/5'
                        }`}>
                          <GitCompare className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-xs font-bold leading-none ${
                              activeTab === 'compare' ? 'text-amber-400' : 'text-slate-100'
                            }`}>
                              Comparar
                            </span>
                            {compareCount > 0 && (
                              <span className="text-[10px] bg-neutral-800 text-amber-400 font-bold px-1.5 py-0.5 rounded-full border border-white/5">
                                {compareCount}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                            Contrasta razas lado a lado.
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Modelo conductual Popover Trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => togglePopover('behavioral')}
                  aria-expanded={openPopover === 'behavioral'}
                  aria-haspopup="true"
                  aria-controls="popover-behavioral"
                  className={`min-h-[36px] flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isBehavioralActive
                      ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/10'
                      : openPopover === 'behavioral'
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                  }`}
                >
                  <span>Modelo conductual</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openPopover === 'behavioral' ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Popover de Modelo conductual */}
                {openPopover === 'behavioral' && (
                  <div 
                    id="popover-behavioral"
                    role="menu"
                    aria-orientation="vertical"
                    className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 w-80 sm:w-[340px] bg-neutral-950/95 p-3 rounded-2xl border border-neutral-800/90 shadow-2xl shadow-black/80 backdrop-blur-xl z-50 animate-content-fade-in"
                  >
                    {/* Cabecera Informativa */}
                    <div className="px-2 pt-1 pb-2.5 mb-1.5 border-b border-white/5 select-none">
                      <div className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                        MODELO CONDUCTUAL
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-tight">
                        Comprende cómo Atlas interpreta la personalidad y conducta canina.
                      </p>
                    </div>

                    {/* Opciones */}
                    <div className="space-y-1">
                      {/* 14 Arquetipos */}
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => handleTabClick('archetypes')}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                          activeTab === 'archetypes'
                            ? 'bg-amber-500/15 border border-amber-500/30 text-white'
                            : 'hover:bg-neutral-900 border border-transparent text-neutral-300 hover:text-white'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                          activeTab === 'archetypes' ? 'bg-amber-500 text-black font-bold' : 'bg-neutral-900 text-neutral-300 border border-white/5'
                        }`}>
                          <Layers className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-xs font-bold leading-none ${
                              activeTab === 'archetypes' ? 'text-amber-400' : 'text-slate-100'
                            }`}>
                              14 Arquetipos
                            </span>
                            <span className="text-[10px] font-medium text-neutral-400 bg-neutral-900 px-1.5 py-0.5 rounded-md border border-neutral-800">
                              {archetypeCount}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                            Patrones integrales de personalidad canina.
                          </p>
                        </div>
                      </button>

                      {/* Marcos */}
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => handleTabClick('frameworks')}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                          activeTab === 'frameworks'
                            ? 'bg-amber-500/15 border border-amber-500/30 text-white'
                            : 'hover:bg-neutral-900 border border-transparent text-neutral-300 hover:text-white'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                          activeTab === 'frameworks' ? 'bg-amber-500 text-black font-bold' : 'bg-neutral-900 text-neutral-300 border border-white/5'
                        }`}>
                          <Brain className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-xs font-bold leading-none ${
                              activeTab === 'frameworks' ? 'text-amber-400' : 'text-slate-100'
                            }`}>
                              Marcos
                            </span>
                            <span className="text-[10px] font-medium text-neutral-400 bg-neutral-900 px-1.5 py-0.5 rounded-md border border-neutral-800">
                              {frameworkCount}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                            Dimensiones para interpretar la conducta.
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Guardados */}
              <button
                type="button"
                onClick={() => handleTabClick('favorites')}
                className={`min-h-[36px] flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'favorites'
                    ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Guardados</span>
                {favoritesCount > 0 && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                    activeTab === 'favorites' ? 'bg-black/30 text-black' : 'bg-black text-amber-400'
                  }`}>
                    {favoritesCount}
                  </span>
                )}
              </button>
            </nav>
          </div>

          {/* Zona Derecha: Búsqueda rápida y Botón Hamburguesa */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Search removed */}

            {/* Botón Hamburguesa para Mobile (< md) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-slate-200 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menú de Navegación Vertical para Mobile (< md) */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-2.5 pb-1 border-t border-neutral-800/80 animate-content-fade-in mt-2">
            <nav className="flex flex-col gap-1 bg-neutral-900/95 p-2 rounded-2xl border border-neutral-800/80">
              {/* 1. Explorador */}
              <button
                onClick={() => handleTabClick('explore')}
                className={`min-h-[44px] w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'explore'
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Search className="w-4 h-4 shrink-0" />
                  <span>Explorador</span>
                </div>
              </button>

              {/* 2. Orígenes */}
              <button
                onClick={() => handleTabClick('origins')}
                className={`min-h-[44px] w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'origins'
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <Globe2 className="w-4 h-4 shrink-0" />
                <span>Orígenes</span>
              </button>

              {/* GRUPO: HERRAMIENTAS */}
              <div className="pt-3 pb-1 px-4 text-[10px] font-bold tracking-widest text-neutral-500 uppercase select-none">
                HERRAMIENTAS
              </div>

              {/* Test Afinidad */}
              <button
                onClick={() => handleTabClick('quiz')}
                className={`min-h-[44px] w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'quiz'
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Test Afinidad</span>
              </button>

              {/* Comparar */}
              <button
                onClick={() => handleTabClick('compare')}
                className={`min-h-[44px] w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'compare'
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <GitCompare className="w-4 h-4 shrink-0" />
                  <span>Comparar</span>
                </div>
                {compareCount > 0 && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeTab === 'compare' ? 'bg-black/30 text-black' : 'bg-neutral-800 text-amber-400 border border-white/5'
                  }`}>
                    {compareCount}
                  </span>
                )}
              </button>

              {/* GRUPO: MODELO CONDUCTUAL */}
              <div className="pt-3 pb-1 px-4 text-[10px] font-bold tracking-widest text-neutral-500 uppercase select-none">
                MODELO CONDUCTUAL
              </div>

              {/* 14 Arquetipos */}
              <button
                onClick={() => handleTabClick('archetypes')}
                className={`min-h-[44px] w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'archetypes'
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 shrink-0" />
                  <span>14 Arquetipos</span>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  activeTab === 'archetypes' ? 'bg-black/30 text-black font-bold' : 'bg-neutral-800/80 text-neutral-400 border border-white/5'
                }`}>
                  {archetypeCount}
                </span>
              </button>

              {/* Marcos */}
              <button
                onClick={() => handleTabClick('frameworks')}
                className={`min-h-[44px] w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'frameworks'
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-4 h-4 shrink-0" />
                  <span>Marcos</span>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  activeTab === 'frameworks' ? 'bg-black/30 text-black font-bold' : 'bg-neutral-800/80 text-neutral-400 border border-white/5'
                }`}>
                  {frameworkCount}
                </span>
              </button>

              {/* Separador */}
              <div className="my-1 border-t border-white/5" />

              {/* Guardados */}
              <button
                onClick={() => handleTabClick('favorites')}
                className={`min-h-[44px] w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  activeTab === 'favorites'
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Bookmark className="w-4 h-4 shrink-0" />
                  <span>Guardados</span>
                </div>
                {favoritesCount > 0 && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeTab === 'favorites' ? 'bg-black/30 text-black' : 'bg-neutral-800 text-amber-400 border border-white/5'
                  }`}>
                    {favoritesCount}
                  </span>
                )}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

