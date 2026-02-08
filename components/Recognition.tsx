import React from 'react';
import { Trophy, BookOpen, Users, Globe } from 'lucide-react';
import { RecognitionItem } from '../types';

const items: RecognitionItem[] = [
  {
    icon: Trophy,
    iconColorClass: "text-amber-500",
    title: "Research Grant Recipient",
    description: "Awarded 7 competitive research grants to investigate SME resilience, export barriers, and market strategies in Indonesia."
  },
  {
    icon: Users,
    iconColorClass: "text-blue-500",
    title: "Community Impact Leader",
    description: "Recognized by Australia Global Alumni for empowering coastal communities through digital literacy and entrepreneurship training."
  },
  {
    icon: BookOpen,
    iconColorClass: "text-emerald-500",
    title: "Prolific Scholar",
    description: "Author of 'Hambatan Ekspor UKM Indonesia' with 50+ scholarly publications and over 265 academic citations."
  },
  {
    icon: Globe,
    iconColorClass: "text-purple-500",
    title: "International Speaker",
    description: "Invited speaker at global forums in Greece, Spain, and the UK, bridging local insights with global trade theory."
  }
];

export const Recognition: React.FC = () => {
  return (
    <section className="mb-20" id="recognition">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Recognition & Impact</h2>
        <div className="h-px bg-slate-200 dark:bg-slate-800 grow"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="size-16 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center shadow-sm shrink-0">
              <item.icon size={28} className={item.iconColorClass} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};