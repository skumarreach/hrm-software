import React from 'react';
import PayrollStats from './components/PayrollStats';
import PayrollOverview from './components/PayrollOverview';
import RecentPayments from './components/RecentPayments';
import { Plus, Download, Settings } from 'lucide-react';

const Payroll: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payroll</h1>
          <p className="mt-2 text-gray-600">Manage employee compensation and payments</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
            <Plus className="h-4 w-4 mr-2" />
            Run Payroll
          </button>
        </div>
      </div>

      {/* Statistics */}
      <PayrollStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Payroll Overview */}
        <div className="xl:col-span-2">
          <PayrollOverview />
        </div>

        {/* Recent Payments */}
        <div className="xl:col-span-1">
          <RecentPayments />
        </div>
      </div>
    </div>
  );
};

export default Payroll;