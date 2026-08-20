import React, { useState, useEffect } from 'react';
import { Framework } from '../../types';
import { canineData } from '../../data/canineData';
import { ChevronLeft, ChevronRight, Network } from 'lucide-react';
import { FrameworkParametersModal } from './FrameworkParametersModal';

interface FrameworkExperienceProps {
  framework: Framework;
}

// Diccionario estricto para mapear el título limpio del parámetro con su respectivo archivo .webp
const PARAMETER_IMAGE_MAP: Record<string, string> = {
  // Marco 1: Regulación Emocional
  'Autorregulación (Interna)': 'regulacion_interna.webp',
  'Regulación Externa (Humana)': 'regulacion-externa.webp',
  'Regulación por Tarea (Funcional)': 'regulacion-por-tarea.webp',
  'Regulación Territorial': 'regulacion-territorial.webp',
  'Inmersión Sensorial': 'regulacion-inmersion_sensorial.webp',

  // Marco 2: Tipo de Vínculo
  'Vínculo de Fusión (Simbiosis)': 'vinculo-fusion.webp',
  'Vínculo Cooperativo (Equipo)': 'vinculo-cooperativo.webp',
  'Vínculo Funcional (Referencial)': 'vinculo-funcional.webp',
  'Vínculo Paralelo (Coexistencia)': 'vinculo-paralelo.webp',
  'Vínculo Territorial (Patrimonial)': 'vinculo-territorial.webp',

  // Marco 3: Motivaciones
  'Afecto y Cercanía': 'afecto-cercania.webp',
  'Cooperación Social': 'cooperacion-social.webp',
  'Control y Orden': 'control-orden.webp',
  'Activación Visual': 'activacion-visual.webp',
  'Exploración Olfativa': 'exploracion-olfativa.webp',
  'Resolución Instrumental': 'resolucion-instrumental.webp',
  'Autonomía': 'autonomia.webp',

  // Marco 4: Gestión de estímulos
  'Escalamiento': 'escalamiento.webp',
  'Repliegue': 'repliegue.webp',
  'Contención': 'contencion.webp',
  'Intervención': 'Intervencion.webp',
  'Desconexión': 'desconexion.webp',
  'Absorción': 'absorcion.webp',

  // Marco 5: Tiempo y recuperación
  'Tiempo Corto (Inmediato)': 'tiempo-corto.webp',
  'Tiempo Medio (Secuencial)': 'tiempo-medio.webp',
  'Tiempo Largo (Estacionario)': 'tiempo-largo.webp',
  'Tasa de Recuperación': 'tasa-recuperacion.webp',

  // Marco 6: Plasticidad y rigidez
  'Plasticidad Alta (El Generalista)': 'plasticidad-alta.webp',
  'Rigidez Especializada (El Especialista)': 'rigidez-especializada.webp',
};

// Normaliza el texto para nombres de archivo compatibles con URLs y rutas locales como fallback
const normalize = (str: string): string => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Genera la ruta estandarizada para la imagen del parámetro
const getParameterImageUrl = (sectionTitle: string): string => {
  if (!sectionTitle) return DEFAULT_PLACEHOLDER;
  const cleanTitle = sectionTitle.replace(/^\d+\.\s*/, '').trim();

  if (PARAMETER_IMAGE_MAP[cleanTitle]) {
    return `/images/frameworks/${PARAMETER_IMAGE_MAP[cleanTitle]}`;
  }

  return `/images/frameworks/${normalize(cleanTitle)}.webp`;
};

// Placeholder canino por defecto en caso de ausencia de imagen local
const DEFAULT_PLACEHOLDER = '/images/breeds/border-collie.webp';

