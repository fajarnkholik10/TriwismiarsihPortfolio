import React from 'react';
import { Verified, History, Network } from 'lucide-react';

export const Hero: React.FC = () => {
  const cvLink = "https://www.google.com/url?sa=E&q=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F10n_aqOqxoxFpR4YSZW3MLP9OQ-SytQ5s%2Fview";

  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 to-blue-400/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-200 dark:bg-slate-800">
              <img 
                alt="Tri Wismiarsi, S.Hut., M.Sc., Ph.D." 
                className="w-full h-full object-cover" 
                src="https://i.ibb.co.com/TBPhg7NK/Photoprofile.png" 
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Lecturer at Sampoerna University
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
              Tri Wismiarsi, S.Hut., M.Sc., Ph.D.
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Verified size={18} className="text-primary" />
              <span>Academic Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <History size={18} className="text-primary" />
              <span>Evidence-Based Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <Network size={18} className="text-primary" />
              <span>Sustainable Pedagogy</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a 
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-xl text-base font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 inline-flex items-center justify-center"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};