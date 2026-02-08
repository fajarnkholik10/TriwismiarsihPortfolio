import React from 'react';

interface MediaPageProps {
  onNavigate: (page: string) => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate }) => {
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
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Media & Public Engagement</span>
      </div>

      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Media Center
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Impact Beyond <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">The Classroom</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Highlighting contributions to public discourse, community empowerment initiatives, and expert commentary in national media and government publications.
            </p>
        </div>
        <div className="relative hidden md:block">
            {/* Decorative background element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
             <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 transform translate-y-8">
                    <span className="material-symbols-outlined text-4xl text-blue-600 mb-2">podium</span>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">15+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Speaking Engagements</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-4xl text-amber-500 mb-2">public</span>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">National</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Media Coverage</div>
                </div>
             </div>
        </div>
      </div>

      {/* Featured Spotlight (Video) */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Featured Spotlight
            </h2>
        </div>
        
        <div className="group relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
            {/* Background Image / Thumbnail mostly covered by overlay */}
            <div className="absolute inset-0 bg-[url('https://i.ytimg.com/vi/dpCxfvtD1NY/maxresdefault.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-blue-400 font-bold text-sm tracking-widest uppercase">
                        <span className="material-symbols-outlined text-lg">play_circle</span>
                        Interview Session
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Empowering Coastal Communities: <br/> A Story of Resilience & Innovation
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                        Watch how Ms. Tri led a transformative program with Australia Global Alumni to enhance creativity and business skills for coastal families, preparing them for a competitive digital economy.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a 
                            href="https://drive.google.com/file/d/1ju3fv5x8wSsbyBZ5frwKS5zr8VKqHsPV/view?usp=sharing" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">play_arrow</span> Watch Full on Youtube
                        </a>
                    </div>
                </div>
                
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dpCxfvtD1NY?rel=0&modestbranding=1" 
                        title="Featured Training Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                In The News
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <article className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-80 overflow-hidden relative">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: 'url("https://mediacenter.slemankab.go.id/wp-content/uploads/2025/12/pemasaran-berbasis-AI-500x280.jpg")' }}
                    ></div>
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white shadow-sm">
                        Technology & SMEs
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4 text-xs font-medium text-slate-500">
                        <span className="text-blue-600 font-bold">SLEMAN MEDIA CENTER</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>Dec 22, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                        Digital Transformation: AI Marketing Strategies for Local SMEs
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                        Highlighting the Business Incubation Program that equips young UMKM entrepreneurs with cutting-edge AI marketing skills to boost local competitiveness.
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <a href="https://mediacenter.slemankab.go.id/2025/12/22/dorong-daya-saing-umkm-pemuda-karang-taruna-depok-sleman-bekali-diri-dengan-strategi-pemasaran-berbasis-ai/?print=print" target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">
                            Read Full Article <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                        <span className="material-symbols-outlined text-slate-300">newspaper</span>
                    </div>
                </div>
            </article>

            {/* Article 2 */}
            <article className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-80 overflow-hidden relative">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: 'url("https://img.antaranews.com/cache/1200x800/2018/07/PSX_20180720_231741.jpg.webp")' }}
                    ></div>
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white shadow-sm">
                        Community Empowerment
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4 text-xs font-medium text-slate-500">
                        <span className="text-red-600 font-bold">ANTARANEWS</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>July 20, 2018</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-red-600 transition-colors">
                        Australia Global Alumni Training Empowers Academic Leaders
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                        A focused entrepreneurship training program for women in the dairy village of Sidem, sharing skills to market value-added products and support economic independence.
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <a href="https://jatim.antaranews.com/berita/259770/australia-global-alumni-gelar-pelatihan-kewirausahaan-di-tulungagung" target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">
                            Read Full Article <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                        <span className="material-symbols-outlined text-slate-300">newspaper</span>
                    </div>
                </div>
            </article>
        </div>
      </section>

      {/* Logos / Trusted By */}
      <section className="py-12 border-t border-slate-100 dark:border-slate-800">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Institutions & Media Partners</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-2xl">school</span> Australia Awards
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-2xl">campaign</span> Sleman Kab
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-2xl">feed</span> Antara
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-2xl">account_balance</span> Sampoerna University
            </div>
        </div>
      </section>
    </div>
  );
};