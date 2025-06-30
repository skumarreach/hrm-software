import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Header menu button clicked');
    onMenuClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Left side - Mobile menu + Search */}
          <div className="flex items-center flex-1">
            {/* Mobile/Tablet menu button - Always visible on non-desktop */}
            <button
              type="button"
              onClick={handleMenuClick}
              className="xl:hidden p-3 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gradient-to-r hover:from-scarlet-50 hover:to-azure-50 transition-all duration-200 touch-manipulation active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-scarlet-500 focus:ring-offset-2"
              aria-label="Open menu"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {/* Search bar - hidden on small mobile, shown on larger screens */}
            <div className="hidden sm:block ml-4 xl:ml-0 flex-1 max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search employees, tasks..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-scarlet-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile search button */}
            <button className="sm:hidden p-3 text-gray-400 hover:text-gray-500 hover:bg-gradient-to-r hover:from-scarlet-50 hover:to-azure-50 rounded-lg transition-all duration-200 touch-manipulation">
              <Search className="h-5 w-5" />
            </button>

            {/* Notifications */}
            <button className="relative p-3 text-gray-400 hover:text-gray-500 hover:bg-gradient-to-r hover:from-scarlet-50 hover:to-azure-50 rounded-lg transition-all duration-200 touch-manipulation">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-scarlet-500 rounded-full animate-pulse-gentle"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-xs text-gray-500">HR Manager</p>
              </div>
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gradient-scarlet rounded-full flex items-center justify-center touch-manipulation shadow-md">
                <User className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;