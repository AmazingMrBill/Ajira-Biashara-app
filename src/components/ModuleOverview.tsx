import React from 'react';
import { Search, BookOpen, MessageCircle, Store, Shield, Award, CreditCard, Globe } from 'lucide-react';

const ModuleOverview: React.FC = () => {
  const modules = [
    {
      id: 'marketplace',
      title: 'Ajira Marketplace',
      subtitle: 'Projects & Services',
      description: 'Connect with skilled professionals or offer your services to thousands of potential clients across Kenya.',
      features: [
        'Create professional profiles',
        'Post and bid on projects',
        'Secure payment system',
        'Review and rating system'
      ],
      icon: Search,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'elimika',
      title: 'Elimika',
      subtitle: 'Learning Hub',
      description: 'Access world-class training programs designed to enhance your skills and boost your earning potential.',
      features: [
        'Interactive online courses',
        'Certificates and badges',
        'Progress tracking',
        'Expert instructors'
      ],
      icon: BookOpen,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'jamii',
      title: 'Ajira Jamii',
      subtitle: 'Community',
      description: 'Build meaningful connections, share experiences, and grow together with like-minded professionals.',
      features: [
        'Professional networking',
        'Knowledge sharing groups',
        'Mentorship programs',
        'Career opportunities'
      ],
      icon: MessageCircle,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'duka',
      title: 'Ajira Duka',
      subtitle: 'Multi-vendor Shop',
      description: 'Purchase professional tools, supplies, and equipment from verified vendors at competitive prices.',
      features: [
        'Quality tools and supplies',
        'Verified vendor network',
        'Secure transactions',
        'Fast delivery'
      ],
      icon: Store,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600',
      image: 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From finding work to building skills, connecting with peers to purchasing supplies - 
            Ajira Biashara has it all
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`${module.bgColor} ${module.borderColor} border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 ${module.iconColor} bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                  <module.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{module.title}</h3>
                  <p className="text-sm text-gray-600 font-medium">{module.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{module.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {module.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 ${module.iconColor} bg-current rounded-full`}></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Shield className="w-8 h-8 text-green-600 mx-auto" />
              <h4 className="font-semibold text-gray-900">Secure Payments</h4>
              <p className="text-sm text-gray-600">M-PESA & card payments</p>
            </div>
            <div className="space-y-2">
              <Award className="w-8 h-8 text-blue-600 mx-auto" />
              <h4 className="font-semibold text-gray-900">Certified Training</h4>
              <p className="text-sm text-gray-600">Industry-recognized certificates</p>
            </div>
            <div className="space-y-2">
              <CreditCard className="w-8 h-8 text-purple-600 mx-auto" />
              <h4 className="font-semibold text-gray-900">Digital Wallet</h4>
              <p className="text-sm text-gray-600">Easy money management</p>
            </div>
            <div className="space-y-2">
              <Globe className="w-8 h-8 text-orange-600 mx-auto" />
              <h4 className="font-semibold text-gray-900">Kenya-Wide</h4>
              <p className="text-sm text-gray-600">Nationwide service coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleOverview;