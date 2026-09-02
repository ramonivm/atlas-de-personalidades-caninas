import type {
  AffinityAnswers,
  AffinityLevel,
  AffinityProfile,
  AffinityResult,
} from '../types';

interface DimensionEvaluation {
  label: string;
  loss: number;
  weight: number;
}

interface CriticalMismatch {
  label: string;
  penalty: number;
}

const experienceCapacity = {
  first_dog: 1,
  some_experience: 3,
  experienced: 4,
  advanced: 5,
} as const;

const activityCapacity = {
  low: 1,
  moderate: 3,
  high: 4,
  very_high: 5,
} as const;

const mentalCapacity = {
  low: 1,
  moderate: 3,
  high: 4,
  very_high: 5,
} as const;

const aloneRequirement = {
  rarely: 1,
  short: 2,
  half_day: 4,
  full_day: 5,
} as const;

const recoveryRequirement = {
  first_dog: 4,
  some_experience: 3,
  experienced: 2,
  advanced: 1,
} as const;

const environmentNeeds = {
  quiet_apartment: { urban: 5, vocality: 1, sensitivity: 4 },
  urban_flexible: { urban: 4, vocality: 3, sensitivity: 3 },
  residential_house: { urban: 3, vocality: 4, sensitivity: 4 },
  rural: { urban: 1, vocality: 5, sensitivity: 5 },
} as const;

const levelKeys: Array<keyof AffinityProfile> = [
  'exerciseDemand',
  'mentalStimulationDemand',
  'guidanceDemand',
  'stimulusSensitivity',
  'recoveryCapacity',
  'aloneTolerance',
  'urbanAdaptability',
  'vocality',
  'closenessNeed',
  'cooperativeness',
  'independence',
  'guardingTendency',
  'preyDrive',
  'humanSociability',
  'dogSociability',
  'youngChildSuitability',
  'calmness',
  'workDrive',
];

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const squaredGap = (gap: number) => Math.pow(Math.max(0, gap) / 4, 2);

/** Penalizes only when a breed's demand exceeds the user's capacity. */
const capacityLoss = (demand: number, capacity: number) => squaredGap(demand - capacity);

/** Penalizes only when the required tolerance exceeds the breed's capacity. */
const toleranceLoss = (required: number, tolerance: number) => squaredGap(required - tolerance);

/** Measures distance from a stated preference target. */
const preferenceLoss = (value: number, target = 5) => Math.pow((value - target) / 4, 2);

const unique = (values: string[]) => [...new Set(values)];

/**
 * Keeps the public 1-10 scale honest: very high notes require an unusually
 * strong internal fit, while the continuous raw score still orders ties.
 */
const toDisplayScore = (rawScore: number) =>
  Math.max(1, Math.min(10, Math.round(1 + 9 * Math.pow(rawScore, 2.5))));

export function validateAffinityProfiles(profiles: Record<string, AffinityProfile>): string[] {
  const errors: string[] = [];

  for (const [id, profile] of Object.entries(profiles)) {
    if (profile.breedId !== id) {
      errors.push(`${id}: breedId no coincide con la clave del perfil.`);
    }

    for (const key of levelKeys) {
      const value = profile[key];
      if (!Number.isInteger(value) || Number(value) < 1 || Number(value) > 5) {
        errors.push(`${id}: ${String(key)} debe ser un entero entre 1 y 5.`);
      }
    }
  }

  return errors;
}

