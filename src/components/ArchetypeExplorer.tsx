import React, { useState, useEffect } from 'react';
import { Archetype } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Brain, 
  List, 
  AlertTriangle, 
  ChevronRight
} from 'lucide-react';

interface ArchetypeExplorerProps {
  archetypes: Archetype[];
  breeds?: any[]; 
  onSelectBreed?: (breed: any) => void;
  selectedArchetypeFilter?: string;
}

const archetypeImageMap: Record<string, string> = {
  "Apego Extremo (Fusión Emocional)": "apego_extremo",
  "Apego Frágil Afiliativo": "apego_fragil_afiliativo",
  "Autonomía Primitiva / Dignidad": "autonomia_primitiva",
  "Contención Pesada / Calma Profunda": "contencion_pesada",
  "Cooperación Humana Clásica": "cooperacion_humana_clasica",
  "Guardia Ancestral de Tiempo Largo": "guardia_ancestral_de_tiempo_largo",
  "Hiperreactividad Ornamental": "hiperreactividad_ornamental",
  "Independencia Cazadora Solitaria": "independencia_cazadora_solitaria",
  "Inteligencia Funcional Obsesiva": "inteligencia_funcional_obsesiva",
  "Lebreles (Desapego y Movimiento)": "lebreles_desapego_movimiento",
  "Protección Estructurada Moderna": "proteccion_estructurada_moderna",
  "Protección Territorial Absoluta": "proteccion_territorial_absoluta",
  "Sensorialidad Olfativa Profunda": "sensorialidad_olfativa_profunda",
  "Terriers Instrumentales": "terriers_instrumentales"
};

export const ArchetypeExplorer: React.FC<ArchetypeExplorerProps> = ({ 
  archetypes,
  selectedArchetypeFilter 
}) => {
  const initialArchetype = archetypes.find(a => a.title === selectedArchetypeFilter) || archetypes[0];
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype>(initialArchetype);

  useEffect(() => {
    if (selectedArchetypeFilter) {
      const found = archetypes.find(a => a.title === selectedArchetypeFilter);
      if (found) setSelectedArchetype(found);
    }
  }, [selectedArchetypeFilter, archetypes]);

  if (!archetypes || archetypes.length === 0) return null;

  const dinamica = selectedArchetype.sections[0];
  const rasgos = selectedArchetype.sections[1];
  const riesgos = selectedArchetype.sections[2];

  const imageName = archetypeImageMap[selectedArchetype.title];
  const imagePath = imageName ? `/images/arquetipos/${imageName}.webp` : '';

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      
      <nav 
        aria-label="Navegación de Arquetipos"
        className="w-full lg:w-72 shrink-0 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:sticky lg:top-24 pb-4 lg:pb-0 custom-scrollbar"
      >
        <div className="hidden lg:flex items-center gap-2 mb-4 px-2">
          <Layers className="w-5 h-5 text-amber-500"/>
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">
            14 Arquetipos
          </h3>
        </div>

        {archetypes.map((arch) => {
          const isSelected = selectedArchetype.id === arch.id;
          return (
            <button
              key={arch.id}
              onClick={() => setSelectedArchetype(arch)}
              className={`flex-shrink-0 lg:w-full flex items-center justify-between text-left px-4 py-3 sm:py-4 rounded-2xl transition-all cursor-pointer border ${
                isSelected 
                  ? 'bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/10 font-bold' 
                  : 'bg-[#141414] text-slate-400 border-white/5 hover:bg-neutral-800 hover:text-white font-medium'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-neutral-800 text-neutral-500'
                }`}>
                  #{arch.number}
                </span>
                <span className="text-xs sm:text-sm whitespace-nowrap lg:whitespace-normal line-clamp-2">
                  {arch.title}
                </span>
              </div>
              <ChevronRight className={`hidden lg:block w-4 h-4 shrink-0 transition-transform ${
                isSelected ? 'translate-x-1' : 'opacity-0 -translate-x-2'
              }`}/>
            </button>
          );
        })}
      </nav>

      <main className="flex-1 min-w-0 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedArchetype.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            
            <div className="flex flex-col-reverse lg:flex-row gap-6">
              
              <div className="flex-1 bg-[#141414] border border-white/5 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                  Arquetipo #{selectedArchetype.number}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
                  {selectedArchetype.title}
                </h1>
                {selectedArchetype.signature && (
                  <p className="text-lg sm:text-xl text-purple-400 font-serif italic text-balance">
                    "{selectedArchetype.signature}"
                  </p>
                )}
              </div>

              <div className="w-full lg:w-[40%] aspect-square lg:aspect-auto lg:min-h-[320px] bg-[#141414] border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden shadow-inner shrink-0 group">
                {imagePath ? (
                  <img 
                    src={imagePath} 
                    alt={`Ilustración del arquetipo ${selectedArchetype.title}`}
                    className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                ) : (
                  <div className="text-center px-6 z-10">
                    <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest block">
                      Imagen no disponible
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent pointer-events-none" />
              </div>

            </div>

            {/* Fila intermedia: Dinámica Psicológica (flex-1) y Rasgos Clave (40%) con la misma altura */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
              
              {dinamica && (
                <div className="flex-1 bg-[#141414] border border-white/5 rounded-[2.5rem] p-8 sm:p-10 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                      <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <Brain className="w-5 h-5 text-blue-400"/>
                      </div>
                      <h2 className="text-xl font-bold text-white tracking-tight">
                        {dinamica.title || 'Dinámica Psicológica'}
                      </h2>
                    </div>
                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-[15px] whitespace-pre-line">
                      {dinamica.content}
                    </div>
                  </div>
                </div>
              )}

              {rasgos && (
                <div className="w-full lg:w-[40%] shrink-0 bg-[#141414] border border-white/5 rounded-[2.5rem] p-8 sm:p-10 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                      <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                        <List className="w-5 h-5 text-emerald-400"/>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {rasgos.title || 'Rasgos Clave'}
                      </h3>
                    </div>
                    <div className="prose prose-invert max-w-none text-slate-300 text-[15px] leading-relaxed whitespace-pre-line">
                      {rasgos.content}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Fila inferior: Riesgos ocupando el ancho total (cubriendo ambos contenedores superiores) */}
            {riesgos && (
              <div className="w-full bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem] p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="flex items-center gap-3 mb-6 border-b border-rose-500/20 pb-4">
                  <div className="p-2.5 bg-rose-500/20 rounded-xl border border-rose-500/30">
                    <AlertTriangle className="w-5 h-5 text-rose-400"/>
                  </div>
                  <h3 className="text-xl font-bold text-rose-300 tracking-tight">
                    {riesgos.title || 'Riesgos'}
                  </h3>
                </div>
                <div className="prose prose-invert max-w-none text-rose-200/90 text-[15px] leading-relaxed whitespace-pre-line">
                  {riesgos.content}
                </div>
              </div>
            )}

            {selectedArchetype.sections.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {selectedArchetype.sections.slice(3).map((section, idx) => (
                  <div key={idx} className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-8">
                    <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
                    <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

    </div>
  );
};
