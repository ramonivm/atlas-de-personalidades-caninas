import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import L from 'leaflet';
import { CountryOriginData } from '../data/originsData';
import { Breed } from '../types';
import { 
  RotateCcw, 
  Plus, 
  Minus, 
  Layers, 
  Maximize2, 
  Minimize2,
  Sparkles
} from 'lucide-react';

interface RealWorldMapProps {
  countries: (CountryOriginData & { breeds: Breed[]; count: number })[];
  selectedCountryName: string;
  onSelectCountry: (countryName: string) => void;
  hoveredCountryName: string | null;
  onHoverCountry: (countryName: string | null) => void;
}

// Retrieve Google Maps API Key and Map ID from environment
const getMapsConfig = () => {
  let apiKey = '';
  let mapId = '';

  try {
    apiKey = 
      import.meta.env.VITE_MAPS_API_KEY || 
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 
      '';
    mapId = 
      import.meta.env.VITE_MAPS_MAP_ID || 
      '';
    
    if (!apiKey && typeof process !== 'undefined' && process.env) {
      apiKey = (process.env.VITE_MAPS_API_KEY || process.env.MAPS_API_KEY || '') as string;
      mapId = mapId || (process.env.VITE_MAPS_MAP_ID || process.env.MAPS_MAP_ID || '') as string;
    }
  } catch {
    // Ignore runtime error
  }

  return {
    apiKey: apiKey ? apiKey.trim() : '',
    mapId: mapId ? mapId.trim() : ''
  };
};

