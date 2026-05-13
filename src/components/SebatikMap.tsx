'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTheme } from './ThemeProvider';

// Fix for default marker icon using CDN
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const villages = [
  { name: 'Desa Binalawan', position: [4.1139694, 117.7859889], description: 'Pusat pemerintahan Kecamatan Sebatik Barat.' },
  { name: 'Desa Liang Bunyu', position: [4.1261194, 117.7526611], description: 'Wilayah pesisir dengan potensi perikanan yang kaya.' },
  { name: 'Desa Setabu', position: [4.0865194, 117.8216194], description: 'Sentra pertanian dan perkebunan produktif.' },
  { name: 'Desa Bambangan', position: [4.1537806, 117.7279500], description: 'Wilayah strategis penghubung antar desa (Pelabuhan Bambangan).' },
];

export default function SebatikMap() {
  const center: [number, number] = [4.12, 117.77];
  const { theme } = useTheme();

  const lightUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const darkUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-300 z-0">
      <MapContainer key={theme} center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url={theme === 'dark' ? darkUrl : lightUrl}
        />
        {villages.map((village) => (
          <Marker key={village.name} position={village.position as [number, number]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg text-primary mb-1">{village.name}</h3>
                <p className="text-sm text-stone-600">{village.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
