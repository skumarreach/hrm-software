import React from 'react';
import TimeTrackingHeader from './components/TimeTrackingHeader';
import ActiveTimers from './components/ActiveTimers';
import RecentEntries from './components/RecentEntries';
import TimeStatistics from './components/TimeStatistics';

const TimeTracking: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <TimeTrackingHeader />

      {/* Statistics */}
      <TimeStatistics />

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Active Timers */}
        <div className="xl:col-span-1">
          <ActiveTimers />
        </div>

        {/* Recent Entries */}
        <div className="xl:col-span-2">
          <RecentEntries />
        </div>
      </div>
    </div>
  );
};

export default TimeTracking;