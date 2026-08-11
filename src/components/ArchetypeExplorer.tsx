import React, { useState } from 'react';
import { Archetype, Breed } from '../types';
import { Layers, Sparkles, ChevronRight, Dog, ArrowRight } from 'lucide-react';
import { getBreedImageUrl } from '../utils/breedImages';

interface ArchetypeExplorerProps {
  archetypes: Archetype[];
  breeds: Breed[];
  onSelectBreed: (breed: Breed) => void;
  selectedArchetypeFilter?: string;
}

export const ArchetypeExplorer: React.FC<ArchetypeExplorerProps> = ({
  archetypes,
  breeds,
  onSelectBreed,
  selectedArchetypeFilter
}) => {
  const [selectedArchId, setSelectedArchId] = useState<string>(
    selectedArchetypeFilter 
      ? (archetypes.find(a => a.title.toLowerCase().includes(selectedArchetypeFilter.toLowerCase()))?.id || archetypes[0].id)
      : archetypes[0].id
  );

  const currentArchetype = archetypes.find(a => a.id === selectedArchId) || archetypes[0];

  // Find breeds belonging to current archetype
  const matchingBreeds = breeds.filter(b => 
    b.archetypes.some(a => 
      a.toLowerCase() === currentArchetype.title.toLowerCase() ||
      currentArchetype.title.toLowerCase().includes(a.toLowerCase()) ||
      a.toLowerCase().includes(currentArchetype.title.toLowerCase())
    )
  );

  return (
    <div className="space-y-6">
      
      {/* Hero Banner for Archetypes */}
      <div className="bg-[#141414] text-white p-6 sm:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>14 Arquetipos Psicodiferenciales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Los 14 Arquetipos de la Personalidad Canina
          </h2>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            Cada raza canina posee una firma sistémica y un patrón de regulación emocional, motivación y respuesta al entorno. Explora los 14 perfiles psicológicos fundamentales.
          </p>
        </div>
      </div>

      {/* Grid Layout: Sidebar with 14 archetypes list + Main details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Archetype Selector List */}
        <div className="lg:col-span-4 bg-[#141414] border border-white/5 rounded-[2rem] p-4 shadow-xl space-y-1.5 max-h-[620px] overflow-y-auto">
          <h3 className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] px-3 py-2">
            Selecciona un Arquetipo
          </h3>
          {archetypes.map((arch) => {
            const isSelected = arch.id === currentArchetype.id;
            const count = breeds.filter(b => 
              b.archetypes.some(a => 
                a.toLowerCase() === arch.title.toLowerCase() ||
                arch.title.toLowerCase().includes(a.toLowerCase()) ||
                a.toLowerCase().includes(arch.title.toLowerCase())
              )
            ).length;

            return (
              <button
                key={arch.id}
                onClick={() => setSelectedArchId(arch.id)}
                className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-between gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/10'
                    : 'text-slate-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'bg-black text-amber-400' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    {arch.number}
                  </span>
                  <span className="truncate">{arch.title}</span>
                </div>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold flex-shrink-0 ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-neutral-900 text-neutral-400'
                }`}>
                  {count} razas
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Archetype Details */}
        <div className="lg:col-span-8 bg-[#141414] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Header */}
          <div className="border-b border-white/5 pb-5">
            <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-1">
              <span>Arquetipo #{currentArchetype.number}</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {currentArchetype.title}
            </h3>
            {currentArchetype.signature && (
              <p className="text-sm font-semibold text-purple-300 mt-1 italic">
                "{currentArchetype.signature}"
              </p>
            )}
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {currentArchetype.sections.map((sec, idx) => (
              <div key={idx} className="bg-neutral-900/90 border border-white/5 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>{sec.title}</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* Breeds with this Archetype */}
          <div className="pt-5 border-t border-white/5">
            <h4 className="text-sm font-bold text-white mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Dog className="w-4 h-4 text-amber-500" />
                <span>Razas asociadas a este arquetipo ({matchingBreeds.length})</span>
              </span>
            </h4>

            {matchingBreeds.length === 0 ? (
              <p className="text-xs text-neutral-500 italic bg-neutral-900 p-4 rounded-2xl border border-white/5">
                No hay razas asociadas directamente a esta etiqueta en el filtro actual.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingBreeds.map(breed => (
                  <div
                    key={breed.id}
                    onClick={() => onSelectBreed(breed)}
                    className="flex items-center gap-3 p-3 bg-neutral-900 hover:bg-neutral-800 border border-white/5 hover:border-amber-500/40 rounded-2xl cursor-pointer transition-all group"
                  >
                    <img
                      src={breed.imageUrl || getBreedImageUrl(breed.id)}
                      alt={`Fotografía de ${breed.breed}`}
                      className="w-12 h-12 aspect-square rounded-xl object-cover flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg";
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold text-white group-hover:text-amber-400 truncate">
                        {breed.breed}
                      </h5>
                      <p className="text-[11px] text-neutral-400 italic truncate">
                        "{breed.epithet}"
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
