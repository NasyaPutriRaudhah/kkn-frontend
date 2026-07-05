'use client';

import { motion } from 'motion/react';
import { FileText, BookUser, ScrollText, Building, FileCheck, Landmark, Users, Heart, Shield, ArrowLeft, LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { sanityFetch } from '~/sanity/lib/fetch';
import { publicServiceBySlugQuery } from '~/sanity/lib/queries';
import type { SanityPublicService } from '@/types/sanity';

const iconMap: Record<string, LucideIcon> = {
  FileText, BookUser, ScrollText, Building, FileCheck, Landmark, Users, Heart, Shield,
};

export default function LayananDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<SanityPublicService | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        const data = await sanityFetch<SanityPublicService>(publicServiceBySlugQuery, { slug });
        if (mounted) setService(data || null);
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
      <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="text-stone-500">Memuat layanan...</p>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-600">{error || 'Layanan tidak ditemukan.'}</p>
          <Link href="/layanan-publik" className="text-emerald-500 hover:underline mt-4 inline-block">
            Kembali ke Layanan Publik
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : FileText;

  return (
    <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/layanan-publik"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Kembali ke Layanan Publik
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-300/30 rounded-3xl flex items-center justify-center text-emerald-500 mb-8">
            <Icon size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-emerald-900 dark:text-stone-900 mb-8 tracking-tighter leading-none">
            {service.title}
          </h1>
          {service.description && (
            <div className="prose prose-lg dark:prose-invert max-w-none text-stone-600 dark:text-stone-700">
              <p className="text-xl leading-relaxed">{service.description}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
