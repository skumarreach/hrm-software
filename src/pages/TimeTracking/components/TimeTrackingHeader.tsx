import React from 'react';
import { Play, Calendar, Download } from 'lucide-react';

const TimeTrackingHeader: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Time Tracking</h1>
        <p className="mt-2 text-gray-600">{currentDate}</p>
      </div>
      <div className="mt-4 sm:mt-0 flex items-center space-x-3">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <Calendar className="h-4 w-4 mr-2" />
          View Calendar
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <Download className="h-4 w-4 mr-2" />
          Export
        </button>
        <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
          <Play className="h-4 w-4 mr-2" />
          Start Timer
        </button>
      </div>
    </div>
  );
};

export default TimeTrackingHeader;