import type { ReactNode } from 'react';

interface StepItemProps {
  num: number | string;
  title: string;
  tags?: { label: string; color?: 'green' | 'amber' | 'teal' }[];
  children: ReactNode;
}

const tagStyles: Record<string, string> = {
  green: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-pale text-forsa-amber',
  teal: 'bg-teal-pale text-forsa-teal',
};

export function StepItem({ num, title, tags, children }: StepItemProps) {
  return (
    <div className="flex gap-4 items-start py-4 border-b border-dashed border-emerald-500/15 last:border-b-0">
      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white text-base font-black flex items-center justify-center shrink-0">
        {num}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-[15px] text-emerald-700 mb-1">{title}</div>
        <div className="text-[13.5px] text-stone-500 leading-relaxed">{children}</div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${tagStyles[tag.color || 'green']}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface StepFlowProps {
  children: ReactNode;
}

export default function StepFlow({ children }: StepFlowProps) {
  return (
    <div className="flex flex-col my-5">
      {children}
    </div>
  );
}
