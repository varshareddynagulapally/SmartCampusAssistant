import React from 'react';
import { BookOpen, Clock, UtensilsCrossed, Building, FileText, MessageCircle } from 'lucide-react';

interface SidebarProps {
  onCategoryClick: (category: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const categories = [
  { id: 'chat', name: 'Chat Assistant', icon: MessageCircle, color: 'text-blue-600' },
  { id: 'schedules', name: 'Schedules', icon: Clock, color: 'text-green-600' },
  { id: 'facilities', name: 'Facilities', icon: Building, color: 'text-purple-600' },
  { id: 'dining', name: 'Dining', icon: UtensilsCrossed, color: 'text-orange-600' },
  { id: 'library', name: 'Library', icon: BookOpen, color: 'text-indigo-600' },
  { id: 'administrative', name: 'Admin', icon: FileText, color: 'text-red-600' },
];

export const Sidebar: React.FC<SidebarProps> = ({ onCategoryClick, isOpen, onToggle }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Smart Campus</h1>
              <p className="text-sm text-gray-500">Assistant</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <Icon className={`w-5 h-5 ${category.color} group-hover:scale-110 transition-transform duration-200`} />
                <span className="font-medium text-gray-700 group-hover:text-gray-900">{category.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
          <div className="text-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <p className="text-xs text-gray-600 leading-tight">
              Ask me anything about campus life, schedules, or services!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};