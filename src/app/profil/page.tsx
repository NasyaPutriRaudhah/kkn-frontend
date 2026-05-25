'use client';

import { motion } from 'motion/react';
import { Target, Eye, Users, User } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Profile() {
  return (
    <div className="pt-32 pb-24 px-8 overflow-hidden bg-stone-50 dark:bg-brand-creme">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100 dark:border-emerald-300"
        >
          Kecamatan Sebatik Barat
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-10 tracking-tighter"
        >
          Filosofi & Profil
        </motion.h1>
        <p className="text-stone-500 dark:text-stone-600 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
          Representasi negara di gerbang kedaulatan. Membangun Sebatik Barat dengan integritas dan kemasan modernitas yang inklusif.
        </p>
      </div>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-brand-creme p-12 rounded-[3rem] border border-emerald-50 dark:border-stone-300 shadow-sm relative overflow-hidden group"
          >
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg shadow-emerald-100">
              <Eye size={32} />
            </div>
            <h2 className="text-4xl font-black mb-8 text-emerald-900 dark:text-stone-900 tracking-tight">Visi</h2>
            <p className="text-2xl text-stone-600 dark:text-stone-700 font-light italic leading-snug">
              "Menjadikan Sebatik Barat sebagai representasi perbatasan yang Maju, Berbudaya, dan Mandiri di Kalimantan Utara."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-500 p-12 rounded-[3rem] shadow-xl shadow-emerald-100 dark:shadow-none text-white relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-10">
              <Target size={32} />
            </div>
            <h2 className="text-4xl font-black mb-8 tracking-tight text-white">Misi</h2>
            <ul className="space-y-6">
              {[
                "Digitalisasi total pelayanan administrasi publik.",
                "Eskalasi potensi ekonomi kreatif dan UMKM lokal.",
                "Konservasi budaya melayu sebagai identitas bangsa.",
                "Transformasi infrastruktur perbatasan yang berkelanjutan."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-[10px] font-black shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <span className="text-sm font-semibold opacity-90 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* History Snapshot */}
      <section className="bg-stone-50 dark:bg-brand-creme/50 py-32 px-8 rounded-[4rem] max-w-full mx-auto mb-32 border border-emerald-50 dark:border-stone-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Sejarah & Wilayah</span>
            <h2 className="text-5xl md:text-6xl font-black text-emerald-900 dark:text-stone-900 mb-10 tracking-tight leading-none">Jejak Kedaulatan <br />Batas Negeri.</h2>
            <p className="text-stone-500 dark:text-stone-600 mb-8 leading-relaxed font-medium">
              Sebatik Barat bukan sekadar titik administratif. Sejarahnya terukir dari semangat komunitas pesisir yang menjaga harmoni di kedaulatan bangsa.
            </p>
            <p className="text-stone-400 dark:text-stone-500 mb-12 text-sm leading-relaxed">
              Dimekarkan pada tahun 2006, wilayah ini bertransformasi menjadi pusat pertumbuhan baru di Pulau Sebatik dengan tata kelola 4 desa mandiri yang terus berinovasi.
            </p>
            <div className="flex gap-16">
              <div>
                <span className="text-5xl font-black text-emerald-500 block mb-2">2006</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Tahun Pemekaran</span>
              </div>
              <div>
                <span className="text-5xl font-black text-emerald-500 block mb-2">04</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Jumlah Desa</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl w-full h-80 object-cover transition-all duration-700" alt="Sebatik History" />
              <div className="bg-emerald-50 dark:bg-emerald-300/30 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <Users size={48} className="text-emerald-500" />
              </div>
            </div>
            <div className="space-y-6 pt-12">
               <div className="bg-emerald-500 rounded-3xl p-8 aspect-square flex items-center justify-center text-white text-5xl font-black">
                ID
              </div>
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl w-full h-80 object-cover" alt="Sebatik Landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black text-emerald-900 dark:text-stone-900 mb-6">Struktur Organisasi</h2>
          <p className="text-stone-500 dark:text-stone-600 text-lg font-light leading-relaxed">Sinergi antara pemimpin dan staff untuk kemajuan wilayah.</p>
        </div>

        <div className="flex flex-col items-center gap-12 relative">
          <OrgNode 
            role="Camat Sebatik Barat" 
            name="Drs. Syarifuddin, M.Si" 
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" 
            primary
          />

          <div className="w-px h-12 bg-emerald-100 dark:bg-stone-200" />

          <OrgNode 
            role="Sekretaris Kecamatan" 
            name="Hj. Rahmawati, S.Sos" 
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" 
          />

          <div className="w-px h-12 bg-emerald-100 dark:bg-stone-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <OrgNode role="Pemerintahan" name="Bambang S, S.T" />
            <OrgNode role="PMD" name="Fatimah A, S.Ak" />
            <OrgNode role="Trantibum" name="Andi W, S.H" />
            <OrgNode role="Kesos" name="Sri W, M.Pd" />
          </div>
        </div>
      </section>
    </div>
  );
}

function OrgNode({ role, name, image, primary }: { role: string, name: string, image?: string, primary?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "p-8 rounded-[2.5rem] text-center w-full max-w-[280px] transition-all duration-500",
        primary 
          ? "bg-emerald-500 text-white shadow-2xl shadow-emerald-100 dark:shadow-none scale-105" 
          : "bg-white dark:bg-brand-creme border border-emerald-50 dark:border-stone-300 shadow-sm hover:border-emerald-300"
      )}
    >
      {image && (
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      {!image && (
        <div className={cn(
          "w-12 h-12 mx-auto mb-6 rounded-xl flex items-center justify-center",
          primary ? "bg-white/20" : "bg-emerald-50/50 text-emerald-500"
        )}>
          <User size={24} />
        </div>
      )}
      <h4 className={cn("text-[10px] uppercase tracking-widest font-black mb-2", primary ? "text-emerald-100" : "text-emerald-500")}>{role}</h4>
      <p className={cn("font-black text-lg tracking-tight", primary ? "text-white" : "text-emerald-900 dark:text-stone-900")}>{name}</p>
    </motion.div>
  );
}
