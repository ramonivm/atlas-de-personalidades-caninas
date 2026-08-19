import { FrameworkSection } from '../../types';
import { ParsedFrameworkSection, FrameworkMetaConfig } from './frameworkTypes';

/**
 * Normaliza el título de una sección retirando numeraciones iniciales
 * Ejemplo: "1. Escalamiento" -> "Escalamiento"
 *          "2. Vínculo Cooperativo (Equipo)" -> "Vínculo Cooperativo (Equipo)"
 */
export function normalizeSectionTitle(title: string): string {
  if (!title) return '';
  return title.replace(/^\d+\.\s*/, '').trim();
}

/**
 * Separa programáticamente la definición etológica y la manifestación observable (SEÑAL:)
 * Si no existe "SEÑAL:", devuelve signal: null.
 */
export function parseFrameworkSectionContent(content: string): { description: string; signal: string | null } {
  if (!content) {
    return { description: '', signal: null };
  }

  // Detect SEÑAL: marker (case insensitive, supporting optional line break or space)
  const signalRegex = /(?:\r?\n)?SEÑAL\s*:\s*([\s\S]+)$/i;
  const match = content.match(signalRegex);

  if (match && match.index !== undefined) {
    const description = content.slice(0, match.index).trim();
    const signal = match[1].trim();
    return {
      description,
      signal: signal.length > 0 ? signal : null
    };
  }

  return {
    description: content.trim(),
    signal: null
  };
}

/**
 * Metadatos de apoyo conceptual para los 6 marcos
 */
export const FRAMEWORK_METAS: Record<string, FrameworkMetaConfig> = {
  'regulacion-emocional': {
    id: 'regulacion-emocional',
    number: 1,
    verb: 'Regular',
    conceptTitle: 'Rutas hacia la calma',
    iconName: 'Activity',
    patternDescriptors: {
      0: 'Canal Externo · Vía Guía',
      1: 'Canal Autónomo · Vía Interna',
      2: 'Canal Operativo · Vía Tarea',
      3: 'Canal Espacial · Vía Perímetro',
      4: 'Canal Sensorial · Vía Química'
    }
  },
  'tipo-de-vinculo': {
    id: 'tipo-de-vinculo',
    number: 2,
    verb: 'Vincular',
    conceptTitle: 'Geometría de la relación Humano ↔ Perro',
    iconName: 'Users2',
    patternDescriptors: {
      0: 'Órbitas superpuestas · Límite difuso',
      1: 'Bidireccional · Sincronía operativa',
      2: 'Estructura · Humano como ancla',
      3: 'Vectores paralelos · Autonomía',
      4: 'Perímetro defensivo · Protección'
    }
  },
  'fuente-de-motivacion': {
    id: 'fuente-de-motivacion',
    number: 3,
    verb: 'Motivar',
    conceptTitle: 'Brújula de recompensa',
    iconName: 'Compass',
    patternDescriptors: {
      0: 'Afiliación social y contacto',
      1: 'Coordinación y sinergia con el guía',
      2: 'Supervisión y organización espacial',
      3: 'Persecución y estímulo cinético',
      4: 'Recolección de información química',
      5: 'Modificación física y tenacidad',
      6: 'Autodeterminación y libre albedrío'
    }
  },
  'gestion-del-estimulo': {
    id: 'gestion-del-estimulo',
    number: 4,
    verb: 'Procesar',
    conceptTitle: 'Respuestas frente a la sobrecarga',
    iconName: 'Cpu',
    patternDescriptors: {
      0: '↑ Intensifica respuesta',
      1: '↙ Crea distancia física',
      2: '● Contiene en tensión',
      3: '→ Actúa sobre el entorno',
      4: '— Filtra selectivamente',
      5: '○ Procesa en silencio'
    }
  },
  'tiempo-y-recuperacion': {
    id: 'tiempo-y-recuperacion',
    number: 5,
    verb: 'Recuperar',
    conceptTitle: 'Evolución temporal cualitativa',
    iconName: 'Timer',
    patternDescriptors: {
      0: 'Pico rápido · Desvanecimiento inmediato',
      1: 'Secuencia lógica A → B → C sostenida',
      2: 'Estado prolongado · Rumia emocional',
      3: 'Comparativa cualitativa de retorno químico'
    }
  },
  'plasticidad-vs-rigidez': {
    id: 'plasticidad-vs-rigidez',
    number: 6,
    verb: 'Adaptar',
    conceptTitle: 'Elasticidad conductual',
    iconName: 'Sliders',
    patternDescriptors: {
      0: 'Adaptación dinámica · Generalista',
      1: 'Estructura inalterable · Especialista'
    }
  }
};

/**
 * Convierte un Framework y sus secciones en una lista estructurada y limpia
 */
export function getParsedSections(sections: FrameworkSection[], frameworkId: string): ParsedFrameworkSection[] {
  const meta = FRAMEWORK_METAS[frameworkId];
  return sections.map((sec, idx) => {
    const { description, signal } = parseFrameworkSectionContent(sec.content);
    return {
      rawTitle: sec.title,
      cleanTitle: normalizeSectionTitle(sec.title),
      description,
      signal,
      index: idx,
      descriptor: meta?.patternDescriptors[idx] || undefined
    };
  });
}
