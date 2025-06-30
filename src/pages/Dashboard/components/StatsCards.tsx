import React from 'react';
import { Users, Clock, Calendar, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Total Employees',
    value: '247',
    change: '+12%',
    changeType: 'positive',
    icon: Users,
    color: 'scarlet',
  },
  {
    name: 'Hours This Week',
    value: '1,847',
    change: '+3.2%',
    changeType: 'positive',
    icon: Clock,
    color: 'azure',
  },
  {
    name: 'Pending Requests',
    value: '18',
    change: '-5%',
    changeType: 'negative',
    icon: Calendar,
    color: 'golden',
  },
  {
    name: 'Performance Score',
    value: '94%',
    change: '+2.1%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'emerald',
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    scarlet: 'bg-scarlet-50 text-scarlet-600',
    azure: 'bg-azure-50 text-azure-600',
    golden: 'bg-golden-50 text-golden-600',
    emerald: 'bg-emerald-50 text-emerald-600',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.scarlet;
};

const getGradientClasses = (color: string) => {
  const gradientMap = {
    scarlet: 'bg-gradient-scarlet',
    azure: 'bg-gradient-azure',
    golden: 'bg-gradient-golden',
    emerald: 'bg-gradient-emerald',
  };
  return gradientMap[color as keyof typeof gradientMap] || gradientMap.scarlet;
};

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const iconColorClasses = getColorClasses(stat.color);
        const gradientClasses = getGradientClasses(stat.color);
        
        return (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 touch-manipulation group"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 sm:p-3 rounded-lg ${iconColorClasses} group-hover:${gradientClasses} group-hover:text-white transition-all duration-200`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">{stat.name}</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.changeType === 'positive'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-scarlet-100 text-scarlet-800'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2 hidden sm:inline">vs last month</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;