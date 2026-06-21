'use client';

import { motion } from 'motion/react';
import { FileText, ExternalLink, FileSpreadsheet, FileImage, File } from 'lucide-react';
import { useEffect, useState } from 'react';
import { sanityFetch } from '~/sanity/lib/fetch';
import { produkHukumQuery } from '~/sanity/lib/queries';
import type { SanityProdukHukum } from '@/types/sanity';

function getFileIcon(url: string) {
  if (!url) return File;
  const ext = url.split('.').pop()?.toLowerCase();
  if (ext === 'pdf') return FileText;
  if (['xls', 'xlsx', 'csv'].includes(ext ?? '')) return FileSpreadsheet;
  if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext ?? '')) return FileImage;
  return File;
}

export default function ProdukHukum() {
  const [documents, setDocuments] = useState<SanityProdukHukum[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadDocuments() {
      try {
        setLoading(true);
        const data = await sanityFetch<SanityProdukHukum[]>(produkHukumQuery);
        if (mounted) setDocuments(data || []);
      } catch (err) {
        if (mounted) setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadDocuments();
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
            Arsip Digital
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-8 tracking-tighter leading-none">
            Explore <br />Produk Hukum.
          </h1>
          <p className="text-stone-500 dark:text-stone-600 max-w-xl text-xl font-light">
            Produk-produk hukum yang telah didigitalisasi untuk memudahkan akses informasi.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <p className="col-span-full text-stone-500">Memuat dokumen...</p>
          )}
          {error && (
            <p className="col-span-full text-red-600">Gagal memuat data: {error}</p>
          )}
          {documents.map((doc, i) => {
            const fileUrl = doc.fileUrl || null;
            const Icon = fileUrl ? getFileIcon(fileUrl) : File;
            return (
              <motion.div
                key={doc._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white dark:bg-brand-creme rounded-[2.5rem] border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {fileUrl ? (
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-10"
                  >
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-300/30 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={32} />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-black text-emerald-900 dark:text-stone-900 leading-tight tracking-tight group-hover:text-emerald-500 transition-colors">
                      {doc.namaDokumen}
                      </h3>
                      <ExternalLink size={20} className="text-emerald-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ) : (
                  <div className="p-10">
                    <div className="w-16 h-16 bg-stone-100 dark:bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400 mb-8">
                      <File size={32} />
                    </div>
                    <h3 className="text-xl font-black text-emerald-900 dark:text-stone-900 leading-tight tracking-tight">
                      {doc.namaDokumen}
                    </h3>
                    <p className="text-stone-400 text-sm mt-2">File belum diunggah</p>
                  </div>
                )}
              </motion.div>
            );
          })}
          {!loading && !error && documents.length === 0 && (
            <p className="col-span-full text-stone-500">Belum ada dokumen tersedia.</p>
          )}
        </div>
      </div>
    </div>
  );
}
