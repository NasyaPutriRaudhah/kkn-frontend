import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface InfoCardProps {
  label: string;
  labelColor?: 'green' | 'blue' | 'gold' | 'teal' | 'indigo';
  title: string;
  children: ReactNode;
  className?: string;
}

const labelStyles: Record<string, string> = {
  green: 'text-emerald-600 before:bg-emerald-600',
  blue: 'text-sea before:bg-sea',
  gold: 'text-sand before:bg-sand',
  teal: 'text-forsa-teal before:bg-forsa-teal',
  indigo: 'text-indigo-600 before:bg-indigo-600',
};

export default function InfoCard({ label, labelColor = 'green', title, children, className }: InfoCardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-brand-creme rounded-2xl border border-emerald-50 dark:border-stone-300 p-5 md:p-6 my-5 shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      <div className={cn(
        "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest mb-2 before:content-[''] before:inline-block before:w-[22px] before:h-[3px] before:rounded-full",
        labelStyles[labelColor]
      )}>
        {label}
      </div>
      <h3 className="font-serif text-lg font-bold mb-2.5 text-emerald-900 dark:text-stone-900">{title}</h3>
      <div className="text-sm leading-relaxed text-stone-500 dark:text-stone-600 [&_strong]:text-emerald-600 [&_strong]:font-bold">
        {children}
      </div>
    </div>
  );
}
