/**
 * Data Parser Utility for Canine Breed Metrics
 * Sanitizes and extracts base level categories from raw metric strings.
 */

/**
 * Parses raw metric strings (e.g. "Media-Alta (Frente a la adversidad)", "Alta – Entusiasta", "Media-Baja, Selectiva")
 * cuts text right before any short hyphen (-), long hyphen (–), comma (,), or parenthesis ((),
 * trims whitespace, and preserves compound categories like "Media-Baja" or "Media-Alta".
 *
 * @param value Raw metric string from database
 * @returns Sanitized base category string (e.g. "Alta", "Media-Baja", "Media-Alta", "Muy Alta")
 */
export function parseMetricLevel(value: string | null | undefined): string {
  if (!value) return '';
  let str = value.trim();

  // 1. Direct match for standard level category prefixes at the beginning of the string
  const categoryMatch = str.match(/^(Muy\s+Alta|Muy\s+Baja|Media[-–]Alta|Media[-–]Baja|Baja[-–]Media|Alta[-–]Media|Alta|Media|Baja|Extrema)/i);
  if (categoryMatch) {
    const raw = categoryMatch[1].replace(/–/g, '-').toLowerCase();
    if (raw === 'muy alta') return 'Muy Alta';
    if (raw === 'muy baja') return 'Muy Baja';
    if (raw === 'media-alta' || raw === 'alta-media') return 'Media-Alta';
    if (raw === 'media-baja' || raw === 'baja-media') return 'Media-Baja';
    if (raw === 'alta') return 'Alta';
    if (raw === 'media') return 'Media';
    if (raw === 'baja') return 'Baja';
    if (raw === 'extrema') return 'Extrema';
  }

  // 2. Keyword Mapping for Qualitative Descriptions
  const lowerStr = str.toLowerCase();
  const normalizedStr = lowerStr.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const containsKeyword = (keywords: string[]) => {
    return keywords.some(k => {
      const normK = k.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return lowerStr.includes(k) || normalizedStr.includes(normK);
    });
  };

  // Rule 1: "excelente", "excepcional", "extraordinaria", "universalmente", "amoroso" -> "Muy Alta"
  if (containsKeyword(['excelente', 'excepcional', 'extraordinaria', 'universalmente', 'amoroso'])) {
    return 'Muy Alta';
  }

  // Rule 2: "afable", "afectuoso", "alegre", "amable", "amistoso", "cariñoso", "entusiasta", "sociable", "abierta", "buena con" -> "Alta"
  if (containsKeyword(['afable', 'afectuoso', 'alegre', 'alegré', 'amable', 'amistoso', 'cariñoso', 'entusiasta', 'sociable', 'abierta', 'buena con', 'amigable', 'extrovertido'])) {
    return 'Alta';
  }

  // Rule 3: "atento", "educada", "selectiva", "tolerante", "cauteloso", "pacífico", "firme" -> "Media"
  if (containsKeyword(['atento', 'educada', 'selectiva', 'tolerante', 'cauteloso', 'pacífico', 'pacifico', 'pacifica', 'pacífica', 'firme', 'alerta'])) {
    return 'Media';
  }

  // Rule 4: "distante", "reservado", "desconfiado", "indiferente" -> "Baja"
  if (containsKeyword(['distante', 'reservado', 'desconfiado', 'indiferente', 'orientada'])) {
    return 'Baja';
  }

  // Rule 5: "cero tolerancia", "inflexible", "cerrada", "intolerante" -> "Muy Baja"
  if (containsKeyword(['cero tolerancia', 'inflexible', 'cerrada', 'intolerante'])) {
    return 'Muy Baja';
  }

  // 3. Protect compound levels if present elsewhere (e.g., "Media-Baja")
  str = str.replace(/(Media|Baja|Alta)[-–](Baja|Alta|Media)/gi, '$1__HYPHEN__$2');

  // 4. Cut text before short hyphen (-), long hyphen (–), comma (,), parenthesis ((), or slash (/)
  let base = str.split(/[-–,\(\/]/)[0].trim();

  // 5. Restore compound hyphen
  base = base.replace(/__HYPHEN__/g, '-');

  return base;
}

/**
 * Motivation Grouping Mapping
 */
const motivationMapEntries: [string[], string][] = [
  [['Afecto', 'Cercanía', 'Contacto físico', 'Presencia humana'], 'Afecto y Cercanía'],
  [['Alimento', 'Comida', 'Recompensa'], 'Alimentación'],
  [['Aprobación social', 'Reconocimiento', 'Recompensa Social'], 'Aprobación y Reconocimiento'],
  [['Autonomía', 'Libertad'], 'Autonomía y Libertad'],
  [['Caza', 'Caza visual', 'Captura'], 'Caza y Captura'],
  [['Comodidad', 'Confort', 'Reposo', 'Serenidad'], 'Confort y Reposo'],
  [['Control', 'Control de espacio', 'Espacio'], 'Control y Espacio'],
  [['Colaboración', 'Cooperación', 'Cooperación social', 'Trabajo conjunto'], 'Cooperación y Trabajo en Equipo'],
  [['Desafío', 'Desafío físico', 'Desafío mental', 'Resolución', 'Resolución de problemas'], 'Desafío y Resolución'],
  [['Estabilidad', 'Coherencia', 'Orden'], 'Estabilidad y Orden'],
  [['Éxito', 'Logo', 'Logro', 'Eficacia'], 'Logro y Éxito'],
  [['Movimiento', 'Movimiento breve'], 'Movimiento Físico'],
  [['Acompañamiento', 'Bienestar familiar', 'Familia', 'Pertenencia', 'Vínculo', 'Seguridad del vínculo'], 'Pertenencia Familiar'],
  [['Custodia', 'Protección', 'Protección territorial', 'Territorialidad'], 'Protección y Custodia'],
  [['Rastreo', 'Olfato', 'Seguimiento', 'Exploración'], 'Rastreo y Olfato'],
  [['Tarea', 'Trabajo', 'Utilidad', 'Propósito'], 'Trabajo y Tarea']
];

/**
 * Trait Grouping Mapping
 */
const traitMapEntries: [string[], string][] = [
  [['Afecto explosivo', 'Calidez', 'Dulzura', 'Ternura'], 'Afecto y Ternura'],
  [['Alegría', 'Entusiasmo', 'Expresividad', 'Humor', 'Optimismo'], 'Alegría y Entusiasmo'],
  [['Amabilidad', 'Cortesía', 'Gentileza', 'Gregarismo', 'Sociabilidad'], 'Amabilidad y Sociabilidad'],
  [['Afiliación', 'Apego', 'Compañía', 'Dependencia', 'Lealtad dependiente', 'Sensibilidad'], 'Apego y Sensibilidad'],
  [['Alerta', 'Hipervigilancia', 'Percepción', 'Vigilancia'], 'Atención y Vigilancia'],
  [['Calma', 'Contemplación', 'Contención', 'Fuerza contenida', 'Serenidad', 'Templanza'], 'Calma y Serenidad'],
  [['Arrogancia', 'Dignidad', 'Magnanimidad', 'Nobleza', 'Orgullo', 'Soberanía'], 'Dignidad y Orgullo'],
  [['Energía', 'Vitalidad', 'Vivacidad'], 'Energía y Vitalidad'],
  [['Autocontrol', 'Estabilidad', 'Estoicismo', 'Resiliencia', 'Seguridad'], 'Estabilidad y Equilibrio'],
  [['Concentración', 'Criterio', 'Discernimiento', 'Enfoque', 'Foco', 'Juicio', 'Reflexividad'], 'Foco y Concentración'],
  [['Hiperactividad', 'Impulsividad', 'Inquietud', 'Nerviosismo', 'Reactividad'], 'Impulsividad y Reactividad'],
  [['Autonomía', 'Autosuficiencia', 'Desapego', 'Distancia', 'Independencia'], 'Independencia y Autonomía'],
  [['Astucia', 'Ingenio', 'Inteligencia', 'Intuición', 'Perspicacia'], 'Inteligencia y Astucia'],
  [['Devoción', 'Entrega', 'Fidelidad', 'Lealtad'], 'Lealtad y Devoción'],
  [['Cuidado', 'Disponibilidad', 'Protección'], 'Protección y Cuidado'],
  [['Adaptabilidad', 'Aspereza', 'Eficiencia', 'Instrumentalidad', 'Rusticidad', 'Sobriedad', 'Versatilidad'], 'Rusticidad y Adaptabilidad'],
  [['Determinación', 'Firmeza', 'Obstinación', 'Persistencia', 'Tenacidad', 'Terquedad'], 'Tenacidad y Persistencia'],
  [['Audacia', 'Coraje', 'Fiereza', 'Intrepidez', 'Valentía'], 'Valentía y Coraje']
];

function normalizeLookupKey(s: string): string {
  if (!s) return '';
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

const motivationLookup = new Map<string, string>();
motivationMapEntries.forEach(([keys, group]) => {
  keys.forEach(k => motivationLookup.set(normalizeLookupKey(k), group));
});

const traitLookup = new Map<string, string>();
traitMapEntries.forEach(([keys, group]) => {
  keys.forEach(k => traitLookup.set(normalizeLookupKey(k), group));
});

/**
 * Maps raw motivation string to umbrella group or returns original
 */
export function mapMotivationGroup(value: string | null | undefined): string {
  if (!value) return '';
  const key = normalizeLookupKey(value);
  return motivationLookup.get(key) || value.trim();
}

/**
 * Maps raw trait string to umbrella group or returns original
 */
export function mapTraitGroup(value: string | null | undefined): string {
  if (!value) return '';
  const key = normalizeLookupKey(value);
  return traitLookup.get(key) || value.trim();
}

