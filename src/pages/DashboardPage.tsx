import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  DollarSign, 
  Users, 
  Star, 
  Plus, 
  Eye, 
  Edit, 
  Trash2,
  MessageCircle,
  Calendar,
  TrendingUp
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'projects' | 'earnings'>('overview');

  const stats = {
    totalEarnings: 45750,
    activeServices: 8,
    completedJobs: 23,
    averageRating: 4.8,
    profileViews: 156,
    responseRate: 95
  };

  const recentServices = [
    {
      id: '1',
      title: 'Professional Plumbing Services',
      category: 'Home Maintenance',
      price: 2500,
      views: 45,
      status: 'active'
    },
    {
      id: '2',
      title: 'Emergency Pipe Repair',
      category: 'Home Maintenance',
      price: 1800,
      views: 23,
      status: 'active'
    },
    {
      id: '3',
      title: 'Bathroom Installation',
      category: 'Construction',
      price: 15000,
      views: 67,
      status: 'paused'
    }
  ];

  const recentProjects = [
    {
      id: '1',
      title: 'Kitchen Renovation Project',
      client: 'Sarah M.',
      budget: '25,000 - 35,000',
      status: 'in-progress',
      deadline: '2024-02-15'
    },
    {
      id: '2',
      title: 'Office Plumbing Setup',
      client: 'Tech Solutions Ltd',
      budget: '15,000 - 20,000',
      status: 'completed',
      deadline: '2024-01-20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Dashboard</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Manage your services, projects, and earnings</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              to="/services/create"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <Plus size={18} />
              <span>Add Service</span>
            </Link>
            <Link
              to="/post-project"
              className="flex items-center space-x-2 px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              <Plus size={18} />
              <span>Post Project</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Total Earnings</span>
            </div>
            <p className="text-xl font-bold text-gray-900">KSh {stats.totalEarnings.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Active Services</span>
            </div>
            <p className="text-xl font-bold text-gray-900">{stats.activeServices}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600">Completed Jobs</span>
            </div>
            <p className="text-xl font-bold text-gray-900">{stats.completedJobs}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-600">Avg Rating</span>
            </div>
            <p className="text-xl font-bold text-gray-900">{stats.averageRating}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-gray-600">Profile Views</span>
            </div>
            <p className="text-xl font-bold text-gray-900">{stats.profileViews}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-600">Response Rate</span>
            </div>
            <p className="text-xl font-bold text-gray-900">{stats.responseRate}%</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'services', label: 'My Services' },
                { id: 'projects', label: 'My Projects' },
                { id: 'earnings', label: 'Earnings' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">New message from Sarah M.</p>
                          <p className="text-xs text-gray-600">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Star className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Received 5-star review</p>
                          <p className="text-xs text-gray-600">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Payment received: KSh 2,500</p>
                          <p className="text-xs text-gray-600">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to="/services/create"
                        className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all text-center"
                      >
                        <Plus className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm font-medium text-gray-900">Add Service</span>
                      </Link>
                      <Link
                        to="/projects"
                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center"
                      >
                        <BarChart3 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm font-medium text-gray-900">Browse Projects</span>
                      </Link>
                      <Link
                        to="/messages"
                        className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all text-center"
                      >
                        <MessageCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm font-medium text-gray-900">Messages</span>
                      </Link>
                      <Link
                        to="/calendar"
                        className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all text-center"
                      >
                        <Calendar className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm font-medium text-gray-900">Schedule</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'services' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-gray-900">My Services</h3>
                  <Link
                    to="/services/create"
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <Plus size={18} />
                    <span>Add Service</span>
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {recentServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.category}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>KSh {service.price.toLocaleString()}</span>
                          <span>{service.views} views</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            service.status === 'active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {service.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/service/${service.id}`}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Eye size={18} />
                        </Link>
                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'projects' && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-6">My Projects</h3>
                
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{project.title}</h4>
                          <p className="text-sm text-gray-600">Client: {project.client}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' 
                            ? 'bg-green-100 text-green-700'
                            : project.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Budget: KSh {project.budget}</span>
                        <span>Deadline: {project.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'earnings' && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-6">Earnings Overview</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-green-700">This Month</span>
                    </div>
                    <p className="text-2xl font-bold text-green-900">KSh 12,500</p>
                    <p className="text-sm text-green-600">+15% from last month</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-blue-700">Average per Job</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-900">KSh 1,990</p>
                    <p className="text-sm text-blue-600">Based on 23 jobs</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-purple-700">This Week</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-900">KSh 3,200</p>
                    <p className="text-sm text-purple-600">3 jobs completed</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Detailed earnings chart coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;