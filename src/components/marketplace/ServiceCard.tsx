import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Award, Heart } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  featured: boolean;
  provider: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    location: string;
    responseTime: string;
    completionRate: number;
  };
  images: string[];
  deliveryTime: string;
  createdAt: string;
}

interface ServiceCardProps {
  service: Service;
  viewMode: 'grid' | 'list';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="relative md:w-48 md:h-32">
              {service.featured && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
                  Featured
                </div>
              )}
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-48 md:h-32 object-cover rounded-lg"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <Link 
                    to={`/service/${service.id}`}
                    className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors"
                  >
                    {service.title}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{service.category}</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Heart size={18} className="text-gray-400" />
                </button>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">{service.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{service.provider.rating}</span>
                  <span className="text-sm text-gray-500">({service.provider.reviewCount} reviews)</span>
                </div>
                
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin size={14} />
                  <span className="text-sm">{service.provider.location}</span>
                </div>
                
                <div className="flex items-center space-x-1 text-gray-600">
                  <Clock size={14} />
                  <span className="text-sm">{service.deliveryTime}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Link
                  to={`/provider/${service.provider.id}`}
                  className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <img
                    src={service.provider.avatar}
                    alt={service.provider.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">{service.provider.name}</span>
                </Link>
                
                <div className="text-right">
                  <p className="text-sm text-gray-600">Starting at</p>
                  <p className="text-xl font-bold text-green-600">KSh {service.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
      {/* Image */}
      <div className="relative">
        {service.featured && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
            Featured
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-lg transition-colors z-10">
          <Heart size={16} className="text-gray-400" />
        </button>
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <Link 
            to={`/service/${service.id}`}
            className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors line-clamp-1"
          >
            {service.title}
          </Link>
          <p className="text-sm text-gray-600">{service.category}</p>
        </div>
        
        <div className="flex items-center space-x-1 mb-3">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{service.provider.rating}</span>
          <span className="text-sm text-gray-500">({service.provider.reviewCount})</span>
        </div>
        
        <Link
          to={`/provider/${service.provider.id}`}
          className="flex items-center space-x-2 mb-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
        >
          <img
            src={service.provider.avatar}
            alt={service.provider.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900">{service.provider.name}</span>
        </Link>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>{service.provider.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{service.deliveryTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Starting at</p>
            <p className="text-lg font-bold text-green-600">KSh {service.price.toLocaleString()}</p>
          </div>
          
          <Link
            to={`/service/${service.id}`}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;