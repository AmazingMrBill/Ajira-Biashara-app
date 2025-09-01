import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, DollarSign, Clock, MessageCircle, Calendar } from 'lucide-react';

interface FilterSidebarProps {
  filters: {
    categories: string[];
    datePosted: string;
    responseTime: string;
    deliveryTime: string;
    budgetRange: number[];
    englishLevel: string;
    location: string;
    distance: number;
  };
  onFiltersChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFiltersChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    datePosted: true,
    responseTime: false,
    deliveryTime: false,
    budget: true,
    englishLevel: false,
    location: true
  });

  const categories = [
    'Agricultural & Farm Services',
    'Automotive Services',
    'Beauty & Personal Care',
    'Childcare & Domestic',
    'Cleaning & Sanitation',
    'Construction & Labour',
    'Event Services',
    'Fashion & Tailoring',
    'Health and Safety',
    'Home Maintenance & Repairs',
    'Technical & Digital Services',
    'Training & Educational Services',
    'Trending',
    'Others'
  ];

  const datePostedOptions = [
    { value: '1h', label: 'Last Hour' },
    { value: '24h', label: 'Last 24 hours' },
    { value: '7d', label: 'Last 7 days' },
    { value: '14d', label: 'Last 14 days' },
    { value: '30d', label: 'Last 30 days' }
  ];

  const responseTimeOptions = [
    '1 Hour', '2 Hours', '3 Hours', '4 Hours', '5 Hours', '6 Hours', '7 Hours'
  ];

  const deliveryTimeOptions = [
    '30 Minutes', '1 Hour', '2-3 Hours', '4-6 Hours', 'Half Day', 'Full Day', '5 Days', '6 Days', '7 Days'
  ];

  const englishLevels = [
    'Basic', 'Conversational', 'Fluent', 'Native or Bilingual', 'Professional'
  ];

  const locations = [
    'Athi River', 'Kitengela', 'Mlolongo', 'Nairobi', 'Eastleigh', 
    'Nairobi CBD', 'Runda', 'South B', 'South C'
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const updateFilter = (key: string, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    updateFilter('categories', newCategories);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      datePosted: '',
      responseTime: '',
      deliveryTime: '',
      budgetRange: [0, 20000],
      englishLevel: '',
      location: '',
      distance: 50
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-sm text-green-600 hover:text-green-700 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <button
            onClick={() => toggleSection('categories')}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900">Categories</h4>
            {expandedSections.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.categories && (
            <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
              {categories.slice(0, expandedSections.categories ? categories.length : 8).map((category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Date Posted */}
        <div>
          <button
            onClick={() => toggleSection('datePosted')}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900 flex items-center space-x-2">
              <Calendar size={16} />
              <span>Date Posted</span>
            </h4>
            {expandedSections.datePosted ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.datePosted && (
            <div className="mt-3 space-y-2">
              {datePostedOptions.map((option) => (
                <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="datePosted"
                    value={option.value}
                    checked={filters.datePosted === option.value}
                    onChange={(e) => updateFilter('datePosted', e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Response Time */}
        <div>
          <button
            onClick={() => toggleSection('responseTime')}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900 flex items-center space-x-2">
              <MessageCircle size={16} />
              <span>Response Time</span>
            </h4>
            {expandedSections.responseTime ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.responseTime && (
            <div className="mt-3 space-y-2">
              {responseTimeOptions.map((time) => (
                <label key={time} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="responseTime"
                    value={time}
                    checked={filters.responseTime === time}
                    onChange={(e) => updateFilter('responseTime', e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{time}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Delivery Time */}
        <div>
          <button
            onClick={() => toggleSection('deliveryTime')}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900 flex items-center space-x-2">
              <Clock size={16} />
              <span>Delivery Time</span>
            </h4>
            {expandedSections.deliveryTime ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.deliveryTime && (
            <div className="mt-3 space-y-2">
              {deliveryTimeOptions.map((time) => (
                <label key={time} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryTime"
                    value={time}
                    checked={filters.deliveryTime === time}
                    onChange={(e) => updateFilter('deliveryTime', e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{time}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Budget Range */}
        <div>
          <button
            onClick={() => toggleSection('budget')}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900 flex items-center space-x-2">
              <DollarSign size={16} />
              <span>Budget Range</span>
            </h4>
            {expandedSections.budget ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.budget && (
            <div className="mt-3 space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.budgetRange[0]}
                  onChange={(e) => updateFilter('budgetRange', [parseInt(e.target.value) || 0, filters.budgetRange[1]])}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.budgetRange[1]}
                  onChange={(e) => updateFilter('budgetRange', [filters.budgetRange[0], parseInt(e.target.value) || 20000])}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="text-sm text-gray-600">
                KSh {filters.budgetRange[0].toLocaleString()} - KSh {filters.budgetRange[1].toLocaleString()}
              </div>
            </div>
          )}
        </div>

        {/* English Level */}
        <div>
          <button
            onClick={() => toggleSection('englishLevel')}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900">English Level</h4>
            {expandedSections.englishLevel ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.englishLevel && (
            <div className="mt-3 space-y-2">
              {englishLevels.map((level) => (
                <label key={level} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="englishLevel"
                    value={level}
                    checked={filters.englishLevel === level}
                    onChange={(e) => updateFilter('englishLevel', e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{level}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <div>
          <button
            onClick={() => toggleSection('location')}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="font-medium text-gray-900 flex items-center space-x-2">
              <MapPin size={16} />
              <span>Location</span>
            </h4>
            {expandedSections.location ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.location && (
            <div className="mt-3 space-y-4">
              <select
                value={filters.location}
                onChange={(e) => updateFilter('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Distance: {filters.distance}km
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={filters.distance}
                  onChange={(e) => updateFilter('distance', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5km</span>
                  <span>100km</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;