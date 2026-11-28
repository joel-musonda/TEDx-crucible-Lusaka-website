import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import HomeAmbient from './components/HomeAmbient';
import SpeakerForm from './components/SpeakerForm';
import SpeakersPage from './components/SpeakersPage';
import ContactPage from './components/ContactPage';

function App() {
  // 'home' | 'speakers' | 'contact' | 'apply'
  const [activeView, setActiveView] = useState('home');

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const handleOpenApply = () => {
    setActiveView('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSpeakers = () => {
    setActiveView('speakers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    setActiveView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSection = (sectionId) => {
    setActiveView('home');
    scrollToSection(sectionId);
  };

  const handleGoHome = (event) => {
    const href = event?.currentTarget?.getAttribute?.('href');
    setActiveView('home');

    if (href && href.startsWith('#')) {
      event.preventDefault();
      scrollToSection(href.slice(1));
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar
        onViewSpeakers={handleOpenSpeakers}
        onViewContact={handleOpenContact}
        onLogoClick={handleGoHome}
      />

      {activeView === 'apply' && (
        <div className="pt-20">
          <SpeakerForm />
        </div>
      )}

      {activeView === 'speakers' && <SpeakersPage />}

      {activeView === 'contact' && <ContactPage />}

      {activeView === 'home' && (
        <>
          <HomeAmbient />
          <Hero
            onApplyClick={handleOpenApply}
            onViewSpeakers={handleOpenSpeakers}
            onViewContact={handleOpenContact}
          />
          <MainContent onApplyClick={handleOpenApply} />
        </>
      )}

      <Footer
        onViewSection={handleOpenSection}
        onViewSpeakers={handleOpenSpeakers}
        onViewContact={handleOpenContact}
      />
    </div>
  );
}

export default App;