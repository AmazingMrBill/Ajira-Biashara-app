import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-orange-600 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hire. Learn. Connect. Shop.
              </h1>
              <p className="text-xl sm:text-2xl text-green-100 leading-relaxed">
                Kenya's complete digital ecosystem for workforce empowerment and economic growth.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Trusted by 10,000+ professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-yellow-400" />
                <span>Active community of learners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Certified training programs</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onGetStarted}
                className="group bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-400 text-gray-900 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Active Services</div>
                </div>
                <div className="bg-orange-400 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Courses</div>
                </div>
                <div className="bg-green-400 text-gray-900 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="text-sm">Community Members</div>
                </div>
                <div className="bg-red-400 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm">Shop Vendors</div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white/90 text-lg font-medium">
                  Join thousands building their future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;