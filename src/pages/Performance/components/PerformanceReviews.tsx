import React from 'react';
import { Calendar, Star, User, Clock, FileText, Eye } from 'lucide-react';

interface PerformanceReview {
  id: string;
  employee: {
    name: string;
    department: string;
    avatar: string;
  };
  reviewer: string;
  period: string;
  rating: number;
  status: 'Completed' | 'In Progress' | 'Pending' | 'Due';
  dueDate: string;
  lastUpdated: string;
  goals: number;
  completedGoals: number;
}

const performanceReviews: PerformanceReview[] = [
  {
    id: '1',
    employee: {
      name: 'Alex Johnson',
      department: 'Engineering',
      avatar: 'AJ',
    },
    reviewer: 'David Chen',
    period: 'Q4 2024',
    rating: 4.5,
    status: 'Completed',
    dueDate: '2024-02-15',
    lastUpdated: '2024-02-10',
    goals: 8,
    completedGoals: 7,
  },
  {
    id: '2',
    employee: {
      name: 'Maria Garcia',
      department: 'Marketing',
      avatar: 'MG',
    },
    reviewer: 'Sarah Johnson',
    period: 'Q4 2024',
    rating: 4.2,
    status: 'In Progress',
    dueDate: '2024-02-20',
    lastUpdated: '2024-02-08',
    goals: 6,
    completedGoals: 5,
  },
  {
    id: '3',
    employee: {
      name: 'David Kim',
      department: 'Product',
      avatar: 'DK',
    },
    reviewer: 'Emma Wilson',
    period: 'Q4 2024',
    rating: 4.8,
    status: 'Completed',
    dueDate: '2024-02-10',
    lastUpdated: '2024-02-09',
    goals: 10,
    completedGoals: 9,
  },
  {
    id: '4',
    employee: {
      name: 'Emma Wilson',
      department: 'Design',
      avatar: 'EW',
    },
    reviewer: 'Michael Brown',
    period: 'Q4 2024',
    rating: 0,
    status: 'Due',
    dueDate: '2024-02-18',
    lastUpdated: '2024-01-30',
    goals: 7,
    completedGoals: 4,
  },
];

const getStatusColor = (status: string) => {
  const colors = {
    Completed: 'bg-success-100 text-success-800',
    'In Progress': 'bg-primary-100 text-primary-800',
    Pending: 'bg-warning-100 text-warning-800',
    Due: 'bg-error-100 text-error-800',
  };
  return colors[status as keyof typeof colors] || colors.Pending;
};

const renderStars = (rating: number) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-2">{rating > 0 ? rating.toFixed(1) : 'N/A'}</span>
    </div>
  );
};

const PerformanceReviews: React.FC = () => {
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
          <h2 className="text-lg font-semibold text-gray-900">Performance Reviews</h2>
          <p className="text-sm text-gray-500 mt-1">Track employee performance evaluations</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {performanceReviews.filter(review => review.status === 'Due').length} due
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {performanceReviews.map((review) => (
          <div
            key={review.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                {/* Employee Avatar */}
                <div className="h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{review.employee.avatar}</span>
                </div>

                {/* Review Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-gray-900">{review.employee.name}</h3>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{review.employee.department}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(review.status)}`}>
                      {review.status}
                    </span>
                  </div>

                  <div className="flex items-center space-x-6 mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {review.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      Reviewer: {review.reviewer}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Due: {formatDate(review.dueDate)}
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Rating</p>
                      {renderStars(review.rating)}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Goals Progress</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-500 h-2 rounded-full"
                            style={{ width: `${(review.completedGoals / review.goals) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {review.completedGoals}/{review.goals}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Last updated: {formatDate(review.lastUpdated)}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <FileText className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All Reviews
        </button>
      </div>
    </div>
  );
};

export default PerformanceReviews;