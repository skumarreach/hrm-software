import React from 'react';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

const stats = [
  {
    name: 'Pending Requests',
    value: '18',
    change: '+3',
    changeType: 'neutral',
    icon: Clock,
    color: 'warning',
    description: 'Awaiting approval',
  },
  {
    name: 'Approved This Month',
    value: '42',
    change: '+12%',
    changeType: 'positive',
    icon: CheckCircle,
    color: 'success',
    description: 'vs last month',
  },
  {
    name: 'Total Days Off',
    value: '156',
    change: '+8%',
    changeType: 'positive',
    icon: Calendar,
    color: 'primary',
    description: 'this month',
  },
  {
    name: 'Rejected Requests',
    value: '3',
    change: '-2',
    changeType: 'negative',
    icon: XCircle,
    color: 'error',
    description: 'this month',
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    warning: 'bg-warning-50 text-warning-600',
    success: 'bg-success-50 text-success-600',
    primary: 'bg-primary-50 text-primary-600',
    error: 'bg-error-50 text-error-600',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.primary;
};

const LeaveStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const iconColorClasses = getColorClasses(stat.color);
        
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
                        : stat.changeType === 'negative'
                        ? 'bg-error-100 text-error-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{stat.description}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${iconColorClasses}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeaveStats;