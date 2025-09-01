import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, MapPin, Clock, Award, Shield, MessageCircle, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { mockServices } from '../data/mockData';

const ProviderProfilePage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'services' | 'reviews' | 'portfolio'>('services');
  
  // Find provider services (in real app, this would be an API call)
  const providerServices = mockServices.filter(s => s.provider.id === id);
  const provider = providerServices[0]?.provider;
  
  if (!provider) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Provider Not Found</h1>
          <p className="text-gray-600 mb-4">The provider you're looking for doesn't exist.</p>
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
            <span className="text-gray-900 font-medium">{provider.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Provider Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={provider.avatar}
                  alt={provider.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-2xl font-bold text-gray-900">{provider.name}</h1>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">Verified</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{provider.rating}</span>
                      <span className="text-gray-600">({provider.reviewCount} reviews)</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin size={16} />
                      <span>{provider.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">
                    Professional service provider with over 5 years of experience. 
                    Committed to delivering high-quality work and excellent customer service.
                  </p>
                </div>
                
                <div className="flex flex-col space-y-2 w-full md:w-auto">
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <MessageCircle size={18} />
                    <span>Contact</span>
                  </button>
                  <button className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Calendar size={18} />
                    <span>Schedule</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{provider.completionRate}%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{provider.responseTime}</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">{providerServices.length}</div>
                <div className="text-sm text-gray-600">Active Services</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">150+</div>
                <div className="text-sm text-gray-600">Jobs Completed</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab('services')}
                    className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'services'
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Services ({providerServices.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'reviews'
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Reviews ({provider.reviewCount})
                  </button>
                  <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'portfolio'
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Portfolio
                  </button>
                </nav>
              </div>
              
              <div className="p-6">
                {activeTab === 'services' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {providerServices.map((service) => (
                      <Link
                        key={service.id}
                        to={`/service/${service.id}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-sm transition-all"
                      >
                        <h4 className="font-medium text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{service.category}</span>
                          <span className="font-semibold text-green-600">KSh {service.price.toLocaleString()}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((review) => (
                      <div key={review} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex items-start space-x-3">
                          <img
                            src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`}
                            alt="Reviewer"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-gray-900">Client {review}</span>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review} days ago</span>
                            </div>
                            <p className="text-gray-700 text-sm">
                              Outstanding work quality and professionalism. Delivered exactly what was promised and on time.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'portfolio' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="relative group cursor-pointer">
                        <img
                          src={`https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop`}
                          alt={`Portfolio ${item}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <span className="text-white font-medium">View Project</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Briefcase size={18} />
                <span>Skills & Expertise</span>
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {['Plumbing', 'Pipe Installation', 'Leak Repair', 'Bathroom Renovation', 'Emergency Services'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <GraduationCap size={18} />
                <span>Certifications</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Certified Plumber</p>
                    <p className="text-sm text-gray-600">Kenya Institute of Plumbers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Safety Training</p>
                    <p className="text-sm text-gray-600">OSHA Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Languages</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">English</span>
                  <span className="text-sm text-green-600 font-medium">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Swahili</span>
                  <span className="text-sm text-green-600 font-medium">Native</span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Availability</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-gray-900">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-gray-900">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-red-600">Closed</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  <Clock size={14} className="inline mr-1" />
                  Usually responds within {provider.responseTime}
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Member Since</span>
                  <span className="font-medium text-gray-900">Jan 2023</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Earnings</span>
                  <span className="font-medium text-gray-900">KSh 450,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Jobs Completed</span>
                  <span className="font-medium text-gray-900">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Repeat Clients</span>
                  <span className="font-medium text-gray-900">85%</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
              
              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <MessageCircle size={18} />
                  <span>Send Message</span>
                </button>
                
                <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Calendar size={18} />
                  <span>Schedule Call</span>
                </button>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  💡 Tip: Be specific about your project requirements for the best response
                </p>
              </div>
            </div>

            {/* Similar Providers */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Similar Providers</h3>
              
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <Link
                    key={item}
                    to={`/provider/similar-${item}`}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <img
                      src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`}
                      alt="Provider"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">Provider {item}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">4.8 (25)</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfilePage;