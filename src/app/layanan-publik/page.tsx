'use client';

import { motion } from 'motion/react';
import { FileText, BookUser, ScrollText, Building, FileCheck, Landmark, Users, Heart, Shield, LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { sanityFetch } from '~/sanity/lib/fetch';
import { publicServicesQuery } from '~/sanity/lib/queries';
import type { SanityPublicService } from '@/types/sanity';

const iconMap: Record<string, LucideIcon> = {
  FileText, BookUser, ScrollText, Building, FileCheck, Landmark, Users, Heart, Shield,
};

export default function LayananPublik() {
  const [services, setServices] = useState<SanityPublicService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        const data = await sanityFetch<SanityPublicService[]>(publicServicesQuery);
        if (mounted) setServices(data || []);
      } catch (err) {
        if (mounted) setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100"
          >
            Pelayanan Publik
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-8 tracking-tighter leading-none">
            Layanan <br />Publik.
          </h1>
          <p className="text-stone-500 dark:text-stone-600 max-w-xl text-xl font-light">
            Berbagai layanan publik yang tersedia di Kecamatan Sebatik Barat.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <p className="col-span-full text-stone-500">Memuat layanan...</p>
          )}
          {error && (
            <p className="col-span-full text-red-600">Gagal memuat data: {error}</p>
          )}
          {services.map((service, i) => {
            const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : FileText;
            const slug = service.slug?.current || '';
            return (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/layanan-publik/${slug}`}
                  className="group block bg-white dark:bg-brand-creme rounded-[2.5rem] border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden p-10"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-300/30 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-black text-emerald-900 dark:text-stone-900 leading-tight tracking-tight group-hover:text-emerald-500 transition-colors mb-4">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-stone-500 dark:text-stone-600 text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  )}
                </Link>
              </motion.div>
            );
          })}
          {!loading && !error && services.length === 0 && (
            <p className="col-span-full text-stone-500">Belum ada layanan tersedia.</p>
          )}
        </div>
      </div>
    </div>
  );
}
