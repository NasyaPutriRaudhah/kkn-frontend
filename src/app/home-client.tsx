'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useCallback, useEffect, ReactNode } from 'react';
import { ArrowRight, Users, Map as MapIcon, Calendar, Compass, ChevronLeft, ChevronRight, Briefcase, Building2, BookOpen, Target, Handshake, GraduationCap, Hospital, Route } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { cn } from '../lib/utils';
import type { SanityNews, SanityTourism, SanityKknProgram, SanityStatistic, SanityProfil } from '@/types/sanity';

const SebatikMap = dynamic(() => import('../components/SebatikMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-stone-100 dark:bg-stone-200 rounded-2xl animate-pulse flex items-center justify-center">
      Loading Map...
    </div>
  ),
});

type HomeClientProps = {
  newsItems: SanityNews[];
  tourismItems: SanityTourism[];
  kknItems: SanityKknProgram[];
  statistics: SanityStatistic[];
  profil: SanityProfil | null;
};

export default function HomeClient({ newsItems, tourismItems, kknItems, statistics, profil }: HomeClientProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="overflow-hidden">
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 via-emerald-700/20 to-transparent z-10" />
          <img src="/assets/4.jpg" alt="Sebatik Landscape" className="w-full h-full object-cover" />
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

      <section id="statistik" className="py-24 px-6 relative bg-stone-50 dark:bg-brand-creme">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {statistics.length > 0 ? (
              statistics.map((stat) => (
                <StatCard
                  key={stat._id}
                  icon={<StatIcon name={stat.icon} className="text-emerald-500" />}
                  label={stat.label}
                  value={stat.value}
                  sub={stat.sub || ''}
                  dark={stat.dark}
                />
              ))
            ) : (
              <>
                <StatCard icon={<Users className="text-emerald-500" />} label="Populasi" value="18,450+" sub="Jiwa Terdaftar" />
                <StatCard icon={<MapIcon className="text-emerald-500" />} label="Luas Wilayah" value="95.2" sub="Kilometer Persegi" dark />
                <StatCard icon={<Compass className="text-emerald-500" />} label="Desa" value="4" sub="Terintegrasi" />
                <StatCard icon={<Briefcase className="text-emerald-500" />} label="ASN Kecamatan" value="45+" sub="Aparatur Sipil Negara" dark />
                <StatCard icon={<Building2 className="text-emerald-500" />} label="Perangkat Desa" value="80+" sub="Seluruh Desa" />
                <StatCard icon={<Calendar className="text-emerald-500" />} label="Event Tahunan" value="12+" sub="Festival & Budaya" dark />
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-100/50 dark:bg-brand-creme/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-900 mb-4">Peta Kewilayahan</h2>
            <p className="text-stone-600 dark:text-stone-600 max-w-2xl mx-auto">
              Strategis di garda terdepan, Sebatik Barat membawahi 4 desa mandiri yang terus berkembang pesat.
            </p>
          </div>
          <SebatikMap />
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-50 dark:bg-brand-creme">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200"
              alt="Indonesian Government Building"
              className="rounded-3xl shadow-2xl relative z-10 w-full aspect-video object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4 block">Tentang Sebatik Barat</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-stone-900 mb-8">Harmoni Pembangunan di Batas Negeri</h2>
            <p className="text-stone-500 dark:text-stone-600 mb-8 leading-relaxed">
              Kecamatan Sebatik Barat merupakan salah satu pilar kedaulatan di Kabupaten Nunukan. Kami berkomitmen untuk menghadirkan pelayanan publik yang modern, transparan, dan berorientasi pada kesejahteraan seluruh lapisan masyarakat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500">
                <h4 className="font-bold mb-2">Visi</h4>
                <p className="text-sm text-stone-500 italic">&quot;{profil?.visi || 'Terwujudnya Sebatik Barat yang Mandiri, Sejahtera, dan Inovatif.'}&quot;</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500">
                <h4 className="font-bold mb-2">Misi</h4>
                <p className="text-sm text-stone-500 italic">&quot;{profil?.misi || 'Optimalisasi potensi desa melalui digitalisasi dan kebudayaan lokal.'}&quot;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-100/50 dark:bg-brand-creme/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-emerald-900 dark:text-stone-900 mb-4">Berita Terkini</h2>
              <p className="text-stone-500 dark:text-stone-600">Informasi terbaru seputar kegiatan pemerintahan dan masyarakat.</p>
            </div>
            <Link href="/berita" className="flex items-center gap-2 text-emerald-500 font-bold border-b-2 border-emerald-500/20 hover:border-emerald-500 transition-all pb-1">
              Semua Berita <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.length > 0 ? (
              newsItems.map((item) => (
                <NewsCard
                  key={item._id}
                  image={item.thumbnailUrl || ''}
                  date={item.publishedDate || '-'}
                  title={item.title || 'Judul Berita'}
                  desc={item.content || 'Konten berita dari Studio Sanity.'}
                  slug={item.slug?.current || ''}
                />
              ))
            ) : (
              <p className="text-stone-500 col-span-full">
                Belum ada berita. Tambahkan data di Studio Sanity.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-50 dark:bg-brand-creme">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-stone-900 mb-4">Explore Sebatik Barat</h2>
          <p className="text-stone-500 dark:text-stone-600">Buka lembaran pesona alam dan budaya kami dalam katalog digital interaktif.</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <DigitalBook tourismItems={tourismItems} kknItems={kknItems} />
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-100/50 dark:bg-brand-creme/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-200"
            >
              Program Pengabdian
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-stone-900 mb-4">KKN PPM UGM Taka Sebatik</h2>
            <p className="text-stone-500 dark:text-stone-600 max-w-2xl mx-auto text-lg font-light">
              Program Kerja Mahasiswa KKN PPM Universitas Gadjah Mada di Kecamatan Sebatik Barat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-brand-creme rounded-[2rem] p-8 border border-emerald-100 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen size={24} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 dark:text-stone-900 mb-3">Pendidikan & Literasi</h3>
              <p className="text-stone-500 dark:text-stone-600 text-sm leading-relaxed">
                Program peningkatan literasi digital dan pendidikan bagi masyarakat desa melalui workshop dan bimbingan belajar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-brand-creme rounded-[2rem] p-8 border border-emerald-100 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target size={24} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 dark:text-stone-900 mb-3">Pemberdayaan Ekonomi</h3>
              <p className="text-stone-500 dark:text-stone-600 text-sm leading-relaxed">
                Penguatan UMKM dan pengembangan potensi ekonomi lokal melalui pelatihan pemasaran digital dan manajemen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-brand-creme rounded-[2rem] p-8 border border-emerald-100 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Handshake size={24} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 dark:text-stone-900 mb-3">Lingkungan & Sosial</h3>
              <p className="text-stone-500 dark:text-stone-600 text-sm leading-relaxed">
                Kegiatan pelestarian lingkungan hidup dan penguatan kapasitas masyarakat di bidang kesehatan.
              </p>
            </motion.div>
          </div>

          {kknItems.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-stone-900 mb-8 text-center">Dokumentasi Kegiatan</h3>
              <KknCarousel items={kknItems} />
            </div>
          )}

          <div className="text-center mt-12">
            <p className="text-stone-400 dark:text-stone-500 text-sm">
              Universitas Gadjah Mada &middot; Program Pemberdayaan Masyarakat &middot; Kecamatan Sebatik Barat
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatIcon({ name, className }: { name?: string; className?: string }) {
  switch (name) {
    case 'map': return <MapIcon className={className} />;
    case 'compass': return <Compass className={className} />;
    case 'briefcase': return <Briefcase className={className} />;
    case 'building': return <Building2 className={className} />;
    case 'calendar': return <Calendar className={className} />;
    case 'graduation': return <GraduationCap className={className} />;
    case 'hospital': return <Hospital className={className} />;
    case 'road': return <Route className={className} />;
    default: return <Users className={className} />;
  }
}

function StatCard({ icon, label, value, sub, dark }: { icon: ReactNode; label: string; value: string; sub: string; dark?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        'rounded-[2rem] p-8 flex flex-col justify-center transition-all duration-300',
        dark
          ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-100 dark:shadow-none'
          : 'bg-white dark:bg-brand-creme border border-emerald-50 dark:border-stone-300 shadow-sm'
      )}
    >
      <span className={cn('text-xs font-bold uppercase tracking-wider mb-2', dark ? 'text-emerald-100' : 'text-emerald-500')}>{label}</span>
      <div className="text-4xl font-black mb-1">{value}</div>
      <span className={cn('text-[10px] font-medium opacity-60', dark ? 'text-emerald-100' : 'text-stone-400')}>{sub}</span>
    </motion.div>
  );
}

function NewsCard({ image, date, title, desc, slug }: { image: string; date: string; title: string; desc: string; slug: string }) {
  return (
    <Link href={`/berita/${slug}`} className="block group">
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white dark:bg-brand-creme rounded-[2rem] p-6 border border-emerald-100 dark:border-stone-300 shadow-sm flex flex-col h-full hover:shadow-2xl transition-all duration-500"
      >
        <div className="w-full h-40 bg-stone-100 dark:bg-stone-200 rounded-2xl mb-6 overflow-hidden relative">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : null}
        </div>
        <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-3">
          <Calendar size={12} /> {date}
        </div>
        <h3 className="text-lg font-bold text-emerald-900 dark:text-stone-900 leading-tight mb-4 group-hover:text-emerald-500 transition-colors line-clamp-2">{title}</h3>
        <p className="text-xs text-stone-500 dark:text-stone-600 leading-relaxed mb-6 line-clamp-3">{desc}</p>
        <div className="mt-auto flex items-center gap-2 text-emerald-700 dark:text-emerald-500 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          Baca Selengkapnya <ArrowRight size={14} />
        </div>
      </motion.div>
    </Link>
  );
}

