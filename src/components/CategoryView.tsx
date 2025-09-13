import React from 'react';
import { Clock, Building, UtensilsCrossed, BookOpen, FileText, ArrowLeft } from 'lucide-react';
import { schedules, facilities, diningOptions, campusInfo } from '../data/campusData';

interface CategoryViewProps {
  category: string;
  onBack: () => void;
}

const categoryConfig = {
  schedules: { title: 'Campus Schedules', icon: Clock, color: 'text-green-600' },
  facilities: { title: 'Campus Facilities', icon: Building, color: 'text-purple-600' },
  dining: { title: 'Dining Options', icon: UtensilsCrossed, color: 'text-orange-600' },
  library: { title: 'Library Services', icon: BookOpen, color: 'text-indigo-600' },
  administrative: { title: 'Administrative Info', icon: FileText, color: 'text-red-600' },
};

export const CategoryView: React.FC<CategoryViewProps> = ({ category, onBack }) => {
  const config = categoryConfig[category as keyof typeof categoryConfig];
  const Icon = config?.icon || FileText;

  const renderSchedules = () => (
    <div className="grid gap-6 md:grid-cols-2">
      {schedules.map((schedule) => (
        <div key={schedule.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{schedule.name}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              schedule.type === 'service' ? 'bg-blue-100 text-blue-800' :
              schedule.type === 'event' ? 'bg-purple-100 text-purple-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {schedule.type}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-green-600" />
              <span className="font-medium">{schedule.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Building className="w-4 h-4 mr-2 text-blue-600" />
              <span>{schedule.location}</span>
            </div>
            <div className="text-sm text-gray-500 font-medium">{schedule.day}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFacilities = () => (
    <div className="grid gap-6">
      {facilities.map((facility) => (
        <div key={facility.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{facility.name}</h3>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
              {facility.type}
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Location:</span> {facility.location}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Hours:</span> {facility.hours}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Contact:</span> {facility.contact}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Amenities:</p>
              <div className="flex flex-wrap gap-2">
                {facility.amenities.map((amenity, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDining = () => (
    <div className="grid gap-6">
      {diningOptions.map((dining) => (
        <div key={dining.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{dining.name}</h3>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
              {dining.type}
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Location:</span> {dining.location}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours:</span> {dining.hours}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Pricing:</span> {dining.pricing}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Cuisine Types:</p>
              <div className="flex flex-wrap gap-2">
                {dining.cuisine.map((type, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-lg text-sm border border-orange-200">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderInfo = (categoryType: string) => {
    const filteredInfo = campusInfo.filter(info => info.category === categoryType);
    return (
      <div className="grid gap-6">
        {filteredInfo.map((info) => (
          <div key={info.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{info.content}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex flex-wrap gap-2">
                {info.keywords.map((keyword, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    {keyword}
                  </span>
                ))}
              </div>
              <span className="text-gray-500">
                Updated {info.lastUpdated.toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (category) {
      case 'schedules':
        return renderSchedules();
      case 'facilities':
        return renderFacilities();
      case 'dining':
        return renderDining();
      case 'library':
      case 'administrative':
        return renderInfo(category);
      default:
        return <div className="text-gray-500">Category not found</div>;
    }
  };

  if (!config) {
    return <div className="text-gray-500">Category not found</div>;
  }

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <Icon className={`w-6 h-6 ${config.color}`} />
          <h2 className="text-xl font-semibold text-gray-900">{config.title}</h2>
        </div>
      </div>
      
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
};