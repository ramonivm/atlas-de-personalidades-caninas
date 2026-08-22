import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import { CountryOriginData } from '../data/originsData';
import { Breed } from '../types';
import { 
  RotateCcw, 
  Plus, 
  Minus, 
  Layers, 
  Compass, 
  Maximize2, 
  Minimize2,
  Sparkles,
  MapPin
} from 'lucide-react';

interface RealWorldMapProps {
  countries: (CountryOriginData & { breeds: Breed[]; count: number })[];
  selectedCountryName: string;
  onSelectCountry: (countryName: string) => void;
  hoveredCountryName: string | null;
  onHoverCountry: (countryName: string | null) => void;
}

type MapLayerStyle = 'dark' | 'satellite' | 'voyager';

const MAP_LAYERS: Record<MapLayerStyle, { url: string; attribution: string; maxZoom: number; name: string }> = {
  dark: {
    name: 'Obsidian Dark',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19
  },
  satellite: {
    name: 'Satélite HD',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18
  },
  voyager: {
    name: 'Cartografía Urbana',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19
  }
};

export const RealWorldMap: React.FC<RealWorldMapProps> = ({
  countries,
  selectedCountryName,
  onSelectCountry,
  hoveredCountryName,
  onHoverCountry
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const [activeLayer, setActiveLayer] = useState<MapLayerStyle>('dark');
  const [showLayerMenu, setShowLayerMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Initialize Map Once
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Create Leaflet Map centered on globe overview
    const map = L.map(mapContainerRef.current, {
      center: [28, 15],
      zoom: 2.3,
      minZoom: 1.8,
      maxZoom: 10,
      zoomControl: false,
      attributionControl: false,
      worldCopyJump: true
    });

    // Add Tile Layer
    const layerConfig = MAP_LAYERS[activeLayer];
    const tileLayer = L.tileLayer(layerConfig.url, {
      attribution: layerConfig.attribution,
      maxZoom: layerConfig.maxZoom,
      subdomains: 'abcd'
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Add Attribution manually at bottom right
    L.control.attribution({ position: 'bottomright', prefix: false })
      .addAttribution(layerConfig.attribution)
      .addTo(map);

    // Markers layer group
    const markersGroup = L.layerGroup().addTo(map);
    markersGroupRef.current = markersGroup;
    mapInstanceRef.current = map;

    // Invalidate size after initial layout
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer when layer style changes
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    const layerConfig = MAP_LAYERS[activeLayer];

    tileLayerRef.current.setUrl(layerConfig.url);
  }, [activeLayer]);

  // Update Markers whenever countries list or selection changes
  useEffect(() => {
    if (!mapInstanceRef.current || !markersGroupRef.current) return;

    markersGroupRef.current.clearLayers();

    countries.forEach(country => {
      const isSelected = country.name === selectedCountryName;
      const isHovered = country.name === hoveredCountryName;
      
      const accentColor = country.accentColor || '#F59E0B';
      const count = country.count;
      
      // Node size calculation based on count
      const baseSize = isSelected ? 38 : (isHovered ? 34 : Math.min(32, Math.max(22, 18 + count * 1.3)));

      const markerHtml = `
        <div class="atlas-pin-wrapper group" style="width: ${baseSize}px; height: ${baseSize}px;">
          ${isSelected ? `
            <div class="atlas-pin-pulse" style="background-color: ${accentColor};"></div>
          ` : ''}
          <div 
            class="atlas-pin-badge ${isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110 shadow-amber-500/40' : ''}" 
            style="
              width: 100%; 
              height: 100%; 
              background: ${isSelected ? '#F59E0B' : (isHovered ? '#FFFFFF' : accentColor)};
              color: #000000;
            "
          >
            <span style="font-size: ${baseSize > 26 ? '11px' : '9px'}; font-weight: 800; font-family: ui-monospace, monospace;">
              ${count}
            </span>
          </div>
          
          <div class="atlas-pin-tooltip hidden sm:group-hover:flex absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-xl bg-neutral-950/95 border border-white/20 text-white text-[11px] font-bold whitespace-nowrap shadow-2xl items-center gap-1.5 pointer-events-none backdrop-blur-md z-50">
            <span>${country.flag}</span>
            <span>${country.name}</span>
            <span class="text-amber-400">(${count} ${count === 1 ? 'raza' : 'razas'})</span>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: 'atlas-map-pin',
        iconSize: [baseSize, baseSize],
        iconAnchor: [baseSize / 2, baseSize / 2]
      });

      const marker = L.marker([country.lat, country.lng], {
        icon: customIcon,
        zIndexOffset: isSelected ? 1000 : (isHovered ? 500 : 10)
      });

      marker.on('click', () => {
        onSelectCountry(country.name);
      });

      marker.on('mouseover', () => {
        onHoverCountry(country.name);
      });

      marker.on('mouseout', () => {
        onHoverCountry(null);
      });

      markersGroupRef.current?.addLayer(marker);
    });
  }, [countries, selectedCountryName, hoveredCountryName, onSelectCountry, onHoverCountry]);

  // Fly to active country when selection changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const target = countries.find(c => c.name === selectedCountryName);
    if (target) {
      const currentZoom = mapInstanceRef.current.getZoom();
      const nextZoom = currentZoom < 3.5 ? 4.5 : currentZoom;
      mapInstanceRef.current.flyTo([target.lat, target.lng], nextZoom, {
        duration: 1.1,
        easeLinearity: 0.25
      });
    }
  }, [selectedCountryName]);

  // Reset World View
  const handleResetWorldView = useCallback(() => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([28, 15], 2.3, {
      duration: 1.2
    });
  }, []);

  // Zoom handlers
  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  // Fullscreen toggle handler
  const handleToggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
    setTimeout(() => {
      mapInstanceRef.current?.invalidateSize();
    }, 200);
  };

  return (
    <div 
      className={`relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0d] transition-all duration-300 shadow-2xl ${
        isFullscreen 
          ? 'fixed inset-4 z-50 h-[calc(100vh-2rem)] rounded-3xl' 
          : 'w-full h-[400px] sm:h-[460px] lg:h-[520px]'
      }`}
    >
      {/* Real Leaflet Map Container */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full z-0 cursor-grab active:cursor-grabbing"
      />

      {/* Map Header Overlay */}
      <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 pointer-events-auto">
        <div className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="hidden sm:inline">Mapa Real Interactivo</span>
          <span className="text-amber-400 font-mono text-[11px]">{countries.length} Países</span>
        </div>
      </div>

      {/* Floating Control Toolbar (Top Right) */}
      <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-2 pointer-events-auto">
        
        {/* Layer Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLayerMenu(prev => !prev)}
            className="p-2.5 rounded-xl bg-black/85 hover:bg-neutral-900 text-slate-200 hover:text-amber-400 border border-white/10 backdrop-blur-md transition-all shadow-xl cursor-pointer"
            title="Cambiar capa de mapa"
          >
            <Layers className="w-4 h-4" />
          </button>

          {showLayerMenu && (
            <div className="absolute right-0 top-full mt-2 w-44 bg-neutral-950/95 border border-white/15 rounded-2xl p-1.5 shadow-2xl backdrop-blur-xl animate-fade-in flex flex-col gap-1 z-20">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-2.5 py-1">
                Estilo de Mapa
              </div>
              {(Object.keys(MAP_LAYERS) as MapLayerStyle[]).map(styleKey => (
                <button
                  key={styleKey}
                  onClick={() => {
                    setActiveLayer(styleKey);
                    setShowLayerMenu(false);
                  }}
                  className={`text-left text-xs font-medium px-2.5 py-2 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                    activeLayer === styleKey
                      ? 'bg-amber-500 text-black font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{MAP_LAYERS[styleKey].name}</span>
                  {activeLayer === styleKey && <span className="text-xs">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Reset World View */}
        <button
          onClick={handleResetWorldView}
          className="p-2.5 rounded-xl bg-black/85 hover:bg-neutral-900 text-slate-200 hover:text-amber-400 border border-white/10 backdrop-blur-md transition-all shadow-xl cursor-pointer"
          title="Restablecer vista global del mundo"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Zoom In & Out */}
        <div className="flex flex-col bg-black/85 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md shadow-xl">
          <button
            onClick={handleZoomIn}
            className="p-2 text-slate-200 hover:text-amber-400 hover:bg-neutral-800 transition-colors border-b border-white/10 cursor-pointer"
            title="Acercar mapa"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 text-slate-200 hover:text-amber-400 hover:bg-neutral-800 transition-colors cursor-pointer"
            title="Alejar mapa"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={handleToggleFullscreen}
          className="p-2.5 rounded-xl bg-black/85 hover:bg-neutral-900 text-slate-200 hover:text-amber-400 border border-white/10 backdrop-blur-md transition-all shadow-xl cursor-pointer"
          title={isFullscreen ? 'Salir de pantalla completa' : 'Ver mapa en pantalla completa'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Floating Active Country Ribbon (Bottom Left) */}
      <div className="absolute bottom-3.5 left-3.5 z-10 pointer-events-auto max-w-[calc(100%-110px)] sm:max-w-xs">
        {countries.find(c => c.name === selectedCountryName) && (
          <div className="p-2.5 sm:p-3 rounded-2xl bg-neutral-950/90 border border-amber-500/30 backdrop-blur-md shadow-2xl flex items-center gap-3 animate-fade-in">
            <span className="text-2xl select-none">
              {countries.find(c => c.name === selectedCountryName)?.flag}
            </span>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                <span>{selectedCountryName}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-500/20 text-amber-400 font-mono">
                  {countries.find(c => c.name === selectedCountryName)?.count} razas
                </span>
              </div>
              <div className="text-[10px] text-neutral-400 truncate">
                {countries.find(c => c.name === selectedCountryName)?.dominantArchetype}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
