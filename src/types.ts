export enum Page {
  Home = 'home',
  Services = 'services',
  Industries = 'industries',
  Fleet = 'fleet',
  Rates = 'rates',
  About = 'about',
  Contact = 'contact'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string[];
  iconName: string;
  image: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  tagline: string;
  image: string;
  capacity: string;
  bestFor: string;
  specifications: {
    payloadCapacity: string;
    axleConfig: string;
    volumeCapacity: string;
    materialType: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  content: string;
  date: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  stats: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteRequest {
  name: string;
  company?: string;
  phone: string;
  email: string;
  serviceType: string;
  materialType?: string;
  estimatedVolume?: string;
  pickupLocation: string;
  deliveryLocation: string;
  message?: string;
}
