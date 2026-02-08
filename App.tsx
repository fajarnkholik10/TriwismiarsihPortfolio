import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Statement } from './components/Statement';
import { Philosophy } from './components/Philosophy';
import { Recognition } from './components/Recognition';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { MediaPage } from './components/MediaPage';
import { ResearchPage } from './components/ResearchPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="max-w-[1200px] mx-auto px-6 pb-20 w-full flex-grow">
        {currentPage === 'home' ? (
          <div className="animate-in fade-in duration-500">
            <Hero />
            <Stats />
            <Statement />
            <Recognition />
            <ContactCTA />
          </div>
        ) : currentPage === 'philosophy' ? (
          <Philosophy onNavigate={setCurrentPage} />
        ) : currentPage === 'media' ? (
          <MediaPage onNavigate={setCurrentPage} />
        ) : (
          <ResearchPage onNavigate={setCurrentPage} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;