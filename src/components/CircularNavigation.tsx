import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Users, ShoppingBag } from 'lucide-react';

const CircularNavigation: React.FC = () => {
  const modules = [
    {
      id: 'marketplace',
      path: '/services',
      name: 'Ajira Marketplace',
      description: 'Find services & hire professionals',
      icon: Briefcase,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
    },
    {
      id: 'elimika',
      path: '/elimika',
      name: 'Elimika',
      description: 'Learn new skills & get certified',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    },
    {
      id: 'jamii',
      path: '/jamii',
      name: 'Ajira Jamii',
      description: 'Connect & build community',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
    },
    {
      id: 'duka',
      path: '/duka',
      name: 'Ajira Duka',
      description: 'Shop for tools & supplies',
      icon: ShoppingBag,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful modules designed to empower Kenya's workforce through digital innovation
          </p>
        </div>
        
        {/* Desktop Circular Layout */}
        <div className="hidden lg:block relative">
          <div className="relative w-96 h-96 mx-auto">
            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-sm font-semibold">Ajira</div>
                <div className="text-lg font-bold">Biashara</div>
              </div>
            </div>
            
            {/* Module Circles */}
            {modules.map((module, index) => {
              const angle = (index * 90) - 45; // Start from top-right and go clockwise
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={module.id}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <Link 
                    to={module.path}
                    className={`group w-24 h-24 bg-gradient-to-br ${module.color} ${module.hoverColor} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
                  >
                    <module.icon className="w-8 h-8 text-white" />
                  </Link>
                  
                  <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center w-32">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{module.name}</h3>
                    <p className="text-xs text-gray-600">{module.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-2 gap-6 lg:hidden">
          {modules.map((module) => (
            <Link
              to={module.path}
              key={module.id}
              className={`group p-6 bg-gradient-to-br ${module.color} ${module.hoverColor} rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center space-y-3">
                <module.icon className="w-8 h-8" />
                <div className="text-center">
                  <h3 className="font-semibold text-sm mb-1">{module.name}</h3>
                  <p className="text-xs opacity-90">{module.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircularNavigation;