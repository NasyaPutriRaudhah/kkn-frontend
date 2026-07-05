'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';
import { sanityFetch } from '~/sanity/lib/fetch';
import { publicServicesQuery } from '~/sanity/lib/queries';
import type { SanityPublicService } from '@/types/sanity';

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
  const [services, setServices] = useState<SanityPublicService[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileLayananOpen(false);
  }, [pathname]);

  useEffect(() => {
    sanityFetch<SanityPublicService[]>(publicServicesQuery)
      .then((data) => setServices(data || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (pathname.startsWith('/studio')) return null;

  const isLayananActive = pathname.startsWith('/layanan-publik');

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
          {/* Layanan Publik Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={cn(
                'text-sm font-medium tracking-wide transition-all relative py-2 flex items-center gap-1',
                isLayananActive
                  ? 'text-emerald-500 dark:text-emerald-300 border-b-2 border-emerald-300'
                  : 'text-stone-700 dark:text-stone-800 hover:text-emerald-400 transition-colors'
              )}
            >
              Layanan Publik
              <ChevronDown
                size={14}
                className={cn(
                  'transition-transform duration-200',
                  dropdownOpen && 'rotate-180'
                )}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-brand-creme rounded-2xl border border-emerald-50 dark:border-stone-300 shadow-2xl shadow-emerald-900/5 overflow-hidden p-2"
                >
                  {services.length > 0 ? (
                    services.map((service) => {
                      const slug = service.slug?.current || '';
                      return (
                        <Link
                          key={service._id}
                          href={`/layanan-publik/${slug}`}
                          className={cn(
                            'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                            pathname === `/layanan-publik/${slug}`
                              ? 'bg-emerald-50 dark:bg-emerald-300/20 text-emerald-600 dark:text-emerald-400'
                              : 'text-stone-600 dark:text-stone-700 hover:bg-emerald-50 dark:hover:bg-emerald-300/10 hover:text-emerald-500'
                          )}
                        >
                          {service.title}
                        </Link>
                      );
                    })
                  ) : (
                    <p className="px-4 py-3 text-sm text-stone-400">Belum ada layanan</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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

            {/* Mobile Layanan Publik */}
            <div>
              <button
                onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                className={cn(
                  'w-full flex items-center justify-between text-lg font-medium p-2 rounded-lg transition-colors',
                  isLayananActive
                    ? 'bg-emerald-500/10 text-emerald-500'
                    : 'text-stone-600 dark:text-stone-700'
                )}
              >
                Layanan Publik
                <ChevronDown
                  size={18}
                  className={cn(
                    'transition-transform duration-200',
                    mobileLayananOpen && 'rotate-180'
                  )}
                />
              </button>
              <AnimatePresence>
                {mobileLayananOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4 flex flex-col gap-2 mt-2"
                  >
                    {services.length > 0 ? (
                      services.map((service) => {
                        const slug = service.slug?.current || '';
                        return (
                          <Link
                            key={service._id}
                            href={`/layanan-publik/${slug}`}
                            className={cn(
                              'text-base p-2 rounded-lg transition-colors',
                              pathname === `/layanan-publik/${slug}`
                                ? 'bg-emerald-500/10 text-emerald-500'
                                : 'text-stone-500 dark:text-stone-600 hover:text-emerald-500'
                            )}
                          >
                            {service.title}
                          </Link>
                        );
                      })
                    ) : (
                      <p className="text-sm text-stone-400 p-2">Belum ada layanan</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
