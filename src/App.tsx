import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CircularNavigation from './components/CircularNavigation';
import ModuleOverview from './components/ModuleOverview';
import ServiceCategories from './components/ServiceCategories';
import AuthModal from './components/AuthModal';
import WalletModal from './components/WalletModal';
import Footer from './components/Footer';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Header 
        onLogin={() => openAuthModal('login')}
        onRegister={() => openAuthModal('register')}
        onWalletOpen={() => setIsWalletModalOpen(true)}
      />
      
      <main>
        <Hero onGetStarted={() => openAuthModal('register')} />
        <CircularNavigation />
        <ModuleOverview />
        <ServiceCategories />
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        mode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
        onModeChange={setAuthMode}
      />
      
      <WalletModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </div>
  );
}

export default App;