import type { CanineDatabase } from '../types';
import { batch001 } from './breedAdditions/batch-001';
import { batch002 } from './breedAdditions/batch-002';
import { batch003 } from './breedAdditions/batch-003';

export const additionalBreeds: CanineDatabase['breeds'] = [
  ...batch001,
  ...batch002,
  ...batch003
];