export function calculateAffinity(
  profile: AffinityProfile,
  answers: AffinityAnswers,
): AffinityResult {
  if (answers.preferences.length > 2) {
    throw new Error('El Test de Afinidad admite un máximo de dos preferencias.');
  }

  const dimensions: DimensionEvaluation[] = [];
  const criticalMismatches: CriticalMismatch[] = [];
  const environment = environmentNeeds[answers.environment];

  const addDimension = (label: string, loss: number, weight: number) => {
    dimensions.push({ label, loss: clamp01(loss), weight });
  };

  addDimension(
    'La actividad física disponible cubre su demanda',
    capacityLoss(profile.exerciseDemand, activityCapacity[answers.activity]),
    1.4,
  );
  addDimension(
    'El tiempo de estimulación mental es adecuado',
    capacityLoss(profile.mentalStimulationDemand, mentalCapacity[answers.mentalTime]),
    1.3,
  );
  addDimension(
    'La experiencia de manejo es suficiente',
    capacityLoss(profile.guidanceDemand, experienceCapacity[answers.experience]),
    1.25,
  );
  addDimension(
    'Su capacidad de recuperación facilita la convivencia',
    toleranceLoss(recoveryRequirement[answers.experience], profile.recoveryCapacity),
    0.7,
  );
  addDimension(
    'Tolera el tiempo habitual en soledad',
    toleranceLoss(aloneRequirement[answers.aloneTime], profile.aloneTolerance),
    1.3,
  );
  addDimension(
    'Puede adaptarse al entorno de vivienda',
    toleranceLoss(environment.urban, profile.urbanAdaptability),
    0.85,
  );
  addDimension(
    'Su vocalidad es compatible con el entorno',
    capacityLoss(profile.vocality, environment.vocality),
    0.8,
  );
  addDimension(
    'Su sensibilidad encaja con la estimulación ambiental',
    capacityLoss(profile.stimulusSensitivity, environment.sensitivity),
    0.75,
  );

  if (answers.household.includes('young_children')) {
    addDimension(
      'Tiene buena disposición para convivir con niños pequeños',
      preferenceLoss(profile.youngChildSuitability),
      1.2,
    );
  }
  if (answers.household.includes('dogs')) {
    addDimension(
      'Su sociabilidad favorece la convivencia con otros perros',
      preferenceLoss(profile.dogSociability),
      1.2,
    );
  }
  if (answers.household.includes('cats_small_animals')) {
    addDimension(
      'Su impulso de presa es compatible con animales pequeños',
      preferenceLoss(6 - profile.preyDrive),
      1.25,
    );
  }

  for (const preference of answers.preferences) {
    if (preference === 'closeness') {
      addDimension('Busca una relación cercana', preferenceLoss(profile.closenessNeed), 2);
    } else if (preference === 'calm') {
      addDimension('Ofrece calma en la convivencia', preferenceLoss(profile.calmness), 2);
    } else if (preference === 'cooperation') {
      addDimension('Muestra disposición a cooperar', preferenceLoss(profile.cooperativeness), 2);
    } else if (preference === 'independence') {
      addDimension('Posee autonomía en la vida cotidiana', preferenceLoss(profile.independence), 2);
    } else if (preference === 'protection') {
      addDimension('Tiene una tendencia protectora marcada', preferenceLoss(profile.guardingTendency), 2);
    } else if (preference === 'sport_work') {
      addDimension(
        'Tiene aptitudes para deporte o trabajo',
        preferenceLoss(profile.workDrive),
        2.1,
      );
    }
  }

  if (answers.experience === 'first_dog' && profile.guidanceDemand >= 5) {
    criticalMismatches.push({
      label: 'Requiere un manejo considerablemente más avanzado',
      penalty: 0.18,
    });
  }
  if (answers.aloneTime === 'full_day' && profile.aloneTolerance <= 2) {
    criticalMismatches.push({
      label: 'Puede llevar mal una jornada completa en soledad',
      penalty: 0.24,
    });
  } else if (answers.aloneTime === 'full_day' && profile.aloneTolerance === 3) {
    criticalMismatches.push({
      label: 'Una jornada completa en soledad puede superar su tolerancia habitual',
      penalty: 0.12,
    });
  } else if (answers.aloneTime === 'half_day' && profile.aloneTolerance === 1) {
    criticalMismatches.push({
      label: 'Puede llevar mal varias horas habituales en soledad',
      penalty: 0.12,
    });
  }
  if (answers.household.includes('cats_small_animals') && profile.preyDrive >= 5) {
    criticalMismatches.push({
      label: 'Su impulso de presa exige especial cautela con animales pequeños',
      penalty: 0.24,
    });
  } else if (answers.household.includes('cats_small_animals') && profile.preyDrive === 4) {
    criticalMismatches.push({
      label: 'Su impulso de presa puede dificultar la convivencia con animales pequeños',
      penalty: 0.1,
    });
  }
  if (answers.household.includes('young_children') && profile.youngChildSuitability <= 2) {
    criticalMismatches.push({
      label: 'La convivencia con niños pequeños requiere supervisión y manejo cuidadoso',
      penalty: 0.16,
    });
  }
  if (answers.environment === 'quiet_apartment' && profile.vocality >= 5) {
    criticalMismatches.push({
      label: 'Su vocalidad puede ser difícil de manejar en un apartamento silencioso',
      penalty: 0.16,
    });
  }

  const totalWeight = dimensions.reduce((sum, dimension) => sum + dimension.weight, 0);
  const weightedLoss = dimensions.reduce(
    (sum, dimension) => sum + dimension.loss * dimension.weight,
    0,
  );
  const softScore = clamp01(1 - weightedLoss / totalWeight);
  const criticalPenalty = Math.min(
    0.55,
    criticalMismatches.reduce((sum, mismatch) => sum + mismatch.penalty, 0),
  );
  const rawScore = clamp01(softScore * (1 - criticalPenalty));

  const strengths = dimensions
    .filter(dimension => dimension.loss <= 0.0625)
    .sort((a, b) => b.weight * (1 - b.loss) - a.weight * (1 - a.loss))
    .map(dimension => dimension.label)
    .slice(0, 3);

  const softConsiderations = dimensions
    .filter(dimension => dimension.loss >= 0.25)
    .sort((a, b) => b.loss * b.weight - a.loss * a.weight)
    .map(dimension => dimension.label.replace(/^./, first => first.toLowerCase()));

  return {
    breedId: profile.breedId,
    rawScore,
    displayScore: toDisplayScore(rawScore),
    strengths: unique(strengths),
    considerations: unique([
      ...criticalMismatches.map(mismatch => mismatch.label),
      ...softConsiderations,
    ]).slice(0, 3),
    criticalMismatchCount: criticalMismatches.length,
    maximumLoss: Math.max(...dimensions.map(dimension => dimension.loss), 0),
  };
}

export function rankAffinity(
  profiles: Record<string, AffinityProfile>,
  answers: AffinityAnswers,
): AffinityResult[] {
  return Object.values(profiles)
    .map(profile => calculateAffinity(profile, answers))
    .sort((a, b) =>
      b.rawScore - a.rawScore ||
      a.criticalMismatchCount - b.criticalMismatchCount ||
      a.maximumLoss - b.maximumLoss ||
      a.breedId.localeCompare(b.breedId),
    );
}
