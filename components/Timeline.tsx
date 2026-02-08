import React from 'react';
import { Sparkles, GraduationCap, History } from 'lucide-react';
import { TimelineItem } from '../types';

const journey: TimelineItem[] = [
  {
    type: "Current",
    location: "Jakarta",
    role: "Lecturer at Sampoerna University",
    description: "Delivering excellence in higher education with a focus on core academic disciplines and research integration.",
    icon: Sparkles,
    isActive: true
  },
  {
    type: "Doctorate",
    location: "Melbourne",
    role: "PhD from Monash University",
    description: "Specialized research contributing to advanced understanding in the field, bridging theory and practice.",
    icon: GraduationCap,
    isActive: false
  },
  {
    type: "MSc Graduate",
    location: "Glasgow",
    role: "MSc from University of Strathclyde",
    description: "International academic training focusing on specialized expertise and global best practices.",
    icon: History,
    isActive: false
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Professional Journey</h2>
        <div className="h-px bg-slate-200 dark:bg-slate-800 grow"></div>
      </div>
      
      {/* Timeline Container */}
      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
        
        {journey.map((item, idx) => (
          <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${item.isActive ? 'is-active' : ''}`}>
            
            {/* Icon/Dot */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0 z-10 
              ${item.isActive ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
              <item.icon size={18} />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary font-bold text-sm">{item.type}</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">{item.location}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                {item.description}
              </p>
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
};