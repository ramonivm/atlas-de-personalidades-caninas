import assert from 'node:assert/strict';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { canineData } from '../data/canineData';
import { COUNTRIES_DATA } from '../data/originsData';
import { BreedOriginPanel } from '../components/BreedOriginPanel';
import { BreedOverviewMetrics } from '../components/BreedOverviewMetrics';
import { getBreedOrigin } from './breedOrigin';
import { getUnambiguousMetricScore, parseMetricScore } from './metricScore';

test('single levels use the existing Compare scale; intervals and context never receive a guessed score', () => {
  for (const [value, score] of Object.entries({ 'Muy Baja': 1, Bajo: 2, Media: 3, Alto: 4, 'Muy Alta': 5, Extrema: 5 })) {
    assert.equal(getUnambiguousMetricScore(value), score);
    assert.equal(getUnambiguousMetricScore(value), parseMetricScore(value));
  }
  for (const value of ['', 'Desconocido', 'Media–Alta', 'Baja-Media', 'Alta bajo Guía, Sensible al Trato Injusto', 'Muy Alto (Visual/Auditivo) / Muy Bajo (Olfativo)', 'Alto en Reposo, Nulo ante Presas']) {
    assert.equal(getUnambiguousMetricScore(value), null, value);
  }
});

test('origins use exact shared objects, preserve exceptional flags, and never infer geographic relationships', () => {
  for (const origin of ['Reino Unido', 'Bélgica / Francia', 'Alemania / Suiza', 'Tíbet', 'Oriente Medio']) {
    assert.equal(getBreedOrigin(origin).content, COUNTRIES_DATA[origin]);
    assert.equal(getBreedOrigin(origin).flag, COUNTRIES_DATA[origin].flag);
  }
  for (const origin of [undefined, 'Suecia', 'Estados Unidos (New Hampshire)', 'toString']) {
    assert.equal(getBreedOrigin(origin).content, undefined);
    assert.equal(getBreedOrigin(origin).flag, undefined);
  }
});

test('all catalogue breeds render the full original metric descriptions without scoring descriptive metrics', () => {
  const escape = (value: string) => renderToStaticMarkup(<>{value}</>);
  for (const breed of canineData.breeds) {
    const html = renderToStaticMarkup(<BreedOverviewMetrics metrics={breed.metrics} />);
    for (const value of Object.values(breed.metrics)) assert.ok(html.includes(escape(value)), `${breed.id}: ${value}`);
    const numericKeys = ['resiliencia_emocional', 'umbral_de_estimulacion', 'independencia_cognitiva'] as const;
    const count = numericKeys.filter(key => getUnambiguousMetricScore(breed.metrics[key]) !== null).length;
    assert.equal((html.match(/role="meter"/g) || []).length, count, breed.id);
  }
});

test('all catalogue origins render original editorial content or an explicit empty state', () => {
  const escape = (value: string) => renderToStaticMarkup(<>{value}</>);
  let missing = 0;
  for (const breed of canineData.breeds) {
    const { content } = getBreedOrigin(breed.origen);
    const html = renderToStaticMarkup(<BreedOriginPanel origin={breed.origen} />);
    assert.ok(html.includes(escape(breed.origen!)), breed.id);
    if (content) {
      for (const key of ['summary', 'historicalContext', 'climateAndGeography', 'dominantArchetype', 'primarySelectionGoal'] as const) {
        assert.ok(html.includes(escape(content[key])), `${breed.id}: ${key}`);
      }
    } else {
      missing++;
      assert.ok(html.includes('La información de este origen no está disponible todavía.'));
      assert.ok(!html.includes('Historia y presión de selección'));
      assert.ok(!html.includes(COUNTRIES_DATA['Reino Unido'].summary));
    }
  }
  assert.equal(missing, 10);
});
