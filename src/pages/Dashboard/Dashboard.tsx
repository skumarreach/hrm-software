import React from 'react';
import StatsCards from './components/StatsCards';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';
import UpcomingEvents from './components/UpcomingEvents';
import TeamOverview from './components/TeamOverview';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">Welcome back, Sarah! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Quick Actions */}
      <QuickActions />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column - Recent Activity */}
        <div className="xl:col-span-2">
          <RecentActivity />
        </div>

        {/* Right Column */}
        <div className="space-y-6 sm:space-y-8">
          <UpcomingEvents />
          <TeamOverview />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;