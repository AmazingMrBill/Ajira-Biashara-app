export interface Service {
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

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  budgetMin: number;
  budgetMax: number;
  timeline: string;
  location: string;
  skills: string[];
  client: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
  };
  bidsCount: number;
  postedAt: string;
  status: 'open' | 'in-progress' | 'completed';
}

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Professional Plumbing Services',
    description: 'Expert plumbing services including pipe installation, leak repairs, and bathroom renovations. Available for emergency calls 24/7.',
    price: 2500,
    category: 'Home Maintenance & Repairs',
    featured: true,
    provider: {
      id: 'provider-1',
      name: 'John Mwangi',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.8,
      reviewCount: 45,
      location: 'Nairobi CBD',
      responseTime: '2 hours',
      completionRate: 98
    },
    images: [
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ],
    deliveryTime: 'Same Day',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'House Cleaning Services',
    description: 'Professional house cleaning services for homes and offices. Deep cleaning, regular maintenance, and post-construction cleanup.',
    price: 1500,
    category: 'Cleaning & Sanitation',
    featured: false,
    provider: {
      id: 'provider-2',
      name: 'Grace Wanjiku',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.9,
      reviewCount: 67,
      location: 'Westlands',
      responseTime: '1 hour',
      completionRate: 99
    },
    images: [
      'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ],
    deliveryTime: '2-4 Hours',
    createdAt: '2024-01-14T14:30:00Z'
  },
  {
    id: '3',
    title: 'Electrical Installation & Repair',
    description: 'Licensed electrician offering installation, repair, and maintenance services. Specializing in residential and commercial electrical work.',
    price: 3000,
    category: 'Home Maintenance & Repairs',
    featured: true,
    provider: {
      id: 'provider-3',
      name: 'Peter Kiprotich',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.7,
      reviewCount: 32,
      location: 'South B',
      responseTime: '3 hours',
      completionRate: 96
    },
    images: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ],
    deliveryTime: 'Same Day',
    createdAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    title: 'Car Mechanic Services',
    description: 'Experienced auto mechanic providing car repair, maintenance, and diagnostic services. Mobile service available.',
    price: 4000,
    category: 'Automotive Services',
    featured: false,
    provider: {
      id: 'provider-4',
      name: 'David Ochieng',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.6,
      reviewCount: 28,
      location: 'Eastleigh',
      responseTime: '4 hours',
      completionRate: 94
    },
    images: [
      'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ],
    deliveryTime: 'Half Day',
    createdAt: '2024-01-12T16:45:00Z'
  },
  {
    id: '5',
    title: 'Hair & Beauty Services',
    description: 'Professional hair styling, makeup, and beauty treatments. Available for events, weddings, and regular appointments.',
    price: 1200,
    category: 'Beauty & Personal Care',
    featured: false,
    provider: {
      id: 'provider-5',
      name: 'Mary Akinyi',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.9,
      reviewCount: 89,
      location: 'Runda',
      responseTime: '1 hour',
      completionRate: 100
    },
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ],
    deliveryTime: '2-3 Hours',
    createdAt: '2024-01-11T11:20:00Z'
  },
  {
    id: '6',
    title: 'Web Development Services',
    description: 'Full-stack web developer creating modern websites and web applications. Specializing in e-commerce and business websites.',
    price: 15000,
    category: 'Technical & Digital Services',
    featured: true,
    provider: {
      id: 'provider-6',
      name: 'Samuel Mutua',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.8,
      reviewCount: 56,
      location: 'Nairobi',
      responseTime: '2 hours',
      completionRate: 97
    },
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ],
    deliveryTime: '5-7 Days',
    createdAt: '2024-01-10T08:00:00Z'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Kitchen Renovation Project',
    description: 'Looking for a skilled contractor to renovate my kitchen. This includes plumbing work, electrical installation, tiling, and cabinet installation. The kitchen is approximately 12 square meters.',
    category: 'Construction & Labour',
    budgetMin: 25000,
    budgetMax: 35000,
    timeline: '2-4 weeks',
    location: 'Westlands, Nairobi',
    skills: ['Plumbing', 'Electrical Work', 'Tiling', 'Cabinet Installation'],
    client: {
      id: 'client-1',
      name: 'Sarah Njeri',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.7,
      reviewCount: 12
    },
    bidsCount: 8,
    postedAt: '2024-01-15T09:30:00Z',
    status: 'open'
  },
  {
    id: '2',
    title: 'Office Deep Cleaning Service',
    description: 'Need professional cleaning service for a 500 sqm office space. This is a one-time deep cleaning project including carpet cleaning, window cleaning, and sanitization.',
    category: 'Cleaning & Sanitation',
    budgetMin: 8000,
    budgetMax: 12000,
    timeline: '1-2 weeks',
    location: 'Nairobi CBD',
    skills: ['Deep Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'Sanitization'],
    client: {
      id: 'client-2',
      name: 'Tech Solutions Ltd',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.9,
      reviewCount: 25
    },
    bidsCount: 15,
    postedAt: '2024-01-14T15:45:00Z',
    status: 'open'
  },
  {
    id: '3',
    title: 'Wedding Photography & Videography',
    description: 'Looking for a professional photographer and videographer for my wedding ceremony. Need someone with experience in outdoor weddings and traditional ceremonies.',
    category: 'Event Services',
    budgetMin: 20000,
    budgetMax: 30000,
    timeline: 'Less than 1 week',
    location: 'Karen, Nairobi',
    skills: ['Wedding Photography', 'Videography', 'Photo Editing', 'Traditional Ceremonies'],
    client: {
      id: 'client-3',
      name: 'Michael Otieno',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.8,
      reviewCount: 8
    },
    bidsCount: 12,
    postedAt: '2024-01-13T12:20:00Z',
    status: 'open'
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Need a mobile app developer to create an Android app for my small business. The app should include inventory management, customer database, and basic reporting features.',
    category: 'Technical & Digital Services',
    budgetMin: 50000,
    budgetMax: 80000,
    timeline: '1-2 months',
    location: 'Remote/Online',
    skills: ['Android Development', 'Java/Kotlin', 'Database Design', 'UI/UX Design'],
    client: {
      id: 'client-4',
      name: 'Jane Wambui',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.6,
      reviewCount: 15
    },
    bidsCount: 6,
    postedAt: '2024-01-12T10:10:00Z',
    status: 'open'
  },
  {
    id: '5',
    title: 'Garden Landscaping Project',
    description: 'Transform my backyard into a beautiful garden. Need landscaping services including lawn installation, flower beds, irrigation system, and decorative features.',
    category: 'Agricultural & Farm Services',
    budgetMin: 15000,
    budgetMax: 25000,
    timeline: '2-4 weeks',
    location: 'Runda, Nairobi',
    skills: ['Landscaping', 'Irrigation', 'Garden Design', 'Plant Care'],
    client: {
      id: 'client-5',
      name: 'Robert Kimani',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.5,
      reviewCount: 20
    },
    bidsCount: 10,
    postedAt: '2024-01-11T14:00:00Z',
    status: 'open'
  },
  {
    id: '6',
    title: 'Event Catering Services',
    description: 'Looking for catering services for a corporate event with 100 guests. Need traditional Kenyan cuisine with vegetarian options. Event date is flexible.',
    category: 'Event Services',
    budgetMin: 30000,
    budgetMax: 45000,
    timeline: '2-4 weeks',
    location: 'Kilimani, Nairobi',
    skills: ['Catering', 'Event Planning', 'Traditional Cuisine', 'Food Safety'],
    client: {
      id: 'client-6',
      name: 'Corporate Events Co.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.7,
      reviewCount: 18
    },
    bidsCount: 14,
    postedAt: '2024-01-10T16:30:00Z',
    status: 'open'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Kitchen Renovation Project',
    description: 'Looking for a skilled contractor to renovate my kitchen. This includes plumbing work, electrical installation, tiling, and cabinet installation. The kitchen is approximately 12 square meters.',
    category: 'Construction & Labour',
    budgetMin: 25000,
    budgetMax: 35000,
    timeline: '2-4 weeks',
    location: 'Westlands, Nairobi',
    skills: ['Plumbing', 'Electrical Work', 'Tiling', 'Cabinet Installation'],
    client: {
      id: 'client-1',
      name: 'Sarah Njeri',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.7,
      reviewCount: 12
    },
    bidsCount: 8,
    postedAt: '2024-01-15T09:30:00Z',
    status: 'open'
  },
  {
    id: '2',
    title: 'Office Deep Cleaning Service',
    description: 'Need professional cleaning service for a 500 sqm office space. This is a one-time deep cleaning project including carpet cleaning, window cleaning, and sanitization.',
    category: 'Cleaning & Sanitation',
    budgetMin: 8000,
    budgetMax: 12000,
    timeline: '1-2 weeks',
    location: 'Nairobi CBD',
    skills: ['Deep Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'Sanitization'],
    client: {
      id: 'client-2',
      name: 'Tech Solutions Ltd',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.9,
      reviewCount: 25
    },
    bidsCount: 15,
    postedAt: '2024-01-14T15:45:00Z',
    status: 'open'
  },
  {
    id: '3',
    title: 'Wedding Photography & Videography',
    description: 'Looking for a professional photographer and videographer for my wedding ceremony. Need someone with experience in outdoor weddings and traditional ceremonies.',
    category: 'Event Services',
    budgetMin: 20000,
    budgetMax: 30000,
    timeline: 'Less than 1 week',
    location: 'Karen, Nairobi',
    skills: ['Wedding Photography', 'Videography', 'Photo Editing', 'Traditional Ceremonies'],
    client: {
      id: 'client-3',
      name: 'Michael Otieno',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.8,
      reviewCount: 8
    },
    bidsCount: 12,
    postedAt: '2024-01-13T12:20:00Z',
    status: 'open'
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Need a mobile app developer to create an Android app for my small business. The app should include inventory management, customer database, and basic reporting features.',
    category: 'Technical & Digital Services',
    budgetMin: 50000,
    budgetMax: 80000,
    timeline: '1-2 months',
    location: 'Remote/Online',
    skills: ['Android Development', 'Java/Kotlin', 'Database Design', 'UI/UX Design'],
    client: {
      id: 'client-4',
      name: 'Jane Wambui',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.6,
      reviewCount: 15
    },
    bidsCount: 6,
    postedAt: '2024-01-12T10:10:00Z',
    status: 'open'
  },
  {
    id: '5',
    title: 'Garden Landscaping Project',
    description: 'Transform my backyard into a beautiful garden. Need landscaping services including lawn installation, flower beds, irrigation system, and decorative features.',
    category: 'Agricultural & Farm Services',
    budgetMin: 15000,
    budgetMax: 25000,
    timeline: '2-4 weeks',
    location: 'Runda, Nairobi',
    skills: ['Landscaping', 'Irrigation', 'Garden Design', 'Plant Care'],
    client: {
      id: 'client-5',
      name: 'Robert Kimani',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.5,
      reviewCount: 20
    },
    bidsCount: 10,
    postedAt: '2024-01-11T14:00:00Z',
    status: 'open'
  },
  {
    id: '6',
    title: 'Event Catering Services',
    description: 'Looking for catering services for a corporate event with 100 guests. Need traditional Kenyan cuisine with vegetarian options. Event date is flexible.',
    category: 'Event Services',
    budgetMin: 30000,
    budgetMax: 45000,
    timeline: '2-4 weeks',
    location: 'Kilimani, Nairobi',
    skills: ['Catering', 'Event Planning', 'Traditional Cuisine', 'Food Safety'],
    client: {
      id: 'client-6',
      name: 'Corporate Events Co.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.7,
      reviewCount: 18
    },
    bidsCount: 14,
    postedAt: '2024-01-10T16:30:00Z',
    status: 'open'
  }
];