import React from 'react';
import { GraduationCap, Mail, Share2, Printer } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 py-10 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white p-1 rounded">
            <GraduationCap size={20} />
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-white">Portfolio 2026</span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
          © Tri Wismiarsi. All rights reserved. Professional Teaching Excellence Series.
        </p>
        <div className="flex gap-4 text-slate-400">
          <button className="hover:text-primary transition-colors" aria-label="Email">
            <Mail size={20} />
          </button>
          <button className="hover:text-primary transition-colors" aria-label="Share">
            <Share2 size={20} />
          </button>
          <button className="hover:text-primary transition-colors" aria-label="Print">
            <Printer size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};