import React, { useState, useEffect } from 'react';
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
  Twitter
} from 'lucide-react';

interface BreedDetailModalProps {
  breed: Breed | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (breedId: string) => void;
  isCompared: boolean;
  onToggleCompare: (breedId: string) => void;
  onSelectArchetype?: (archetype: string) => void;
}

const FALLBACK_DOG_IMAGE = "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg";

export const BreedDetailModal: React.FC<BreedDetailModalProps> = ({
  breed,
  onClose,
  isFavorite,
  onToggleFavorite,
  isCompared,
  onToggleCompare,
  onSelectArchetype
}) => {
  if (!breed) return null;

  const imageUrl = breed.imageUrl || getBreedImageUrl(breed.id);
  const [activeTab, setActiveTab] = useState<'overview' | 'sections' | 'metrics'>('overview');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Ensure active tab resets to overview whenever a new breed is loaded
  useEffect(() => {
    setActiveTab('overview');
    setShowShareMenu(false);
  }, [breed.id]);

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
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in"
    >
      <div 
        className="bg-[#0A0A0A] text-slate-200 rounded-[2.5rem] max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-800 relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header / Hero Section */}
        <div className="relative h-64 sm:h-72 w-full aspect-[16/9] bg-neutral-900 overflow-hidden flex-shrink-0">
          <img
            src={imageUrl}
            alt={`Fotografía en alta resolución de ${breed.breed}`}
            className="w-full h-full object-cover opacity-80"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal de detalles"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 text-slate-200 hover:text-white hover:bg-neutral-800 transition-colors z-10 border border-white/10 cursor-pointer"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Info Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500 text-black shadow-md shadow-amber-500/20">
              {breed.fciGroup}
            </span>
            {breed.akcGroup && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/80 text-slate-300 backdrop-blur-md border border-white/10">
                AKC: {breed.akcGroup}
              </span>
            )}
          </div>

          {/* Title and Epithet */}
          <div className="absolute bottom-4 left-6 right-6 text-white z-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {breed.breed}
                </h2>
                <p className="text-sm sm:text-base text-amber-400 font-serif italic mt-0.5">
                  "{breed.epithet}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => onToggleCompare(breed.id)}
                  aria-label={isCompared ? 'Quitar de comparar' : 'Comparar raza'}
                  className={`flex items-center gap-1.5 p-2.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all backdrop-blur-md cursor-pointer ${
                    isCompared
                      ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                      : 'bg-black/80 text-slate-200 hover:bg-neutral-800 border border-white/10'
                  }`}
                >
                  <GitCompare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isCompared ? 'Comparando' : 'Comparar'}</span>
                </button>

                <button
                  onClick={() => onToggleFavorite(breed.id)}
                  aria-label={isFavorite ? 'Quitar de guardados' : 'Guardar en favoritos'}
                  className={`flex items-center gap-1.5 p-2.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all backdrop-blur-md cursor-pointer ${
                    isFavorite
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                      : 'bg-black/80 text-slate-200 hover:bg-neutral-800 border border-white/10'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">{isFavorite ? 'Guardado' : 'Guardar'}</span>
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
                      className="absolute top-full right-0 mt-2 bg-[#141414] border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1 w-48 z-50 animate-fade-in"
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
        </div>

        {/* Tab Navigation in Modal */}
        <div className="flex border-b border-white/5 bg-[#141414] px-6 py-3 gap-2 flex-shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/10'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            Visión General
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'sections'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/10'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            Análisis de Personalidad ({breed.sections.length})
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'metrics'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/10'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            Métricas de Temperamento
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
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
                  <span>Resumen Etológico</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {breed.summary}
                </p>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-[#141414] border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>Resiliencia Emocional</span>
                  </div>
                  <p className="text-base font-bold text-white">
                    {breed.metrics.resiliencia_emocional}
                  </p>
                </div>

                <div className="bg-[#141414] border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>Sociabilidad</span>
                  </div>
                  <p className="text-base font-bold text-white">
                    {breed.metrics.sociabilidad}
                  </p>
                </div>

                <div className="bg-[#141414] border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span>Independencia Cognitiva</span>
                  </div>
                  <p className="text-base font-bold text-white">
                    {breed.metrics.independencia_cognitiva}
                  </p>
                </div>

                <div className="bg-[#141414] border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1">
                    <Activity className="w-4 h-4 text-amber-400" />
                    <span>Umbral de Estimulación</span>
                  </div>
                  <p className="text-base font-bold text-white">
                    {breed.metrics.umbral_de_estimulacion}
                  </p>
                </div>

                <div className="bg-[#141414] border border-white/5 p-4 rounded-2xl col-span-1 sm:col-span-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span>Motivación Intrínseca</span>
                  </div>
                  <p className="text-base font-bold text-white">
                    {breed.metrics.motivacion_intrinseca}
                  </p>
                </div>
              </div>

              {/* Motivations & Traits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#141414] border border-white/5 p-5 rounded-2xl">
                  <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-3">
                    Motivadores Principales
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {breed.motivations.map(m => (
                      <span key={m} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/20">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#141414] border border-white/5 p-5 rounded-2xl">
                  <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-3">
                    Rasgos Característicos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {breed.traits.map(t => (
                      <span key={t} className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/20">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

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

        {/* Modal Footer */}
        <div className="p-4 bg-[#141414] border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 flex-shrink-0">
          <span>
            Ref ID: <code className="bg-black px-2 py-1 rounded text-amber-400 font-mono text-[11px] border border-white/5">{breed.id}</code>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-amber-500 text-black hover:bg-amber-400 font-bold rounded-full transition-all cursor-pointer shadow-md shadow-amber-500/10"
          >
            Cerrar Ficha
          </button>
        </div>

      </div>
    </div>
  );
};
