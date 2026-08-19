import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { Framework } from '../../types';
import { X, Network, Sparkles, Compass } from 'lucide-react';

interface FrameworkParametersModalProps {
  isOpen: boolean;
  onClose: () => void;
  frameworks: Framework[];
}

interface MetricDefinition {
  id: string;
  code: string;
  name: string;
  category: string;
  description: string;
}

const FIVE_METRICS: MetricDefinition[] = [
  {
    id: 'resiliencia-emocional',
    code: 'MET-01',
    name: 'Resiliencia Emocional',
    category: 'Homeostasis & Neuroquímica',
    description: 'Capacidad de retorno a la línea base neurobiológica tras una perturbación.'
  },
  {
    id: 'sociabilidad',
    code: 'MET-02',
    name: 'Sociabilidad',
    category: 'Vínculo & Afiliación',
    description: 'Disposición hacia la sincronía interespecífica y apertura relacional.'
  },
  {
    id: 'independencia-cognitiva',
    code: 'MET-03',
    name: 'Independencia Cognitiva',
    category: 'Autonomía & Criterio',
    description: 'Capacidad de resolución instrumental y toma de decisiones sin guía continua.'
  },
  {
    id: 'umbral-estimulacion',
    code: 'MET-04',
    name: 'Umbral de Estimulación',
    category: 'Sensibilidad & Reactividad',
    description: 'Cantidad de energía informacional necesaria para desencadenar una respuesta física.'
  },
  {
    id: 'motivacion-intrinseca',
    code: 'MET-05',
    name: 'Motivación Intrínseca',
    category: 'Motor Biológico & Refuerzo',
    description: 'Vías internas de recompensa que sustentan el esfuerzo y la persistencia.'
  }
];

// Mapeo riguroso de parámetros etológicos a sus métricas determinantes
const PARAMETER_METRIC_CONNECTIONS: Record<string, string[]> = {
  // Marco 1: Regulación Emocional
  'Autorregulación (Interna)': ['resiliencia-emocional', 'independencia-cognitiva'],
  'Regulación Externa (Humana)': ['sociabilidad', 'resiliencia-emocional'],
  'Regulación por Tarea (Funcional)': ['motivacion-intrinseca', 'resiliencia-emocional'],
  'Regulación Territorial': ['umbral-estimulacion', 'sociabilidad'],
  'Inmersión Sensorial': ['umbral-estimulacion', 'resiliencia-emocional'],

  // Marco 2: Tipo de Vínculo
  'Vínculo de Fusión (Simbiosis)': ['sociabilidad', 'resiliencia-emocional'],
  'Vínculo Cooperativo (Equipo)': ['sociabilidad', 'motivacion-intrinseca'],
  'Vínculo Funcional (Referencial)': ['sociabilidad', 'independencia-cognitiva'],
  'Vínculo Paralelo (Coexistencia)': ['independencia-cognitiva', 'sociabilidad'],
  'Vínculo Territorial (Patrimonial)': ['umbral-estimulacion', 'sociabilidad'],

  // Marco 3: Motivaciones
  'Afecto y Cercanía': ['sociabilidad', 'motivacion-intrinseca'],
  'Cooperación Social': ['sociabilidad', 'motivacion-intrinseca'],
  'Control y Orden': ['independencia-cognitiva', 'motivacion-intrinseca'],
  'Activación Visual': ['umbral-estimulacion', 'motivacion-intrinseca'],
  'Exploración Olfativa': ['motivacion-intrinseca', 'independencia-cognitiva'],
  'Resolución Instrumental': ['independencia-cognitiva', 'motivacion-intrinseca'],
  'Autonomía': ['independencia-cognitiva', 'resiliencia-emocional'],

  // Marco 4: Gestión de estímulos
  'Escalamiento': ['umbral-estimulacion', 'resiliencia-emocional'],
  'Repliegue': ['resiliencia-emocional', 'umbral-estimulacion'],
  'Contención': ['resiliencia-emocional', 'umbral-estimulacion'],
  'Intervención': ['umbral-estimulacion', 'independencia-cognitiva'],
  'Desconexión': ['resiliencia-emocional', 'independencia-cognitiva'],
  'Absorción': ['resiliencia-emocional', 'umbral-estimulacion'],

  // Marco 5: Tiempo y recuperación
  'Tiempo Corto (Inmediato)': ['resiliencia-emocional', 'umbral-estimulacion'],
  'Tiempo Medio (Secuencial)': ['independencia-cognitiva', 'resiliencia-emocional'],
  'Tiempo Largo (Estacionario)': ['resiliencia-emocional', 'umbral-estimulacion'],
  'Tasa de Recuperación': ['resiliencia-emocional'],

  // Marco 6: Plasticidad y rigidez
  'Plasticidad Alta (El Generalista)': ['independencia-cognitiva', 'resiliencia-emocional'],
  'Rigidez Especializada (El Especialista)': ['independencia-cognitiva', 'umbral-estimulacion'],
};

