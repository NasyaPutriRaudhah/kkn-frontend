import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface FactChipProps {
  color?: 'green' | 'blue' | 'gold' | 'teal' | 'indigo';
  children: ReactNode;
}

const styles: Record<string, string> = {
  green: 'bg-emerald-50 text-emerald-600 border-emerald-500/20',
  blue: 'bg-sea-light text-sea border-sea/20',
  gold: 'bg-sand-pale text-bark border-sand/30',
  teal: 'bg-teal-pale text-forsa-teal border-forsa-teal/20',
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-500/20',
};

export default function FactChip({ color = 'green', children }: FactChipProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1 text-xs md:text-[12.5px] font-bold px-3.5 py-1.5 rounded-full border",
      styles[color]
    )}>
      {children}
    </span>
  );
}
