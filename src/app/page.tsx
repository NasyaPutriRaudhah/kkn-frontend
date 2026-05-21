'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useCallback, useEffect, ReactNode } from 'react';
import { ArrowRight, Users, Map as MapIcon, Calendar, Heart, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { cn } from '../lib/utils';

// Dynamic import for Map to avoid SSR issues
const SebatikMap = dynamic(() => import('../components/SebatikMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-stone-100 dark:bg-stone-200 rounded-2xl animate-pulse flex items-center justify-center">Loading Map...</div>
});

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 via-emerald-700/20 to-transparent z-10" />
          <img 
            src="/assets/hawaii-beach-landscape-with-ocean-view.jpg" 
            alt="Sebatik Landscape" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-left px-6 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-emerald-500/20 backdrop-blur-md text-emerald-50 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 border border-white/20"
          >
            Portal Resmi Kecamatan
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter"
          >
            Welcome to <br />
            <span className="text-emerald-200">Sebatik Barat</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-emerald-50 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Gerbang perbatasan kedaulatan bangsa dengan potensi sumber daya alam dan budaya yang melimpah.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-6"
          >
            <Link 
              href="/profil" 
              className="bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:bg-stone-50 flex items-center gap-2 group"
            >
              Lihat Profil <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => document.getElementById('statistik')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/10"
            >
              Data Statistik
            </button>
          </motion.div>
        </div>


      </section>

      {/* Statistics Section */}
      <section id="statistik" className="py-24 px-6 relative bg-stone-50 dark:bg-brand-creme">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<Users className="text-emerald-500" />} label="Populasi" value="18,450+" sub="Jiwa Terdaftar" />
            <StatCard icon={<MapIcon className="text-emerald-500" />} label="Luas Wilayah" value="95.2" sub="Kilometer Persegi" dark />
            <StatCard icon={<Compass className="text-emerald-500" />} label="Desa" value="4" sub="Terintegrasi" />
            <StatCard icon={<Heart className="text-emerald-500" />} label="Kultivasi SDA" value="12" sub="Sektor Unggulan" dark />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-stone-100/50 dark:bg-brand-creme/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-900 mb-4">Peta Kewilayahan</h2>
            <p className="text-stone-600 dark:text-stone-600 max-w-2xl mx-auto">Strategis di garda terdepan, Sebatik Barat membawahi 4 desa mandiri yang terus berkembang pesat.</p>
          </div>
          <SebatikMap />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-stone-50 dark:bg-brand-creme">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200" 
              alt="Indonesian Government Building" 
              className="rounded-3xl shadow-2xl relative z-10 w-full aspect-video object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4 block">Tentang Sebatik Barat</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-stone-900 mb-8">Harmoni Pembangunan di Batas Negeri</h2>
            <p className="text-stone-500 dark:text-stone-600 mb-8 leading-relaxed">
              Kecamatan Sebatik Barat merupakan salah satu pilar kedaulatan di Kabupaten Nunukan. Kami berkomitmen untuk menghadirkan pelayanan publik yang modern, transparan, dan berorientasi pada kesejahteraan seluruh lapisan masyarakat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500">
                <h4 className="font-bold mb-2">Visi</h4>
                <p className="text-sm text-stone-500 italic">"Terwujudnya Sebatik Barat yang Mandiri, Sejahtera, dan Inovatif."</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500">
                <h4 className="font-bold mb-2">Misi</h4>
                <p className="text-sm text-stone-500 italic">"Optimalisasi potensi desa melalui digitalisasi dan kebudayaan lokal."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 px-6 bg-stone-100/50 dark:bg-brand-creme/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-emerald-900 dark:text-stone-900 mb-4">Berita Terkini</h2>
              <p className="text-stone-500 dark:text-stone-600">Informasi terbaru seputar kegiatan pemerintahan dan masyarakat.</p>
            </div>
            <button className="flex items-center gap-2 text-emerald-500 font-bold border-b-2 border-emerald-500/20 hover:border-emerald-500 transition-all pb-1">
              Semua Berita <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard 
              image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
              date="12 Mei 2026"
              title="Pembangunan Infrastruktur Digital di Desa Binalawan Capai 90%"
              desc="Upaya percepatan digitalisasi pelayanan publik di Sebatik Barat memasuki tahap final."
            />
            <NewsCard 
              image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
              date="10 Mei 2026"
              title="Festival Budaya Melayu Sebatik 2026 Berlangsung Meriah"
              desc="Ratusan peserta memadati pesisir Liang Bunyu untuk merayakan warisan leluhur."
            />
            <NewsCard 
              image="https://images.unsplash.com/photo-1512413919939-d4000798bd05?auto=format&fit=crop&q=80&w=800"
              date="08 Mei 2026"
              title="Optimalisasi Rumput Laut Melalui Koperasi UMKM"
              desc="Pemerintah kecamatan mendorong pembentukan koperasi untuk pengolahan hasil laut."
            />
          </div>
        </div>
      </section>

      {/* Digital Flipbook Section */}
      <section className="py-24 px-6 bg-stone-50 dark:bg-brand-creme">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-stone-900 mb-4">Explore Sebatik Barat</h2>
          <p className="text-stone-500 dark:text-stone-600">Buka lembaran pesona alam dan budaya kami dalam katalog digital interaktif.</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <DigitalBook />
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon, label, value, sub, dark }: { icon: ReactNode, label: string, value: string, sub: string, dark?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "rounded-[2rem] p-8 flex flex-col justify-center transition-all duration-300",
        dark 
          ? "bg-emerald-500 text-white shadow-xl shadow-emerald-100 dark:shadow-none" 
          : "bg-white dark:bg-brand-creme border border-emerald-50 dark:border-stone-300 shadow-sm"
      )}
    >
      <span className={cn("text-xs font-bold uppercase tracking-wider mb-2", dark ? "text-emerald-100" : "text-emerald-500")}>{label}</span>
      <div className="text-4xl font-black mb-1">{value}</div>
      <span className={cn("text-[10px] font-medium opacity-60", dark ? "text-emerald-100" : "text-stone-400")}>{sub}</span>
    </motion.div>
  );
}

