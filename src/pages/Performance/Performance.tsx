import React from 'react';
import PerformanceStats from './components/PerformanceStats';
import PerformanceReviews from './components/PerformanceReviews';
import TeamPerformance from './components/TeamPerformance';
import { Plus, Filter, FileText } from 'lucide-react';

const Performance: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Performance</h1>
          <p className="mt-2 text-gray-600">Track and manage employee performance reviews</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <FileText className="h-4 w-4 mr-2" />
            Reports
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
            <Plus className="h-4 w-4 mr-2" />
            New Review
          </button>
        </div>
      </div>

      {/* Statistics */}
      <PerformanceStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Performance Reviews */}
        <div className="xl:col-span-2">
          <PerformanceReviews />
        </div>

        {/* Team Performance */}
        <div className="xl:col-span-1">
          <TeamPerformance />
        </div>
      </div>
    </div>
  );
};

export default Performance;