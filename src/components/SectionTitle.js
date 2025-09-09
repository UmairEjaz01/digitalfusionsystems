import React from "react";
import { Star } from "lucide-react";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-turquoise-100 text-turquoise-700">
          <Star className="w-3.5 h-3.5" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 leading-tight">{title}</h2>
      {subtitle && <p className="text-slate-600 dark:text-slate-300 mt-4">{subtitle}</p>}
    </div>
  );
}
