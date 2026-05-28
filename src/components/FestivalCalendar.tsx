'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CalendarDays, X } from 'lucide-react';
import { getStrapiUrl, normalizeCollectionEntries } from '../lib/strapi';
import type { CalendarEventAttributes } from '../types/strapi';

interface CalendarEvent {
  date: number;
  month: number;
  year: number;
  title: string;
  desc?: string;
  color: string;
}

const events: CalendarEvent[] = [
  { date: 17, month: 2, year: 2026, title: 'Festival Seni Batas Negeri', desc: 'Pembukaan festival seni tahunan', color: 'bg-emerald-500' },
  { date: 18, month: 2, year: 2026, title: 'Festival Seni Batas Negeri', desc: 'Lomba tari dan musik tradisional', color: 'bg-emerald-500' },
  { date: 19, month: 2, year: 2026, title: 'Festival Seni Batas Negeri', desc: 'Penutupan dan penganugerahan', color: 'bg-emerald-500' },
  { date: 10, month: 4, year: 2026, title: 'Festival Budaya Melayu', desc: 'Perayaan di pesisir Liang Bunyu', color: 'bg-amber-500' },
  { date: 3, month: 7, year: 2026, title: 'Pesta Laut', desc: 'Tradisi syukur nelayan Sebatik', color: 'bg-sky-500' },
  { date: 12, month: 9, year: 2026, title: 'Festival Kuliner Pesisir', desc: 'Eksplorasi gastronomi khas pesisir', color: 'bg-rose-500' },
  { date: 13, month: 9, year: 2026, title: 'Festival Kuliner Pesisir', desc: 'Lomba masak dan bazar kuliner', color: 'bg-rose-500' },
  { date: 29, month: 11, year: 2026, title: 'Festival Akhir Tahun', desc: 'Perayaan tutup tahun Sebatik Barat', color: 'bg-purple-500' },
  { date: 30, month: 11, year: 2026, title: 'Festival Akhir Tahun', desc: 'Panggung hiburan dan pesta kembang api', color: 'bg-purple-500' },
  { date: 31, month: 11, year: 2026, title: 'Festival Akhir Tahun', desc: 'Malam pergantian tahun', color: 'bg-purple-500' },
];

const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export default function FestivalCalendar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>(events);

  useEffect(() => {
    let mounted = true;
    async function loadCalendarEvents() {
      try {
        const res = await fetch(`${getStrapiUrl()}/api/calendar-events?pagination[pageSize]=200&sort=event_date:asc`);
        if (!res.ok) return;

        const json = await res.json();
        const normalized = normalizeCollectionEntries<CalendarEventAttributes>(json.data);
        const mapped = normalized
          .map((entry) => {
            if (!entry.event_date || !entry.title) return null;
            const d = new Date(entry.event_date);
            if (Number.isNaN(d.getTime())) return null;
            return {
              date: d.getDate(),
              month: d.getMonth(),
              year: d.getFullYear(),
              title: entry.title,
              desc: entry.description,
              color: entry.color || 'bg-emerald-500',
            } as CalendarEvent;
          })
          .filter(Boolean) as CalendarEvent[];

        if (mounted && mapped.length > 0) {
          setAllEvents(mapped);
        }
      } catch (error) {
        console.error('Calendar events endpoint not ready, using fallback events.', error);
      }
    }

    loadCalendarEvents();
    return () => {
      mounted = false;
    };
  }, []);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startDay = new Date(viewYear, viewMonth, 1).getDay();

  const monthEvents = useMemo(
    () => allEvents.filter(e => e.month === viewMonth && e.year === viewYear),
    [allEvents, viewMonth, viewYear]
  );

  const hasEvent = (day: number) => monthEvents.some(e => e.date === day);
  const getEventsForDay = (day: number) => monthEvents.filter(e => e.date === day);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(v => v - 1); }
    else { setViewMonth(v => v - 1); }
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(v => v + 1); }
    else { setViewMonth(v => v + 1); }
  };

  const upcomingEvents = useMemo(
    () => allEvents
      .map(e => ({ ...e, sort: new Date(e.year, e.month, e.date).getTime() }))
      .filter(e => e.sort >= today.getTime())
      .sort((a, b) => a.sort - b.sort)
      .slice(0, 5),
    [allEvents, today]
  );

  const allDayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
            className="bg-white dark:bg-brand-creme rounded-[3rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 border border-emerald-50 dark:border-stone-300"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500 rounded-[1.2rem] flex items-center justify-center text-white shadow-lg shadow-emerald-100">
                  <CalendarDays size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-emerald-900 dark:text-stone-900 tracking-tight">Kalender Festival</h3>
                  <p className="text-stone-400 dark:text-stone-500 text-sm font-light">Tahun {viewYear}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-2xl bg-stone-100 dark:bg-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid md:grid-cols-[1fr_280px] gap-10">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <button onClick={prevMonth} className="w-12 h-12 rounded-xl bg-stone-50 dark:bg-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors border border-stone-100 dark:border-stone-300">
                    <ChevronLeft size={20} />
                  </button>
                  <h4 className="text-xl font-black text-emerald-900 dark:text-stone-900 tracking-tight">
                    {monthNames[viewMonth]} {viewYear}
                  </h4>
                  <button onClick={nextMonth} className="w-12 h-12 rounded-xl bg-stone-50 dark:bg-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors border border-stone-100 dark:border-stone-300">
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-7 mb-2">
                  {allDayNames.map(d => (
                    <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-stone-400 dark:text-stone-500 py-2">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: startDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const hasEvt = hasEvent(day);
                    const todayMatch = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
                    return (
                      <div
                        key={day}
                        className={`
                          aspect-square rounded-xl flex flex-col items-center justify-center relative
                          text-sm font-medium transition-colors cursor-default
                          ${todayMatch ? 'bg-emerald-500 text-white' : hasEvt ? 'bg-emerald-50 dark:bg-stone-200 text-emerald-900 dark:text-stone-900' : 'text-stone-600 dark:text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-200'}
                        `}
                      >
                        <span className="text-sm font-bold leading-none">{day}</span>
                        {hasEvt && !todayMatch && (
                          <div className="flex gap-0.5 mt-1">
                            {Array.from(new Set(getEventsForDay(day).map(e => e.color))).slice(0, 3).map((color, ci) => (
                              <span key={ci} className={`w-1 h-1 rounded-full ${color}`} />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-6">Event Mendatang</h4>
                <div className="space-y-4">
                  {upcomingEvents.length === 0 && (
                    <p className="text-stone-400 text-sm font-light italic">Belum ada event mendatang.</p>
                  )}
                  {upcomingEvents.map((evt, i) => (
                    <div key={`${evt.title}-${evt.date}-${evt.month}`} className="flex gap-4 p-4 rounded-2xl bg-stone-50 dark:bg-stone-200/50 border border-stone-100 dark:border-stone-300">
                      <div className={`w-2 rounded-full shrink-0 ${evt.color}`} />
                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">
                          {evt.date} {monthNames[evt.month]} {evt.year}
                        </p>
                        <p className="font-black text-emerald-900 dark:text-stone-900 text-sm truncate">{evt.title}</p>
                        {evt.desc && (
                          <p className="text-stone-400 text-xs font-light mt-0.5 truncate">{evt.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
