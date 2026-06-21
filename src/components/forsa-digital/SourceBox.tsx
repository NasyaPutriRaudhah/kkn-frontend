import type { ReactNode } from 'react';

interface SourceBoxProps {
  title: string;
  children: ReactNode;
}

export default function SourceBox({ title, children }: SourceBoxProps) {
  return (
    <div className="bg-stone-50 rounded-xl border border-stone-200 p-4 my-6">
      <div className="text-[11px] font-black tracking-widest uppercase text-stone-500 mb-2.5">{title}</div>
      <div className="space-y-0">
        {children}
      </div>
    </div>
  );
}

export function SourceItem({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs text-stone-500 leading-relaxed py-1 border-b border-dashed border-stone-200 last:border-b-0">
      {children}
    </div>
  );
}
