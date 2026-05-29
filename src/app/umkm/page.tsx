'use client';

import { motion } from 'motion/react';
import { ShoppingBag, Phone, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/utils';
import { getMediaUrl, normalizeCollectionEntries } from '../../lib/strapi';
import type { UmkmAttributes } from '../../types/strapi';

type UmkmItem = UmkmAttributes & { id: number; imageUrl: string };

export default function UMKM() {
  const [filter, setFilter] = useState('Semua');
  const [search, setSearch] = useState('');
  const [items, setItems] = useState<UmkmItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadUmkm() {
      try {
        setLoading(true);
        const res = await fetch(`/api/strapi/umkms?populate=image&pagination[pageSize]=100`);
        if (!res.ok) throw new Error(`Failed to load UMKM (${res.status})`);

        const json = await res.json();
        const normalized = normalizeCollectionEntries<UmkmAttributes>(json.data);
        const mapped = normalized.map((item) => ({
          id: item.id,
          name: item.name || 'UMKM',
          ...item,
          imageUrl: getMediaUrl(item.image?.url),
        }));
        if (mounted) setItems(mapped);
      } catch (err) {
        if (mounted) setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadUmkm();
    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const fromData = Array.from(new Set(items.map((item) => item.category).filter(Boolean))) as string[];
    return ['Semua', ...fromData];
  }, [items]);

  const filteredProducts = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = filter === 'Semua' || item.category === filter;
      const query = search.toLowerCase();
      const matchesSearch =
        (item.name || '').toLowerCase().includes(query) ||
        (item.location || '').toLowerCase().includes(query) ||
        (item.description || '').toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [filter, search, items]);

  return (
    <div className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100"
              >
                Ekonomi Kreatif
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-8 tracking-tighter">Etalase UMKM.</h1>
              <p className="text-stone-500 dark:text-stone-600 max-w-xl text-xl font-light">
                Data UMKM ditampilkan langsung dari Strapi CMS.
              </p>
            </div>
            <div className="flex bg-white dark:bg-brand-creme p-2 rounded-[2rem] border border-emerald-50 dark:border-stone-300 w-full md:w-auto shadow-sm">
              <div className="p-4 text-emerald-500"><Search size={22} /></div>
              <input 
                type="text" 
                placeholder="Cari produk..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent focus:outline-none text-sm w-full md:w-80 font-medium dark:text-stone-900"
              />
            </div>
          </div>
        </header>

        {/* Filter Bar */}
        <div className="flex gap-4 mb-20 overflow-x-auto pb-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border",
                filter === cat 
                  ? "bg-emerald-500 border-emerald-500 text-white shadow-xl shadow-emerald-100 dark:shadow-none" 
                  : "bg-white dark:bg-brand-creme text-stone-400 border-stone-100 dark:border-stone-300 hover:border-emerald-300"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {loading && <p className="col-span-full text-stone-500">Memuat data UMKM...</p>}
          {error && <p className="col-span-full text-red-600">Gagal memuat data: {error}</p>}
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white dark:bg-brand-creme rounded-[3.5rem] overflow-hidden border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-80 overflow-hidden relative transition-all duration-700">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-stone-100 dark:bg-stone-200 flex items-center justify-center text-stone-400 text-sm">No Image</div>
                )}
                {product.category && (
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 dark:bg-brand-creme/80 backdrop-blur-md rounded-full text-[10px] font-black text-emerald-500 dark:text-emerald-500 uppercase tracking-widest">
                    {product.category}
                  </div>
                )}
              </div>
              <div className="p-10">
                <div className="flex flex-col gap-2 mb-6">
                  <h3 className="text-2xl font-black text-emerald-900 dark:text-stone-900 leading-none tracking-tight group-hover:text-emerald-500 transition-colors">
                    {product.name}
                  </h3>
                  {product.location && <span className="text-stone-500 text-sm">{product.location}</span>}
                </div>
                {product.description && <p className="text-sm text-stone-500 mb-6 line-clamp-3">{product.description}</p>}
                <div className="flex items-center gap-3 text-stone-400 text-xs mb-10 font-bold uppercase tracking-wider">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-300/30 flex items-center justify-center text-emerald-500">
                    <ShoppingBag size={12} />
                  </div>
                  UMKM Lokal
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {product.contact ? (
                    <a
                      href={product.contact.startsWith('http') ? product.contact : `https://wa.me/${product.contact.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 py-4 bg-emerald-500 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100"
                    >
                      <Phone size={14} /> Hubungi
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
          {!loading && !error && filteredProducts.length === 0 && (
            <p className="col-span-full text-stone-500">Belum ada data UMKM yang cocok.</p>
          )}
        </div>
      </div>
    </div>
  );
}
