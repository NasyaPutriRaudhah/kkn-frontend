'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import type { SanityNews } from '@/types/sanity';

export default function BeritaListClient({ newsItems }: { newsItems: SanityNews[] }) {
  return (
    <div className="pt-32 pb-24 px-6 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>

        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-emerald-100"
          >
            Informasi Terkini
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-emerald-900 dark:text-stone-900 tracking-tighter leading-none mb-4">
            Berita
          </h1>
          <p className="text-stone-500 dark:text-stone-600 text-xl font-light max-w-2xl">
            Informasi terbaru seputar kegiatan pemerintahan dan masyarakat Kecamatan Sebatik Barat.
          </p>
        </header>

        {newsItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/berita/${item.slug?.current || ''}`} className="block group">
                  <div className="bg-white dark:bg-brand-creme rounded-[2rem] p-6 border border-emerald-100 dark:border-stone-300 shadow-sm flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                    <div className="w-full h-48 bg-stone-100 dark:bg-stone-200 rounded-2xl mb-6 overflow-hidden relative">
                      {item.thumbnailUrl ? (
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : null}
                    </div>
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-3">
                      <Calendar size={12} /> {item.publishedDate || '-'}
                    </div>
                    <h3 className="text-lg font-bold text-emerald-900 dark:text-stone-900 leading-tight mb-4 group-hover:text-emerald-500 transition-colors line-clamp-2">
                      {item.title || 'Judul Berita'}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-600 leading-relaxed mb-6 line-clamp-3">
                      {item.content || 'Konten berita dari Studio Sanity.'}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-emerald-700 dark:text-emerald-500 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Baca Selengkapnya <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-stone-500 text-center py-20">
            Belum ada berita. Tambahkan data di Studio Sanity.
          </p>
        )}
      </div>
    </div>
  );
}
