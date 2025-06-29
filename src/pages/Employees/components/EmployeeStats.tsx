import React from 'react';
import { Users, UserCheck, UserX, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Total Employees',
    value: '247',
    change: '+12',
    changeType: 'positive',
    icon: Users,
    description: 'from last month',
  },
  {
    name: 'Active Today',
    value: '234',
    change: '94.7%',
    changeType: 'positive',
    icon: UserCheck,
    description: 'attendance rate',
  },
  {
    name: 'On Leave',
    value: '13',
    change: '-2',
    changeType: 'negative',
    icon: UserX,
    description: 'from yesterday',
  },
  {
    name: 'New Hires',
    value: '8',
    change: '+3',
    changeType: 'positive',
    icon: TrendingUp,
    description: 'this month',
  },
];

const EmployeeStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        
        return (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.changeType === 'positive'
                        ? 'bg-success-100 text-success-800'
                        : 'bg-error-100 text-error-800'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{stat.description}</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeStats;