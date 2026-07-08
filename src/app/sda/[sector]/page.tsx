'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { Waves, Leaf, Landmark, TreePine, ArrowLeft, Eye, Lightbulb, LucideIcon } from 'lucide-react';
import { sanityFetch } from '~/sanity/lib/fetch';
import { sectorItemsQuery, mangrovesQuery } from '~/sanity/lib/queries';
import type { SanitySectorItem, SanityMangrove } from '@/types/sanity';

const sectorMeta: Record<string, { title: string; icon: LucideIcon; color: string; desc: string }> = {
  perikanan: { title: 'Sektor Perikanan', icon: Waves, color: 'blue', desc: 'Potensi dan hasil perikanan di Sebatik Barat.' },
  perkebunan: { title: 'Sektor Perkebunan', icon: Leaf, color: 'green', desc: 'Komoditas perkebunan yang menjadi andalan ekonomi.' },
  pariwisata: { title: 'Sektor Pariwisata', icon: Landmark, color: 'orange', desc: 'Destinasi wisata alam dan budaya Sebatik Barat.' },
  mangrove: { title: 'Ekosistem Mangrove', icon: TreePine, color: 'emerald', desc: 'Hutan mangrove Sebatik Barat dengan keanekaragaman hayati luar biasa.' },
};

export default function SectorDetail() {
  const { sector } = useParams<{ sector: string }>();
  const [items, setItems] = useState<SanitySectorItem[]>([]);
  const [mangroves, setMangroves] = useState<SanityMangrove[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const meta = sectorMeta[sector];
  const isMangrove = sector === 'mangrove';

  useEffect(() => {
    if (!meta) { setLoading(false); return; }
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        if (isMangrove) {
          const data = await sanityFetch<SanityMangrove[]>(mangrovesQuery);
          if (mounted) setMangroves(data || []);
        } else {
          const data = await sanityFetch<SanitySectorItem[]>(sectorItemsQuery, { sector });
          if (mounted) setItems(data || []);
        }
      } catch (err) {
        if (mounted) setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [sector]);

  if (!meta) {
    return (
      <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-600">Sektor tidak ditemukan.</p>
          <Link href="/sda" className="text-emerald-500 hover:underline mt-4 inline-block">Kembali ke SDA</Link>
        </div>
      </div>
    );
  }

  const Icon = meta.icon;
  const dataLength = isMangrove ? mangroves.length : items.length;

  return (
    <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/sda"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Kembali ke SDA
        </Link>

        <header className="mb-24">
          <div className="flex items-center gap-6 mb-8">
            <div className={cn(
              "w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-sm",
              meta.color === 'blue' ? "bg-emerald-50 text-emerald-500" :
              meta.color === 'green' ? "bg-emerald-100 text-emerald-600" :
              meta.color === 'orange' ? "bg-orange-100 text-orange-600" :
              meta.color === 'emerald' ? "bg-emerald-100 text-emerald-600" :
              "bg-amber-100 text-amber-600"
            )}>
              <Icon size={36} />
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border border-emerald-100"
              >
                Sumber Daya Alam
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black text-emerald-900 dark:text-stone-900 tracking-tighter leading-none">
                {meta.title}
              </h1>
            </div>
          </div>
          <p className="text-stone-500 dark:text-stone-600 text-xl font-light max-w-2xl">{meta.desc}</p>
        </header>

        {loading && <p className="text-stone-500">Memuat data...</p>}
        {error && <p className="text-red-600">Gagal memuat data: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {isMangrove
            ? mangroves.map((item, i) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white dark:bg-brand-creme rounded-[3rem] overflow-hidden border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-700 group"
                >
                  {item.fotoUrl && (
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.fotoUrl}
                        alt={item.jenis}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="p-10 space-y-6">
                    <h3 className="text-2xl font-black text-emerald-900 dark:text-stone-900 tracking-tight flex items-center gap-3">
                      <TreePine size={24} className="text-emerald-500 shrink-0" />
                      {item.jenis}
                    </h3>
                    {item.ciriCiri && (
                      <div>
                        <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">
                          <Eye size={14} /> Ciri-ciri
                        </div>
                        <p className="text-stone-600 dark:text-stone-500 text-sm leading-relaxed whitespace-pre-line">
                          {item.ciriCiri}
                        </p>
                      </div>
                    )}
                    {item.potensiPemanfaatan && (
                      <div>
                        <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">
                          <Lightbulb size={14} /> Potensi Pemanfaatan
                        </div>
                        <p className="text-stone-600 dark:text-stone-500 text-sm leading-relaxed whitespace-pre-line">
                          {item.potensiPemanfaatan}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            : items.map((item, i) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white dark:bg-brand-creme rounded-[3rem] overflow-hidden border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-700 group"
                >
                  {item.imageUrl && (
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="p-10 space-y-6">
                    <h3 className="text-2xl font-black text-emerald-900 dark:text-stone-900 tracking-tight flex items-center gap-3">
                      <Icon size={24} className="text-emerald-500 shrink-0" />
                      {item.title}
                    </h3>
                    {item.description && (
                      <div>
                        <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">
                          <Eye size={14} /> Deskripsi
                        </div>
                        <p className="text-stone-600 dark:text-stone-500 text-sm leading-relaxed whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    )}
                    {item.potensi && (
                      <div>
                        <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-2">
                          <Lightbulb size={14} /> Potensi
                        </div>
                        <p className="text-stone-600 dark:text-stone-500 text-sm leading-relaxed whitespace-pre-line">
                          {item.potensi}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
        </div>

        {!loading && !error && dataLength === 0 && (
          <p className="text-stone-500 text-center">Belum ada data. Isi melalui Studio Sanity.</p>
        )}
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
