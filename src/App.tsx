import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CircularNavigation from './components/CircularNavigation';
import ModuleOverview from './components/ModuleOverview';
import ServiceCategories from './components/ServiceCategories';
import AuthModal from './components/AuthModal';
import WalletModal from './components/WalletModal';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProviderProfilePage from './pages/ProviderProfilePage';
import PostProjectPage from './pages/PostProjectPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
        <Header 
          onLogin={() => openAuthModal('login')}
          onRegister={() => openAuthModal('register')}
          onWalletOpen={() => setIsWalletModalOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero onGetStarted={() => openAuthModal('register')} />
              <CircularNavigation />
              <ModuleOverview />
              <ServiceCategories />
            </main>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/post-project" element={<PostProjectPage />} />
          <Route path="/provider/:id" element={<ProviderProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        
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
    </Router>
  );
}

export default App;