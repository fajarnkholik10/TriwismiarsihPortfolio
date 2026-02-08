import React, { useState } from 'react';
import { Target, Puzzle, MessageSquare, ArrowRight, FileText, Image as ImageIcon, BarChart } from 'lucide-react';

interface EvidencePageProps {
  onNavigate: (page: string) => void;
}

export const EvidencePage: React.FC<EvidencePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'design' | 'assessment' | 'outcomes'>('design');

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
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Evidence of Impact</span>
      </div>

      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-4">
          Portfolio Part 3
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
          Narrative Statements & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Evidence of Excellence</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A structured articulation of my pedagogical strengths, addressing assessment criteria through specific examples of educational design, feedback, and student achievement.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab('design')}
          className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all border-2 ${activeTab === 'design' ? 'bg-white dark:bg-slate-800 border-green-500 text-green-600 shadow-lg' : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
        >
          <Puzzle size={20} /> Educational Design
        </button>
        <button
          onClick={() => setActiveTab('assessment')}
          className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all border-2 ${activeTab === 'assessment' ? 'bg-white dark:bg-slate-800 border-green-500 text-green-600 shadow-lg' : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
        >
          <Target size={20} /> Assessment & Feedback
        </button>
        <button
          onClick={() => setActiveTab('outcomes')}
          className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all border-2 ${activeTab === 'outcomes' ? 'bg-white dark:bg-slate-800 border-green-500 text-green-600 shadow-lg' : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
        >
          <MessageSquare size={20} /> Impact & Outcomes
        </button>
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Narrative Side */}
        <div className="lg:col-span-7 space-y-8">
            {activeTab === 'design' && (
                <div className="animate-in slide-in-from-left-4 fade-in duration-300">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pedagogical Rationale & Design</h2>
                    <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-loose">
                        <p className="mb-4">
                            <strong>Criteria Address:</strong> This section demonstrates how my curriculum design bridges the gap between abstract theory and the chaotic reality of Indonesian markets.
                        </p>
                        <p className="mb-4">
                            My educational design is grounded in <em>Constructivist Theory</em>, specifically leveraging Problem-Based Learning (PBL). In my "International Trade" module, I redesigned the syllabus to move away from rote memorization of trade tariffs. Instead, I introduced the "Export Simulation," a semester-long project where students must theoretically export a local SME product to a new market.
                        </p>
                        <p>
                            This design aligns with the assessment criteria by prioritizing <strong>authentic learning</strong>. Students do not just read about barriers to entry; they encounter them. The narrative of the course forces them to navigate regulatory hurdles, cultural barriers, and logistics, mirroring the exact challenges identified in my research on SME export barriers.
                        </p>
                    </div>
                </div>
            )}

            {activeTab === 'assessment' && (
                <div className="animate-in slide-in-from-left-4 fade-in duration-300">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Assessment & Feedback Strategies</h2>
                    <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-loose">
                         <p className="mb-4">
                            <strong>Criteria Address:</strong> This section illustrates how assessment is used not just as a measurement of learning, but as a tool for learning (Assessment for Learning).
                        </p>
                        <p className="mb-4">
                            I employ a <strong>feed-forward mechanism</strong> in all major projects. Rather than a single high-stakes submission, assignments are broken into staged deliverables (Proposal, Draft, Final). 
                        </p>
                        <p className="mb-4">
                            For example, in the <em>Consumer Behavior</em> course, students submit a draft of their survey instrument before deployment. I provide video feedback (Loom recordings) walking through their logic. This allows students to correct their trajectory <em>before</em> the final grade is at risk. 
                        </p>
                        <p>
                            This approach has reduced anxiety and significantly improved the quality of final analysis, as evidenced by a 20% increase in distinction grades since implementation.
                        </p>
                    </div>
                </div>
            )}

            {activeTab === 'outcomes' && (
                <div className="animate-in slide-in-from-left-4 fade-in duration-300">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Evidence of Impact & Student Success</h2>
                    <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-loose">
                        <p className="mb-4">
                            <strong>Criteria Address:</strong> This section provides concrete evidence of how my teaching philosophy translates into student achievement and professional readiness.
                        </p>
                        <p className="mb-4">
                            The ultimate test of my teaching is student employability and critical capability. Feedback from alumni indicates that the "Export Simulation" was the most relevant preparation for their current roles in logistics and supply chain management.
                        </p>
                        <p>
                           Furthermore, my student evaluation scores (TEVAL) have consistently averaged <strong>4.6/5.0</strong> over the last three years, with qualitative comments frequently citing "real-world relevance" and "engaging case studies" as key strengths.
                        </p>
                    </div>
                </div>
            )}
        </div>

        {/* Evidence Box Side */}
        <div className="lg:col-span-5">
            <div className="bg-slate-50 dark:bg-[#1a2632] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 sticky top-24">
                <div className="flex items-center gap-2 mb-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <FileText size={16} /> Supporting Evidence
                </div>

                {activeTab === 'design' && (
                    <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                        <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer">
                             <div className="h-32 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <ImageIcon className="text-slate-300" size={32} />
                             </div>
                             <div className="p-4">
                                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Module Syllabus Redesign.pdf</h4>
                                <p className="text-xs text-slate-500 mt-1">Comparison of Before/After Syllabus structure</p>
                             </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer">
                             <div className="h-32 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <ImageIcon className="text-slate-300" size={32} />
                             </div>
                             <div className="p-4">
                                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Simulation Workflow.jpg</h4>
                                <p className="text-xs text-slate-500 mt-1">Diagram of the Export Simulation steps</p>
                             </div>
                        </div>
                    </div>
                )}

                {activeTab === 'assessment' && (
                    <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Sample Feedback Loop</h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Draft</span>
                                <ArrowRight size={12} />
                                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Video Feedback</span>
                                <ArrowRight size={12} />
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Final</span>
                            </div>
                            <p className="text-xs text-slate-400 italic">"Visual representation of the feed-forward mechanism used in MKT301."</p>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer">
                             <div className="h-32 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <BarChart className="text-slate-300" size={32} />
                             </div>
                             <div className="p-4">
                                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Rubric_Analysis.pdf</h4>
                                <p className="text-xs text-slate-500 mt-1">Detailed breakdown of grading criteria</p>
                             </div>
                        </div>
                    </div>
                )}

                {activeTab === 'outcomes' && (
                    <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                         <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="flex items-end justify-between mb-2">
                                <span className="text-4xl font-black text-green-500">4.6</span>
                                <span className="text-xs font-bold text-slate-400 uppercase">Avg Rating</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[92%]"></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Student Evaluation of Teaching (2023-2025)</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 italic text-sm text-slate-600 dark:text-slate-300">
                            "Ms. Tri's class was the first time I understood how to actually apply marketing theory. The simulation was hard but incredibly useful."
                            <div className="mt-2 text-xs font-bold text-slate-400 not-italic">- Year 3 Student</div>
                        </div>
                    </div>
                )}

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="w-full py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                        Download Full Portfolio PDF
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};