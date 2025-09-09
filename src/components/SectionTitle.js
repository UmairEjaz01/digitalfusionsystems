import React from "react";
import { Star } from "lucide-react";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-400/30">
          <Star className="w-4 h-4" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-white">{title}</h2>
      {subtitle && <p className="text-slate-300 mt-6 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
