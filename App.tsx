
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import FullMenu from './components/FullMenu';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'full-menu'>('home');

  const toggleView = (newView: 'home' | 'full-menu') => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar view={view} onViewChange={toggleView} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Menu onShowFullMenu={() => toggleView('full-menu')} />
            <Services />
            <Reviews />
            <Location />
          </>
        ) : (
          <FullMenu onBack={() => toggleView('home')} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