export const FrameworkParametersModal: React.FC<FrameworkParametersModalProps> = ({
  isOpen,
  onClose,
  frameworks
}) => {
  const [hoveredParam, setHoveredParam] = useState<string | null>(null);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const [activeFrameworkId, setActiveFrameworkId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const paramRefs = useRef<Map<string, HTMLElement>>(new Map());
  const metricRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [lines, setLines] = useState<Array<{
    paramKey: string;
    metricId: string;
    path: string;
  }>>([]);

  // Cerrar con Escape y bloquear scroll de fondo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Recalcular trayectorias SVG vectoriales
  const updateSvgConnections = useCallback(() => {
    if (!isOpen || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newLines: Array<{ paramKey: string; metricId: string; path: string }> = [];

    frameworks.forEach(fw => {
      (fw.sections || []).forEach(sec => {
        const cleanTitle = sec.title.replace(/^\d+\.\s*/, '').trim();
        const paramEl = paramRefs.current.get(cleanTitle);
        const targetMetrics = PARAMETER_METRIC_CONNECTIONS[cleanTitle] || ['resiliencia-emocional'];

        if (paramEl) {
          const pRect = paramEl.getBoundingClientRect();
          const x1 = pRect.right - containerRect.left;
          const y1 = pRect.top + pRect.height / 2 - containerRect.top;

          targetMetrics.forEach(metricId => {
            const metricEl = metricRefs.current.get(metricId);
            if (metricEl) {
              const mRect = metricEl.getBoundingClientRect();
              const x2 = mRect.left - containerRect.left;
              const y2 = mRect.top + mRect.height / 2 - containerRect.top;

              // Curva Bézier cúbica orgánica horizontal
              const dx = (x2 - x1) * 0.48;
              const path = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
              newLines.push({ paramKey: cleanTitle, metricId, path });
            }
          });
        }
      });
    });

    setLines(newLines);
  }, [isOpen, frameworks]);

  useLayoutEffect(() => {
    if (isOpen) {
      const timer = setTimeout(updateSvgConnections, 80);
      window.addEventListener('resize', updateSvgConnections);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updateSvgConnections);
      };
    }
  }, [isOpen, updateSvgConnections]);

  if (!isOpen) return null;

  // Determinar métricas activas según el hover actual
  const activeMetricsForHoveredParam = hoveredParam
    ? (PARAMETER_METRIC_CONNECTIONS[hoveredParam] || [])
    : [];

  return (
    <div className="fixed inset-0 z-50 hidden lg:flex flex-col bg-[#0A0A0A]/95 backdrop-blur-2xl text-white select-none animate-content-fade-in">
      {/* Barra superior editorial */}
      <header className="w-full border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold tracking-[0.25em] text-amber-500 uppercase">
              Atlas Canino • Cartografía Teórica
            </div>
            <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              Mapa Sistémico de Parámetros Etológicos
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-3 text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              6 Marcos Psicológicos
            </span>
            <span className="text-neutral-700">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              5 Métricas Fenotípicas
            </span>
          </div>

          <button
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-neutral-900/80 hover:bg-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all cursor-pointer text-xs font-mono tracking-wider uppercase"
          >
            <span>Cerrar Mapa</span>
            <X className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:rotate-90" />
          </button>
        </div>
      </header>

      {/* Cuerpo principal del Mapa Infográfico */}
      <div 
        ref={containerRef}
        className="relative flex-1 w-full max-w-7xl mx-auto px-8 py-6 grid grid-cols-12 gap-8 items-center overflow-hidden"
      >
        {/* Capa de Conexiones SVG Absoluta */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {lines.map((line, idx) => {
            const isParamActive = hoveredParam === line.paramKey;
            const isMetricActive = hoveredMetric === line.metricId;
            const isHighlighted = isParamActive || isMetricActive;
            const isDimmed = (hoveredParam !== null || hoveredMetric !== null) && !isHighlighted;

            return (
              <path
                key={`${line.paramKey}-${line.metricId}-${idx}`}
                d={line.path}
                fill="none"
                stroke={isHighlighted ? 'url(#activeGrad)' : 'rgba(255, 255, 255, 0.08)'}
                strokeWidth={isHighlighted ? 1.75 : 1}
                strokeDasharray={isHighlighted ? 'none' : '2, 3'}
                className={`transition-all duration-300 ${
                  isHighlighted 
                    ? 'opacity-100 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]' 
                    : isDimmed 
                      ? 'opacity-10' 
                      : 'opacity-40 hover:opacity-70'
                }`}
              />
            );
          })}
        </svg>

        {/* Columna Izquierda: Los 6 Marcos y sus Parámetros Dinámicos (Col 1 a 7) */}
        <div className="col-span-7 z-20 space-y-4 pr-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-amber-500" />
              Marcos Teóricos & Parámetros Operativos
            </div>
            <span className="text-[10px] font-mono text-neutral-400">Pasa el cursor para trazar flujo</span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {frameworks.map((fw) => {
              const fwNum = String(fw.number || 1).padStart(2, '0');
              const isFwActive = activeFrameworkId === fw.id;

              return (
                <div 
                  key={fw.id}
                  onMouseEnter={() => setActiveFrameworkId(fw.id)}
                  onMouseLeave={() => setActiveFrameworkId(null)}
                  className={`p-3.5 rounded-2xl border transition-all duration-300 ${
                    isFwActive 
                      ? 'bg-neutral-900/90 border-amber-500/30 shadow-lg shadow-black/60' 
                      : 'bg-neutral-900/40 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/5">
                    <span className="font-mono text-[10px] font-bold text-amber-400">
                      #{fwNum}
                    </span>
                    <h2 className="text-xs font-bold tracking-tight text-white truncate">
                      {fw.title}
                    </h2>
                  </div>

                  <ul className="space-y-1.5">
                    {(fw.sections || []).map((sec, sIdx) => {
                      const cleanTitle = sec.title.replace(/^\d+\.\s*/, '').trim();
                      const isHovered = hoveredParam === cleanTitle;
                      const isConnectedToMetric = hoveredMetric 
                        ? (PARAMETER_METRIC_CONNECTIONS[cleanTitle] || []).includes(hoveredMetric)
                        : false;
                      
                      const isHighlighted = isHovered || isConnectedToMetric;
                      const isDimmed = (hoveredParam !== null || hoveredMetric !== null) && !isHighlighted;

                      return (
                        <li
                          key={sIdx}
                          ref={(el) => {
                            if (el) paramRefs.current.set(cleanTitle, el);
                            else paramRefs.current.delete(cleanTitle);
                          }}
                          onMouseEnter={() => setHoveredParam(cleanTitle)}
                          onMouseLeave={() => setHoveredParam(null)}
                          className={`group flex items-center justify-between text-[11px] py-1 px-2 rounded-lg transition-all duration-200 cursor-pointer ${
                            isHighlighted
                              ? 'bg-amber-500/15 text-amber-200 font-semibold pl-2.5'
                              : isDimmed
                                ? 'text-neutral-400 opacity-40 hover:opacity-100 hover:text-white'
                                : 'text-neutral-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className="truncate pr-2">{cleanTitle}</span>
                          <span 
                            className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${
                              isHighlighted 
                                ? 'bg-amber-400 scale-125 shadow-[0_0_6px_rgba(245,158,11,0.8)]' 
                                : 'bg-white/20 group-hover:bg-white/60'
                            }`} 
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Espaciador central gráfico (Col 8) */}
        <div className="col-span-1" />

        {/* Columna Derecha: Las 5 Métricas Fenotípicas (Col 9 a 12) */}
        <div className="col-span-4 z-20 space-y-3.5 pl-4">
          <div className="border-b border-white/10 pb-2 mb-3">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Dimensiones de Conducta
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
              Métricas resultantes del perfil psíquico
            </p>
          </div>

          <div className="space-y-3">
            {FIVE_METRICS.map((metric) => {
              const isDirectlyHovered = hoveredMetric === metric.id;
              const isTargetOfHoveredParam = activeMetricsForHoveredParam.includes(metric.id);
              const isHighlighted = isDirectlyHovered || isTargetOfHoveredParam;
              const isDimmed = (hoveredParam !== null || hoveredMetric !== null) && !isHighlighted;

              return (
                <div
                  key={metric.id}
                  ref={(el) => {
                    if (el) metricRefs.current.set(metric.id, el);
                    else metricRefs.current.delete(metric.id);
                  }}
                  onMouseEnter={() => setHoveredMetric(metric.id)}
                  onMouseLeave={() => setHoveredMetric(null)}
                  className={`relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isHighlighted
                      ? 'bg-gradient-to-r from-amber-500/20 to-neutral-900 border-amber-500/40 shadow-xl shadow-amber-500/10 -translate-x-1'
                      : isDimmed
                        ? 'bg-neutral-900/30 border-white/5 opacity-40 hover:opacity-90'
                        : 'bg-neutral-900/60 border-white/10 hover:border-white/20 hover:bg-neutral-900/90'
                  }`}
                >
                  {/* Conector punto izquierdo */}
                  <div 
                    className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all ${
                      isHighlighted 
                        ? 'bg-amber-400 border-black scale-125 shadow-[0_0_8px_rgba(245,158,11,1)]' 
                        : 'bg-neutral-800 border-white/20'
                    }`} 
                  />

                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors ${
                      isHighlighted ? 'text-amber-400' : 'text-neutral-400'
                    }`}>
                      {metric.code} • {metric.category}
                    </span>
                  </div>

                  <h3 className={`text-sm font-bold tracking-tight transition-colors ${
                    isHighlighted ? 'text-amber-100' : 'text-white'
                  }`}>
                    {metric.name}
                  </h3>

                  <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed line-clamp-2">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pie de página informativo */}
      <footer className="w-full border-t border-white/5 px-8 py-3.5 flex items-center justify-between text-xs text-neutral-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>Líneas dinámicas calculadas por correspondencia funcional</span>
        </div>
        <div>
          <span>Presiona <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-white/10 text-neutral-300 font-mono text-[10px]">ESC</kbd> o el botón superior para volver</span>
        </div>
      </footer>
    </div>
  );
};
