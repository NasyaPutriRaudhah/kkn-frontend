'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, AlertCircle } from 'lucide-react';
import { sanityFetch } from '~/sanity/lib/fetch';
import { newsBySlugQuery } from '~/sanity/lib/queries';
import type { SanityNews } from '@/types/sanity';

export default function BeritaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [news, setNews] = useState<SanityNews | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        const data = await sanityFetch<SanityNews>(newsBySlugQuery, { slug });
        if (mounted) setNews(data);
      } catch (err) {
        if (mounted) setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 px-6 bg-stone-50 dark:bg-brand-creme min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="text-stone-500">Memuat berita...</p>
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="pt-32 pb-24 px-6 bg-stone-50 dark:bg-brand-creme min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-red-500 mb-4">
            <AlertCircle size={20} />
            <p>Berita tidak ditemukan.</p>
          </div>
          <Link href="/berita" className="text-emerald-500 hover:underline inline-block">
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Kembali ke Berita
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-4">
            <Calendar size={12} /> {news.publishedDate || '-'}
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-emerald-900 dark:text-stone-900 tracking-tight leading-tight mb-8">
            {news.title}
          </h1>

          {news.thumbnailUrl && (
            <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-10">
              <img
                src={news.thumbnailUrl}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="text-stone-600 dark:text-stone-500 text-lg leading-relaxed whitespace-pre-line">
              {news.content || 'Konten berita belum tersedia.'}
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
