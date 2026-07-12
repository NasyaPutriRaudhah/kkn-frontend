'use client';

import { motion } from 'motion/react';
import { FileText, ExternalLink, FileSpreadsheet, FileImage, File, Search, X } from 'lucide-react';
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

const VILLAGES = ['Setabu', 'Bambangan', 'Tembaring', 'Binalawan', 'Liang Bunyu'] as const;

export default function ProdukHukum() {
  const [documents, setDocuments] = useState<SanityProdukHukum[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [desaFilter, setDesaFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredDocuments = documents.filter((doc) => {
    const matchDesa = desaFilter ? doc.desa === desaFilter : true;
    const matchSearch = searchQuery
      ? doc.namaDokumen.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.desa.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchDesa && matchSearch;
  });

  return (
    <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
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

        <div className="flex flex-col gap-4 mb-16">
          <div className="relative max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Cari dokumen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-full bg-white dark:bg-brand-creme border border-stone-200 dark:border-stone-300 text-sm text-stone-700 dark:text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-300 transition-colors"
              >
                <X size={12} />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setDesaFilter('')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              !desaFilter
                ? 'bg-emerald-900 text-white shadow-md'
                : 'bg-white dark:bg-brand-creme text-stone-600 hover:bg-emerald-50 border border-stone-200 dark:border-stone-300'
            }`}
          >
            Semua Desa
          </button>
          {VILLAGES.map((village) => (
            <button
              key={village}
              onClick={() => setDesaFilter(village)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                desaFilter === village
                  ? 'bg-emerald-900 text-white shadow-md'
                  : 'bg-white dark:bg-brand-creme text-stone-600 hover:bg-emerald-50 border border-stone-200 dark:border-stone-300'
              }`}
            >
              Desa {village}
            </button>
          ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <p className="col-span-full text-stone-500">Memuat dokumen...</p>
          )}
          {error && (
            <p className="col-span-full text-red-600">Gagal memuat data: {error}</p>
          )}
          {filteredDocuments.map((doc, i) => {
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
          {!loading && !error && filteredDocuments.length === 0 && (
            <p className="col-span-full text-stone-500">
              {documents.length === 0
                ? 'Belum ada dokumen tersedia.'
                : searchQuery
                  ? `Tidak ada dokumen yang cocok dengan "${searchQuery}".`
                  : 'Tidak ada dokumen untuk desa ini.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
