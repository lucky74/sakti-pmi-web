import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { countryStats } from '../data/mockData';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapSectionProps {
  onSelectCountry: (countryCode: string) => void;
}

const MapSection: React.FC<MapSectionProps> = ({ onSelectCountry }) => {
  return (
    <div id="map" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-black text-slate-900 mb-4">Peta Sebaran PMI</h2>
           <p className="text-slate-600 max-w-2xl mx-auto text-lg">
             Pantau distribusi Pekerja Migran Indonesia di berbagai negara tujuan utama secara real-time.
           </p>
        </div>
        
        <div className="relative p-2 bg-white rounded-2xl shadow-2xl shadow-slate-200/50">
          <div className="h-[600px] w-full rounded-xl overflow-hidden border border-slate-100 relative z-0">
            <MapContainer center={[20, 120]} zoom={4} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              {Object.entries(countryStats).map(([code, data]) => (
                <Marker 
                  key={code} 
                  position={[data.lat, data.lng]}
                  eventHandlers={{
                    click: () => onSelectCountry(code),
                  }}
                >
                  <Popup>
                    <div className="text-center p-2">
                      <h3 className="font-bold text-lg text-slate-900 mb-1">{data.name}</h3>
                      <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-bold text-sm mb-3 inline-block">
                        {data.total.toLocaleString()} PMI
                      </div>
                      <button 
                        onClick={() => onSelectCountry(code)}
                        className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                      >
                        Lihat Statistik & Lowongan
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-8 text-slate-500 text-sm font-medium">
           <div className="flex items-center gap-2">
             <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span> Data Terupdate Hari Ini
           </div>
           <div className="flex items-center gap-2">
             <Map size={16} /> Klik marker untuk detail
           </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
