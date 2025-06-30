import React from 'react';
import { Plus, FileText, UserPlus, Calendar, DollarSign } from 'lucide-react';

const actions = [
  {
    name: 'Add Employee',
    description: 'Register new team member',
    icon: UserPlus,
    color: 'scarlet',
    href: '/employees',
  },
  {
    name: 'Create Report',
    description: 'Generate HR analytics',
    icon: FileText,
    color: 'azure',
    href: '/reports',
  },
  {
    name: 'Schedule Meeting',
    description: 'Book team meetings',
    icon: Calendar,
    color: 'golden',
    href: '/calendar',
  },
  {
    name: 'Process Payroll',
    description: 'Handle salary payments',
    icon: DollarSign,
    color: 'emerald',
    href: '/payroll',
  },
];

const getGradientClasses = (color: string) => {
  const gradientMap = {
    scarlet: 'bg-gradient-scarlet hover:shadow-scarlet-500/25',
    azure: 'bg-gradient-azure hover:shadow-azure-500/25',
    golden: 'bg-gradient-golden hover:shadow-golden-500/25',
    emerald: 'bg-gradient-emerald hover:shadow-emerald-500/25',
  };
  return gradientMap[color as keyof typeof gradientMap] || gradientMap.scarlet;
};

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Quick Actions</h2>
          <p className="text-sm text-gray-500 mt-1 hidden sm:block">Common tasks and shortcuts</p>
        </div>
        <div className="p-2 bg-gradient-macaw rounded-lg">
          <Plus className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          const gradientClasses = getGradientClasses(action.color);
          
          return (
            <button
              key={action.name}
              className="flex flex-col items-center p-4 sm:p-6 rounded-lg border-2 border-gray-100 hover:border-gray-200 transition-all duration-200 hover:shadow-lg group touch-manipulation"
            >
              <div className={`p-2 sm:p-3 rounded-full ${gradientClasses} text-white mb-2 sm:mb-3 group-hover:scale-110 transition-all duration-200 shadow-lg`}>
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="font-medium text-gray-900 text-center text-sm sm:text-base">{action.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-1 hidden sm:block">{action.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;