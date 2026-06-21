interface SpeciesCardProps {
  icon: string;
  name: string;
  latin: string;
  desc: string;
}

export default function SpeciesCard({ icon, name, latin, desc }: SpeciesCardProps) {
  return (
    <div className="bg-white dark:bg-brand-creme rounded-xl border border-emerald-50 dark:border-stone-300 p-4 text-center hover:-translate-y-1 hover:shadow-md transition-all">
      <span className="text-3xl block mb-2">{icon}</span>
      <div className="font-serif text-sm font-bold text-emerald-700 dark:text-emerald-500 mb-0.5">{name}</div>
      <div className="text-[11px] italic text-stone-400 mb-1.5">{latin}</div>
      <div className="text-[11.5px] text-stone-500 dark:text-stone-600 leading-relaxed">{desc}</div>
    </div>
  );
}
