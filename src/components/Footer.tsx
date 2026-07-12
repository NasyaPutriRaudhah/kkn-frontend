'use client';

import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { SanitySiteSettings } from '@/types/sanity';

export default function Footer({ settings }: { settings: SanitySiteSettings | null }) {
  const s: Partial<SanitySiteSettings> = settings || {};
  const socialLinks = [
    { url: s.facebook, icon: Facebook, label: 'Facebook' },
    { url: s.twitter, icon: Twitter, label: 'Twitter' },
    { url: s.instagram, icon: Instagram, label: 'Instagram' },
    { url: s.youtube, icon: Youtube, label: 'YouTube' },
  ].filter((link) => !!link.url);

  return (
    <footer className="bg-[#d8d1c1] dark:bg-[#d8d1c1] border-t border-emerald-100 dark:border-stone-300 pt-20 pb-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
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
            {s.description || 'Portal Informasi Resmi Kecamatan Sebatik Barat. Gerbang kedaulatan di wilayah perbatasan Indonesia dengan integritas pelayanan prima.'}
          </p>
          {socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-brand-creme border border-emerald-100 dark:border-stone-300 flex items-center justify-center text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          )}
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
            {s.address && (
              <li className="flex gap-3">
                <MapPin size={16} className="text-emerald-500 shrink-0" />
                <span>{s.address}</span>
              </li>
            )}
            {s.phone && (
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-emerald-500 shrink-0" />
                <span>{s.phone}</span>
              </li>
            )}
            {s.email && (
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-emerald-500 shrink-0" />
                <span>{s.email}</span>
              </li>
            )}
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-emerald-50 dark:border-stone-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Image
              src="/assets/logo-sebatik.png"
              alt="Logo Sebatik Barat"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/logo-kkn.jpg"
              alt="Logo KKN PPM UGM"
              width={40}
              height={40}
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-xs text-stone-700 font-bold uppercase tracking-widest text-center">
            © 2026 KKN-PPM UGM TAKA SEBATIK • KECAMATAN SEBATIK BARAT
          </p>
        </div>
      </div>
    </footer>
  );
}
