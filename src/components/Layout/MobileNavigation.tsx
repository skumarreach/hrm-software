import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  Calendar, 
  Settings 
} from 'lucide-react';

interface MobileNavigationProps {
  currentPath: string;
}

const mobileNavigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Employees', href: '/employees', icon: Users },
  { name: 'Time', href: '/time-tracking', icon: Clock },
  { name: 'Leave', href: '/leave', icon: Calendar },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const MobileNavigation: React.FC<MobileNavigationProps> = ({ currentPath }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-2 py-1 safe-area-pb shadow-lg">
      <div className="flex items-center justify-around">
        {mobileNavigation.map((item) => {
          const isActive = currentPath === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-200 touch-manipulation min-w-0 flex-1 ${
                isActive
                  ? 'text-white bg-gradient-scarlet shadow-lg'
                  : 'text-gray-400 hover:text-gray-600 active:bg-gradient-to-r active:from-scarlet-50 active:to-azure-50'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="text-xs font-medium truncate">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;