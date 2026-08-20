# Atlas de Personalidades Caninas

> Base de Datos Etológica Oficial y Explorador Interactivo de Razas Caninas, Arquetipos Psicológicos y Marcos Comportamentales.

---

## 🎯 Propósito del Codebase

El **Atlas de Personalidades Caninas** es una aplicación web interactiva diseñada para la exploración, análisis comparativo y diagnóstico de afinidad temperamental de **122 razas caninas**, clasificadas a través de **14 arquetipos psicológicos**, **6 marcos etológicos fundamentales**, **3 etapas de vida** y **2 sesgos energéticos**.

A diferencia de catálogos caninos genéricos, el atlas estructura la personalidad y cognición canina a través de 5 dimensiones psicométricas normalizadas:
1. **Umbral de estimulación** (Sensibilidad y reactividad ambiental)
2. **Motivación intrínseca** (Impulso motor y disposición al trabajo/afecto)
3. **Resiliencia emocional** (Recuperación ante el estrés y frustración)
4. **Sociabilidad** (Afinidad intra e inter-específica)
5. **Independencia cognitiva** (Autonomía en la toma de decisiones vs. obediencia cooperativa)

---

## 📂 Archivos Críticos de la Arquitectura

| Archivo / Directorio | Función y Responsabilidad Crítica |
| :--- | :--- |
| `src/types.ts` | **Contrato de Datos y Tipado**: Define las interfaces TypeScript fundamentales: `Breed`, `BreedMetrics`, `Archetype`, `Framework`, `LifeStage`, `EnergyBias`, `FilterState` y `QuizAnswers`. |
| `src/data/canineData.ts` | **Fuente de Verdad del Modelo**: Base de datos etológica estructurada (`schemaVersion: 1`, 122 razas, 14 arquetipos, 6 marcos, facetas FCI y AKC, taxonomía de rasgos y motivaciones). |
| `src/App.tsx` | **Controlador Raíz y Gestor de Estado**: Manejo de rutas/vistas activas (`explore`, `quiz`, `compare`, `archetypes`, `frameworks`, `favorites`), persistencia en `localStorage` y cálculo reactivo de filtros. |
| `src/components/Header.tsx` | **Barra de Navegación y Acceso Rápido**: Encabezado responsivo con búsqueda instantánea, contadores de filtros activos, selector de módulos y menú móvil. |
| `src/components/FilterPanel.tsx` | **Motor de Filtrado Multidimensional**: Permite filtrar por grupos FCI/AKC, arquetipos, motivaciones, rasgos de carácter y niveles de métricas cognitivas. |
| `src/components/BreedCard.tsx` | **Tarjeta de Presentación de Raza**: Renderizado optimizado con imágenes, etiquetas de arquetipo, insignias de grupo y acciones de favoritos/comparar. |
| `src/components/BreedDetailModal.tsx` | **Dossier Etológico Extendido**: Desglose profundo de secciones etológicas, métricas cuantificadas, necesidades operativas y recomendaciones de manejo. |
| `src/components/AffinityQuiz.tsx` | **Test Algorítmico de Afinidad**: Cuestionario interactivo ponderado según experiencia del tutor, actividad diaria, espacio disponible, tiempo y prioridades. |
| `src/components/BreedCompare.tsx` | **Comparador Cara a Cara**: Matriz comparativa simultánea de hasta 3 razas sobre métricas, motivaciones, arquetipos y resumen de temperamento. |
| `src/components/ArchetypeExplorer.tsx` | **Explorador de 14 Arquetipos**: Visualización detallada de las 14 estructuras psicológicas caninas con su firma etológica y razas asociadas. |
| `src/components/FrameworksView.tsx` | **Explorador de Marcos Etológicos**: Navegación y análisis interactivo de los 6 marcos teóricos y operativos del comportamiento. |
| `src/utils/dataParser.ts` & `textUtils.ts` | **Normalización y Utilidades**: Algoritmos de parsing, limpieza diacrítica, agrupamiento de rasgos/motivaciones y extracción de niveles métricos. |

---

## 🚀 Objetivos del Sistema

1. **Rigor Etológico Sin Datos Inventados**: Toda la información proviene directamente del corpus canino canonicalizado (`canineData.ts`), garantizando terminología técnica precisa (umbrales, sesgos, arquetipos).
2. **Interactividad Fluida y Reactiva**: Búsqueda en tiempo real sobre miles de propiedades indexadas, filtros combinados y cambios de vista instantáneos sin recarga de página.
3. **Identidad Visual Funcional (Anti-Slop)**:
   - Fondo neutro ultra oscuro `#0A0A0A` con superficies estructuradas en `#141414`.
   - Acentos cromáticos de alta visibilidad en tonos ámbar (`#F59E0B`), esmeralda (`#10B981`) y púrpura (`#A855F7`).
   - Contraste estricto conforme a WCAG AA, tipografía legible y controles de línea única con protección de overflow.
4. **Persistencia Local**: Guardado automático de razas favoritas y selecciones de comparativa a través de `localStorage` del navegador.

---

## 🛠️ Tecnologías y Dependencias

- **Frontend**: React 19, TypeScript, Vite 6
- **Estilos**: Tailwind CSS 4 (`@tailwindcss/vite`)
- **Iconografía**: Lucide React
- **Gráficos y Visualización**: Recharts, Motion
- **Servidor de Producción**: Express / Node.js
