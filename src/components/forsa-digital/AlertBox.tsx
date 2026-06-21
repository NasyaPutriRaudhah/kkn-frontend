import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface AlertBoxProps {
  type: 'warning' | 'info' | 'success';
  icon: string;
  children: ReactNode;
}

const styles: Record<string, string> = {
  warning: 'bg-amber-pale border-sand/35 text-bark',
  info: 'bg-teal-pale border-forsa-teal/20 text-forsa-teal',
  success: 'bg-emerald-50 border-emerald-500/20 text-emerald-700',
};

const iconStyles: Record<string, string> = {
  warning: 'text-bark',
  info: 'text-forsa-teal',
  success: 'text-emerald-600',
};

export default function AlertBox({ type, icon, children }: AlertBoxProps) {
  return (
    <div className={cn(
      "rounded-xl p-4 my-4 flex gap-3 items-start border",
      styles[type]
    )}>
      <span className={cn("text-xl shrink-0 mt-0.5", iconStyles[type])}>{icon}</span>
      <div className="text-[13.5px] leading-relaxed [&_strong]:font-bold">
        {children}
      </div>
    </div>
  );
}