export const FrameworkExperience: React.FC<FrameworkExperienceProps> = ({ framework }) => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0);
  const sections = framework.sections || [];
  const currentSection = sections[selectedSectionIndex] || sections[0];

  const [imgSrc, setImgSrc] = useState<string>(() => {
    return currentSection ? getParameterImageUrl(currentSection.title) : DEFAULT_PLACEHOLDER;
  });
  const [imgError, setImgError] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  // Reiniciar selección al cambiar de marco
  useEffect(() => {
    setSelectedSectionIndex(0);
  }, [framework.id]);

  // Actualizar imagen al cambiar de sección o marco
  useEffect(() => {
    if (currentSection) {
      const targetUrl = getParameterImageUrl(currentSection.title);
      setIsImageLoaded(false);
      setImgSrc(targetUrl);
      setImgError(false);
    }
  }, [framework.id, selectedSectionIndex, currentSection]);

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(DEFAULT_PLACEHOLDER);
      setIsImageLoaded(true);
    }
  };

  const cleanSectionTitle = currentSection?.title
    ? currentSection.title.replace(/^\d+\.\s*/, '').trim()
    : '';

  const frameworkNumberStr = framework.number
    ? String(framework.number).padStart(2, '0')
    : '01';

  // Parser para resaltar bloques de contenido como "SEÑAL:", "CÓMO FUNCIONA:", etc.
  const renderFormattedContent = (content: string) => {
    if (!content) return null;

    // Detectar marcador de SEÑAL:
    const signalRegex = /(?:\r?\n|^)SEÑAL\s*:\s*([\s\S]+)$/i;
    const match = content.match(signalRegex);

    if (match && match.index !== undefined) {
      const description = content.slice(0, match.index).trim();
      const signalText = match[1].trim();

      return (
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed whitespace-pre-line">
            {description}
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Señal Observable
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {signalText}
            </p>
          </div>
        </div>
      );
    }

    return (
      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* 2. Cabecera del Marco */}
      <div className="bg-[#141414] rounded-[2rem] p-6 border border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-white/5 pb-5">
          {/* Columna Izquierda: Número y Título */}
          <div className="md:col-span-6 space-y-1">
            <div className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">
              MARCO #{frameworkNumberStr}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              {framework.title}
            </h2>
          </div>

          {/* Columna Derecha: Pregunta Guía */}
          {framework.signature && (
            <div className="md:col-span-6 space-y-1 md:border-l md:border-white/5 md:pl-6 flex flex-col justify-start">
              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">
                PREGUNTA GUÍA
              </div>
              <p className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                {framework.signature}
              </p>
            </div>
          )}
        </div>

        {/* Resumen inferior */}
        {framework.summary && (
          <p className="text-xs sm:text-sm text-neutral-300 mt-4 leading-relaxed w-full">
            {framework.summary}
          </p>
        )}
      </div>

      {/* 3. Visor de Parámetros (2 Columnas en Escritorio) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Columna Izquierda: Navegación de Parámetros e Imagen */}
        <div className="bg-[#141414] rounded-[2rem] p-6 border border-white/5 flex flex-col justify-between gap-5">
          <div>
            {/* Píldoras de los parámetros */}
            <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Parámetros del marco">
              {sections.map((sec, idx) => {
                const isSelected = idx === selectedSectionIndex;
                const cleanName = sec.title.replace(/^\d+\.\s*/, '').trim();

                return (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedSectionIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/10'
                        : 'bg-transparent text-neutral-300 border-white/10 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {cleanName}
                  </button>
                );
              })}
            </div>

            {/* Contenedor de la Imagen con animación suave de entrada */}
            <div 
              key={`img-container-${framework.id}-${selectedSectionIndex}`}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 group shadow-inner animate-content-fade-in"
            >
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={cleanSectionTitle || framework.title}
                  onLoad={() => setIsImageLoaded(true)}
                  onError={handleImageError}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.02] ${
                    isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.99]'
                  }`}
                  loading="lazy"
                />
              ) : null}
            </div>
          </div>

          {/* Navegación rápida Anterior / Siguiente */}
          {sections.length > 1 && (
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-neutral-400">
              <button
                onClick={() => setSelectedSectionIndex(prev => Math.max(0, prev - 1))}
                disabled={selectedSectionIndex === 0}
                className="flex items-center gap-1 hover:text-amber-400 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer py-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="flex gap-1.5">
                {sections.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSectionIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      i === selectedSectionIndex ? 'bg-amber-400 w-4' : 'bg-neutral-700 hover:bg-neutral-500'
                    }`}
                    aria-label={`Ir al parámetro ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setSelectedSectionIndex(prev => Math.min(sections.length - 1, prev + 1))}
                disabled={selectedSectionIndex === sections.length - 1}
                className="flex items-center gap-1 hover:text-amber-400 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer py-1"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Columna Derecha: Contenido del Parámetro con animación suave de entrada */}
        <div className="bg-[#141414] rounded-[2rem] p-6 border border-white/5 flex flex-col justify-between gap-6">
          <div 
            key={`detail-${framework.id}-${selectedSectionIndex}`}
            className="space-y-4 animate-content-fade-in"
          >
            {/* Etiqueta superior */}
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] flex items-center justify-between border-b border-white/5 pb-3">
              <span>
                {framework.title.toUpperCase()} • {selectedSectionIndex + 1} DE {sections.length}
              </span>
              <span className="text-amber-500 font-mono">
                #{String(selectedSectionIndex + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Título del parámetro */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              {cleanSectionTitle}
            </h3>

            {/* Contenido formateado */}
            <div className="pt-2">
              {currentSection && renderFormattedContent(currentSection.content)}
            </div>
          </div>

          {/* Pie de tarjeta informativo */}
          <div className="pt-4 border-t border-white/5 text-xs text-neutral-400 flex items-center justify-between">
            <span className="text-[11px] font-medium text-neutral-400">
              Parámetro {selectedSectionIndex + 1} de {sections.length} del marco etológico
            </span>
          </div>
        </div>

      </div>

      {/* Botón de acceso al mapa de marcos psicológicos (Desktop Only) */}
      <div className="flex justify-end pt-1">
        <button
          onClick={() => setIsMapModalOpen(true)}
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-amber-400 text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-amber-500/5"
        >
          <Network className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
          <span>Ver mapa de marcos psicológicos</span>
        </button>
      </div>

      {/* Modal Infográfico Editorial de Parámetros */}
      <FrameworkParametersModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        frameworks={canineData.frameworks}
      />

    </div>
  );
};
