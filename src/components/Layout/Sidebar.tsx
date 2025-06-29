import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Settings,
  X,
  Building2
} from 'lucide-react';

interface SidebarProps {
  mobile?: boolean;
  open?: boolean;
  onClose?: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Employees', href: '/employees', icon: Users },
  { name: 'Time Tracking', href: '/time-tracking', icon: Clock },
  { name: 'Leave Management', href: '/leave', icon: Calendar },
  { name: 'Payroll', href: '/payroll', icon: DollarSign },
  { name: 'Performance', href: '/performance', icon: TrendingUp },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ mobile = false, open = false, onClose }) => {
  const location = useLocation();

  const sidebarClasses = mobile
    ? `fixed inset-0 z-50 lg:hidden ${open ? 'block' : 'hidden'}`
    : 'flex flex-col bg-white border-r border-gray-200 h-full';

  return (
    <>
      {mobile && open && (
        <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75" onClick={onClose} />
      )}
      
      <div className={sidebarClasses}>
        {mobile && (
          <div className="fixed inset-0 z-50 flex">
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={onClose}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <SidebarContent location={location} onClose={onClose} />
            </div>
          </div>
        )}
        
        {!mobile && <SidebarContent location={location} />}
      </div>
    </>
  );
};

const SidebarContent: React.FC<{ location: any; onClose?: () => void }> = ({ location, onClose }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">NextHr</h1>
            <p className="text-xs text-gray-500">HR Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-primary-600' : 'text-gray-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-white">SJ</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Sarah Johnson</p>
            <p className="text-xs text-gray-500 truncate">HR Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;