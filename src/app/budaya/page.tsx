'use client';

import { motion } from 'motion/react';
import { Palette, Camera } from 'lucide-react';
import { cn } from '../../lib/utils';

const cultureData = [
  { 
    title: 'Tenun Sebatik', 
    cat: 'Kriya & Busana', 
    desc: 'Warisan kerajinan tangan dengan motif khas perbatasan yang memadukan corak melayu dan suku setempat.', 
    img: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Tari Jepin', 
    cat: 'Seni Pertunjukan', 
    desc: 'Tarian tradisional pesisir yang melambangkan kegembiraan dan ungkapan syukur masyarakat Sebatik.', 
    img: 'https://images.unsplash.com/photo-1520110120185-bc3fcc293683?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Kuliner Pesisir', 
    cat: 'Gastronomi', 
    desc: 'Kekayaan rasa dari olahan hasil laut segar dengan rempah tradisional Kalimantan Utara.', 
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Rumah Adat', 
    cat: 'Arsitektur', 
    desc: 'Struktur bangunan panggung yang dipertahankan sebagai wujud kearifan lokal beradaptasi dengan lingkungan.', 
    img: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?auto=format&fit=crop&q=80&w=800'
  },
];

export default function Culture() {
  return (
    <div className="pt-32 pb-24 px-8 overflow-hidden bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-emerald-100"
            >
              Warisan Batas Negeri
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-10 tracking-tighter leading-none">Identitas & <br />Budaya.</h1>
            <p className="text-stone-500 dark:text-stone-600 text-xl leading-relaxed max-w-2xl font-light italic">
              "Kekuatan peradaban di kedaulatan bangsa. Menjaga harmoni tradisi melayu di tengah pusaran modernitas perbatasan."
            </p>
          </div>
          <div className="w-full lg:w-[400px] relative group">
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-emerald-500 rounded-[3rem] -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" 
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl relative z-10 filter grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Culture"
            />
            <div className="absolute -bottom-10 -left-10 p-10 bg-white dark:bg-brand-creme rounded-[2.5rem] shadow-2xl z-20 border border-emerald-50 dark:border-stone-300">
              <Palette size={40} className="text-emerald-500 mb-4" />
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Seni Lokal</p>
              <p className="text-sm font-black text-emerald-900 dark:text-stone-900 uppercase">Aset Bangsa</p>
            </div>
          </div>
        </header>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-48">
          {cultureData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[4rem] aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-700/10 to-transparent p-12 flex flex-col justify-end">
                <span className="text-emerald-300 font-black text-[10px] uppercase tracking-widest mb-6 block border-l-2 border-emerald-500 pl-4">{item.cat}</span>
                <h3 className="text-4xl font-black text-white mb-6 leading-none tracking-tight">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Banner */}
        <section className="bg-stone-50 dark:bg-brand-creme shadow-inner p-16 md:p-32 rounded-[5rem] text-center mb-32 border border-emerald-50 dark:border-stone-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 dark:bg-stone-200/20 rounded-full blur-3xl -translate-y-20 translate-x-20" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-emerald-500 rounded-[2rem] flex items-center justify-center text-white mx-auto mb-12 shadow-2xl shadow-emerald-100">
              <Camera size={40} />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-emerald-900 dark:text-stone-900 mb-10 tracking-tighter leading-none">Festival Tahunan <br />Seni Batas Negeri.</h2>
            <p className="text-stone-500 dark:text-stone-600 mb-12 text-xl font-light leading-relaxed italic">
              Puncak apresiasi budaya masyarakat perbatasan yang mempertemukan harmoni seni, tradisi, dan inovasi gastromoni Sebatik Barat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="px-12 py-5 bg-emerald-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-emerald-100 hover:bg-emerald-600 transition-all">
                Kalender Event
              </button>
              <button className="px-12 py-5 bg-white dark:bg-stone-200 text-emerald-900 dark:text-stone-900 border border-emerald-50 dark:border-stone-300 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-stone-100 transition-all">
                Dokumentasi Galeri
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
