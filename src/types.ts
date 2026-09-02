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

export type AffinityLevel = 1 | 2 | 3 | 4 | 5;

export type AffinitySize = 'small' | 'medium' | 'large' | 'giant' | 'varies';

export type AffinityExperience = 'first_dog' | 'some_experience' | 'experienced' | 'advanced';
export type AffinityActivity = 'low' | 'moderate' | 'high' | 'very_high';
export type AffinityMentalTime = 'low' | 'moderate' | 'high' | 'very_high';
export type AffinityAloneTime = 'rarely' | 'short' | 'half_day' | 'full_day';
export type AffinityEnvironment = 'quiet_apartment' | 'urban_flexible' | 'residential_house' | 'rural';
export type AffinityHousehold = 'young_children' | 'dogs' | 'cats_small_animals';
export type AffinityPreference =
  | 'closeness'
  | 'calm'
  | 'cooperation'
  | 'independence'
  | 'protection'
  | 'sport_work';

export interface AffinityAnswers {
  experience: AffinityExperience;
  activity: AffinityActivity;
  mentalTime: AffinityMentalTime;
  aloneTime: AffinityAloneTime;
  environment: AffinityEnvironment;
  household: AffinityHousehold[];
  preferences: AffinityPreference[];
}

export interface AffinityProfile {
  breedId: string;
  exerciseDemand: AffinityLevel;
  mentalStimulationDemand: AffinityLevel;
  guidanceDemand: AffinityLevel;
  stimulusSensitivity: AffinityLevel;
  recoveryCapacity: AffinityLevel;
  aloneTolerance: AffinityLevel;
  urbanAdaptability: AffinityLevel;
  vocality: AffinityLevel;
  closenessNeed: AffinityLevel;
  cooperativeness: AffinityLevel;
  independence: AffinityLevel;
  guardingTendency: AffinityLevel;
  preyDrive: AffinityLevel;
  humanSociability: AffinityLevel;
  dogSociability: AffinityLevel;
  youngChildSuitability: AffinityLevel;
  calmness: AffinityLevel;
  workDrive: AffinityLevel;
  size: AffinitySize;
  confidence: 'low' | 'medium' | 'high';
}

export interface AffinityResult {
  breedId: string;
  rawScore: number;
  displayScore: number;
  strengths: string[];
  considerations: string[];
  criticalMismatchCount: number;
  maximumLoss: number;
}
