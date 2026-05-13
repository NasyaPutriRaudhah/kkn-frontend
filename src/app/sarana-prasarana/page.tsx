'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Trophy, Activity, Bus, Church, MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';

const categories = [
  { id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
  { id: 'olahraga', label: 'Olahraga', icon: Trophy },
  { id: 'kesehatan', label: 'Kesehatan', icon: Activity },
  { id: 'transportasi', label: 'Transportasi', icon: Bus },
  { id: 'ibadah', label: 'Ibadah', icon: Church },
];

const facilitiesData = {
  pendidikan: [
    { title: 'SMK Negeri 1 Sebatik Barat', desc: 'Pusat vokasi dengan keaslian jurusan kelautan dan agribisnis.', loc: 'Desa Binalawan', img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600' },
    { title: 'SMP Negeri 2 Sebatik Barat', desc: 'Sekolah menengah dengan standar fasilitas digital.', loc: 'Desa Setabu', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600' },
    { title: 'SD Negeri 001 Sebatik Barat', desc: 'Sekolah dasar unggulan di pusat kecamatan.', loc: 'Desa Binalawan', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=600' },
  ],
  olahraga: [
    { title: 'Stadion Mini Binalawan', desc: 'Fasilitas sepak bola dan atletik untuk turnamen antar desa.', loc: 'Desa Binalawan', img: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&q=80&w=600' },
    { title: 'GOR Bulutangkis Setabu', desc: 'Gedung olahraga indoor untuk bulutangkis dan futsal.', loc: 'Desa Setabu', img: 'https://images.unsplash.com/photo-1626248801379-335bedf90768?auto=format&fit=crop&q=80&w=600' },
  ],
  kesehatan: [
    { title: 'Puskesmas Binalawan', desc: 'Pusat layanan kesehatan 24 jam dengan fasilitas rawat inap.', loc: 'Desa Binalawan', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600' },
    { title: 'Poskesdes Bambangan', desc: 'Pelayanan kesehatan dasar untuk masyarakat pedesaan.', loc: 'Desa Bambangan', img: 'https://images.unsplash.com/photo-1538108197017-c1c46cbdd097?auto=format&fit=crop&q=80&w=600' },
  ],
  transportasi: [
    { title: 'Dermaga Bambangan', desc: 'Pintu masuk utama via laut dari Kota Nunukan.', loc: 'Desa Bambangan', img: 'https://images.unsplash.com/photo-1495470129215-6804cfd693bf?auto=format&fit=crop&q=80&w=600' },
    { title: 'Terminal Angkutan Desa', desc: 'Pusat transportasi darat antar desa di wilayah kecamatan.', loc: 'Desa Binalawan', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600' },
  ],
  ibadah: [
    { title: 'Masjid Jami Binalawan', desc: 'Masjid tertua dan terbesar di Kecamatan Sebatik Barat.', loc: 'Desa Binalawan', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600' },
    { title: 'Gereja Paroki Liang Bunyu', desc: 'Tempat ibadah umat Kristiani yang bersejarah.', loc: 'Desa Liang Bunyu', img: 'https://images.unsplash.com/photo-1548625313-039e4402662c?auto=format&fit=crop&q=80&w=600' },
  ],
};

export default function Facilities() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

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

        {/* Categories Grid (Tabs) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-4 p-8 rounded-[3rem] transition-all duration-500 border",
                  isActive 
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-2xl shadow-emerald-100 dark:shadow-none scale-105" 
                    : "bg-white dark:bg-brand-creme border-emerald-50 dark:border-stone-300 text-emerald-500 hover:border-emerald-300"
                )}
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-colors", isActive ? "bg-white/20" : "bg-emerald-50 dark:bg-emerald-300/30")}>
                  <Icon size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              layout
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="contents"
            >
              {facilitiesData[activeTab as keyof typeof facilitiesData].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group bg-white dark:bg-brand-creme rounded-[3.5rem] overflow-hidden border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 dark:bg-brand-creme/80 backdrop-blur-md rounded-full text-[10px] font-black text-emerald-500 dark:text-emerald-500 flex items-center gap-2 shadow-lg uppercase tracking-widest">
                      <MapPin size={12} /> {item.loc}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-emerald-900 dark:text-stone-900 mb-4 leading-none tracking-tight group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 dark:text-stone-600 text-sm leading-relaxed mb-8 font-light italic">"{item.desc}"</p>
                    <button className="text-emerald-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                      Informasi Lengkap
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
