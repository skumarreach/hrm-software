import React from 'react';
import { Clock, User, Calendar, CheckCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'employee',
    title: 'New employee onboarded',
    description: 'Alex Johnson joined the Development team',
    time: '2 hours ago',
    icon: User,
    color: 'scarlet',
  },
  {
    id: 2,
    type: 'leave',
    title: 'Leave request approved',
    description: 'Maria Garcia - Vacation leave for 5 days',
    time: '4 hours ago',
    icon: Calendar,
    color: 'emerald',
  },
  {
    id: 3,
    type: 'timesheet',
    title: 'Timesheet submitted',
    description: 'John Smith submitted weekly timesheet',
    time: '6 hours ago',
    icon: Clock,
    color: 'azure',
  },
  {
    id: 4,
    type: 'review',
    title: 'Performance review completed',
    description: 'Q4 review for Emma Wilson completed',
    time: '1 day ago',
    icon: CheckCircle,
    color: 'golden',
  },
  {
    id: 5,
    type: 'employee',
    title: 'Employee profile updated',
    description: 'David Chen updated contact information',
    time: '2 days ago',
    icon: User,
    color: 'scarlet',
  },
];

const getIconColorClasses = (color: string) => {
  const colorMap = {
    scarlet: 'bg-scarlet-100 text-scarlet-600',
    azure: 'bg-azure-100 text-azure-600',
    golden: 'bg-golden-100 text-golden-600',
    emerald: 'bg-emerald-100 text-emerald-600',
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.scarlet;
};

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          <p className="text-sm text-gray-500 mt-1">Latest updates and changes</p>
        </div>
        <button className="text-sm text-scarlet-600 hover:text-scarlet-700 font-medium transition-colors duration-200">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          const iconColorClasses = getIconColorClasses(activity.color);
          
          return (
            <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-50/50 transition-all duration-200 group">
              <div className={`flex-shrink-0 p-2 rounded-lg ${iconColorClasses} group-hover:scale-110 transition-transform duration-200`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-2">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;