'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 2500;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    const timer = setTimeout(() => setShow(false), duration);
    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-emerald-700"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Branding */}
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-emerald-100/80 text-sm font-medium tracking-[0.3em] uppercase mb-1"
              >
                Portal Resmi
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight"
              >
                Sebatik Barat
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-emerald-100/60 text-xs mt-2 tracking-widest uppercase"
              >
                Kecamatan · Kabupaten Nunukan
              </motion.p>
            </div>

            {/* Horizontal Battery */}
            <div className="flex items-center gap-2">
              {/* Battery Body */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.9 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
                className="relative w-72 h-20 border-[3px] border-emerald-200/50 rounded-xl overflow-hidden bg-emerald-800/40 shadow-lg shadow-emerald-500/10"
              >
                {/* Battery Fill */}
                <div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-400 to-emerald-300"
                  style={{ width: `${progress}%` }}
                />

                {/* Glow overlay */}
                <div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                  style={{ width: `${progress}%` }}
                />

                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white font-mono tracking-tighter drop-shadow-md">
                    {Math.round(progress)}<span className="text-xl">%</span>
                  </span>
                </div>
              </motion.div>

              {/* Battery Terminal */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="w-2.5 h-8 bg-emerald-200/50 rounded-r-sm origin-left"
              />
            </div>

            {/* Loading text */}
            {progress < 100 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-emerald-100/50 text-xs tracking-widest uppercase -mt-3"
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  LOADING
                </motion.span>
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
