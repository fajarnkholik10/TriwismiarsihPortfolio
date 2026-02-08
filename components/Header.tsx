import React from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

interface HeaderProps {
    onNavigate: (page: string) => void;
    currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'research', label: 'Research' },
    { id: 'media', label: 'Media' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-primary text-white p-1.5 rounded-lg shadow-sm">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block">Ms. Tri Wismiarsi</h2>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id)} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${currentPage === item.id 
                  ? 'bg-primary/10 text-primary font-bold' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 shadow-xl animate-in slide-in-from-top-5">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }} 
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${currentPage === item.id 
                    ? 'bg-primary/10 text-primary font-bold' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};