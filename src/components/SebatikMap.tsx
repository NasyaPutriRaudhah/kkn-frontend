'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTheme } from './ThemeProvider';

const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const villages = [
  { name: 'Desa Binalawan', position: [4.1139694, 117.7859889] as [number, number], description: 'Pusat pemerintahan Kecamatan Sebatik Barat.' },
  { name: 'Desa Liang Bunyu', position: [4.1261194, 117.7526611] as [number, number], description: 'Wilayah pesisir dengan potensi perikanan yang kaya.' },
  { name: 'Desa Setabu', position: [4.0865194, 117.8216194] as [number, number], description: 'Sentra pertanian dan perkebunan produktif.' },
  { name: 'Desa Bambangan', position: [4.1537806, 117.7279500] as [number, number], description: 'Wilayah strategis penghubung antar desa (Pelabuhan Bambangan).' },
];

function MapInner() {
  const { theme } = useTheme();

  const lightUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const darkUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  return (
    <MapContainer key={theme} center={[4.12, 117.77]} zoom={12} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url={theme === 'dark' ? darkUrl : lightUrl}
      />
      {villages.map((village) => (
        <Marker key={village.name} position={village.position} icon={markerIcon}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg mb-1">{village.name}</h3>
              <p className="text-sm text-stone-600">{village.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default function SebatikMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] bg-stone-100 dark:bg-stone-200 rounded-2xl flex items-center justify-center">
        <div className="text-stone-400 text-sm font-light">Memuat peta...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-300 z-0">
      <MapInner />
    </div>
  );
}
