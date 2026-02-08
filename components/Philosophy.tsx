import React from 'react';
import { Leaf, Users, Mic, Quote, CheckCircle2, Globe } from 'lucide-react';

interface PhilosophyProps {
  onNavigate: (page: string) => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onNavigate }) => {
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
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Teaching Philosophy</span>
      </div>

      <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-6">
                  Statement of Teaching Philosophy
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 dark:text-white mb-8 tracking-tight">
                  Sustainability & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Active Learning</span>
              </h1>
              <div className="relative max-w-4xl mx-auto">
                  <Quote className="absolute -top-8 -left-8 text-slate-200 dark:text-slate-800 w-16 h-16 -z-10" />
                  <p className="text-xl md:text-3xl font-serif italic text-slate-700 dark:text-slate-300 leading-relaxed">
                      "By integrating sustainability into class studies and decision-making processes, we teach students that good leaders think about long-lasting environmental effects as well as profits."
                  </p>
                  <Quote className="absolute -bottom-8 -right-8 text-slate-200 dark:text-slate-800 w-16 h-16 -z-10 rotate-180" />
              </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-20">
                  
                  {/* Vision Section */}
                  <section className="relative">
                      <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-transparent hidden lg:block"></div>
                      <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                          Ethical & Environmental Stewardship
                      </h2>
                      <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-slate-300 leading-loose font-light">
                          <p className="mb-6">
                              Upholding the environment is crucial for the credibility of our teaching and the lasting success of our profession as educators. By showing environmental care in practical ways like using resources mindfully, designing eco-friendly learning spaces, and including ecological ideas in our lessons, we teach students through our deeds as well as our words.
                          </p>
                          <p>
                              In business education, especially management and marketing, taking care of the environment is crucial. As lecturers, it's our duty to show that good management goes beyond just the company to the whole environment. By integrating sustainability into class studies, we teach students that good leaders think about long-lasting environmental effects as well as profits. When we respect and safeguard the environment, we're also safeguarding the importance of business education.
                          </p>
                      </div>
                      
                      {/* Image 1 */}
                      <figure className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 mt-8">
                          <div className="aspect-video relative overflow-hidden">
                            <img 
                                src="https://i.ibb.co.com/hk5hCgm/Whats-App-Image-2026-01-26-at-12-28-11.jpg" 
                                alt="Classroom Discussion" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                          </div>
                          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6 pt-12">
                              <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider mb-1">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                Core Value
                              </div>
                              <p className="text-white font-medium">Sustainability isn't a choice but a must for future leaders.</p>
                          </figcaption>
                      </figure>
                  </section>

                  {/* Instructional Strategies */}
                  <section>
                      <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8">
                          Pedagogical Approach
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Users size={24} />
                              </div>
                              <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">Student-Centered Learning</h3>
                              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                  Similar to participatory learning, students are urged to get involved actively—asking questions, sharing thoughts, and seeking knowledge. Teachers serve as facilitators to create a supportive collaborative atmosphere.
                              </p>
                          </div>
                          <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                <Mic size={24} />
                              </div>
                              <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">Experiential Learning</h3>
                              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                  Role-playing helps grasp complex ideas like negotiation and selling. We also use presentations and recordings to tackle real-world scenarios, boosting practical skills for actual challenges.
                              </p>
                          </div>
                      </div>
                  </section>

                  {/* Evidence-Based Practice (Contextualized to Sampoerna) */}
                  <section className="relative">
                      <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent hidden lg:block"></div>
                      <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                          Institutional Context
                      </h2>
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 mb-8">
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-loose font-light">
                            Sampoerna University highly values student-centered learning. By focusing on the students, this approach makes learning more interactive, collaborative, and valuable for everyone involved. In my management classes, this translates to students not just receiving information but being actively engaged in the construction of their own professional identity.
                        </p>
                      </div>

                      {/* Image 2 */}
                      <figure className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                          <div className="aspect-video relative overflow-hidden">
                            <img 
                                src="https://i.ibb.co.com/qMXGnV1c/Whats-App-Image-2026-02-01-at-17-42-27.jpg" 
                                alt="Student Collaboration" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                          </div>
                           <div className="absolute top-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-5 py-3 rounded-xl shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform">
                              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                  <CheckCircle2 size={16} className="text-blue-500" /> Interactive & Collaborative
                              </span>
                          </div>
                      </figure>
                  </section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                  {/* Philosophy in Action Card */}
                   <div className="sticky top-24">
                      <div className="bg-navy-dark dark:bg-slate-800 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden border-t-4 border-green-500">
                          <div className="absolute top-0 right-0 p-8 opacity-5">
                              <Globe size={180} />
                          </div>
                          <div className="relative z-10">
                              <div className="flex items-center gap-2 mb-6">
                                <span className="bg-green-500/20 text-green-500 p-2 rounded-lg">
                                    <Leaf size={20} />
                                </span>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-green-500">In Practice</h3>
                              </div>
                              <h4 className="text-2xl font-serif font-bold mb-6">Sustainability in Management</h4>
                              <p className="text-slate-300 leading-relaxed mb-6 font-light">
                                  Beyond profit, my curriculum challenges students to consider ecological impacts.
                              </p>
                              <div className="border-t border-white/10 pt-6 mt-6">
                                  <h5 className="font-bold text-white mb-2 text-sm">Key Methodologies:</h5>
                                  <ul className="text-sm text-slate-400 space-y-2">
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>Participatory Learning</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>Role-Playing & Simulation</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>Video Recorded Presentations</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};