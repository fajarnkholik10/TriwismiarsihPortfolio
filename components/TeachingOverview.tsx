import React from 'react';
import { BookOpen, Users, MapPin, Award, CheckCircle2, Building2, Briefcase } from 'lucide-react';

interface TeachingOverviewProps {
  onNavigate: (page: string) => void;
}

export const TeachingOverview: React.FC<TeachingOverviewProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
        <button 
            onClick={() => onNavigate('home')}
            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
        >
          <span className="material-symbols-outlined text-sm">home</span> Home
        </button>
        <span className="text-[#4c739a] text-sm">/</span>
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Teaching Overview & Context</span>
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
          Portfolio Part 2
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
          Teaching Context <span className="text-slate-400">&</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Professional Overview</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          An overview of the specific character of my teaching practice, the institutional context at Sampoerna University, and my commitment to continuous professional development.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: Context & Experience */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Section 1: Teaching Context */}
          <section className="relative">
            <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent hidden lg:block"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
              <Building2 className="text-indigo-600" size={28} />
              The Teaching Context
            </h2>
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-loose">
              <p className="mb-4">
                My primary teaching context is <strong>Sampoerna University</strong>, an institution that uniquely blends Indonesian values with US-style higher education standards. The university operates under a dual-degree partnership with the University of Arizona, requiring a rigorous adherence to international accreditation standards while remaining culturally responsive to Indonesian students.
              </p>
              <p className="mb-4">
                <strong>Student Demographics:</strong> I teach a diverse cohort of undergraduates, primarily Gen Z students from various socioeconomic backgrounds across Indonesia. Many are first-generation university students on merit-based scholarships, bringing high academic potential but requiring scaffolded support to bridge the gap between local secondary education and international higher education expectations.
              </p>
              <p>
                <strong>Challenges & Opportunities:</strong> The core challenge in this context is bridging the "theory-practice" gap for students who may have limited exposure to global business environments. My teaching is designed to demystify complex international trade and management concepts by anchoring them in local realities before scaling up to global applications.
              </p>
            </div>
            
            {/* Context Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-indigo-50 dark:bg-slate-800 p-4 rounded-xl border border-indigo-100 dark:border-slate-700">
                <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">Gen Z</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Primary Cohort</div>
              </div>
              <div className="bg-indigo-50 dark:bg-slate-800 p-4 rounded-xl border border-indigo-100 dark:border-slate-700">
                <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">US-Indo</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Dual Curriculum</div>
              </div>
              <div className="bg-indigo-50 dark:bg-slate-800 p-4 rounded-xl border border-indigo-100 dark:border-slate-700">
                <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">30:1</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Avg. Class Ratio</div>
              </div>
            </div>
          </section>

          {/* Section 2: Roles & Responsibilities */}
          <section className="relative">
            <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent hidden lg:block"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
              <Briefcase className="text-blue-600" size={28} />
              Responsibilities & Courses
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              As a full-time lecturer, my responsibilities extend beyond delivery to curriculum design, assessment moderation, and pastoral care. I serve as the Unit Coordinator for several key management modules.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Introduction to Business</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Foundation Level • 150+ Students</p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Flipped classroom implementation</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Basic business literacy assessment</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">International Trade</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Advanced Level • 40 Students</p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Simulation-based learning</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Export strategy formulation</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Consumer Behavior</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Intermediate Level • 60 Students</p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Field research projects</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> Digital analytics integration</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column: CPD & Research */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Continuing Professional Development */}
          <div className="bg-white dark:bg-[#1a2632] p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 sticky top-24">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Award className="text-amber-500" />
              Professional Development
            </h3>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-8 pb-4">
              <div className="pl-6 relative">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-amber-500"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">2024</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">AI in Education Workshop</h4>
                <p className="text-xs text-slate-500 mt-1">Sampoerna University CETL</p>
              </div>

              <div className="pl-6 relative">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-amber-500"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">2023</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Problem-Based Learning Cert</h4>
                <p className="text-xs text-slate-500 mt-1">Monash University Online</p>
              </div>

              <div className="pl-6 relative">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-amber-500"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">2022</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Teaching for Active Learning</h4>
                <p className="text-xs text-slate-500 mt-1">University of Strathclyde Alumni Series</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Teaching-Research Nexus</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    My research on SME resilience directly informs my curriculum. I treat my classroom as a "living lab" where students test theoretical frameworks against real-time market data.
                </p>
                <button 
                    onClick={() => onNavigate('research')}
                    className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    View Research Portfolio
                </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};