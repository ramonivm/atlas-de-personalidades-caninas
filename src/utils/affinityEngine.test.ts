import assert from 'node:assert/strict';
import test from 'node:test';
import { canineData } from '../data/canineData';
import { affinityProfiles } from '../data/affinityProfiles';
import type { AffinityAnswers } from '../types';
import {
  calculateAffinity,
  rankAffinity,
  validateAffinityProfiles,
} from './affinityEngine';

const balancedAnswers: AffinityAnswers = {
  experience: 'some_experience',
  activity: 'moderate',
  mentalTime: 'moderate',
  aloneTime: 'short',
  environment: 'residential_house',
  household: ['dogs'],
  preferences: ['closeness', 'calm'],
};

test('the normalized catalog covers all 153 breeds with valid profiles', () => {
  assert.equal(Object.keys(affinityProfiles).length, 153);
  assert.deepEqual(validateAffinityProfiles(affinityProfiles), []);

  const breedIds = new Set(canineData.breeds.map(breed => breed.id));
  assert.deepEqual(
    Object.keys(affinityProfiles).filter(id => !breedIds.has(id)),
    [],
  );
});

test('all visible scores stay within the 1-10 scale', () => {
  const results = rankAffinity(affinityProfiles, balancedAnswers);
  assert.ok(results.every(result => result.displayScore >= 1 && result.displayScore <= 10));
});

test('the ranking does not depend on source object order', () => {
  const reversedProfiles = Object.fromEntries(Object.entries(affinityProfiles).reverse());
  const normal = rankAffinity(affinityProfiles, balancedAnswers).map(result => result.breedId);
  const reversed = rankAffinity(reversedProfiles, balancedAnswers).map(result => result.breedId);
  assert.deepEqual(reversed, normal);
});

test('the balanced scenario does not produce a mass tie', () => {
  const scores = rankAffinity(affinityProfiles, balancedAnswers).map(result => result.rawScore.toFixed(6));
  assert.ok(new Set(scores).size >= 100);
});

test('greater available capacity never penalizes a demanding breed', () => {
  const profile = affinityProfiles['border-collie'];
  const lowCapacity = calculateAffinity(profile, {
    ...balancedAnswers,
    activity: 'low',
    mentalTime: 'low',
  });
  const highCapacity = calculateAffinity(profile, {
    ...balancedAnswers,
    activity: 'very_high',
    mentalTime: 'very_high',
  });

  assert.ok(highCapacity.rawScore >= lowCapacity.rawScore);
});

test('a high-demand work scenario prioritizes high-drive working breeds', () => {
  const results = rankAffinity(affinityProfiles, {
    experience: 'advanced',
    activity: 'very_high',
    mentalTime: 'very_high',
    aloneTime: 'short',
    environment: 'rural',
    household: [],
    preferences: ['protection', 'sport_work'],
  });

  const leadingProfiles = results
    .slice(0, 8)
    .map(result => affinityProfiles[result.breedId]);

  assert.ok(leadingProfiles.every(profile => profile.workDrive >= 4));
  assert.ok(leadingProfiles.every(profile => profile.guardingTendency >= 4));
});

test('a calm urban novice profile keeps highly demanding breeds at the bottom', () => {
  const results = rankAffinity(affinityProfiles, {
    experience: 'first_dog',
    activity: 'low',
    mentalTime: 'moderate',
    aloneTime: 'short',
    environment: 'quiet_apartment',
    household: [],
    preferences: ['calm', 'closeness'],
  });

  const leadingProfile = affinityProfiles[results[0].breedId];
  const resultById = new Map(results.map(result => [result.breedId, result]));

  assert.ok(leadingProfile.exerciseDemand <= 2);
  assert.ok(leadingProfile.guidanceDemand <= 2);
  assert.ok(leadingProfile.urbanAdaptability >= 4);
  assert.ok(leadingProfile.calmness >= 4);
  assert.ok(leadingProfile.closenessNeed >= 4);

  for (const id of ['border-collie', 'australian-cattle-dog', 'belgian-malinois']) {
    assert.ok(resultById.get(id)!.rawScore < 0.5);
  }
});

