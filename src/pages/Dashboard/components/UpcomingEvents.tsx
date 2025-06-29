import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Team Meeting',
    time: '2:00 PM',
    date: 'Today',
    attendees: 8,
    location: 'Conference Room A',
    type: 'meeting',
  },
  {
    id: 2,
    title: 'New Hire Orientation',
    time: '10:00 AM',
    date: 'Tomorrow',
    attendees: 3,
    location: 'HR Office',
    type: 'orientation',
  },
  {
    id: 3,
    title: 'Performance Reviews',
    time: '9:00 AM',
    date: 'Friday',
    attendees: 12,
    location: 'Virtual',
    type: 'review',
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
          <p className="text-sm text-gray-500 mt-1">Your schedule this week</p>
        </div>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors duration-200">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {event.time} • {event.date}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  {event.location}
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-1">{event.attendees} attendees</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 px-4 py-2 text-sm text-primary-600 hover:text-primary-700 font-medium border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors duration-200">
        View Calendar
      </button>
    </div>
  );
};

export default UpcomingEvents;