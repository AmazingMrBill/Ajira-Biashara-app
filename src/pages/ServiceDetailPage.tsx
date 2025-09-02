import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, MapPin, Clock, Shield, Award, Heart, Share2, MessageCircle, Calendar } from 'lucide-react';
import { mockServices } from '../data/mockData';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  
  // Find the service (in real app, this would be an API call)
  const service = mockServices.find(s => s.id === id);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
          <p className="text-gray-600 mb-4">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="text-green-600 hover:text-green-700 font-medium">
            Browse All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-gray-700">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                {service.featured && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Featured Service
                  </div>
                )}
                <img
                  src={service.images[selectedImage]}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {service.images.length > 1 && (
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {service.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-green-500' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h1>
                  <p className="text-gray-600">{service.category}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Heart size={20} className="text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Share2 size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{service.provider.rating}</span>
                  <span className="text-gray-600">({service.provider.reviewCount} reviews)</span>
                </div>
                
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin size={16} />
                  <span>{service.provider.location}</span>
                </div>
                
                <div className="flex items-center space-x-1 text-gray-600">
                  <Clock size={16} />
                  <span>{service.deliveryTime}</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Description</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                
                <h4 className="text-md font-semibold text-gray-900 mt-6 mb-3">What's Included:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Professional consultation and assessment</li>
                  <li>High-quality materials and tools</li>
                  <li>Clean-up after service completion</li>
                  <li>30-day satisfaction guarantee</li>
                  <li>Follow-up support and maintenance tips</li>
                </ul>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Reviews ({service.provider.reviewCount})
              </h3>
              
              <div className="space-y-4">
                {/* Sample Reviews */}
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <img
                        src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`}
                        alt="Reviewer"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">Sarah M.</span>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Excellent service! Very professional and completed the work on time. 
                          Highly recommend for anyone looking for quality cleaning services.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-4 text-green-600 hover:text-green-700 font-medium text-sm">
                View All Reviews
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Provider Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Link to={`/provider/${service.provider.id}`} className="block group">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={service.provider.avatar}
                    alt={service.provider.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {service.provider.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{service.provider.rating}</span>
                      <span className="text-sm text-gray-500">({service.provider.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{service.provider.completionRate}%</div>
                  <div className="text-gray-600">Completion Rate</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{service.provider.responseTime}</div>
                  <div className="text-gray-600">Response Time</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => setShowContactModal(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>Contact Provider</span>
                </button>
                
                <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Calendar size={18} />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Pricing</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Starting Price</span>
                  <span className="text-2xl font-bold text-green-600">
                    KSh {service.price.toLocaleString()}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p>• Price may vary based on project scope</p>
                  <p>• Free consultation included</p>
                  <p>• Payment protection guaranteed</p>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-green-700 bg-green-50 p-3 rounded-lg">
                  <Shield size={16} />
                  <span>Secure payment with money-back guarantee</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Trust & Safety</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Identity Verified</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Top Rated Provider</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span className="text-gray-700">Quick Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact {service.provider.name}</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe your project requirements..."
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;