test('a family profile prioritizes cooperative and socially open breeds', () => {
  const results = rankAffinity(affinityProfiles, {
    experience: 'some_experience',
    activity: 'moderate',
    mentalTime: 'moderate',
    aloneTime: 'short',
    environment: 'residential_house',
    household: ['young_children', 'dogs'],
    preferences: ['closeness', 'cooperation'],
  });

  const leadingProfiles = results
    .slice(0, 5)
    .map(result => affinityProfiles[result.breedId]);

  assert.ok(leadingProfiles.every(profile => profile.closenessNeed === 5));
  assert.ok(leadingProfiles.every(profile => profile.cooperativeness === 5));
  assert.ok(leadingProfiles.every(profile => profile.dogSociability >= 4));
  assert.ok(leadingProfiles.every(profile => profile.youngChildSuitability === 5));
});

test('small-animal households measurably penalize the strongest prey-drive profiles', () => {
  const answers: AffinityAnswers = {
    experience: 'some_experience',
    activity: 'moderate',
    mentalTime: 'moderate',
    aloneTime: 'short',
    environment: 'residential_house',
    household: ['cats_small_animals'],
    preferences: ['calm', 'cooperation'],
  };
  const representativeIds = ['azawakh', 'basenji', 'bloodhound', 'borzoi', 'greyhound'];

  for (const id of representativeIds) {
    const withSmallAnimals = calculateAffinity(affinityProfiles[id], answers);
    const withoutSmallAnimals = calculateAffinity(affinityProfiles[id], {
      ...answers,
      household: [],
    });

    assert.ok(withoutSmallAnimals.rawScore - withSmallAnimals.rawScore >= 0.2);
    assert.equal(withSmallAnimals.criticalMismatchCount, 1);
  }
});

test('long routine solitude plus independence favors autonomous, tolerant profiles', () => {
  const results = rankAffinity(affinityProfiles, {
    experience: 'experienced',
    activity: 'moderate',
    mentalTime: 'moderate',
    aloneTime: 'full_day',
    environment: 'residential_house',
    household: [],
    preferences: ['independence', 'calm'],
  });

  const leadingProfiles = results
    .slice(0, 6)
    .map(result => affinityProfiles[result.breedId]);

  assert.ok(leadingProfiles.every(profile => profile.independence >= 4));
  assert.ok(leadingProfiles.every(profile => profile.aloneTolerance >= 4));
});

test('changing only stated priorities changes the leading recommendations', () => {
  const calmResults = rankAffinity(affinityProfiles, balancedAnswers)
    .slice(0, 3)
    .map(result => result.breedId);
  const workResults = rankAffinity(affinityProfiles, {
    ...balancedAnswers,
    preferences: ['protection', 'sport_work'],
  })
    .slice(0, 3)
    .map(result => result.breedId);

  assert.notDeepEqual(workResults, calmResults);
});

test('critical household mismatches lower the score and are explained', () => {
  const profile = affinityProfiles.greyhound;
  const withoutSmallAnimals = calculateAffinity(profile, {
    ...balancedAnswers,
    household: [],
  });
  const withSmallAnimals = calculateAffinity(profile, {
    ...balancedAnswers,
    household: ['cats_small_animals'],
  });

  assert.ok(withSmallAnimals.rawScore < withoutSmallAnimals.rawScore);
  assert.ok(withSmallAnimals.considerations.some(text => text.includes('impulso de presa')));
});

test('the engine rejects more than two stated preferences', () => {
  assert.throws(
    () => calculateAffinity(affinityProfiles['golden-retriever'], {
      ...balancedAnswers,
      preferences: ['closeness', 'calm', 'cooperation'],
    }),
    /máximo de dos preferencias/,
  );
});
