'use client';

import { motion } from 'motion/react';
import { Leaf, Waves, Zap, Landmark, BarChart3, PieChart, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const sectors = [
  { id: 'perikanan', title: 'Sektor Perikanan', val: '45%', color: 'blue', desc: 'Produksi rumput laut dan ikan tangkap yang menjadi komoditas ekspor utama ke mancanegara.', icon: Waves },
  { id: 'perkebunan', title: 'Sektor Perkebunan', val: '30%', color: 'green', desc: 'Lahan sawit dan kakao yang produktif menyokong pertumbuhan ekonomi desa pedalaman.', icon: Leaf },
  { id: 'pariwisata', title: 'Sektor Pariwisata', val: '15%', color: 'orange', desc: 'Keindahan pantai dan hutan mangrove yang mulai dikembangkan secara profesional.', icon: Landmark },
  { id: 'energi', title: 'Potensi Energi', val: '10%', color: 'amber', desc: 'Pengembangan energi baru terbarukan berbasis tenaga surya di wilayah pesisir.', icon: Zap },
];

export default function Resources() {
  return (
    <div className="pt-32 pb-24 px-8 overflow-hidden bg-stone-50 dark:bg-brand-creme">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col lg:flex-row gap-12 items-end">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100"
            >
              Potensi Alam & Energi
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-8 tracking-tighter leading-none">Sumber Daya <br />Alam.</h1>
            <p className="text-stone-500 dark:text-stone-600 text-xl font-light leading-relaxed max-w-2xl">
              Kekayaan bumi Sebatik Barat dikelola dengan prinsip keberlanjutan untuk mewujudkan kemandirian pangan dan energi di batas kedaulatan.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white dark:bg-brand-creme p-10 rounded-[2.5rem] border border-emerald-50 dark:border-stone-300 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[10px] uppercase font-black text-emerald-500 tracking-widest block mb-2">Laju Pertumbuhan</span>
              <span className="block text-4xl font-black text-emerald-900 dark:text-stone-900 tracking-tighter">+8.4%</span>
            </div>
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-100">
              <BarChart3 size={28} />
            </div>
          </div>
        </header>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white dark:bg-brand-creme p-12 rounded-[3.5rem] border border-emerald-50 dark:border-stone-300 group hover:shadow-2xl transition-all duration-700"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className={cn(
                    "w-20 h-20 rounded-[1.5rem] flex items-center justify-center transition-transform group-hover:scale-110 duration-500 shadow-sm",
                    sector.color === 'blue' ? "bg-emerald-50 text-emerald-500" :
                    sector.color === 'green' ? "bg-emerald-100 text-emerald-600" :
                    sector.color === 'orange' ? "bg-orange-100 text-orange-600" :
                    "bg-amber-100 text-amber-600"
                  )}>
                    <Icon size={36} />
                  </div>
                  <div className="text-right">
                    <span className="block text-5xl font-black text-emerald-900 dark:text-stone-900 mb-2 tracking-tighter">{sector.val}</span>
                    <span className="text-[10px] uppercase font-black text-stone-400 tracking-widest leading-none">Kontribusi PDRB</span>
                  </div>
                </div>
                <h3 className="text-3xl font-black text-emerald-900 dark:text-stone-900 mb-4 tracking-tight leading-none">{sector.title}</h3>
                <p className="text-stone-500 dark:text-stone-600 text-sm leading-relaxed mb-10 font-light">{sector.desc}</p>
                <button className="w-full flex items-center justify-between p-6 bg-stone-50 dark:bg-stone-200 rounded-2xl group/btn hover:bg-emerald-500 hover:text-white transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest">Laporan Strategis</span>
                  <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Infographic Section */}
        <section className="bg-emerald-500 text-white rounded-[5rem] p-16 md:p-32 shadow-2xl shadow-emerald-100 relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none tracking-tighter">Masa Depan <br /> Berkelanjutan.</h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed font-light italic">
                "Mengintegrasikan kearifan lokal dengan inovasi hilirisasi untuk nilai tambah ekonomi yang berkeadilan."
              </p>
              <div className="space-y-8">
                <div className="flex gap-8 items-center group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white/20 transition-all">
                    <PieChart size={32} />
                  </div>
                  <div>
                    <h4 className="font-black text-lg">Diversifikasi Ekonomi</h4>
                    <p className="text-xs text-white/60 font-medium tracking-wide">Pengembangan 5 klaster ekonomi baru hingga 2030.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-center group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white/20 transition-all">
                    <Zap size={32} />
                  </div>
                  <div>
                    <h4 className="font-black text-lg">Energi Mandiri</h4>
                    <p className="text-xs text-white/60 font-medium tracking-wide">Target 40% penggunaan EBT di fasilitas publik.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/10 p-10 rounded-[3rem] backdrop-blur-md border border-white/10">
                    <span className="text-4xl font-black block mb-2 tracking-tighter">1,200<span className="text-sm">ha</span></span>
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Lahan Perkebunan</span>
                  </div>
                  <div className="bg-white/10 p-10 rounded-[3rem] backdrop-blur-md border border-white/10">
                    <span className="text-4xl font-black block mb-2 tracking-tighter">500<span className="text-sm">tn</span></span>
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Hasil Laut/Bulan</span>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-white/10 p-10 rounded-[3rem] backdrop-blur-md border border-white/10">
                    <span className="text-4xl font-black block mb-2 tracking-tighter">15<span className="text-sm">km</span></span>
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Konservasi Mangrove</span>
                  </div>
                  <div className="bg-white/10 p-10 rounded-[3rem] backdrop-blur-md border border-white/10">
                    <span className="text-4xl font-black block mb-2 tracking-tighter">12</span>
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Komoditas Utama</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
