import React from 'react';
import { Clock, Target, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    name: 'Hours Today',
    value: '6.5h',
    target: '8h',
    percentage: 81,
    icon: Clock,
    color: 'primary',
  },
  {
    name: 'Hours This Week',
    value: '32.5h',
    target: '40h',
    percentage: 81,
    icon: Target,
    color: 'secondary',
  },
  {
    name: 'Productivity',
    value: '94%',
    change: '+5%',
    icon: TrendingUp,
    color: 'success',
  },
  {
    name: 'Streak',
    value: '12 days',
    change: 'Current',
    icon: Award,
    color: 'accent',
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    success: 'text-success-600',
    accent: 'text-accent-600',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.primary;
};

const getProgressColor = (color: string) => {
  const colorMap = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    accent: 'bg-accent-500',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.primary;
};

const TimeStatistics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const iconColorClass = getColorClasses(stat.color);
        const progressColorClass = getProgressColor(stat.color);
        
        return (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                {stat.target && (
                  <p className="text-xs text-gray-500 mt-1">Target: {stat.target}</p>
                )}
                {stat.change && (
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                )}
              </div>
              <div className={`p-3 rounded-lg bg-gray-50 ${iconColorClass}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
            
            {stat.percentage && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${progressColorClass}`}
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TimeStatistics;