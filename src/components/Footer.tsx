'use client';

import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#d8d1c1] dark:bg-[#d8d1c1] border-t border-emerald-100 dark:border-stone-300 pt-20 pb-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image 
                src="/assets/logo.png" 
                alt="Logo Sebatik Barat"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none text-emerald-900 dark:text-stone-900 uppercase">
                Sebatik Barat
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-semibold">
                Kabupaten Nunukan
              </span>
            </div>
          </div>
          <p className="text-stone-500 dark:text-stone-600 text-xs leading-relaxed max-w-xs">
            Portal Informasi Resmi Kecamatan Sebatik Barat. Gerbang kedaulatan di wilayah perbatasan Indonesia dengan integritas pelayanan prima.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -4 }}
                className="w-10 h-10 rounded-xl bg-white dark:bg-brand-creme border border-emerald-100 dark:border-stone-300 flex items-center justify-center text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-6">Navigasi Utama</h4>
          <ul className="flex flex-col gap-4 text-sm text-stone-600 dark:text-stone-600 font-medium">
            <li><Link href="/profil" className="hover:text-emerald-500 transition-colors">Profil Wilayah</Link></li>
            <li><Link href="/kewilayahan" className="hover:text-emerald-500 transition-colors">Data Desa</Link></li>
            <li><Link href="/umkm" className="hover:text-emerald-500 transition-colors">Layanan UMKM</Link></li>
            <li><Link href="/sda" className="hover:text-emerald-500 transition-colors">Potensi SDA</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-6">Informasi Kontak</h4>
          <ul className="flex flex-col gap-5 text-xs text-stone-600 dark:text-stone-600 leading-relaxed font-medium">
            <li className="flex gap-3">
              <MapPin size={16} className="text-emerald-500 shrink-0" />
              <span>Jl. Ahmad Yani No. 1, Desa Binalawan, <br />Kec. Sebatik Barat, Kab. Nunukan</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-emerald-500 shrink-0" />
              <span>(0556) 123456</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-emerald-500 shrink-0" />
              <span>kontak@sebatikbarat.go.id</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-6">Buletin Digital</h4>
          <p className="text-xs text-stone-500 dark:text-stone-600 mb-6 leading-relaxed">Berlangganan untuk mendapatkan berita pembangunan terbaru secara periodik.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email"
              className="bg-white dark:bg-brand-creme border border-emerald-50 dark:border-stone-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-600 w-full shadow-sm"
            />
            <button className="bg-emerald-500 text-white rounded-xl px-6 py-3 text-xs font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 dark:shadow-none">
              Daftar
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-emerald-50 dark:border-stone-300 text-center text-xs text-stone-700 font-bold uppercase tracking-widest">
        <p>© 2026 PEMERINTAH KABUPATEN NUNUKAN • KECAMATAN SEBATIK BARAT</p>
      </div>
    </footer>
  );
}
