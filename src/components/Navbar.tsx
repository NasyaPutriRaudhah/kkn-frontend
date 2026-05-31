'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Profil', href: '/profil' },
  { name: 'Sarana Prasarana', href: '/sarana-prasarana' },
  { name: 'Kewilayahan', href: '/kewilayahan' },
  { name: 'UMKM', href: '/umkm' },
  { name: 'SDA', href: '/sda' },
  { name: 'Budaya', href: '/budaya' },
  { name: 'Produk Hukum', href: '/produk-hukum' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass-nav py-2' : 'glass-nav py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none">
          <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-all relative py-2',
                  isActive 
                    ? 'text-emerald-500 dark:text-emerald-300 border-b-2 border-emerald-300' 
                    : 'text-stone-700 dark:text-stone-800 hover:text-emerald-400 transition-colors'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-stone-800 dark:text-stone-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-stone-50 dark:bg-brand-creme shadow-2xl border-b border-stone-100 dark:border-stone-300 p-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-lg font-medium p-2 rounded-lg transition-colors',
                    isActive 
                      ? 'bg-emerald-500/10 text-emerald-500' 
                      : 'text-stone-600 dark:text-stone-700'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
