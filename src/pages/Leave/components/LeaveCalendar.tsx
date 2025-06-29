import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const LeaveCalendar: React.FC = () => {
  const currentMonth = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  // Mock calendar data
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const leaveDays = [5, 8, 12, 15, 16, 17, 18, 19, 22, 28]; // Days with leave
  const weekendDays = [4, 5, 11, 12, 18, 19, 25, 26]; // Weekends

  const upcomingLeave = [
    {
      date: 'Feb 15-19',
      employee: 'Alex Johnson',
      type: 'Vacation',
      days: 5,
    },
    {
      date: 'Feb 22',
      employee: 'Sarah Chen',
      type: 'Personal',
      days: 1,
    },
    {
      date: 'Feb 28-29',
      employee: 'Mike Davis',
      type: 'Sick Leave',
      days: 2,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Leave Calendar</h2>
          <p className="text-sm text-gray-500 mt-1">Overview of team leave schedule</p>
        </div>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <h3 className="font-semibold text-gray-900">{currentMonth}</h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
            {day}
          </div>
        ))}
        {calendarDays.map((day) => (
          <div
            key={day}
            className={`text-center text-sm p-2 rounded-lg transition-colors duration-200 ${
              leaveDays.includes(day)
                ? 'bg-primary-100 text-primary-800 font-medium'
                : weekendDays.includes(day)
                ? 'text-gray-400'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary-100 rounded mr-2"></div>
          Leave Days
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-200 rounded mr-2"></div>
          Weekends
        </div>
      </div>

      {/* Upcoming Leave */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Upcoming Leave</h4>
        <div className="space-y-3">
          {upcomingLeave.map((leave, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">{leave.employee}</p>
                <p className="text-xs text-gray-500">{leave.type} • {leave.date}</p>
              </div>
              <span className="text-xs text-gray-500">{leave.days}d</span>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200">
        View Full Calendar
      </button>
    </div>
  );
};

export default LeaveCalendar;