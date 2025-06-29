import React from 'react';
import { Users, TrendingUp, Clock, Award } from 'lucide-react';

const teamStats = [
  {
    label: 'Present Today',
    value: '234/247',
    percentage: 95,
    icon: Users,
    color: 'success',
  },
  {
    label: 'On Leave',
    value: '13',
    percentage: 5,
    icon: Clock,
    color: 'warning',
  },
  {
    label: 'Top Performers',
    value: '42',
    percentage: 17,
    icon: Award,
    color: 'accent',
  },
];

const TeamOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Team Overview</h2>
          <p className="text-sm text-gray-500 mt-1">Current status</p>
        </div>
        <TrendingUp className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        {teamStats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            success: 'text-success-600',
            warning: 'text-warning-600',
            accent: 'text-accent-600',
          };
          
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon className={`h-5 w-5 ${colorClasses[stat.color as keyof typeof colorClasses]}`} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.value}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">{stat.percentage}%</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Department Performance</span>
          <span className="text-success-600 font-medium">+2.3% this month</span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div className="bg-success-500 h-2 rounded-full" style={{ width: '78%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TeamOverview;