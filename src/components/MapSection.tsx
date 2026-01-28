import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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
    <div id="map" className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Peta Sebaran PMI</h2>
        <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white">
          <MapContainer center={[20, 120]} zoom={4} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
                  <div className="text-center">
                    <h3 className="font-bold text-lg">{data.name}</h3>
                    <p>Total PMI: {data.total.toLocaleString()}</p>
                    <button 
                      onClick={() => onSelectCountry(code)}
                      className="mt-2 text-sm text-blue-600 hover:underline"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <p className="text-center mt-4 text-slate-500 text-sm">
          Klik pada marker negara untuk melihat statistik detail dan lowongan pekerjaan.
        </p>
      </div>
    </div>
  );
};

export default MapSection;
