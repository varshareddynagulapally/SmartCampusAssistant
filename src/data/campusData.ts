import { CampusInfo, Schedule, Facility, DiningOption } from '../types';

export const campusInfo: CampusInfo[] = [
  {
    id: '1',
    title: 'Student Registration Process',
    content: 'To register for classes: 1) Log into the student portal, 2) Meet with your academic advisor, 3) Select courses during your registration window, 4) Pay tuition and fees by the deadline.',
    category: 'administrative',
    keywords: ['registration', 'enroll', 'classes', 'courses', 'advisor'],
    lastUpdated: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Library Study Rooms',
    content: 'The library offers 50 individual study rooms and 20 group study rooms. Reservations can be made online up to 7 days in advance. Maximum reservation time is 4 hours.',
    category: 'library',
    keywords: ['study rooms', 'reservation', 'library', 'book', 'quiet'],
    lastUpdated: new Date('2024-01-10')
  },
  {
    id: '3',
    title: 'Campus WiFi Access',
    content: 'Connect to "CampusSecure" network using your student credentials. Guest network "CampusGuest" is available for visitors. IT support available 24/7 at ext. 2400.',
    category: 'facilities',
    keywords: ['wifi', 'internet', 'network', 'password', 'connection'],
    lastUpdated: new Date('2024-01-12')
  },
  {
    id: '4',
    title: 'Parking Permits',
    content: 'Student parking permits are required for all campus lots. Daily permits: $5, Semester permits: $150, Annual permits: $300. Purchase online or at the Campus Safety office.',
    category: 'administrative',
    keywords: ['parking', 'permit', 'car', 'vehicle', 'fees'],
    lastUpdated: new Date('2024-01-08')
  },
  {
    id: '5',
    title: 'Financial Aid Office',
    content: 'Financial Aid office is located in the Administration Building, Room 201. Office hours: Monday-Friday 8 AM - 5 PM. Walk-ins welcome, appointments recommended for complex matters.',
    category: 'administrative',
    keywords: ['financial aid', 'scholarships', 'loans', 'payment', 'assistance'],
    lastUpdated: new Date('2024-01-14')
  }
];

export const schedules: Schedule[] = [
  {
    id: '1',
    name: 'Library Hours',
    time: '7:00 AM - 11:00 PM',
    location: 'Main Library',
    type: 'service',
    day: 'Monday-Friday'
  },
  {
    id: '2',
    name: 'Dining Hall Breakfast',
    time: '7:00 AM - 10:00 AM',
    location: 'Central Dining Hall',
    type: 'service',
    day: 'Daily'
  },
  {
    id: '3',
    name: 'Campus Tour',
    time: '10:00 AM, 2:00 PM',
    location: 'Admissions Office',
    type: 'event',
    day: 'Monday-Saturday'
  },
  {
    id: '4',
    name: 'Gym Hours',
    time: '5:00 AM - 11:00 PM',
    location: 'Recreation Center',
    type: 'service',
    day: 'Daily'
  }
];

export const facilities: Facility[] = [
  {
    id: '1',
    name: 'Recreation Center',
    type: 'Fitness',
    location: '123 Campus Drive',
    hours: '5:00 AM - 11:00 PM Daily',
    contact: '(555) 123-4567',
    amenities: ['Gym Equipment', 'Swimming Pool', 'Basketball Courts', 'Group Fitness Classes']
  },
  {
    id: '2',
    name: 'Student Health Center',
    type: 'Healthcare',
    location: '456 Wellness Way',
    hours: '8:00 AM - 6:00 PM Mon-Fri',
    contact: '(555) 123-4568',
    amenities: ['Medical Services', 'Pharmacy', 'Mental Health Counseling', 'Emergency Care']
  },
  {
    id: '3',
    name: 'Computer Lab',
    type: 'Academic',
    location: 'Technology Building, Floor 2',
    hours: '24/7 with ID card',
    contact: '(555) 123-4569',
    amenities: ['High-speed Computers', 'Printing Services', 'Software Licenses', 'Technical Support']
  }
];

export const diningOptions: DiningOption[] = [
  {
    id: '1',
    name: 'Central Dining Hall',
    type: 'All-you-can-eat',
    location: 'Student Union Building',
    hours: '7:00 AM - 9:00 PM Daily',
    cuisine: ['American', 'International', 'Vegetarian', 'Vegan'],
    pricing: '$12 lunch, $15 dinner'
  },
  {
    id: '2',
    name: 'Campus Café',
    type: 'Quick Service',
    location: 'Library Ground Floor',
    hours: '7:00 AM - 10:00 PM Mon-Fri',
    cuisine: ['Coffee', 'Sandwiches', 'Salads', 'Pastries'],
    pricing: '$3-$8 per item'
  },
  {
    id: '3',
    name: 'Food Trucks Plaza',
    type: 'Mobile Dining',
    location: 'Quad Area',
    hours: '11:00 AM - 3:00 PM Mon-Fri',
    cuisine: ['Mexican', 'Asian Fusion', 'Mediterranean', 'BBQ'],
    pricing: '$5-$12 per meal'
  }
];