// Convert qualitative metric descriptions to normalized 1-5 numeric scale
export function parseMetricScore(val: string | undefined): number {
  if (!val) return 3;
  const s = val.toLowerCase();

  if (
    s.includes('extrema') ||
    s.includes('extremo') ||
    s.includes('muy alta') ||
    s.includes('muy alto') ||
    s.includes('máxima') ||
    s.includes('máximo')
  ) {
    return 5;
  }
  if (
    s.includes('media - alta') ||
    s.includes('media-alta') ||
    s.includes('medio - alto') ||
    s.includes('medio-alto') ||
    s.includes('moderadamente alta') ||
    s.includes('moderado - alto')
  ) {
    return 4.2;
  }
  if (s.includes('alta') || s.includes('alto') || s.includes('elevada') || s.includes('elevado')) {
    return 4;
  }
  if (
    s.includes('media - baja') ||
    s.includes('media-baja') ||
    s.includes('medio - bajo') ||
    s.includes('medio-bajo') ||
    s.includes('moderadamente baja') ||
    s.includes('selectiva') ||
    s.includes('reservad')
  ) {
    return 2.8;
  }
  if (
    s.includes('media') ||
    s.includes('medio') ||
    s.includes('moderada') ||
    s.includes('moderado') ||
    s.includes('neutra') ||
    s.includes('equilibrad')
  ) {
    return 3;
  }
  if (
    s.includes('muy baja') ||
    s.includes('muy bajo') ||
    s.includes('mínima') ||
    s.includes('mínimo')
  ) {
    return 1;
  }
  if (s.includes('baja') || s.includes('bajo')) {
    return 2;
  }
  return 3;
}

// Only complete, unqualified levels may receive a single indicator in the modal.
// Preserve intervals and contextual descriptions verbatim without assigning a score.
export function getUnambiguousMetricScore(value: string): number | null {
  if (!/^(muy (alta|alto|baja|bajo)|alta|alto|media|medio|baja|bajo|extrema|extremo)$/i.test(value.trim())) {
    return null;
  }
  return parseMetricScore(value.trim());
}
