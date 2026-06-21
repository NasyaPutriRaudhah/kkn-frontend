import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface DialogSceneProps {
  title: string;
  children: ReactNode;
}

export default function DialogScene({ title, children }: DialogSceneProps) {
  return (
    <div className="bg-emerald-50/50 dark:bg-emerald-300/5 rounded-2xl border border-emerald-100 dark:border-emerald-300/20 p-5 md:p-6 my-6">
      <p className="text-[10px] font-black text-center tracking-widest uppercase text-emerald-500/60 dark:text-emerald-400/60 mb-4">
        {title}
      </p>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

interface DialogBubbleProps {
  position?: 'left' | 'right';
  avatar: string;
  name: string;
  variant?: 'student' | 'ranger' | 'elder';
  children: ReactNode;
}

const avatarStyles = {
  student: 'bg-gradient-to-br from-sea to-blue-500',
  ranger: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
  elder: 'bg-gradient-to-br from-sand to-amber-700',
};

const bubbleStyles = {
  student: 'bg-sea text-white rounded-br-sm',
  ranger: 'bg-emerald-600 text-white rounded-bl-sm',
  elder: 'bg-white text-amber-900 border border-sand/40 rounded-bl-sm shadow-sm',
};

export function DialogBubble({ position = 'left', avatar, name, variant = 'student', children }: DialogBubbleProps) {
  return (
    <div className={cn("flex gap-3 items-start", position === 'right' && "flex-row-reverse")}>
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 border-2 border-white shadow-md",
        avatarStyles[variant]
      )}>
        {avatar}
      </div>
      <div className={cn("flex flex-col max-w-[78%]", position === 'right' && "items-end")}>
        <span className="text-[11px] font-bold text-stone-500 dark:text-stone-400 mb-1">{name}</span>
        <div className={cn("text-sm leading-relaxed px-4 py-3 rounded-2xl shadow-sm", bubbleStyles[variant])}>
          {children}
        </div>
      </div>
    </div>
  );
}