function NewsCard({ image, date, title, desc }: { image: string, date: string, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-brand-creme rounded-[2rem] p-6 border border-emerald-100 dark:border-stone-300 shadow-sm flex flex-col group"
    >
      <div className="w-full h-40 bg-stone-100 dark:bg-stone-200 rounded-2xl mb-6 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-3">
        <Calendar size={12} /> {date}
      </div>
      <h3 className="text-lg font-bold text-emerald-900 dark:text-stone-900 leading-tight mb-4 group-hover:text-emerald-500 transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="text-xs text-stone-500 dark:text-stone-600 leading-relaxed mb-6 line-clamp-3">
        {desc}
      </p>
      <div className="mt-auto flex items-center gap-2 text-emerald-700 dark:text-emerald-500 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
        Baca Selengkapnya <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

function DigitalBook() {
  const pages = [
    { title: "Pesisir Nan Indah", desc: "Pantai berpasir putih dengan lambaian nyiur yang menenangkan jiwa.", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800" },
    { title: "Kekayaan Laut", desc: "Hasil laut yang melimpah menjadi sumber penghidupan utama warga Liang Bunyu.", img: "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?auto=format&fit=crop&q=80&w=800" },
    { title: "Harmoni Budaya", desc: "Tradisi leluhur yang terus dijaga sebagai jati diri bangsa di perbatasan.", img: "https://images.unsplash.com/photo-1520110120185-bc3fcc293683?auto=format&fit=crop&q=80&w=800" },
    { title: "Pusat UMKM", desc: "Produk lokal berkualitas yang mulai merambah pasar mancanegara.", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66bc?auto=format&fit=crop&q=80&w=800" },
    { title: "Wisata Alam", desc: "Pesona alam yang masih asri menjadi daya tarik utama para wisatawan.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" },
    { title: "Kerajinan Tangan", desc: "Keterampilan warga yang diwariskan secara turun-temurun.", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.85 + 24;
    scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
  };

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = clientWidth * 0.85 + 24;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(idx, pages.length - 1));
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollRef.current.scrollWidth - clientWidth - 20);
  }, [pages.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {pages.map((page, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-brand-creme border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={page.img}
                alt={page.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="w-8 h-0.5 bg-emerald-400 mb-4 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">{page.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed line-clamp-2">{page.desc}</p>
            </div>
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-black">
              {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Arrow buttons */}
      {showLeftArrow && (
        <button
          onClick={() => scrollTo(activeIdx - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-brand-creme shadow-xl border border-emerald-50 dark:border-stone-300 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-all z-10 hidden sm:flex"
        >
          <ChevronLeft size={22} />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scrollTo(activeIdx + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-brand-creme shadow-xl border border-emerald-50 dark:border-stone-300 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-all z-10 hidden sm:flex"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              "rounded-full transition-all",
              i === activeIdx
                ? "w-8 h-2 bg-emerald-500"
                : "w-2 h-2 bg-stone-300 dark:bg-stone-500 hover:bg-stone-400"
            )}
          />
        ))}
      </div>
    </div>
  );
}
