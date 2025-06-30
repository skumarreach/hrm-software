import React, { useEffect, useRef } from 'react';
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
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobile && open) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobile, open]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  // Handle close button click
  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  if (mobile) {
    console.log('Mobile sidebar render - open:', open);
    
    if (!open) return null;
    
    return (
      <div className="fixed inset-0 z-50 xl:hidden">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300" 
          onClick={handleBackdropClick}
          style={{ touchAction: 'none' }}
        />
        
        {/* Mobile Sidebar */}
        <div 
          ref={sidebarRef}
          className={`fixed inset-y-0 left-0 w-80 max-w-sm bg-white transform transition-transform duration-300 ease-in-out shadow-2xl ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={handleCloseClick}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-scarlet-500 touch-manipulation active:bg-gray-300"
              aria-label="Close menu"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <SidebarContent location={location} onClose={onClose} />
        </div>
      </div>
    );
  }

  // Desktop sidebar
  return (
    <div className="flex flex-col bg-white border-r border-gray-200 h-full">
      <SidebarContent location={location} />
    </div>
  );
};

const SidebarContent: React.FC<{ location: any; onClose?: () => void }> = ({ location, onClose }) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    // Add a small delay to allow for visual feedback before closing
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 150);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-gray-200 bg-gradient-macaw">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
            <Building2 className="h-5 w-5 text-scarlet-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">NextHr</h1>
            <p className="text-xs text-white/80">HR Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleLinkClick}
              className={`flex items-center px-4 py-4 text-sm font-medium rounded-lg transition-all duration-200 touch-manipulation ${
                isActive
                  ? 'bg-gradient-scarlet text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-scarlet-50 hover:to-azure-50 active:bg-gray-100'
              }`}
              style={{ minHeight: '44px' }}
            >
              <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              <span className="truncate">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-emerald-50 to-golden-50 rounded-lg touch-manipulation">
          <div className="h-10 w-10 bg-gradient-scarlet rounded-full flex items-center justify-center shadow-md flex-shrink-0">
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