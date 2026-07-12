'use client';

import { motion } from 'motion/react';
import { MapPin, Users, LandPlot, Waves, Navigation } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { SanityVillage } from '@/types/sanity';

const fallbackVillages: SanityVillage[] = [
  {
    _id: '1',
    name: 'Desa Binalawan',
    tagline: 'Pusat Pemerintahan & Ekonomi',
    description: 'Sebagai ibukota kecamatan, Binalawan menjadi pusat denyut nadi pemerintahan dan aktivitas komersial. Infrastruktur yang mapan menjadikannya desa percontohan digital.',
    population: '3,332',
    area: '18.99',
    geoType: 'Desa',
    features: 'Pusat Perbelanjaan, Layanan Publik Terpadu, Akses Pendidikan Tinggi',
  },
  {
    _id: '2',
    name: 'Desa Liang Bunyu',
    tagline: 'Mutiara Pesisir & Perikanan',
    description: 'Terkenal dengan garis pantainya yang indah dan komunitas nelayan yang tangguh. Liang Bunyu adalah produsen utama rumput laut dan hasil laut berkualitas tinggi.',
    population: '3,424',
    area: '17.84',
    geoType: 'Desa',
    features: 'Wisata Bahari, Sentra Rumput Laut, Kuliner Seafood',
  },
  {
    _id: '3',
    name: 'Desa Setabu',
    tagline: 'Agribisnis & Perkebunan',
    description: 'Bentang alam hijau yang mendominasi wilayah ini menjadikannya paru-paru Sebatik Barat. Komoditas kakao dan kelapa sawit menjadi tulang punggung ekonomi desa.',
    population: '4,471',
    area: '34.56',
    geoType: 'Desa',
    features: 'Industri Kakao, Ekowisata Hutan, Produktivitas Pangan',
  },
  {
    _id: '4',
    name: 'Desa Bambangan',
    tagline: 'Gerbang Transportasi & Logistik',
    description: 'Lokasi Dermaga Bambangan menjadikannya titik konektivitas vital antara Pulau Sebatik dan Kabupaten Nunukan. Transformasi logistik menjadi fokus utama pembangunan.',
    population: '2,859',
    area: '21.88',
    geoType: 'Desa',
    features: 'Pelabuhan Utama, Hub Pergudangan, Transit Wisata',
  },
];

type VillageUI = {
  _id: string;
  name: string;
  tagline: string;
  desc: string;
  stats: { population: string; area: string; type: string };
  features: string[];
  image: string;
};

function mapVillages(data: SanityVillage[]): VillageUI[] {
  return data
    .map((entry) => {
      if (!entry.name) return null;
      return {
        _id: entry._id,
        name: entry.name,
        tagline: entry.tagline || 'Desa Sebatik Barat',
        desc: entry.description || '-',
        stats: {
          population: entry.population || '-',
          area: entry.area || '-',
          type: entry.geoType || 'Desa',
        },
        features: (entry.features || '').split(',').map((x) => x.trim()).filter(Boolean),
        image: entry.imageUrl || '',
      } as VillageUI;
    })
    .filter(Boolean) as VillageUI[];
}

export default function KewilayahanClient({ villages: serverVillages }: { villages: SanityVillage[] }) {
  const hasData = serverVillages.length > 0;
  const villages = hasData ? mapVillages(serverVillages) : mapVillages(fallbackVillages);

  return (
    <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100"
          >
            Regional & Data
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-10 tracking-tighter">Data Terpadu.</h1>
          <p className="text-stone-500 dark:text-stone-600 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Eksplorasi mendalam 4 desa mandiri yang menjadi pilar kedaulatan Sebatik Barat.
          </p>
          {!hasData && (
            <p className="text-amber-600 text-sm mt-4">
              Menampilkan data fallback. Tambahkan data desa di Studio Sanity.
            </p>
          )}
        </header>

        <div className="space-y-48">
          {villages.map((village, i) => (
            <motion.section
              key={village._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
            >
              <div className={cn("order-2", (i % 2 !== 0) ? "lg:order-2" : "lg:order-1")}>
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-emerald-500 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-emerald-50">
                    <Navigation size={28} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-emerald-900 dark:text-stone-900 tracking-tight leading-none">{village.name}</h3>
                    <p className="text-emerald-500 font-black text-xs uppercase tracking-[0.2em] mt-2">{village.tagline}</p>
                  </div>
                </div>
                
                <p className="text-stone-500 dark:text-stone-600 mb-10 leading-relaxed text-lg font-light">
                  {village.desc}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-12">
                  {[
                    { icon: <Users size={16} />, val: village.stats.population, label: 'Penduduk' },
                    { icon: <LandPlot size={16} />, val: village.stats.area, label: 'Luas KM²' },
                    { icon: <Waves size={16} />, val: village.stats.type, label: 'Geo-Tipe' }
                  ].map((s, idx) => (
                    <div key={idx} className="bg-white dark:bg-brand-creme p-6 rounded-[2rem] border border-emerald-50 dark:border-stone-300 text-center group hover:bg-emerald-500 hover:text-white transition-all duration-300">
                      <div className="flex justify-center mb-4 text-emerald-500 group-hover:text-emerald-100 transition-colors">{s.icon}</div>
                      <span className="block font-black text-xl mb-1 tracking-tighter">{s.val}</span>
                      <span className="text-[9px] uppercase font-bold tracking-widest opacity-60">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {village.features.map(feat => (
                    <span key={feat} className="px-5 py-2 bg-white dark:bg-stone-200 border border-emerald-100 dark:border-stone-300 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                      • {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className={cn("order-1 relative", (i % 2 !== 0) ? "lg:order-1" : "lg:order-2")}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-emerald-600/5 rounded-[4rem] group-hover:scale-105 transition-transform duration-700" />
                  {village.image ? (
                    <img 
                      src={village.image} 
                      alt={village.name} 
                      className="w-full h-[600px] object-cover rounded-[4rem] shadow-2xl relative z-10 transition-all duration-1000" 
                    />
                  ) : (
                    <div className="w-full h-[600px] bg-stone-200 dark:bg-stone-300 rounded-[4rem] shadow-2xl relative z-10 flex items-center justify-center">
                      <Navigation size={48} className="text-stone-400" />
                    </div>
                  )}
                  <div className="absolute -bottom-8 -right-8 p-10 bg-white dark:bg-brand-creme rounded-[3rem] shadow-2xl z-20 border border-emerald-50 dark:border-stone-300 hidden md:block">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-tighter text-emerald-500">Peta Strategis</p>
                        <p className="text-sm font-black text-emerald-900 dark:text-stone-900 uppercase tracking-widest">Garda Terdepan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
