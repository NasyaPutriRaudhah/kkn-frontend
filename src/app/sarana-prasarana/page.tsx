'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Trophy, Activity, Bus, Church, MapPin, Map, Search } from 'lucide-react';
import { cn } from '../../lib/utils';
import StuntCheck from '../../components/StuntCheck';
import { getMediaUrl, normalizeCollectionEntries } from '../../lib/strapi';
import type { FacilityAttributes } from '../../types/strapi';

const categories = [
  { id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
  { id: 'olahraga', label: 'Olahraga', icon: Trophy },
  { id: 'kesehatan', label: 'Kesehatan', icon: Activity },
  { id: 'transportasi', label: 'Transportasi', icon: Bus },
  { id: 'ibadah', label: 'Ibadah', icon: Church },
];

type FacilityItem = {
  id: number;
  title: string;
  loc: string;
  img: string;
  type: string;
  desc: string;
  mapsLink: string;
};

export default function Facilities() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [facilities, setFacilities] = useState<FacilityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadFacilities() {
      try {
        setLoading(true);
        const res = await fetch(`/api/strapi/facilities?populate=image&pagination[pageSize]=200`);
        if (!res.ok) throw new Error(`Failed to load facilities (${res.status})`);

        const json = await res.json();
        const normalized = normalizeCollectionEntries<FacilityAttributes>(json.data);
        const mapped = normalized.map((item) => ({
          id: item.id,
          title: item.name || 'Tanpa Nama',
          loc: item.desa_location || '-',
          img: getMediaUrl(item.image?.url),
          type: (item.type || '').toLowerCase(),
          desc: item.description || '',
          mapsLink: item.google_maps_link || '',
        }));

        if (mounted) setFacilities(mapped);
      } catch (err) {
        if (mounted) setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadFacilities();
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    return facilities
      .filter((item) => item.type === activeTab)
      .filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.loc.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [facilities, activeTab, searchQuery]);

  return (
    <div className="pt-32 pb-24 px-8 min-h-screen bg-stone-50 dark:bg-brand-creme">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100"
          >
            Infrastruktur & Publik
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-8 tracking-tighter leading-none">Sarana & <br />Prasarana.</h1>
          <p className="text-stone-500 dark:text-stone-600 max-w-2xl text-xl font-light leading-relaxed">
            Menyediakan ekosistem pendukung yang inklusif untuk menjamin kualitas hidup dan kemajuan warga di perbatasan.
          </p>
        </header>

        {/* Categories Tabs — horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-200 [&::-webkit-scrollbar-track]:bg-transparent">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-4 p-6 md:p-8 rounded-[3rem] transition-all duration-500 border snap-start shrink-0 w-36 md:w-auto",
                  isActive 
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-2xl shadow-emerald-100 dark:shadow-none md:scale-105" 
                    : "bg-white dark:bg-brand-creme border-emerald-50 dark:border-stone-300 text-emerald-500 hover:border-emerald-300"
                )}
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-colors", isActive ? "bg-white/20" : "bg-emerald-50 dark:bg-emerald-300/30")}>
                  <Icon size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative mb-12 max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Cari fasilitas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-emerald-100 dark:border-stone-300 bg-white dark:bg-brand-creme text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {loading && <p className="col-span-full text-stone-500">Memuat data fasilitas...</p>}
          {error && <p className="col-span-full text-red-600">Gagal memuat data: {error}</p>}
          <AnimatePresence mode="wait">
            <motion.div
              layout
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="contents"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white dark:bg-brand-creme rounded-[3.5rem] overflow-hidden border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-64 overflow-hidden relative">
                    {item.img ? (
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full bg-stone-100 dark:bg-stone-200 flex items-center justify-center text-stone-400 text-sm">No Image</div>
                    )}
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 dark:bg-brand-creme/80 backdrop-blur-md rounded-full text-[10px] font-black text-emerald-500 dark:text-emerald-500 flex items-center gap-2 shadow-lg uppercase tracking-widest">
                      <MapPin size={12} /> {item.loc}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-emerald-900 dark:text-stone-900 mb-6 leading-none tracking-tight group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                    {item.desc && <p className="text-sm text-stone-500 mb-6 line-clamp-3">{item.desc}</p>}
                    <div className="flex flex-wrap gap-4">
                      {item.mapsLink ? (
                        <a
                          href={item.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100"
                        >
                          <Map size={14} /> View in Google Maps
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
              {!loading && !error && filtered.length === 0 && (
                <div className="col-span-full text-center py-20 text-stone-400 text-sm">
                  Tidak ada fasilitas ditemukan untuk pencarian &quot;{searchQuery}&quot;
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {activeTab === 'kesehatan' && <div className="mt-20"><StuntCheck /></div>}
      </div>
    </div>
  );
}
