export interface BreedMetrics {
  umbral_de_estimulacion: string;
  motivacion_intrinseca: string;
  resiliencia_emocional: string;
  sociabilidad: string;
  independencia_cognitiva: string;
}

export interface BreedSection {
  title: string;
  sourceLevel: number;
  content: string;
}

export interface BreedImage {
  sourceReference: string | null;
  availableLocally: boolean;
}

export interface Breed {
  id: string;
  breed: string;
  title?: string;
  epithet: string;
  origen?: string;
  fciGroup: string;
  akcGroup: string | null;
  archetypes: string[];
  motivations: string[];
  traits: string[];
  sourceValues?: any;
  metrics: BreedMetrics;
  summary: string;
  sections: BreedSection[];
  image?: BreedImage;
  imageUrl?: string;
  createdAtSource?: string;
  updatedAtSource?: string;
  sourceFile?: string;
}

export interface ArchetypeSection {
  title: string;
  sourceLevel: number;
  content: string;
}

export interface Archetype {
  id: string;
  number: number;
  title: string;
  signature: string | null;
  summary: string;
  sections: ArchetypeSection[];
  sourceFile?: string;
}

export interface FrameworkSection {
  title: string;
  sourceLevel: number;
  content: string;
}

export interface Framework {
  id: string;
  number: number | null;
  title: string;
  signature: string | null;
  summary: string;
  sections: FrameworkSection[];
  sourceFile?: string;
}

export interface LifeStage {
  id: string;
  number: number | null;
  title: string;
  signature: string | null;
  summary: string;
  sections: any[];
}

export interface EnergyBias {
  id: string;
  number: number | null;
  title: string;
  signature: string | null;
  summary: string;
  sections: any[];
}

export interface Facets {
  fciGroups: string[];
  akcGroups: string[];
  archetypes: string[];
  motivations: string[];
  traits: string[];
  origins: string[];
}

export interface CanineDatabase {
  meta: {
    title: string;
    schemaVersion: number;
    generatedAt: string;
    source: string;
    counts: {
      breeds: number;
      archetypes: number;
      frameworks: number;
      lifeStages: number;
      energyBiases: number;
    };
  };
  facets: Facets;
  breeds: Breed[];
  archetypes: Archetype[];
  frameworks: Framework[];
  lifeStages: LifeStage[];
  energyBiases: EnergyBias[];
}

export interface FilterState {
  searchQuery: string;
  fciGroup: string;
  akcGroup: string;
  archetype: string;
  motivation: string;
  trait: string;
  origin: string;
  resilienceLevel: string;
  sociabilityLevel: string;
  independenceLevel: string;
  sortBy: 'name-asc' | 'name-desc' | 'fci' | 'traits-count';
}

export type PriorityTrait = 'affection' | 'protection' | 'independence' | 'trainability' | 'calm';

export interface QuizAnswers {
  experience: 'novice' | 'intermediate' | 'expert' | null;
  activity: 'low' | 'moderate' | 'high' | 'extreme' | null;
  space: 'apartment' | 'house_yard' | 'rural_nature' | null;
  timeWithDog: 'few_hours' | 'part_time' | 'full_time' | null;
  priorityTraits: PriorityTrait[];
}
