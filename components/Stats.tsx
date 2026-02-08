import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "25+", label: "Years Experience" },
  { value: "25", label: "Journal Publications" },
  { value: "25", label: "Conference Papers" },
  { value: "7", label: "Grants Awarded" },
  { value: "1", label: "Book Published" },
];

export const Stats: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1">
            <span className="text-primary text-3xl font-black">{stat.value}</span>
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};