'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Trophy, Activity, Bus, Church, MapPin, ExternalLink, Phone, Search } from 'lucide-react';
import { cn } from '../../lib/utils';
import StuntCheck from '../../components/StuntCheck';

const categories = [
  { id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
  { id: 'olahraga', label: 'Olahraga', icon: Trophy },
  { id: 'kesehatan', label: 'Kesehatan', icon: Activity },
  { id: 'transportasi', label: 'Transportasi', icon: Bus },
  { id: 'ibadah', label: 'Ibadah', icon: Church },
];

const facilitiesData = {
  pendidikan: [
    { title: 'SMK Negeri 1 Sebatik Barat', loc: 'Desa Liang Bunyu', img: '/assets/smkn1.png', mapsUrl: 'https://maps.app.goo.gl/gxMPGhRchhv8hWgD8' },
    { title: 'SMP Negeri 1 Sebatik Barat', loc: 'Desa Setabu', img: '/assets/smpn1.webp', mapsUrl: 'https://maps.app.goo.gl/bXxtKSi9ie6jDk7DA' },
    { title: 'SMP Negeri 2 Sebatik Barat', loc: 'Desa liang Bunyu', img: '/assets/smpn02.png', mapsUrl: 'https://maps.app.goo.gl/53AfmJ8mmXemxDU16' },
    { title: 'SD Negeri 001 Sebatik Barat', loc: 'Desa Setabu', img: '/assets/sdn001.webp', mapsUrl: 'https://maps.app.goo.gl/VRQztX5pCBuTx3Y76' },
    { title: 'SD Negeri 002 Sebatik Barat', loc: 'Desa Liang Bunyu', img: '/assets/sdn002.png', mapsUrl: 'https://maps.app.goo.gl/UTo8dcjHErXppxXx6' },
    { title: 'SD Negeri 003 Sebatik Barat', loc: 'Desa Bambangan', img: '/assets/sdn003.png', mapsUrl: 'https://maps.app.goo.gl/eVr1ochDFEpcwnt37' },
    { title: 'SD Negeri 004 Sebatik Barat', loc: 'Desa Binalawan', img: '/assets/sdn004.webp', mapsUrl: 'https://maps.app.goo.gl/ezHcjAAwTTzohTep8' },
    { title: 'SD Negeri 005 Sebatik Barat', loc: 'Desa Setabu', img: '/assets/sdn005.webp', mapsUrl: 'https://maps.app.goo.gl/AN2LKXa9Kgx5K8bQA' },
    { title: 'SD Negeri 006 Sebatik Barat', loc: 'Desa Setabu', img: '/assets/sdn006.webp', mapsUrl: 'https://maps.app.goo.gl/UiWKLmKthSpk88tq6' },
    { title: 'SD Negeri 007 Sebatik Barat', loc: 'Desa Binalawan', img: '/assets/sdn007.jpg', mapsUrl: 'https://maps.app.goo.gl/SV1o1fUP3451sgdb7' },
    { title: 'SD Swasta Insan Mulya Sebatik Barat', loc: 'Desa Liang Bunyu', img: '/assets/sds insan.jpg', mapsUrl: 'https://maps.app.goo.gl/UiWKLmKthSpk88tq6' },
    { title: 'Pesantren PERSIS Internasional Sebatik Barat', loc: 'Desa Liang Bunyu', img: '/assets/pesantren.png', mapsUrl: 'https://maps.app.goo.gl/ZqRFhK7erx2pzXEh8' },
    { title: 'MA YIIPS Sebatik Barat', loc: 'Desa Setabu', img: '/assets/ma.png', mapsUrl: 'https://maps.app.goo.gl/fcQN9sfEgc7XWRPV6' },
    { title: 'SD 001 Muhammadiyah Sebatik Barat', loc: 'Desa Liang Bunyu', img: '/assets/sd muhammadiyah.png', mapsUrl: 'https://maps.app.goo.gl/9kVdLkUqSSrvXKSZA' },
    
    
  ],
  olahraga: [
    { title: 'Lapangan Sepak Bola Liang Bunyu', loc: 'Desa Liang Bunyu', img: '/assets/sepak bola.jpg', mapsUrl: 'https://maps.app.goo.gl/NF8U7LidsN3E5hXT6' },
    { title: 'Lapangan Bola Tembaring', loc: 'Desa Setabu', img: '/assets/tembaring.jpg', mapsUrl: 'https://maps.app.goo.gl/6d5RMkXdQ1KgxQMu7' },
    { title: 'Lapangan Kampung Enrekang', loc: 'Desa Binalawan', img: '/assets/lap enrekang.png', mapsUrl: 'https://maps.app.goo.gl/E37u4EGyevvYFr9i7' },
  ],
  kesehatan: [
    { title: 'Puskesmas Binalawan', loc: 'Desa Binalawan', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600', mapsUrl: '', waUrl: 'https://wa.me/6281234567890' },
    { title: 'Poskesdes Bambangan', loc: 'Desa Bambangan', img: 'https://images.unsplash.com/photo-1538108197017-c1c46cbdd097?auto=format&fit=crop&q=80&w=600', mapsUrl: '', waUrl: '' },
  ],
  transportasi: [
    { title: 'Dermaga Feri Liang Bunyu', loc: 'Desa Liang Bunyu', img: '/assets/feri.jpeg', mapsUrl: 'https://maps.app.goo.gl/vmAt8wtsTixZjfSU8' },
  ],
  ibadah: [
    { title: 'Masjid At Ataqwa', loc: 'Desa Setabu', img: '/assets/ataqwa.png', mapsUrl: 'https://maps.app.goo.gl/nnfaPjw4dVRvm8bu5' },
    { title: 'Masjid Al-Mustaqim', loc: 'Desa Binalawan', img: '', mapsUrl: 'https://maps.app.goo.gl/LRtHGWbhPHvrxsQe6' },
    { title: 'Masjid Darul Muslimin', loc: 'Desa Liang Bunyu', img: '/assets/muslimin.png', mapsUrl: 'https://maps.app.goo.gl/MLPQCEzo69KxZk9G7' },
    { title: 'Gereja Sidang Jemaat Yesus', loc: 'Desa Liang Bunyu', img: '', mapsUrl: 'https://maps.app.goo.gl/fSRtdwydKEZKGuQw5' },
    { title: 'St. Leonard Catholic Church', loc: 'Desa Liang Bunyu', img: '/assets/gereja.png', mapsUrl: 'https://maps.app.goo.gl/Et7FUSAh1xQYdYms8' },
    { title: ' Pos Pelkes "Immanuel" Bambangan', loc: 'Desa Liang Bunyu', img: '/assets/gereja2.png', mapsUrl: 'https://maps.app.goo.gl/aH9nWiSw3b2yQ1Th9' },
  ],
};

export default function Facilities() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const currentFacilities = facilitiesData[activeTab as keyof typeof facilitiesData];
  const filtered = currentFacilities.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 dark:bg-brand-creme/80 backdrop-blur-md rounded-full text-[10px] font-black text-emerald-500 dark:text-emerald-500 flex items-center gap-2 shadow-lg uppercase tracking-widest">
                      <MapPin size={12} /> {item.loc}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-emerald-900 dark:text-stone-900 mb-6 leading-none tracking-tight group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={item.mapsUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform"
                      >
                        <ExternalLink size={14} /> View in Google Maps
                      </a>
                      {(item as any).waUrl && (
                        <a
                          href={(item as any).waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform"
                        >
                          <Phone size={14} /> Contact WA
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {filtered.length === 0 && (
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
