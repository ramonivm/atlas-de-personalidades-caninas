import type { CanineDatabase } from '../types';
import { canineData as baseCanineData } from './canineData.base';
import { additionalBreeds } from './additionalBreeds';

export const canineData: CanineDatabase = {
  ...baseCanineData,
  meta: {
    ...baseCanineData.meta,
    counts: {
      ...baseCanineData.meta.counts,
      breeds: baseCanineData.breeds.length + additionalBreeds.length,
    },
  },
  breeds: [...baseCanineData.breeds, ...additionalBreeds],
};
