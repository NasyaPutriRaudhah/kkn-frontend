'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Baby, Ruler, AlertTriangle, CheckCircle, Info, Activity } from 'lucide-react';

const whoData: Record<string, [number, number, number, number][]> = {
  L: [
    [0,49.9,45.6,43.6],[1,54.7,50.0,47.8],[2,58.4,53.4,51.1],[3,61.4,56.3,53.8],[4,63.9,58.6,56.1],[5,65.9,60.6,57.9],
    [6,67.6,62.0,59.6],[7,69.2,63.6,61.0],[8,70.6,65.0,62.4],[9,72.0,66.3,63.6],[10,73.3,67.5,64.9],[11,74.5,68.7,66.0],
    [12,75.7,69.6,67.2],[13,76.9,70.8,68.2],[14,78.0,71.9,69.3],[15,79.1,73.0,70.4],[16,80.2,74.1,71.4],[17,81.2,75.1,72.4],
    [18,82.3,76.1,73.4],[19,83.2,77.1,74.4],[20,84.2,78.0,75.3],[21,85.1,79.0,76.3],[22,86.0,79.9,77.1],[23,86.9,80.8,78.0],
    [24,87.1,80.0,77.2],[25,87.9,80.8,78.0],[26,88.7,81.6,78.8],[27,89.4,82.4,79.5],[28,90.2,83.1,80.3],[29,90.9,83.8,80.9],
    [30,91.6,84.5,81.6],[31,92.3,85.2,82.3],[32,93.0,85.9,83.0],[33,93.6,86.5,83.6],[34,94.2,87.1,84.2],[35,94.8,87.7,84.8],
    [36,95.4,88.3,85.4],[37,96.0,88.9,86.0],[38,96.5,89.4,86.5],[39,97.1,90.0,87.1],[40,97.6,90.5,87.6],[41,98.1,91.0,88.1],
    [42,98.7,91.5,88.6],[43,99.2,92.0,89.1],[44,99.7,92.5,89.6],[45,100.2,93.0,90.1],[46,100.7,93.5,90.6],[47,101.2,93.9,91.1],
    [48,101.6,94.4,91.5],[49,102.1,94.8,91.9],[50,102.5,95.3,92.4],[51,103.0,95.7,92.8],[52,103.4,96.1,93.2],[53,103.8,96.5,93.6],
    [54,104.3,96.9,94.0],[55,104.7,97.3,94.4],[56,105.1,97.7,94.8],[57,105.5,98.1,95.2],[58,105.9,98.5,95.6],[59,106.3,98.9,96.0],
    [60,106.7,99.3,96.4],
  ],
  P: [
    [0,49.1,44.8,42.8],[1,53.7,49.0,46.9],[2,57.1,52.2,49.9],[3,59.8,54.8,52.4],[4,62.1,57.0,54.6],[5,64.0,58.8,56.3],
    [6,65.7,60.2,57.8],[7,67.3,61.9,59.4],[8,68.7,63.4,60.8],[9,70.1,64.7,62.2],[10,71.5,66.0,63.5],[11,72.8,67.2,64.7],
    [12,74.0,68.0,65.5],[13,75.2,69.4,66.8],[14,76.4,70.6,68.0],[15,77.5,71.7,69.1],[16,78.6,72.8,70.2],[17,79.7,73.8,71.2],
    [18,80.7,74.8,72.2],[19,81.7,75.8,73.2],[20,82.7,76.7,74.1],[21,83.6,77.7,75.0],[22,84.5,78.6,75.9],[23,85.4,79.4,76.8],
    [24,85.7,78.7,75.9],[25,86.5,79.6,76.7],[26,87.3,80.4,77.5],[27,88.1,81.2,78.3],[28,88.9,82.0,79.1],[29,89.6,82.7,79.8],
    [30,90.4,83.4,80.5],[31,91.1,84.1,81.2],[32,91.8,84.8,81.9],[33,92.5,85.5,82.6],[34,93.2,86.1,83.2],[35,93.8,86.8,83.8],
    [36,94.5,87.4,84.4],[37,95.1,88.0,85.0],[38,95.7,88.6,85.6],[39,96.3,89.2,86.2],[40,96.9,89.8,86.7],[41,97.5,90.3,87.3],
    [42,98.1,90.9,87.8],[43,98.6,91.4,88.3],[44,99.2,91.9,88.8],[45,99.7,92.5,89.4],[46,100.3,93.0,89.9],[47,100.8,93.4,90.3],
    [48,101.3,94.0,90.9],[49,101.8,94.4,91.3],[50,102.3,94.9,91.8],[51,102.8,95.4,92.3],[52,103.3,95.9,92.8],[53,103.7,96.3,93.2],
    [54,104.2,96.7,93.6],[55,104.7,97.2,94.1],[56,105.1,97.6,94.5],[57,105.6,98.1,95.0],[58,106.0,98.5,95.4],[59,106.4,98.9,95.8],
    [60,106.9,99.3,96.2],
  ],
};

