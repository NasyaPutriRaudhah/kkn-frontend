interface KKNStripProps {
  main: string;
  sub: string;
  badge?: string;
}

export default function KKNStrip({ main, sub, badge }: KKNStripProps) {
  return (
    <div className="bg-gradient-to-br from-[#001f4d] to-[#003366] rounded-xl p-4 my-5 flex items-center gap-4 border border-amber-500/30">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center text-lg font-black text-[#003366] shrink-0 shadow-md">
        UGM
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-extrabold text-yellow-400 mb-0.5">{main}</div>
        <div className="text-xs text-white/65 leading-relaxed">{sub}</div>
      </div>
      {badge && (
        <span className="shrink-0 bg-amber-500/20 border border-amber-500/40 text-yellow-400 text-[11px] font-bold px-3 py-1.5 rounded-xl">
          {badge}
        </span>
      )}
    </div>
  );
}
