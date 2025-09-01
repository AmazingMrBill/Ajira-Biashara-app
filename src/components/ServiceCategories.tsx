import React from 'react';
import { Wrench, Droplets, Sparkles, Car, Scissors, Laptop, Camera, Paintbrush } from 'lucide-react';

const ServiceCategories: React.FC = () => {
  const categories = [
    {
      name: 'Electricians',
      icon: Wrench,
      count: '150+ professionals',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    },
    {
      name: 'Plumbers',
      icon: Droplets,
      count: '120+ professionals',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      name: 'Cleaners',
      icon: Sparkles,
      count: '200+ professionals',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      name: 'Mechanics',
      icon: Car,
      count: '80+ professionals',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100'
    },
    {
      name: 'Beauty Services',
      icon: Scissors,
      count: '180+ professionals',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      name: 'Digital Services',
      icon: Laptop,
      count: '250+ professionals',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      name: 'Photography',
      icon: Camera,
      count: '90+ professionals',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
    },
    {
      name: 'Painting',
      icon: Paintbrush,
      count: '110+ professionals',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular Service Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover skilled professionals across various industries ready to help with your projects
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`group p-6 ${category.bgColor} ${category.hoverColor} border border-white/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <div className="text-center space-y-3">
                <div className={`w-12 h-12 ${category.color} ${category.bgColor} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2">
            <span>Explore All Categories</span>
            <Wrench size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;