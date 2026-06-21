'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ArrowLeft, BookOpen, BookMarked } from 'lucide-react';
import { chapters, type Chapter } from './chapter-content';

const chapterNav = chapters.map((ch) => ({
  label: ch.label,
}));

function babLabel(idx: number): string {
  const labels = ['Pendahuluan', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VI Lanjutan', 'VII', 'VIII', '—'];
  return labels[idx] || '';
}

export default function ForsaDigitalPage() {
  const [showBook, setShowBook] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const navRef = useRef<HTMLDivElement>(null);

  const isToc = activeIdx === -1;
  const activeChapter: Chapter | undefined = isToc ? undefined : chapters[activeIdx];
  const progressPct = isToc ? 0 : ((activeIdx + 1) / chapters.length) * 100;

  function goToChapter(idx: number) {
    setActiveIdx(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToDaftarIsi() {
    setActiveIdx(-1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── COVER ────────────────────────────────────────────────────────────
  if (!showBook) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-brand-creme flex flex-col pt-24">
        {/* Top Navigation */}
        <div className="pb-4 px-8 max-w-7xl mx-auto w-full">
          <Link
            href="/sda"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft size={13} />
            Kembali ke SDA
          </Link>
        </div>

        {/* Main Cover Content */}
        <div className="flex-1 flex items-center justify-center px-8 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: Text Area */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-emerald-50 dark:bg-emerald-300/20 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100 dark:border-emerald-300/30">
                  KKN PPM UGM &bull; Taka Sebatik 2026
                </div>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-emerald-900 dark:text-stone-900 leading-tight mb-4 tracking-tighter">
                  FORSA
                  <br />
                  <span className="italic text-emerald-500 dark:text-emerald-400">DIGITAL</span>
                </h1>

                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4">
                  <BookOpen size={14} />
                  Buku Saku Digital
                </div>

                <p className="text-stone-500 dark:text-stone-600 max-w-xl text-lg font-light leading-relaxed mb-6">
                  Forest Story Digital &mdash; Potensi Hutan &amp; Budaya di Pesisir Kecamatan Sebatik Barat, Kalimantan Utara
                </p>

                <div className="flex items-center gap-2.5 bg-white dark:bg-[#d8d1c1] border border-emerald-50 dark:border-stone-300 rounded-2xl px-4 py-2.5 mb-8 inline-flex">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-xs font-black text-white shrink-0">
                    UGM
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-emerald-900 dark:text-stone-900 leading-tight">KKN PPM Universitas Gadjah Mada</div>
                    <div className="text-[11px] text-stone-400 dark:text-stone-500">Unit Taka Sebatik &middot; Kalimantan Utara &middot; 2026</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowBook(true)}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm tracking-widest uppercase rounded-2xl transition-all hover:shadow-xl hover:shadow-emerald-100"
                  >
                    <BookOpen size={18} />
                    Buka Buku Saku
                  </motion.button>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xs text-stone-400 dark:text-stone-500 font-medium"
                  >
                    Program Kerja Kehutanan &amp; Dokumentasi Budaya Pesisir
                  </motion.p>
                </div>
              </motion.div>

              {/* Right: Decorative Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="shrink-0"
              >
                <div className="w-72 h-80 md:w-80 md:h-96 bg-white dark:bg-[#d8d1c1] rounded-[3rem] border border-emerald-50 dark:border-stone-300 shadow-sm flex flex-col items-center justify-center p-8 text-center">
                  <BookOpen size={48} className="text-emerald-200 dark:text-emerald-300/40 mb-4" />
                  <div className="font-serif text-3xl font-bold text-emerald-900 dark:text-stone-900 mb-2">FORSA</div>
                  <div className="font-serif text-xl italic text-emerald-400 dark:text-emerald-400 mb-4">DIGITAL</div>
                  <div className="w-12 h-0.5 bg-emerald-200 dark:bg-emerald-300/30 mb-4" />
                  <p className="text-[11px] text-stone-400 dark:text-stone-500 leading-relaxed">
                    Forest Story Digital
                    <br />
                    Potensi Hutan &amp; Budaya
                    <br />
                    Sebatik Barat
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── BOOK ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-brand-creme pt-20">
      {/* Progress Bar */}
      {!isToc && (
        <div className="h-1 bg-emerald-100 dark:bg-emerald-300/30 sticky top-[76px] z-50">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-400 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      )}

      {/* Sticky Navigation */}
      <div className="sticky top-[76px] z-40 glass-nav">
        <div className="flex items-center px-4 pt-2 pb-0">
          <Link
            href="/sda"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-400 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft size={13} />
            Kembali ke SDA
          </Link>
        </div>

        <nav ref={navRef} className="flex items-center gap-1 px-4 py-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={goToDaftarIsi}
            className={cn(
              'shrink-0 text-[11px] font-bold px-3.5 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap',
              isToc
                ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                : 'bg-transparent text-emerald-600 border-emerald-200 dark:border-emerald-300/30 hover:bg-emerald-50 dark:hover:bg-emerald-300/10'
            )}
          >
            <BookMarked size={12} className="inline -mt-0.5 mr-1" />
            Daftar Isi
          </button>
          {chapterNav.map((ch, i) => (
            <button
              key={ch.label}
              onClick={() => goToChapter(i)}
              className={cn(
                'shrink-0 text-[11px] font-bold px-3.5 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap',
                activeIdx === i
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                  : 'bg-transparent text-emerald-600 border-emerald-200 dark:border-emerald-300/30 hover:bg-emerald-50 dark:hover:bg-emerald-300/10'
              )}
            >
              {ch.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16">
        {isToc ? (
          /* ── DAFTAR ISI ────────────────────────────────────────── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12"
          >
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-emerald-50 dark:bg-emerald-300/20 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border border-emerald-100 dark:border-emerald-300/30">
                    FORSA DIGITAL
                  </div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-emerald-900 dark:text-stone-900">Daftar Isi</h1>
                </div>
                <Link
                  href="/sda"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-emerald-600 transition-colors"
                >
                  <ArrowLeft size={13} />
                  Kembali ke SDA
                </Link>
              </div>
            <p className="text-sm text-stone-500 dark:text-stone-600 mb-8 max-w-xl">
              FORSA DIGITAL terdiri dari sebelas bab yang mendokumentasikan potensi hutan dan budaya pesisir Sebatik Barat.
            </p>

            <div className="space-y-3">
              {chapters.map((ch, i) => (
                <motion.button
                  key={ch.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => goToChapter(i)}
                  className="w-full text-left flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-white dark:bg-brand-creme border border-emerald-50 dark:border-stone-300 hover:border-emerald-200 dark:hover:border-stone-400 hover:shadow-md transition-all group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-black tracking-widest text-emerald-400 dark:text-emerald-500 uppercase">
                        {babLabel(i)}
                      </span>
                      <span className="text-xs text-stone-300 dark:text-stone-500">/</span>
                      <span className="text-sm font-bold text-emerald-700 dark:text-emerald-500 group-hover:text-emerald-500 transition-colors">
                        {ch.label}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-stone-800 dark:text-stone-900 mb-1">{ch.title}</h3>
                    <p className="text-xs text-stone-500 dark:text-stone-600 leading-relaxed line-clamp-2">{ch.desc}</p>
                  </div>
                  <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0 mt-3">&rarr;</span>
                </motion.button>
              ))}
            </div>
            </div>
          </motion.div>
        ) : (
          /* ── CHAPTER CONTENT ────────────────────────────────────── */
          <>
            {/* Hero Section */}
            <div className="relative pt-10 pb-6 text-center overflow-hidden">
              <span className="font-serif text-5xl md:text-6xl block mb-3 text-emerald-200 dark:text-emerald-400/30">
                {activeChapter!.emoji}
              </span>
              <div className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-300/20 text-emerald-500 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-emerald-100 dark:border-emerald-300/30">
                Bab {babLabel(activeIdx)}
              </div>
              <h2 className="font-serif text-[clamp(1.3rem,4vw,2.5rem)] font-bold text-emerald-900 dark:text-stone-900 mb-3 leading-tight">
                {activeChapter!.title}
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-600 max-w-lg mx-auto leading-relaxed">
                {activeChapter!.desc}
              </p>
            </div>

            {/* Chapter Quick-Jump */}
            <div className="flex items-center gap-1 mb-8 pb-4 border-b border-emerald-100 dark:border-emerald-300/20 overflow-x-auto scrollbar-hide">
              <span className="text-[10px] font-black tracking-widest text-stone-400 dark:text-stone-500 uppercase mr-1 shrink-0">Lompat:</span>
              {chapters.map((ch, i) => (
                <button
                  key={ch.id}
                  onClick={() => goToChapter(i)}
                  className={cn(
                    'shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-md border transition-all',
                    activeIdx === i
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : 'bg-white dark:bg-brand-creme text-stone-500 dark:text-stone-600 border-stone-200 dark:border-stone-300 hover:border-emerald-300 dark:hover:border-emerald-400 hover:text-emerald-600'
                  )}
                >
                  {i === 0 ? 'P' : i === chapters.length - 1 ? 'T' : String(i)}
                </button>
              ))}
            </div>

            {/* Content with AnimatePresence */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {activeChapter!.content}

                  {/* Chapter Navigation */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-10 pt-6 border-t border-emerald-100 dark:border-emerald-300/20">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={goToDaftarIsi}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-full border border-emerald-200 dark:border-emerald-300/30 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-300/10 transition-all"
                      >
                        <BookMarked size={13} />
                        Daftar Isi
                      </button>
                      <Link
                        href="/sda"
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-full border border-emerald-200 dark:border-emerald-300/30 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-300/10 transition-all"
                      >
                        <ArrowLeft size={13} />
                        Kembali ke SDA
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 sm:ml-auto">
                      <button
                        onClick={() => goToChapter(Math.max(0, activeIdx - 1))}
                        disabled={activeIdx === 0}
                        className={cn(
                          'text-sm font-bold px-5 py-2.5 rounded-full border transition-all',
                          activeIdx === 0
                            ? 'border-stone-200 dark:border-stone-300 text-stone-300 dark:text-stone-500 cursor-not-allowed'
                            : 'border-emerald-200 dark:border-emerald-300/30 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-300/10'
                        )}
                      >
                        &lsaquo; Sebelumnya
                      </button>
                      <span className="text-xs text-stone-400 dark:text-stone-500 font-medium px-1">
                        {activeIdx + 1} / {chapters.length}
                      </span>
                      <button
                        onClick={() => goToChapter(Math.min(chapters.length - 1, activeIdx + 1))}
                        disabled={activeIdx === chapters.length - 1}
                        className={cn(
                          'text-sm font-bold px-5 py-2.5 rounded-full border transition-all',
                          activeIdx === chapters.length - 1
                            ? 'border-stone-200 dark:border-stone-300 text-stone-300 dark:text-stone-500 cursor-not-allowed'
                            : 'border-emerald-200 dark:border-emerald-300/30 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-300/10'
                        )}
                      >
                        Selanjutnya &rsaquo;
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
