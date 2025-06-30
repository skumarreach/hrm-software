import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    console.log('Menu clicked, current state:', sidebarOpen); // Debug log
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    console.log('Sidebar closing'); // Debug log
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar - Hidden on mobile/tablet */}
      <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        <Sidebar />
      </div>

      {/* Mobile/Tablet Sidebar Overlay */}
      <Sidebar 
        mobile 
        open={sidebarOpen} 
        onClose={handleSidebarClose} 
      />

      {/* Main Content Area */}
      <div className="xl:pl-72">
        {/* Header */}
        <Header onMenuClick={handleMenuClick} />

        {/* Main Content */}
        <main className="py-4 px-4 sm:py-6 sm:px-6 lg:px-8 pb-6">
          <div className="animate-fade-in max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;