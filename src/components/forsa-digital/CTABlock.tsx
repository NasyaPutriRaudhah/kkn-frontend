interface CTABlockProps {
  bigText: string;
  subText: string;
}

export default function CTABlock({ bigText, subText }: CTABlockProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-xl p-7 md:p-8 text-center my-7 text-white">
      <div className="font-serif text-xl md:text-2xl font-bold mb-2.5 leading-tight">{bigText}</div>
      <div className="text-sm opacity-85 leading-relaxed">{subText}</div>
    </div>
  );
}
