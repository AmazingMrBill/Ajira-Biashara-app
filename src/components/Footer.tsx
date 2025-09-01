import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ajira Biashara</h3>
                <p className="text-sm text-gray-400">Empowering Kenya's Workforce</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The complete digital ecosystem for workforce empowerment, 
              connecting service providers, learners, and entrepreneurs across Kenya.
            </p>
          </div>
          
          {/* Platform Modules */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#marketplace" className="text-gray-300 hover:text-white transition-colors">Ajira Marketplace</a></li>
              <li><a href="#elimika" className="text-gray-300 hover:text-white transition-colors">Elimika Learning</a></li>
              <li><a href="#jamii" className="text-gray-300 hover:text-white transition-colors">Ajira Jamii</a></li>
              <li><a href="#duka" className="text-gray-300 hover:text-white transition-colors">Ajira Duka</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#safety" className="text-gray-300 hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300">support@ajirabiashara.co.ke</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ajira Biashara. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
              Accessibility
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
            <a href="#sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;