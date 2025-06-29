import React from 'react';
import { Calendar, User, Clock, Check, X, Eye } from 'lucide-react';

interface LeaveRequest {
  id: string;
  employee: {
    name: string;
    department: string;
    avatar: string;
  };
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  submittedDate: string;
}

const leaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employee: {
      name: 'Alex Johnson',
      department: 'Engineering',
      avatar: 'AJ',
    },
    type: 'Vacation',
    startDate: '2024-02-15',
    endDate: '2024-02-20',
    days: 5,
    reason: 'Family vacation to Europe',
    status: 'Pending',
    submittedDate: '2024-02-01',
  },
  {
    id: '2',
    employee: {
      name: 'Maria Garcia',
      department: 'Marketing',
      avatar: 'MG',
    },
    type: 'Sick Leave',
    startDate: '2024-02-10',
    endDate: '2024-02-12',
    days: 3,
    reason: 'Medical procedure and recovery',
    status: 'Approved',
    submittedDate: '2024-02-08',
  },
  {
    id: '3',
    employee: {
      name: 'David Kim',
      department: 'Product',
      avatar: 'DK',
    },
    type: 'Personal',
    startDate: '2024-02-18',
    endDate: '2024-02-18',
    days: 1,
    reason: 'Moving to new apartment',
    status: 'Pending',
    submittedDate: '2024-02-05',
  },
  {
    id: '4',
    employee: {
      name: 'Emma Wilson',
      department: 'Design',
      avatar: 'EW',
    },
    type: 'Maternity',
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    days: 90,
    reason: 'Maternity leave',
    status: 'Approved',
    submittedDate: '2024-01-15',
  },
];

const getStatusColor = (status: string) => {
  const colors = {
    Pending: 'bg-warning-100 text-warning-800',
    Approved: 'bg-success-100 text-success-800',
    Rejected: 'bg-error-100 text-error-800',
  };
  return colors[status as keyof typeof colors] || colors.Pending;
};

const getLeaveTypeColor = (type: string) => {
  const colors = {
    Vacation: 'bg-primary-100 text-primary-800',
    'Sick Leave': 'bg-error-100 text-error-800',
    Personal: 'bg-secondary-100 text-secondary-800',
    Maternity: 'bg-accent-100 text-accent-800',
  };
  return colors[type as keyof typeof colors] || colors.Vacation;
};

const LeaveRequests: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Leave Requests</h2>
          <p className="text-sm text-gray-500 mt-1">Review and manage employee leave requests</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {leaveRequests.filter(req => req.status === 'Pending').length} pending
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {leaveRequests.map((request) => (
          <div
            key={request.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                {/* Employee Avatar */}
                <div className="h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{request.employee.avatar}</span>
                </div>

                {/* Request Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-gray-900">{request.employee.name}</h3>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{request.employee.department}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLeaveTypeColor(request.type)}`}>
                      {request.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(request.startDate)} - {formatDate(request.endDate)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {request.days} day{request.days > 1 ? 's' : ''}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{request.reason}</p>
                  
                  <p className="text-xs text-gray-500">
                    Submitted on {formatDate(request.submittedDate)}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <Eye className="h-4 w-4" />
                </button>
                {request.status === 'Pending' && (
                  <>
                    <button className="p-2 text-success-600 hover:text-success-700 rounded-lg hover:bg-success-50 transition-colors duration-200">
                      <Check className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-error-600 hover:text-error-700 rounded-lg hover:bg-error-50 transition-colors duration-200">
                      <X className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All Requests
        </button>
      </div>
    </div>
  );
};

export default LeaveRequests;