function DigitalBook({
  tourismItems,
  kknItems,
}: {
  tourismItems: SanityTourism[];
  kknItems: SanityKknProgram[];
}) {
  const pages = [
    ...tourismItems.map((item) => ({
      title: item.name || 'Wisata',
      desc: item.description || 'Data destinasi wisata dari Studio Sanity.',
      img: item.imageUrl || '',
    })),
    ...kknItems.map((item) => ({
      title: item.title || 'Program KKN',
      desc: item.description || 'Data program KKN dari Studio Sanity.',
      img: item.documentationUrls?.[0] || '',
    })),
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
    setActiveIdx(Math.min(idx, Math.max(pages.length - 1, 0)));
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

  if (pages.length === 0) {
    return <p className="text-stone-500">Belum ada data wisata/program KKN. Tambahkan data di Studio Sanity.</p>;
  }

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
            <div className="aspect-[3/4] overflow-hidden relative">
              {page.img ? (
                <img src={page.img} alt={page.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full bg-stone-200" />
              )}
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

      <div className="flex items-center justify-center gap-2 mt-8">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              'rounded-full transition-all',
              i === activeIdx ? 'w-8 h-2 bg-emerald-500' : 'w-2 h-2 bg-stone-300 dark:bg-stone-500 hover:bg-stone-400'
            )}
          />
        ))}
      </div>
    </div>
  );
}