export const RealWorldMap: React.FC<RealWorldMapProps> = ({
  countries,
  selectedCountryName,
  onSelectCountry,
  hoveredCountryName,
  onHoverCountry
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  // Google Maps references
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const googleMarkersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const [isGoogleMapReady, setIsGoogleMapReady] = useState(false);

  // Leaflet fallback references
  const leafletMapRef = useRef<L.Map | null>(null);
  const leafletMarkersRef = useRef<L.LayerGroup | null>(null);
  const leafletTileRef = useRef<L.TileLayer | null>(null);

  const [activeLayer, setActiveLayer] = useState<'cloud_style' | 'satellite' | 'terrain'>('cloud_style');
  const [showLayerMenu, setShowLayerMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [authError, setAuthError] = useState<boolean>(false);

  const { apiKey: mapsApiKey, mapId: mapsMapId } = useMemo(() => getMapsConfig(), []);
  const hasGoogleKey = Boolean(mapsApiKey && mapsApiKey.length > 5 && !authError);

  // Initialize Map Engine
  useEffect(() => {
    if (!mapContainerRef.current) return;
    let isCancelled = false;

    // Listen to Google Maps auth failure (RefererNotAllowedMapError or invalid key restriction)
    (window as any).gm_authFailure = () => {
      console.warn('[AtlasCanino] Google Maps gm_authFailure detected (e.g. Referer restriction). Falling back to dark map.');
      setAuthError(true);
      if (googleMapRef.current) {
        googleMapRef.current = null;
        setIsGoogleMapReady(false);
      }
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = '';
      }
      initLeafletFallback();
    };

    if (hasGoogleKey && !authError) {
      // 1. Initialize Google Maps JavaScript API with Map ID (Vector Map)
      try {
        setOptions({
          key: mapsApiKey,
          v: 'weekly',
          mapIds: mapsMapId ? [mapsMapId] : undefined
        });

        Promise.all([
          importLibrary('maps'),
          importLibrary('marker')
        ])
          .then(([mapsLib]) => {
            if (isCancelled || !mapContainerRef.current) return;

            // Create Vector Google Map with Custom Map ID
            const mapOptions: google.maps.MapOptions = {
              center: { lat: 26, lng: 15 },
              zoom: 2.3,
              minZoom: 1.8,
              maxZoom: 18,
              mapId: mapsMapId || undefined, // Custom Cloud Console Dark Design Style
              disableDefaultUI: true,
              zoomControl: false,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
              backgroundColor: '#0c0c0d',
              gestureHandling: 'greedy'
            };

            const map = new mapsLib.Map(mapContainerRef.current, mapOptions);
            googleMapRef.current = map;
            setIsGoogleMapReady(true);
          })
          .catch((err) => {
            console.warn('[AtlasCanino] Google Maps API load failed, activating fallback:', err);
            initLeafletFallback();
          });
      } catch (err) {
        console.warn('[AtlasCanino] Google Maps setOptions failed:', err);
        initLeafletFallback();
      }
    } else {
      // 2. Leaflet Fallback (Obsidian Dark Cartography)
      initLeafletFallback();
    }

    function initLeafletFallback() {
      if (isCancelled || !mapContainerRef.current || leafletMapRef.current) return;

      // Clean container if Google Maps injected elements before auth error
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = '';
      }

      const map = L.map(mapContainerRef.current, {
        center: [28, 15],
        zoom: 2.3,
        minZoom: 1.8,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: false,
        worldCopyJump: true
      });

      const tileLayer = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        {
          attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
          maxZoom: 16
        }
      ).addTo(map);

      leafletTileRef.current = tileLayer;
      leafletMarkersRef.current = L.layerGroup().addTo(map);
      leafletMapRef.current = map;

      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    }

    return () => {
      isCancelled = true;
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
      googleMapRef.current = null;
      googleMarkersRef.current = [];
    };
  }, [hasGoogleKey, mapsApiKey, mapsMapId]);

  // Handle Google Maps Markers Rendering
  useEffect(() => {
    if (!googleMapRef.current || !isGoogleMapReady) return;

    // Clear previous Google markers
    googleMarkersRef.current.forEach(m => {
      m.map = null;
    });
    googleMarkersRef.current = [];

    countries.forEach(country => {
      const isSelected = country.name === selectedCountryName;
      const isHovered = country.name === hoveredCountryName;
      const accentColor = country.accentColor || '#F59E0B';
      const count = country.count;
      
      const baseSize = isSelected ? 38 : (isHovered ? 34 : Math.min(32, Math.max(22, 18 + count * 1.3)));

      // Create interactive DOM element
      const pinWrapper = document.createElement('div');
      pinWrapper.className = 'atlas-pin-wrapper group relative cursor-pointer select-none';
      pinWrapper.style.width = `${baseSize}px`;
      pinWrapper.style.height = `${baseSize}px`;

      pinWrapper.innerHTML = `
        ${isSelected ? `
          <div class="atlas-pin-pulse" style="background-color: ${accentColor};"></div>
        ` : ''}
        <div 
          class="atlas-pin-badge flex items-center justify-center rounded-full transition-all duration-200 ${
            isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110 shadow-amber-500/50 shadow-lg' : ''
          }" 
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
      `;

      pinWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        onSelectCountry(country.name);
      });

      pinWrapper.addEventListener('mouseenter', () => {
        onHoverCountry(country.name);
      });

      pinWrapper.addEventListener('mouseleave', () => {
        onHoverCountry(null);
      });

      try {
        if (window.google?.maps?.marker?.AdvancedMarkerElement) {
          const marker = new google.maps.marker.AdvancedMarkerElement({
            map: googleMapRef.current,
            position: { lat: country.lat, lng: country.lng },
            content: pinWrapper,
            title: `${country.name} (${count} razas)`,
            zIndex: isSelected ? 1000 : (isHovered ? 500 : 10)
          });
          googleMarkersRef.current.push(marker);
        }
      } catch (err) {
        console.warn('Failed to place AdvancedMarkerElement:', err);
      }
    });
  }, [countries, selectedCountryName, hoveredCountryName, isGoogleMapReady, onSelectCountry, onHoverCountry]);

  // Handle Leaflet Markers Rendering (Fallback)
  useEffect(() => {
    if (!leafletMapRef.current || !leafletMarkersRef.current) return;

    leafletMarkersRef.current.clearLayers();

    countries.forEach(country => {
      const isSelected = country.name === selectedCountryName;
      const isHovered = country.name === hoveredCountryName;
      const accentColor = country.accentColor || '#F59E0B';
      const count = country.count;
      
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

      leafletMarkersRef.current?.addLayer(marker);
    });
  }, [countries, selectedCountryName, hoveredCountryName, onSelectCountry, onHoverCountry]);

  // Fly to active country when selection changes
  useEffect(() => {
    const target = countries.find(c => c.name === selectedCountryName);
    if (!target) return;

    if (googleMapRef.current) {
      googleMapRef.current.panTo({ lat: target.lat, lng: target.lng });
      const currentZoom = googleMapRef.current.getZoom() || 2;
      if (currentZoom < 4) {
        googleMapRef.current.setZoom(4.5);
      }
    } else if (leafletMapRef.current) {
      const currentZoom = leafletMapRef.current.getZoom();
      const nextZoom = currentZoom < 3.5 ? 4.5 : currentZoom;
      leafletMapRef.current.flyTo([target.lat, target.lng], nextZoom, {
        duration: 1.1,
        easeLinearity: 0.25
      });
    }
  }, [selectedCountryName, countries]);

  // Reset World View
  const handleResetWorldView = useCallback(() => {
    if (googleMapRef.current) {
      googleMapRef.current.panTo({ lat: 26, lng: 15 });
      googleMapRef.current.setZoom(2.3);
    } else if (leafletMapRef.current) {
      leafletMapRef.current.flyTo([28, 15], 2.3, {
        duration: 1.2
      });
    }
  }, []);

  // Zoom In & Out
  const handleZoomIn = () => {
    if (googleMapRef.current) {
      const current = googleMapRef.current.getZoom() || 2;
      googleMapRef.current.setZoom(current + 1);
    } else if (leafletMapRef.current) {
      leafletMapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (googleMapRef.current) {
      const current = googleMapRef.current.getZoom() || 2;
      googleMapRef.current.setZoom(Math.max(1.8, current - 1));
    } else if (leafletMapRef.current) {
      leafletMapRef.current.zoomOut();
    }
  };

  // Fullscreen toggle handler
  const handleToggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
    setTimeout(() => {
      if (googleMapRef.current) {
        google.maps.event.trigger(googleMapRef.current, 'resize');
      } else if (leafletMapRef.current) {
        leafletMapRef.current.invalidateSize();
      }
    }, 200);
  };

  // Map type switcher for Google Maps
  const handleSetLayer = (style: 'cloud_style' | 'satellite' | 'terrain') => {
    setActiveLayer(style);
    setShowLayerMenu(false);

    if (googleMapRef.current) {
      if (style === 'satellite') {
        googleMapRef.current.setMapTypeId(google.maps.MapTypeId.HYBRID);
      } else if (style === 'terrain') {
        googleMapRef.current.setMapTypeId(google.maps.MapTypeId.TERRAIN);
      } else {
        googleMapRef.current.setMapTypeId(google.maps.MapTypeId.ROADMAP);
      }
    }
  };

  return (
    <div 
      className={`relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0d] transition-all duration-300 shadow-2xl ${
        isFullscreen 
          ? 'fixed inset-4 z-50 h-[calc(100vh-2rem)] rounded-3xl' 
          : 'w-full h-[400px] sm:h-[460px] lg:h-[540px]'
      }`}
    >
      {/* Map Canvas Container */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full z-0 cursor-grab active:cursor-grabbing"
      />

      {/* Cloud Map ID Active Indicator (Top Left) */}
      {mapsMapId && !authError && isGoogleMapReady && (
        <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950/85 border border-amber-500/30 text-white text-[11px] font-medium backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Google Maps Vectorial &bull; <strong className="text-amber-400">Diseño Cloud Activo</strong></span>
        </div>
      )}

      {/* Floating Control Toolbar (Top Right) */}
      <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-2 pointer-events-auto">
        
        {/* Layer Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLayerMenu(prev => !prev)}
            className="p-2.5 rounded-xl bg-black/85 hover:bg-neutral-900 text-slate-200 hover:text-amber-400 border border-white/10 backdrop-blur-md transition-all shadow-xl cursor-pointer"
            title="Cambiar vista o capa de mapa"
          >
            <Layers className="w-4 h-4" />
          </button>

          {showLayerMenu && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-neutral-950/95 border border-white/15 rounded-2xl p-1.5 shadow-2xl backdrop-blur-xl animate-fade-in flex flex-col gap-1 z-20">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-2.5 py-1">
                Estilo de Mapa
              </div>
              
              <button
                onClick={() => handleSetLayer('cloud_style')}
                className={`text-left text-xs font-medium px-2.5 py-2 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  activeLayer === 'cloud_style'
                    ? 'bg-amber-500 text-black font-bold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Diseño Personalizado</span>
                {activeLayer === 'cloud_style' && <span className="text-xs">✓</span>}
              </button>

              <button
                onClick={() => handleSetLayer('satellite')}
                className={`text-left text-xs font-medium px-2.5 py-2 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  activeLayer === 'satellite'
                    ? 'bg-amber-500 text-black font-bold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Satélite HD (Híbrido)</span>
                {activeLayer === 'satellite' && <span className="text-xs">✓</span>}
              </button>

              <button
                onClick={() => handleSetLayer('terrain')}
                className={`text-left text-xs font-medium px-2.5 py-2 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  activeLayer === 'terrain'
                    ? 'bg-amber-500 text-black font-bold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Relieve & Terreno</span>
                {activeLayer === 'terrain' && <span className="text-xs">✓</span>}
              </button>
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
