import { cn } from '@/lib/utils';

interface MonevCardProps {
  icon: string;
  value: string;
  label: string;
  valueColor?: 'green' | 'amber' | 'teal' | 'blue';
}

const valueStyles: Record<string, string> = {
  green: 'text-emerald-600',
  amber: 'text-forsa-amber',
  teal: 'text-forsa-teal',
  blue: 'text-sea',
};

export function MonevCard({ icon, value, label, valueColor = 'green' }: MonevCardProps) {
  return (
    <div className="bg-white dark:bg-brand-creme rounded-xl border border-emerald-50 dark:border-stone-300 p-3.5 text-center">
      <span className="text-2xl block mb-1">{icon}</span>
      <div className={cn("text-xl font-extrabold mb-0.5", valueStyles[valueColor])}>{value}</div>
      <div className="text-[11.5px] text-stone-500 dark:text-stone-600 leading-tight">{label}</div>
    </div>
  );
}

interface MonevGridProps {
  children: React.ReactNode;
}

export default function MonevGrid({ children }: MonevGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
      {children}
    </div>
  );
}
