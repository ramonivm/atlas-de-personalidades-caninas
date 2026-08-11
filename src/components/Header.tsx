import React from 'react';
import { 
  Search, 
  Layers, 
  GitCompare, 
  Sparkles, 
  Bookmark, 
  Brain
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'explore' | 'quiz' | 'compare' | 'archetypes' | 'frameworks' | 'favorites';
  setActiveTab: (tab: 'explore' | 'quiz' | 'compare' | 'archetypes' | 'frameworks' | 'favorites') => void;
  breedCount: number;
  filteredCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favoritesCount: number;
  compareCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  breedCount,
  filteredCount,
  searchQuery,
  setSearchQuery,
  favoritesCount,
  compareCount
}) => {
  return (
    <header className="bg-neutral-950/90 text-slate-200 border-b border-white/5 sticky top-0 z-30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-3">
        {/* Fila superior: Logo y Barra de búsqueda rápida */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div 
            className="cursor-pointer flex items-center shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" 
            onClick={() => setActiveTab('explore')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveTab('explore');
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Ir a la página de inicio del explorador de razas"
          >
            <img 
              src="/assets/Logo minimalista AtlasCanino.svg" 
              alt="AtlasCanino Logo" 
              className="h-10 sm:h-12 w-auto object-contain aspect-[200/48]"
              width="200"
              height="48"
            />
          </div>

          {/* Quick Search */}
          {activeTab === 'explore' && (
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar razas o características..."
                aria-label="Buscar razas o características caninas"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 text-slate-200 placeholder-neutral-400 text-xs rounded-full pl-10 pr-10 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus:border-amber-500/50 transition-colors min-h-[44px]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpiar campo de búsqueda"
                  className="absolute right-1 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white text-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full"
                >
                  ✕
                </button>
              )}
            </div>
          )}
        </div>

        {/* Fila inferior: Menú de navegación */}
        <div className="w-full flex justify-start md:justify-center overflow-x-auto">
          <nav className="flex items-center gap-1.5 bg-neutral-900/80 p-1.5 rounded-full border border-neutral-800/80 shrink-0">
            <button
              onClick={() => setActiveTab('explore')}
              className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeTab === 'explore'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Explorador</span>
              {activeTab === 'explore' && (
                <span className="text-[10px] bg-black/30 text-black font-bold px-1.5 py-0.2 rounded-full">
                  {filteredCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeTab === 'quiz'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test Afinidad</span>
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeTab === 'compare'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>Comparar</span>
              {compareCount > 0 && (
                <span className="text-[10px] bg-black text-amber-400 font-bold px-1.5 py-0.2 rounded-full">
                  {compareCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('archetypes')}
              className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeTab === 'archetypes'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>14 Arquetipos</span>
            </button>

            <button
              onClick={() => setActiveTab('frameworks')}
              className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeTab === 'frameworks'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Marcos</span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeTab === 'favorites'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/10'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Guardados</span>
              {favoritesCount > 0 && (
                <span className="text-[10px] bg-black text-amber-400 font-bold px-1.5 py-0.2 rounded-full">
                  {favoritesCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
