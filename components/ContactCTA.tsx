import React from 'react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="mt-20 py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Interested in Collaboration?</h3>
          <p className="text-slate-500 dark:text-slate-400">
            Ms. Tri is available for academic partnerships, research supervision, and curriculum consultation.
          </p>
        </div>
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/tri-wismiarsi-1068086a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 inline-flex items-center justify-center"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};