function KknCarousel({ items }: { items: SanityKknProgram[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[idx] as HTMLElement;
    if (!card) return;
    scrollRef.current.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
  };

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, children } = scrollRef.current;
    let closest = 0;
    let minDist = Infinity;
    Array.from(children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft - scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIdx(closest);
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative group/carousel">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="snap-start shrink-0 w-[80%] sm:w-[50%] lg:w-[30%]"
          >
            <div className="bg-white dark:bg-brand-creme rounded-2xl overflow-hidden border border-emerald-100 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500 group h-full">
              {item.documentationUrls?.[0] ? (
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.documentationUrls[0]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white text-xs font-bold drop-shadow-lg line-clamp-2">{item.title}</p>
                  </div>
                </div>
              ) : (
                <div className="h-56 bg-stone-100 dark:bg-stone-200 flex items-center justify-center">
                  <Calendar size={32} className="text-stone-300" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Calendar size={10} /> {item.date || '-'}
                </div>
                <h4 className="text-emerald-900 dark:text-stone-900 font-bold mb-2 line-clamp-1">{item.title}</h4>
                <p className="text-stone-500 dark:text-stone-600 text-xs leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showLeft && (
        <button
          onClick={() => scrollTo(activeIdx - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white dark:bg-brand-creme shadow-xl border border-emerald-100 dark:border-stone-300 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:scale-110 transition-all z-10 opacity-0 group-hover/carousel:opacity-100 duration-300"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {showRight && (
        <button
          onClick={() => scrollTo(activeIdx + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white dark:bg-brand-creme shadow-xl border border-emerald-100 dark:border-stone-300 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:scale-110 transition-all z-10 opacity-0 group-hover/carousel:opacity-100 duration-300"
        >
          <ChevronRight size={20} />
        </button>
      )}

      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              'rounded-full transition-all duration-300',
              i === activeIdx ? 'w-8 h-2 bg-emerald-500' : 'w-2 h-2 bg-stone-300 dark:bg-stone-500 hover:bg-stone-400'
            )}
          />
        ))}
      </div>
    </div>
  );
}
