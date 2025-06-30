import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeFilters from './components/EmployeeFilters';
import EmployeeStats from './components/EmployeeStats';
import { Plus, Search, Filter } from 'lucide-react';

const Employees: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Employees</h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">Manage your team members and their information</p>
        </div>
        <div className="flex justify-end">
          <button className="inline-flex items-center px-4 py-2 bg-gradient-scarlet text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200 touch-manipulation">
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </button>
        </div>
      </div>

      {/* Stats */}
      <EmployeeStats />

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scarlet-500 focus:border-transparent text-base transition-all duration-200"
            />
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="inline-flex items-center px-4 py-3 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-50/50 transition-all duration-200 touch-manipulation"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>

        {filterOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <EmployeeFilters />
          </div>
        )}
      </div>

      {/* Employee List */}
      <EmployeeList searchTerm={searchTerm} />
    </div>
  );
};

export default Employees;