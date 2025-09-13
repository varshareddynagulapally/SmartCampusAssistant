export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  category?: string;
}

export interface CampusInfo {
  id: string;
  title: string;
  content: string;
  category: string;
  keywords: string[];
  lastUpdated: Date;
}

export interface Schedule {
  id: string;
  name: string;
  time: string;
  location: string;
  type: 'class' | 'event' | 'service';
  day: string;
}

export interface Facility {
  id: string;
  name: string;
  type: string;
  location: string;
  hours: string;
  contact: string;
  amenities: string[];
}

export interface DiningOption {
  id: string;
  name: string;
  type: string;
  location: string;
  hours: string;
  cuisine: string[];
  pricing: string;
}