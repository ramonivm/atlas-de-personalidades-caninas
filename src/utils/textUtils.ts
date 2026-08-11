/**
 * Normaliza un texto convirtiéndolo a minúsculas, eliminando espacios extra
 * y removiendo diacríticos/tildes mediante NFD unicode decomposition.
 * Ejemplo: "Pinscher Miniatura" -> "pinscher miniatura"
 *          "PÍNSCHER MINIÁTURA" -> "pinscher miniatura"
 */
export function normalizeText(str: string | null | undefined): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}
