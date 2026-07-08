'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { sanityFetch } from '~/sanity/lib/fetch';
import { publicServicesQuery } from '~/sanity/lib/queries';
import type { SanityPublicService } from '@/types/sanity';

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
        <header className="mb-12">
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

        {loading && <p className="text-stone-500">Memuat layanan...</p>}
        {error && <p className="text-red-600">Gagal memuat data: {error}</p>}

        {!loading && !error && services.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse bg-white dark:bg-brand-creme rounded-[2.5rem] overflow-hidden shadow-sm border border-emerald-50 dark:border-stone-300">
              <thead>
                <tr className="bg-emerald-900 dark:bg-emerald-800 text-white">
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider w-16">No</th>
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider">Kategori</th>
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider">Jenis Pelayanan</th>
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider">Persyaratan</th>
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, i) => (
                  <motion.tr
                    key={service._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="border-b border-emerald-50 dark:border-stone-200 last:border-b-0 hover:bg-emerald-50/50 dark:hover:bg-emerald-300/5 transition-colors"
                  >
                    <td className="px-6 py-5 text-stone-600 dark:text-stone-700 font-semibold text-sm">{service.nomor}</td>
                    <td className="px-6 py-5">
                      <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-300/20 text-emerald-700 dark:text-emerald-500 rounded-full text-xs font-bold uppercase tracking-wider">
                        {service.kategori}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-emerald-900 dark:text-stone-900 font-bold">{service.jenisPelayanan}</td>
                    <td className="px-6 py-5 text-stone-600 dark:text-stone-700 text-sm leading-relaxed whitespace-pre-line">
                      {service.persyaratan || '-'}
                    </td>
                    <td className="px-6 py-5 text-stone-500 dark:text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                      {service.keterangan || '-'}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {!loading && !error && services.length === 0 && (
          <p className="text-stone-500">Belum ada layanan tersedia.</p>
        )}
      </div>
    </div>
  );
}
