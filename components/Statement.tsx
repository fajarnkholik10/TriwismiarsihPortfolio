import React from 'react';
import { Quote, Download, Users, Sparkles } from 'lucide-react';

export const Statement: React.FC = () => {
  const cvLink = "https://www.google.com/url?sa=E&q=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F10n_aqOqxoxFpR4YSZW3MLP9OQ-SytQ5s%2Fview";

  return (
    <section className="mb-24 relative">
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo Side */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-200/20 rounded-2xl rotate-3 blur-sm"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-800">
            <img 
              src="https://i.ibb.co.com/P3zqLhF/Whats-App-Image-2026-02-01-at-17-43-55.jpg" 
              alt="Ms. Tri Wismiarsi Teaching Session" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            Executive Statement
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-8">
            Fostering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Critical Minds</span> for a Complex World
          </h2>

          <div className="relative pl-8 border-l-4 border-primary/20 space-y-6">
            <Quote className="absolute -top-2 -left-3 text-primary bg-background-light dark:bg-background-dark p-1" size={24} />
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
              "I view teaching as empowering students to think critically and apply theory to real-world contexts through student-centered, active learning. By using evidence-based methods, technology, and continuous feedback, I foster an inclusive environment that develops analytical skills, professionalism, and real-world readiness."
            </p>

            <div className="pt-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};