import { COUNTRIES_DATA } from '../data/originsData';

/** Exact catalogue relationship. Never infer a parent country or fabricate content. */
export function getBreedOrigin(origin: string | undefined) {
  const content = origin && Object.hasOwn(COUNTRIES_DATA, origin) ? COUNTRIES_DATA[origin] : undefined;
  return {
    name: origin || 'Origen no disponible',
    flag: content?.flag,
    content,
  };
}
