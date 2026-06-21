import { cn } from '@/lib/utils';

interface QuoteBlockProps {
  text: string;
  source: string;
  color?: 'green' | 'blue' | 'gold';
}

const borderStyles = {
  green: 'border-l-emerald-600 bg-emerald-50',
  blue: 'border-l-sea bg-sea-light',
  gold: 'border-l-sand bg-sand-pale',
};

const textStyles = {
  green: 'text-emerald-700',
  blue: 'text-sea',
  gold: 'text-bark',
};

export default function QuoteBlock({ text, source, color = 'green' }: QuoteBlockProps) {
  return (
    <div className={cn("border-l-4 rounded-r-xl p-4 my-5", borderStyles[color])}>
      <p className={cn("font-serif text-[15px] italic leading-relaxed", textStyles[color])}>
        &ldquo;{text}&rdquo;
      </p>
      <p className="text-xs text-stone-500 mt-2 font-semibold">&mdash; {source}</p>
    </div>
  );
}
