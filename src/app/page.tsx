'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, ReactNode } from 'react';
import { ArrowRight, Users, Map as MapIcon, Calendar, Heart, Compass } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto h-[500px]">
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
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [turnPage, setTurnPage] = useState<'right' | 'left' | null>(null);
  const [nextContent, setNextContent] = useState<typeof pages[0] | null>(null);

  const pages = [
    { title: "Pesisir Nan Indah", desc: "Pantai berpasir putih dengan lambaian nyiur yang menenangkan jiwa.", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800" },
    { title: "Kekayaan Laut", desc: "Hasil laut yang melimpah menjadi sumber penghidupan utama warga Liang Bunyu.", img: "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?auto=format&fit=crop&q=80&w=800" },
    { title: "Harmoni Budaya", desc: "Tradisi leluhur yang terus dijaga sebagai jati diri bangsa di perbatasan.", img: "https://images.unsplash.com/photo-1520110120185-bc3fcc293683?auto=format&fit=crop&q=80&w=800" },
    { title: "Pusat UMKM", desc: "Produk lokal berkualitas yang mulai merambah pasar mancanegara.", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66bc?auto=format&fit=crop&q=80&w=800" },
    { title: "Wisata Alam", desc: "Pesona alam yang masih asri menjadi daya tarik utama para wisatawan.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" },
    { title: "Kerajinan Tangan", desc: "Keterampilan warga yang diwariskan secara turun-temurun.", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800" },
  ];

  const nextSpread = () => {
    if (isAnimating || currentSpread >= Math.ceil(pages.length / 2) - 1) return;
    setIsAnimating(true);
    const nextIdx = currentSpread * 2 + 2;
    if (nextIdx < pages.length) {
      setNextContent(pages[nextIdx]);
      setTurnPage('right');
      setTimeout(() => {
        setCurrentSpread(s => s + 1);
        setTurnPage(null);
        setNextContent(null);
        setTimeout(() => setIsAnimating(false), 100);
      }, 700);
    }
  };

  const prevSpread = () => {
    if (isAnimating || currentSpread <= 0) return;
    setIsAnimating(true);
    const prevIdx = currentSpread * 2 - 1;
    if (prevIdx >= 0) {
      setNextContent(pages[prevIdx]);
      setTurnPage('left');
      setTimeout(() => {
        setCurrentSpread(s => s - 1);
        setTurnPage(null);
        setNextContent(null);
        setTimeout(() => setIsAnimating(false), 100);
      }, 700);
    }
  };

  const spreadPages = pages.slice(currentSpread * 2, currentSpread * 2 + 2);
  const totalSpreads = Math.ceil(pages.length / 2);

  return (
    <div className="relative w-full h-full flex flex-col items-center gap-8">
      <div className="book-container relative w-full max-w-5xl mx-auto h-[420px] md:h-[520px]">
        <div className="absolute -bottom-2 left-[5%] right-[5%] h-6 bg-black/10 dark:bg-black/30 blur-xl rounded-full" />
        
        <div className="relative w-full h-full bg-[#e8e0d0] dark:bg-[#c4bca8] rounded-2xl shadow-2xl p-3 md:p-4 flex">
          {/* Left page */}
          <div className="relative w-1/2 h-full pr-[2px]">
            {spreadPages[0] && (
              <PageFace
                page={spreadPages[0]}
                turnContent={turnPage === 'left' ? nextContent : null}
                turning={turnPage === 'left'}
                pageNum={currentSpread * 2 + 1}
              />
            )}
            {!spreadPages[0] && <EmptyPage />}
          </div>

          {/* Spine */}
          <div className="w-3 md:w-4 relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4cbb8] via-[#c0b6a0] to-[#d4cbb8] dark:from-[#b0a690] dark:via-[#9e9480] dark:to-[#b0a690] rounded-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
          </div>

          {/* Right page */}
          <div className="relative w-1/2 h-full pl-[2px]">
            {spreadPages[1] && (
              <PageFace
                page={spreadPages[1]}
                turnContent={turnPage === 'right' ? nextContent : null}
                turning={turnPage === 'right'}
                pageNum={currentSpread * 2 + 2}
              />
            )}
            {!spreadPages[1] && <EmptyPage />}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <button
          onClick={prevSpread}
          disabled={currentSpread === 0 || isAnimating}
          className="px-6 py-3 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest disabled:opacity-30 hover:bg-emerald-600 transition-all shadow-lg flex items-center gap-2"
        >
          <span className="text-base">&larr;</span> Sebelumnya
        </button>
        <div className="flex items-center gap-3">
          {Array.from({ length: totalSpreads }).map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!isAnimating) { setCurrentSpread(i); } }}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentSpread === i
                  ? "bg-emerald-500 scale-125 shadow-md"
                  : "bg-stone-300 dark:bg-stone-500 hover:bg-stone-400"
              )}
            />
          ))}
        </div>
        <button
          onClick={nextSpread}
          disabled={currentSpread >= totalSpreads - 1 || isAnimating}
          className="px-6 py-3 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest disabled:opacity-30 hover:bg-emerald-600 transition-all shadow-lg flex items-center gap-2"
        >
          Selanjutnya <span className="text-base">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

function PageFace({ page, turnContent, turning, pageNum }: {
  page: { title: string; desc: string; img: string }, turnContent: typeof page | null, turning: boolean, pageNum: number
}) {
  return (
    <div className="relative w-full h-full [perspective:1500px]">
      <div
        className={cn(
          "relative w-full h-full [transform-style:preserve-3d] transition-transform duration-[0.7s] ease-[cubic-bezier(0.645,0.045,0.355,1)]",
          turning && "[transform:rotateY(-180deg)]"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden shadow-inner">
          <img src={page.img} alt={page.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 md:p-8 text-left">
            <h3 className="text-lg md:text-2xl font-serif font-bold text-white mb-1">{page.title}</h3>
            <p className="text-white/60 text-xs md:text-sm max-w-xs leading-relaxed">{page.desc}</p>
          </div>
          <div className="absolute bottom-3 right-4 text-[10px] text-white/40 font-bold uppercase tracking-widest">
            {pageNum}
          </div>
        </div>
        {/* Back — shows the new page content being turned to */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden shadow-inner">
          {turnContent ? (
            <>
              <img src={turnContent.img} alt={turnContent.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 md:p-8 text-left">
                <h3 className="text-lg md:text-2xl font-serif font-bold text-white mb-1">{turnContent.title}</h3>
                <p className="text-white/60 text-xs md:text-sm max-w-xs leading-relaxed">{turnContent.desc}</p>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-[#FCFBF4] dark:bg-[#d8d1c1] flex items-center justify-center">
              <div className="w-8 h-0.5 bg-emerald-200" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyPage() {
  return (
    <div className="w-full h-full rounded-xl bg-[#f5efe0] dark:bg-[#c8c0ac] flex items-center justify-center">
      <p className="text-stone-400 dark:text-stone-500 text-xs font-medium">Kosong</p>
    </div>
  );
}
