import React from 'react';
import { TrendingUp, Award, Users, Target } from 'lucide-react';

const departmentPerformance = [
  {
    department: 'Engineering',
    rating: 4.6,
    employees: 45,
    trend: 'up',
    change: '+0.2',
  },
  {
    department: 'Marketing',
    rating: 4.3,
    employees: 18,
    trend: 'up',
    change: '+0.1',
  },
  {
    department: 'Sales',
    rating: 4.1,
    employees: 32,
    trend: 'down',
    change: '-0.1',
  },
  {
    department: 'Product',
    rating: 4.5,
    employees: 22,
    trend: 'up',
    change: '+0.3',
  },
  {
    department: 'Design',
    rating: 4.4,
    employees: 12,
    trend: 'stable',
    change: '0.0',
  },
];

const topPerformers = [
  {
    name: 'David Kim',
    department: 'Product',
    rating: 4.9,
    avatar: 'DK',
  },
  {
    name: 'Alex Johnson',
    department: 'Engineering',
    rating: 4.8,
    avatar: 'AJ',
  },
  {
    name: 'Emma Wilson',
    department: 'Design',
    rating: 4.7,
    avatar: 'EW',
  },
];

const getTrendIcon = (trend: string) => {
  if (trend === 'up') return <TrendingUp className="h-4 w-4 text-success-500" />;
  if (trend === 'down') return <TrendingUp className="h-4 w-4 text-error-500 rotate-180" />;
  return <div className="h-4 w-4 bg-gray-400 rounded-full"></div>;
};

const getTrendColor = (trend: string) => {
  if (trend === 'up') return 'text-success-600';
  if (trend === 'down') return 'text-error-600';
  return 'text-gray-600';
};

const TeamPerformance: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Department Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Department Performance</h2>
            <p className="text-sm text-gray-500 mt-1">Average ratings by department</p>
          </div>
          <Users className="h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          {departmentPerformance.map((dept) => (
            <div key={dept.department} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900">{dept.department}</h3>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(dept.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(dept.trend)}`}>
                      {dept.change}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{dept.employees} employees</span>
                  <span className="text-lg font-bold text-gray-900">{dept.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Top Performers</h2>
            <p className="text-sm text-gray-500 mt-1">Highest rated employees</p>
          </div>
          <Award className="h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          {topPerformers.map((performer, index) => (
            <div key={performer.name} className="flex items-center space-x-4 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{performer.avatar}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{performer.name}</h3>
                <p className="text-sm text-gray-500">{performer.department}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{performer.rating}</p>
                <p className="text-xs text-gray-500">rating</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200">
          View All Performers
        </button>
      </div>

      {/* Performance Goals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Performance Goals</h2>
            <p className="text-sm text-gray-500 mt-1">Company-wide objectives</p>
          </div>
          <Target className="h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">Average Rating Target</h3>
              <span className="text-sm text-success-600 font-medium">On Track</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Current: 4.2 / Target: 4.0</span>
              <span className="text-sm text-success-600">+5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-success-500 h-2 rounded-full" style={{ width: '105%' }}></div>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">Review Completion</h3>
              <span className="text-sm text-warning-600 font-medium">Behind</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Current: 89% / Target: 95%</span>
              <span className="text-sm text-error-600">-6%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-warning-500 h-2 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPerformance;