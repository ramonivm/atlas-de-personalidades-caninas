import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { BreedOverviewMetrics } from './BreedOverviewMetrics';
import { BreedOriginPanel } from './BreedOriginPanel';
import { getBreedOrigin } from '../utils/breedOrigin';
import { Breed } from '../types';
import { getBreedImageUrl } from '../utils/breedImages';
import { 
  X, 
  Bookmark, 
  GitCompare, 
  Shield, 
  Brain, 
  Users, 
  Activity, 
  Target, 
  CheckCircle2, 
  XCircle, 
  Sparkles,
  Heart,
  Share2,
  Link,
  Check,
  Facebook,
  Twitter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface BreedDetailModalProps {
  breed: Breed | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (breedId: string) => void;
  isCompared: boolean;
  onToggleCompare: (breedId: string) => void;
  onSelectArchetype?: (archetype: string) => void;
  onPrevBreed?: () => void;
  onNextBreed?: () => void;
  prevBreedName?: string;
  nextBreedName?: string;
  currentIndex?: number;
  totalBreeds?: number;
}

const FALLBACK_DOG_IMAGE = "/images/breeds/golden-retriever.webp";

export const BreedDetailModal: React.FC<BreedDetailModalProps> = ({
  breed,
  onClose,
  isFavorite,
  onToggleFavorite,
  isCompared,
  onToggleCompare,
  onSelectArchetype,
  onPrevBreed,
  onNextBreed,
  prevBreedName,
  nextBreedName,
  currentIndex,
  totalBreeds
}) => {
  const imageUrl = breed ? breed.imageUrl || getBreedImageUrl(breed.id) : FALLBACK_DOG_IMAGE;
  const [activeTab, setActiveTab] = useState<'overview' | 'sections' | 'metrics' | 'origin'>('overview');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const origin = getBreedOrigin(breed?.origen);
  const tabs = [
    { id: 'overview', label: 'General' },
    { id: 'sections', label: 'Personalidad' },
    { id: 'metrics', label: 'Temperamento' },
    { id: 'origin', label: `Origen: ${origin.flag ? `${origin.flag} ` : ''}${origin.name}` },
  ] as const;

  // Scope focus and background scrolling to this dialog; restore both on close.
  const isOpen = Boolean(breed);
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    const siblings = Array.from(dialog?.parentElement?.children || [])
      .filter((element): element is HTMLElement => element instanceof HTMLElement && element !== dialog);
    const backgroundStates = siblings.map(element => ({
      element, inert: element.hasAttribute('inert'), ariaHidden: element.getAttribute('aria-hidden'),
    }));
    siblings.forEach(element => {
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = 'hidden';
    dialog?.querySelector<HTMLButtonElement>('[aria-label="Cerrar modal de detalles"]')?.focus({ preventScroll: true });
    const containFocus = (event: FocusEvent) => {
      if (dialog && !dialog.contains(event.target as Node)) dialog.focus({ preventScroll: true });
    };
    document.addEventListener('focusin', containFocus);
    return () => {
      document.removeEventListener('focusin', containFocus);
      document.body.style.overflow = previousOverflow;
      backgroundStates.forEach(({ element, inert, ariaHidden }) => {
        if (!inert) element.removeAttribute('inert');
        if (ariaHidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', ariaHidden);
      });
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    bodyRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab, breed?.id]);

  // Ensure active tab resets to overview whenever a new breed is loaded
  useEffect(() => {
    setActiveTab('overview');
    setShowShareMenu(false);
  }, [breed?.id]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('[role="tablist"], button, a, input, select, textarea')) return;
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    
    // Check if horizontal swipe was intentional and dominant
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX > 0 && onPrevBreed) {
        onPrevBreed();
      } else if (deltaX < 0 && onNextBreed) {
        onNextBreed();
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  // Keyboard navigation for Escape, ArrowLeft and ArrowRight
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      if (e.key === 'Tab') {
        const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input, select, textarea, [tabindex="0"]'
        ) || []).filter(element => element.getClientRects().length > 0 && element.tabIndex >= 0);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
          e.preventDefault(); last?.focus();
        } else if (!e.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) {
          e.preventDefault(); first?.focus();
        }
        return;
      }
      if ((e.target as HTMLElement).closest('input, textarea, select, [role="tablist"]') && e.key !== 'Escape') return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrevBreed) {
        e.preventDefault();
        onPrevBreed();
      } else if (e.key === 'ArrowRight' && onNextBreed) {
        e.preventDefault();
        onNextBreed();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevBreed, onNextBreed, isOpen]);

  if (!breed) return null;

  const handleShare = async () => {
    const shareData = {
      title: `${breed.breed} - Ficha Etológica Canina`,
      text: `Conoce las características, motivaciones y perfil etológico de la raza ${breed.breed}: "${breed.epithet}"`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // Fallback to custom menu if native share is cancelled or fails
        if ((error as Error).name !== 'AbortError') {
          setShowShareMenu(prev => !prev);
        }
      }
    } else {
      setShowShareMenu(prev => !prev);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_DOG_IMAGE;
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="breed-modal-title"
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:px-6 sm:pb-6 sm:pt-3.5 md:px-20 lg:px-24 lg:pb-12 lg:pt-7 animate-fade-in"
    >
      {/* Indicador de gesto Swipe para versión móvil ubicado en el espacio libre sobre el modal */}
      {(onPrevBreed || onNextBreed) && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className="md:hidden flex items-center justify-center gap-1.5 px-3.5 py-1.5 mb-2 rounded-full bg-neutral-900/90 backdrop-blur-md border border-white/10 text-xs text-neutral-300 font-medium select-none shadow-xl pointer-events-none"
        >
          {onPrevBreed && <ChevronLeft className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
          <span>
            {totalBreeds && currentIndex !== undefined ? `${currentIndex + 1}/${totalBreeds} • ` : ''}Desliza para navegar
          </span>
          {onNextBreed && <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
        </div>
      )}

      {/* Botón Navegación Izquierda (Anterior) - Fuera del componente modal (Solo Desktop/Tablet >= md) */}
      {onPrevBreed && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrevBreed();
          }}
          aria-label={`Raza anterior: ${prevBreedName || 'Anterior'}`}
          title={prevBreedName ? `Anterior: ${prevBreedName} (←)` : "Anterior (←)"}
          className="hidden md:flex fixed left-2 sm:left-4 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-neutral-950/90 hover:bg-neutral-900 text-neutral-300 hover:text-amber-400 border border-white/10 hover:border-amber-500/50 shadow-2xl shadow-black/90 backdrop-blur-md items-center justify-center transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform group-hover:-translate-x-0.5" />
          {/* Tooltip flotante informativo */}
          {prevBreedName && (
            <span className="hidden xl:group-hover:flex absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-neutral-950/95 border border-white/15 text-xs font-semibold text-white whitespace-nowrap shadow-2xl pointer-events-none items-center gap-1.5">
              <span className="text-[10px] text-amber-400 uppercase font-bold">← Anterior:</span>
              {prevBreedName}
            </span>
          )}
        </button>
      )}

      {/* Contenedor Principal del Modal con soporte para gestos Touch Swipe */}
      <div 
        className="bg-[#0A0A0A] text-slate-200 rounded-[2.5rem] max-w-4xl w-full max-h-[88vh] sm:max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-800 relative my-auto touch-pan-y"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Header / Hero Section */}
        <div className="relative h-48 sm:h-[17.6rem] w-full bg-neutral-900 overflow-hidden flex-shrink-0">
          <img
            src={imageUrl}
            alt={`Fotografía en alta resolución de ${breed.breed}`}
            className="w-full h-full object-cover opacity-80"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-black/70 sm:via-[#0A0A0A]/20 sm:to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal de detalles"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 text-slate-200 hover:text-white hover:bg-neutral-800 transition-colors z-20 border border-white/10 cursor-pointer shadow-lg"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and Epithet (Bottom-aligned on both mobile and desktop) */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h2 id="breed-modal-title" className="text-xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  {breed.breed}
                </h2>
                <p className="text-xs sm:text-base text-amber-400 font-serif italic mt-0.5">
                  "{breed.epithet}"
                </p>
              </div>

              {/* Action Buttons: Desktop inline bottom-aligned */}
              <div className="hidden sm:flex items-center gap-2 mt-2 sm:mt-0 sm:self-end">
                <button
                  onClick={() => onToggleCompare(breed.id)}
                  aria-label={isCompared ? 'Quitar de comparar' : 'Comparar raza'}
                  className={`p-2.5 rounded-full text-xs transition-all backdrop-blur-md cursor-pointer border ${
                    isCompared
                      ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-black/80 text-slate-200 hover:bg-neutral-800 border-white/10'
                  }`}
                  title={isCompared ? 'Quitar de comparar' : 'Comparar raza'}
                >
                  <GitCompare className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onToggleFavorite(breed.id)}
                  aria-label={isFavorite ? 'Quitar de guardados' : 'Guardar en favoritos'}
                  className={`p-2.5 rounded-full text-xs transition-all backdrop-blur-md cursor-pointer border ${
                    isFavorite
                      ? 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/20'
                      : 'bg-black/80 text-slate-200 hover:bg-neutral-800 border-white/10'
                  }`}
                  title={isFavorite ? 'Guardado en favoritos' : 'Guardar en favoritos'}
                >
                  <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                </button>

                {/* Share Button & Dropdown */}
                <div className="relative">
                  <button
                    onClick={handleShare}
                    aria-label="Compartir ficha etológica"
                    className="p-2.5 rounded-full text-xs bg-black/80 text-slate-200 hover:bg-neutral-800 border border-white/10 transition-colors cursor-pointer"
                    title="Compartir ficha"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  {showShareMenu && (
                    <div 
                      className="absolute bottom-full right-0 mb-2 bg-[#141414] border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1 w-48 z-50 animate-fade-in"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer text-left w-full"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">¡Enlace copiado!</span>
                          </>
                        ) : (
                          <>
                            <Link className="w-3.5 h-3.5 text-amber-400" />
                            <span>Copiar Enlace</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Conoce el perfil etológico de la raza ${breed.breed}: ${window.location.href}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                      >
                        <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-emerald-400 text-[11px]">W</span>
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Ficha etológica de ${breed.breed}: "${breed.epithet}"`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                      >
                        <Twitter className="w-3.5 h-3.5 text-sky-400" />
                        <span>X / Twitter</span>
                      </a>

                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                      >
                        <Facebook className="w-3.5 h-3.5 text-blue-500" />
                        <span>Facebook</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons on Mobile: positioned at top left of hero as compact icon buttons */}
          <div className="sm:hidden absolute top-4 left-4 flex items-center gap-1.5 z-20">
            {/* Compare Button */}
            <button
              onClick={() => onToggleCompare(breed.id)}
              aria-label={isCompared ? 'Quitar de comparar' : 'Comparar raza'}
              className={`p-1.5 rounded-full text-xs transition-all backdrop-blur-md cursor-pointer border shadow-md ${
                isCompared
                  ? 'bg-amber-500 text-black border-amber-400 shadow-amber-500/20'
                  : 'bg-black/80 text-slate-200 hover:bg-neutral-800 border-white/10'
              }`}
              title={isCompared ? 'Quitar de comparar' : 'Comparar raza'}
            >
              <GitCompare className="w-3.5 h-3.5" />
            </button>

            {/* Favorite / Bookmark Button */}
            <button
              onClick={() => onToggleFavorite(breed.id)}
              aria-label={isFavorite ? 'Quitar de guardados' : 'Guardar en favoritos'}
              className={`p-1.5 rounded-full text-xs transition-all backdrop-blur-md cursor-pointer border shadow-md ${
                isFavorite
                  ? 'bg-rose-500 text-white border-rose-400 shadow-rose-500/20'
                  : 'bg-black/80 text-slate-200 hover:bg-neutral-800 border-white/10'
              }`}
              title={isFavorite ? 'Guardado en favoritos' : 'Guardar en favoritos'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Share Button & Dropdown Mobile */}
            <div className="relative">
              <button
                onClick={handleShare}
                aria-label="Compartir ficha etológica"
                className="p-1.5 rounded-full text-xs bg-black/80 text-slate-200 hover:bg-neutral-800 border border-white/10 transition-colors cursor-pointer shadow-md"
                title="Compartir ficha"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>

              {showShareMenu && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-[#141414] border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1 w-44 z-50 animate-fade-in"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer text-left w-full"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Link className="w-3.5 h-3.5 text-amber-400" />
                        <span>Copiar Enlace</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Conoce el perfil etológico de la raza ${breed.breed}: ${window.location.href}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                  >
                    <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-emerald-400 text-[11px]">W</span>
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Ficha etológica de ${breed.breed}: "${breed.epithet}"`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5 text-sky-400" />
                    <span>X / Twitter</span>
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5 text-blue-500" />
                    <span>Facebook</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* One accessible tab system, including long geographic names on mobile. */}
        <div role="tablist" aria-label="Apartados de la ficha" className="flex flex-wrap border-b border-white/5 bg-[#141414] px-5 py-2 gap-1.5 flex-shrink-0"
          onTouchStart={event => event.stopPropagation()}
          onTouchEnd={event => event.stopPropagation()}
        >
          {tabs.map((tab, index) => <button
            key={tab.id}
            id={`breed-tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`breed-panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={event => {
              let next = index;
              if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
              else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = tabs.length - 1;
              else return;
              event.preventDefault();
              event.stopPropagation();
              setActiveTab(tabs[next].id);
              document.getElementById(`breed-tab-${tabs[next].id}`)?.focus();
            }}
            className={`max-w-full px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer text-left break-words focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              activeTab === tab.id
                ? 'bg-amber-500 text-black shadow-sm shadow-amber-500/10'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >{tab.label}</button>)}
        </div>

        {tabs.filter(tab => tab.id !== activeTab).map(tab => (
          <div key={tab.id} role="tabpanel" id={`breed-panel-${tab.id}`} aria-labelledby={`breed-tab-${tab.id}`} hidden />
        ))}

        {/* Modal Body Content */}
        <div key={activeTab} ref={bodyRef} role="tabpanel" id={`breed-panel-${activeTab}`} aria-labelledby={`breed-tab-${activeTab}`} tabIndex={0} className="p-6 overflow-y-auto overscroll-contain flex-1 min-h-0 space-y-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500">

          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Archetypes */}
              {breed.archetypes.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">
                    Arquetipos Psicológicos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {breed.archetypes.map(arch => (
                      <button
                        key={arch}
                        onClick={() => {
                          onClose();
                          onSelectArchetype?.(arch);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors border border-purple-500/30 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span>{arch}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary */}
              <div className="bg-[#141414] border border-amber-500/20 rounded-[2rem] p-5 shadow-lg">
                <h4 className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>Resumen</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {breed.summary}
                </p>
              </div>

              <BreedOverviewMetrics metrics={breed.metrics} />

              <section className="bg-[#141414] border border-white/5 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4">
                <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] shrink-0">
                  Rasgos Característicos
                </h4>
                <div className="flex flex-wrap gap-2 min-w-0 sm:justify-end sm:ml-auto">
                  {breed.traits.map(t => (
                    <span key={t} className="max-w-full break-words px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/20">
                      #{t}
                    </span>
                  ))}
                </div>
              </section>

            </div>
          )}

          {activeTab === 'origin' && <BreedOriginPanel origin={breed.origen} />}

          {activeTab === 'sections' && (
            <div className="space-y-4">
              {breed.sections.map((section, idx) => {
                const isPros = section.title.toLowerCase().includes('positivo');
                const isCons = section.title.toLowerCase().includes('negativo');

                return (
                  <div 
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all ${
                      isPros 
                        ? 'bg-emerald-500/5 border-emerald-500/30' 
                        : isCons 
                        ? 'bg-rose-500/5 border-rose-500/30' 
                        : 'bg-[#141414] border-white/5'
                    }`}
                  >
                    <h4 className={`text-base font-bold mb-2 flex items-center gap-2 ${
                      isPros ? 'text-emerald-400' : isCons ? 'text-rose-400' : 'text-white'
                    }`}>
                      {isPros && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {isCons && <XCircle className="w-4 h-4 text-rose-400" />}
                      <span>{section.title}</span>
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-4">
              <div className="bg-[#141414] border border-white/5 rounded-[2rem] p-6 space-y-5">
                <h4 className="text-sm font-bold text-white border-b border-white/5 pb-3">
                  Desglose Etológico Completo
                </h4>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-white mb-1">
                      <span>Umbral de Estimulación</span>
                      <span className="text-amber-400">{breed.metrics.umbral_de_estimulacion}</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Nivel de sensibilidad ambiental antes de activar una respuesta emocional o física.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-white mb-1">
                      <span>Motivación Intrínseca</span>
                      <span className="text-amber-400">{breed.metrics.motivacion_intrinseca}</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Estímulo biológico primordial que impulsa sus decisiones y conducta.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-white mb-1">
                      <span>Resiliencia Emocional</span>
                      <span className="text-amber-400">{breed.metrics.resiliencia_emocional}</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Capacidad del sistema nervioso para recuperarse tras picos de estrés o conflicto.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-white mb-1">
                      <span>Sociabilidad</span>
                      <span className="text-amber-400">{breed.metrics.sociabilidad}</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Apertura a la interacción con extraños, otros perros y el núcleo familiar.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-white mb-1">
                      <span>Independencia Cognitiva</span>
                      <span className="text-amber-400">{breed.metrics.independencia_cognitiva}</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Autonomía para evaluar contextos y tomar decisiones sin depender del guía.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Botón Navegación Derecha (Siguiente) - Fuera del componente modal (Solo Desktop/Tablet >= md) */}
      {onNextBreed && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNextBreed();
          }}
          aria-label={`Siguiente raza: ${nextBreedName || 'Siguiente'}`}
          title={nextBreedName ? `Siguiente: ${nextBreedName} (→)` : "Siguiente (→)"}
          className="hidden md:flex fixed right-2 sm:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-neutral-950/90 hover:bg-neutral-900 text-neutral-300 hover:text-amber-400 border border-white/10 hover:border-amber-500/50 shadow-2xl shadow-black/90 backdrop-blur-md items-center justify-center transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-0.5" />
          {/* Tooltip flotante informativo */}
          {nextBreedName && (
            <span className="hidden xl:group-hover:flex absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-neutral-950/95 border border-white/15 text-xs font-semibold text-white whitespace-nowrap shadow-2xl pointer-events-none items-center gap-1.5">
              <span className="text-[10px] text-amber-400 uppercase font-bold">Siguiente →:</span>
              {nextBreedName}
            </span>
          )}
        </button>
      )}
    </div>
  );
};
