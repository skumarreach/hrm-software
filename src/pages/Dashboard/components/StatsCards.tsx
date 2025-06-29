import React from 'react';
import { Users, Clock, Calendar, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Total Employees',
    value: '247',
    change: '+12%',
    changeType: 'positive',
    icon: Users,
    color: 'primary',
  },
  {
    name: 'Hours This Week',
    value: '1,847',
    change: '+3.2%',
    changeType: 'positive',
    icon: Clock,
    color: 'secondary',
  },
  {
    name: 'Pending Requests',
    value: '18',
    change: '-5%',
    changeType: 'negative',
    icon: Calendar,
    color: 'warning',
  },
  {
    name: 'Performance Score',
    value: '94%',
    change: '+2.1%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'success',
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    primary: 'bg-primary-50 text-primary-600',
    secondary: 'bg-secondary-50 text-secondary-600',
    warning: 'bg-warning-50 text-warning-600',
    success: 'bg-success-50 text-success-600',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.primary;
};

const StatsCards: React.FC = () => {
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
                        : 'bg-error-100 text-error-800'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">vs last month</span>
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

export default StatsCards;