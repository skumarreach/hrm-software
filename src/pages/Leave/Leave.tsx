import React from 'react';
import LeaveStats from './components/LeaveStats';
import LeaveRequests from './components/LeaveRequests';
import LeaveCalendar from './components/LeaveCalendar';
import { Plus, Filter } from 'lucide-react';

const Leave: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leave Management</h1>
          <p className="mt-2 text-gray-600">Manage employee leave requests and approvals</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
            <Plus className="h-4 w-4 mr-2" />
            New Request
          </button>
        </div>
      </div>

      {/* Statistics */}
      <LeaveStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Leave Requests */}
        <div className="xl:col-span-2">
          <LeaveRequests />
        </div>

        {/* Leave Calendar */}
        <div className="xl:col-span-1">
          <LeaveCalendar />
        </div>
      </div>
    </div>
  );
};

export default Leave;