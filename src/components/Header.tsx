import React from 'react';
import { Menu, Wallet, User, LogIn } from 'lucide-react';

interface HeaderProps {
  onLogin: () => void;
  onRegister: () => void;
  onWalletOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogin, onRegister, onWalletOpen }) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ajira Biashara</h1>
              <p className="text-xs text-gray-500">Empowering Kenya's Workforce</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#marketplace" className="text-gray-700 hover:text-green-600 transition-colors">
              Marketplace
            </a>
            <a href="#elimika" className="text-gray-700 hover:text-green-600 transition-colors">
              Elimika
            </a>
            <a href="#jamii" className="text-gray-700 hover:text-green-600 transition-colors">
              Ajira Jamii
            </a>
            <a href="#duka" className="text-gray-700 hover:text-green-600 transition-colors">
              Ajira Duka
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onWalletOpen}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg transition-colors"
            >
              <Wallet size={18} />
              <span>Wallet</span>
            </button>
            
            <button 
              onClick={onLogin}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
            
            <button 
              onClick={onRegister}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <User size={18} />
              <span>Join Now</span>
            </button>
            
            <button className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;