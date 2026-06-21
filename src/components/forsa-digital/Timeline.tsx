import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface TimelineItemProps {
  dotColor?: 'green' | 'amber' | 'teal' | 'blue';
  period: string;
  periodColor?: 'green' | 'amber' | 'teal' | 'blue';
  title: string;
  children: ReactNode;
}

const dotStyles: Record<string, string> = {
  green: 'bg-emerald-600 border-emerald-50',
  amber: 'bg-sand border-amber-pale',
  teal: 'bg-forsa-teal border-teal-pale',
  blue: 'bg-sea border-sea-light',
};

const periodStyles: Record<string, string> = {
  green: 'text-emerald-600',
  amber: 'text-forsa-amber',
  teal: 'text-forsa-teal',
  blue: 'text-sea',
};

export function TimelineItem({ dotColor = 'green', period, periodColor, title, children }: TimelineItemProps) {
  const pColor = periodColor || dotColor;
  return (
    <div className="relative pl-7 pb-4">
      <div className={cn(
        "absolute left-[6px] top-[3px] w-3.5 h-3.5 rounded-full border-[2.5px]",
        dotStyles[dotColor]
      )} />
      <div className={cn("text-[11px] font-black uppercase tracking-wide mb-1", periodStyles[pColor])}>
        {period}
      </div>
      <h4 className="text-sm font-bold text-stone-800 mb-1">{title}</h4>
      <div className="text-[13px] text-stone-500 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative my-5 pl-1 before:content-[''] before:absolute before:left-[13px] before:top-1 before:bottom-0 before:w-[2px] before:bg-emerald-500/20 before:rounded-full">
      {children}
    </div>
  );
}
