import React from 'react';
import { Clock, Edit, Trash2, Calendar } from 'lucide-react';

interface TimeEntry {
  id: string;
  project: string;
  task: string;
  date: string;
  duration: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Pending Review';
}

const timeEntries: TimeEntry[] = [
  {
    id: '1',
    project: 'Website Redesign',
    task: 'UI Development',
    date: 'Today',
    duration: '2h 30m',
    description: 'Implemented responsive navigation component',
    status: 'In Progress',
  },
  {
    id: '2',
    project: 'Mobile App',
    task: 'Code Review',
    date: 'Today',
    duration: '1h 15m',
    description: 'Reviewed authentication flow implementation',
    status: 'Completed',
  },
  {
    id: '3',
    project: 'Database Migration',
    task: 'Data Analysis',
    date: 'Yesterday',
    duration: '3h 45m',
    description: 'Analyzed data integrity and migration requirements',
    status: 'Completed',
  },
  {
    id: '4',
    project: 'API Integration',
    task: 'Documentation',
    date: 'Yesterday',
    duration: '1h 30m',
    description: 'Updated API documentation with new endpoints',
    status: 'Pending Review',
  },
  {
    id: '5',
    project: 'User Testing',
    task: 'Session Analysis',
    date: '2 days ago',
    duration: '2h 00m',
    description: 'Analyzed user feedback and behavior patterns',
    status: 'Completed',
  },
];

const getStatusColor = (status: string) => {
  const colors = {
    'Completed': 'bg-success-100 text-success-800',
    'In Progress': 'bg-primary-100 text-primary-800',
    'Pending Review': 'bg-warning-100 text-warning-800',
  };
  return colors[status as keyof typeof colors] || colors['Completed'];
};

const RecentEntries: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Entries</h2>
          <p className="text-sm text-gray-500 mt-1">Your latest time tracking records</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <Calendar className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {timeEntries.map((entry) => (
          <div
            key={entry.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-medium text-gray-900">{entry.project}</h3>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-600">{entry.task}</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(entry.status)}`}>
                    {entry.status}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{entry.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {entry.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {entry.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-error-600 rounded-lg hover:bg-error-50 transition-colors duration-200">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All Entries
        </button>
      </div>
    </div>
  );
};

export default RecentEntries;