const monthNames = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];

export default function StuntCheck() {
  const [gender, setGender] = useState<'L' | 'P' | null>(null);
  const [ageMonths, setAgeMonths] = useState(0);
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<{ z: number; status: string; color: string } | null>(null);
  const [inputYears, setInputYears] = useState(0);
  const [inputMonths, setInputMonths] = useState(0);

  const updateAge = (y: number, m: number) => {
    const total = Math.min(y * 12 + m, 60);
    setAgeMonths(total);
  };

  const handleYearChange = (y: number) => {
    const clamped = Math.max(0, Math.min(y, 5));
    setInputYears(clamped);
    updateAge(clamped, inputMonths);
  };

  const handleMonthChange = (m: number) => {
    const clamped = Math.max(0, Math.min(m, 11));
    setInputMonths(clamped);
    updateAge(inputYears, clamped);
  };

  const calculate = () => {
    if (!gender || !height) return;
    const h = parseFloat(height);
    if (isNaN(h) || h <= 0) return;

    const data = whoData[gender];
    const ref = data[ageMonths];
    if (!ref) return;

    const [_, median, minus2sd, minus3sd] = ref;
    const sd = (median - minus2sd) / 2;
    const z = (h - median) / sd;

    let status: string;
    let color: string;
    if (z < -3) {
      status = 'Sangat Pendek (Stunting Berat)';
      color = 'text-red-500';
    } else if (z < -2) {
      status = 'Pendek (Stunting)';
      color = 'text-orange-500';
    } else if (z < -1) {
      status = 'Normal (Perhatian)';
      color = 'text-amber-500';
    } else {
      status = 'Normal';
      color = 'text-emerald-500';
    }

    setResult({ z, status, color });
  };

  const reset = () => {
    setGender(null);
    setAgeMonths(0);
    setInputYears(0);
    setInputMonths(0);
    setHeight('');
    setResult(null);
  };

  const getStatusBar = (z: number) => {
    const pct = Math.max(0, Math.min(100, ((z + 4) / 7) * 100));
    const segments = [
      { label: '-3 SD', pos: 0, color: 'bg-red-500' },
      { label: '-2 SD', pos: 28.6, color: 'bg-orange-500' },
      { label: '-1 SD', pos: 57.1, color: 'bg-amber-500' },
      { label: 'Median', pos: 71.4, color: 'bg-emerald-500' },
      { label: '+1 SD', pos: 100, color: 'bg-emerald-500' },
    ];
    return { pct, segments };
  };

  const bar = result ? getStatusBar(result.z) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-brand-creme rounded-[2rem] sm:rounded-[3.5rem] border border-emerald-50 dark:border-stone-300 shadow-sm overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-50 dark:bg-stone-200/20 rounded-full blur-3xl" />
        <div className="relative z-10 p-6 sm:p-10 md:p-14">
          <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-rose-500 rounded-[1.2rem] sm:rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-rose-100 shrink-0">
              <Activity size={22} className="sm:size-[30px] text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-900 dark:text-stone-900 tracking-tight">
                STUNTCHECK
              </h3>
              <p className="text-stone-400 dark:text-stone-500 text-xs sm:text-sm font-light">
                Kalkulator Deteksi Stunting — Standar WHO
              </p>
            </div>
          </div>

          {result ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-stone-50 dark:bg-stone-200/30 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 mb-6 sm:mb-8 border border-stone-100 dark:border-stone-300">
                <div className="text-center mb-6 sm:mb-8">
                  <div className={`text-4xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3 ${result.color}`}>
                    {result.z.toFixed(2)} SD
                  </div>
                  <p className={`text-sm sm:text-base md:text-lg font-black uppercase tracking-wider ${result.color}`}>
                    {result.status}
                  </p>
                  <p className="text-stone-400 text-sm font-light mt-2">
                    Z-Score Tinggi Badan menurut Umur (TB/U)
                  </p>
                </div>

                <div className="relative h-6 bg-stone-200 dark:bg-stone-300 rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 bg-red-500" />
                    <div className="flex-1 bg-orange-500" />
                    <div className="flex-1 bg-amber-500" />
                    <div className="flex-1 bg-emerald-500" />
                    <div className="flex-1 bg-emerald-400" />
                  </div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-stone-600"
                    style={{ left: `${bar!.pct}%`, transform: `translate(-50%, -50%)` }}
                  />
                </div>
                <div className="flex justify-between text-[8px] font-black uppercase tracking-wider text-stone-400 mb-8">
                  <span>&lt; -3 SD</span>
                  <span>-2 SD</span>
                  <span>-1 SD</span>
                  <span>Median</span>
                  <span>+1 SD</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
                  <div className="bg-white dark:bg-brand-creme rounded-2xl p-4 border border-stone-100 dark:border-stone-300">
                    <p className="text-[9px] font-black uppercase tracking-widest text-stone-400 mb-1">Jenis Kelamin</p>
                    <p className="font-black text-emerald-900 dark:text-stone-900">{gender === 'L' ? 'Laki-laki' : 'Perempuan'}</p>
                  </div>
                  <div className="bg-white dark:bg-brand-creme rounded-2xl p-4 border border-stone-100 dark:border-stone-300">
                    <p className="text-[9px] font-black uppercase tracking-widest text-stone-400 mb-1">Usia</p>
                    <p className="font-black text-emerald-900 dark:text-stone-900">{ageMonths} Bulan</p>
                  </div>
                  <div className="bg-white dark:bg-brand-creme rounded-2xl p-4 border border-stone-100 dark:border-stone-300">
                    <p className="text-[9px] font-black uppercase tracking-widest text-stone-400 mb-1">Tinggi Badan</p>
                    <p className="font-black text-emerald-900 dark:text-stone-900">{height} cm</p>
                  </div>
                  <div className="bg-white dark:bg-brand-creme rounded-2xl p-4 border border-stone-100 dark:border-stone-300">
                    <p className="text-[9px] font-black uppercase tracking-widest text-stone-400 mb-1">Rujukan</p>
                    <p className="font-black text-emerald-900 dark:text-stone-900">WHO 2006</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-300/10 rounded-[1.2rem] sm:rounded-[1.5rem] p-5 sm:p-6 mb-6 sm:mb-8 border border-emerald-100 dark:border-emerald-800/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Info size={18} className="sm:size-[20px] text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-emerald-900 dark:text-stone-900 text-xs sm:text-sm mb-1">Apa yang harus dilakukan?</p>
                    <p className="text-stone-500 dark:text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                      {result.z < -2
                        ? 'Segera konsultasikan ke Puskesmas atau Poskesdes terdekat untuk mendapatkan penanganan lebih lanjut. Intervensi gizi sejak dini sangat penting untuk tumbuh kembang anak.'
                        : result.z < -1
                          ? 'Pantau pertumbuhan anak secara rutin setiap bulan di Posyandu atau Puskesmas terdekat. Pastikan asupan gizi seimbang.'
                          : 'Pertumbuhan anak Anda dalam kategori normal. Tetap jaga pola makan bergizi seimbang dan pantau pertumbuhan secara rutin.'
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={reset}
                  className="flex-1 py-4 bg-stone-100 dark:bg-stone-200 text-stone-600 dark:text-stone-700 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-stone-200 transition-colors"
                >
                  Periksa Ulang
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 sm:gap-y-8 mb-6 sm:mb-8">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3 sm:mb-4 block">Jenis Kelamin</label>
                  <div className="flex gap-3">
                    {(['L', 'P'] as const).map(g => (
                      <button
                        key={g}
                        onClick={() => setGender(g)}
                        className={`flex-1 py-4 sm:py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border ${
                          gender === g
                            ? 'bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-100'
                            : 'bg-stone-50 dark:bg-stone-200 border-stone-100 dark:border-stone-300 text-stone-500 hover:border-rose-300'
                        }`}
                      >
                        <Baby size={18} className="sm:size-[20px] mx-auto mb-1.5 sm:mb-2" />
                        {g === 'L' ? 'Laki-laki' : 'Perempuan'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3 sm:mb-4 block">
                    Usia Anak
                  </label>
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <p className="text-[9px] font-black uppercase tracking-widest text-stone-400 mb-2">Tahun</p>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <button onClick={() => handleYearChange(inputYears - 1)} className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-stone-50 dark:bg-stone-200 border border-stone-100 dark:border-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-100 transition-colors text-base sm:text-lg font-bold">−</button>
                        <span className="flex-1 text-center font-black text-emerald-900 dark:text-stone-900 text-lg sm:text-xl">{inputYears}</span>
                        <button onClick={() => handleYearChange(inputYears + 1)} className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-stone-50 dark:bg-stone-200 border border-stone-100 dark:border-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-100 transition-colors text-base sm:text-lg font-bold">+</button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-[9px] font-black uppercase tracking-widest text-stone-400 mb-2">Bulan</p>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <button onClick={() => handleMonthChange(inputMonths - 1)} className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-stone-50 dark:bg-stone-200 border border-stone-100 dark:border-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-100 transition-colors text-base sm:text-lg font-bold">−</button>
                        <span className="flex-1 text-center font-black text-emerald-900 dark:text-stone-900 text-lg sm:text-xl">{inputMonths}</span>
                        <button onClick={() => handleMonthChange(inputMonths + 1)} className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-stone-50 dark:bg-stone-200 border border-stone-100 dark:border-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-100 transition-colors text-base sm:text-lg font-bold">+</button>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-xs text-stone-400 font-light mt-2 sm:mt-3">Total: <span className="font-bold text-emerald-600">{ageMonths} bulan</span></p>
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3 sm:mb-4 block">Tinggi Badan (cm)</label>
                  <div className="relative">
                    <Ruler size={16} className="sm:size-[18px] absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="number"
                      value={height}
                      onChange={e => setHeight(e.target.value)}
                      placeholder="Masukkan tinggi badan anak dalam cm"
                      className="w-full pl-11 sm:pl-14 pr-12 sm:pr-14 py-4 sm:py-5 bg-stone-50 dark:bg-stone-200 border border-stone-100 dark:border-stone-300 rounded-2xl text-emerald-900 dark:text-stone-900 font-bold placeholder-stone-400 placeholder:font-light text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                    />
                    <span className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-black text-stone-400">cm</span>
                  </div>
                </div>
              </div>

              <button
                onClick={calculate}
                disabled={!gender || !height}
                className="w-full py-4 sm:py-5 bg-rose-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-rose-100 hover:bg-rose-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Activity size={16} className="sm:size-[18px] inline mr-2 -mt-0.5" />
                Periksa Sekarang
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
