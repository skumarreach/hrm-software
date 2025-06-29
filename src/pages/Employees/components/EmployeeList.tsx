import React from 'react';
import { Mail, Phone, MapPin, MoreHorizontal, Star } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  status: 'Active' | 'On Leave' | 'Remote';
  avatar: string;
  rating: number;
  joinDate: string;
}

const employees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'HR Manager',
    department: 'Human Resources',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    status: 'Active',
    avatar: 'SJ',
    rating: 4.8,
    joinDate: '2022-01-15',
  },
  {
    id: '2',
    name: 'Alex Chen',
    role: 'Senior Developer',
    department: 'Engineering',
    email: 'alex.chen@company.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    status: 'Remote',
    avatar: 'AC',
    rating: 4.9,
    joinDate: '2021-08-20',
  },
  {
    id: '3',
    name: 'Maria Garcia',
    role: 'Marketing Specialist',
    department: 'Marketing',
    email: 'maria.garcia@company.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    status: 'On Leave',
    avatar: 'MG',
    rating: 4.6,
    joinDate: '2023-03-10',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Product Manager',
    department: 'Product',
    email: 'david.kim@company.com',
    phone: '+1 (555) 456-7890',
    location: 'Seattle, WA',
    status: 'Active',
    avatar: 'DK',
    rating: 4.7,
    joinDate: '2022-11-05',
  },
  {
    id: '5',
    name: 'Emma Wilson',
    role: 'UX Designer',
    department: 'Design',
    email: 'emma.wilson@company.com',
    phone: '+1 (555) 567-8901',
    location: 'Los Angeles, CA',
    status: 'Active',
    avatar: 'EW',
    rating: 4.8,
    joinDate: '2023-01-12',
  },
];

interface EmployeeListProps {
  searchTerm: string;
}

const getStatusColor = (status: string) => {
  const colors = {
    Active: 'bg-success-100 text-success-800',
    'On Leave': 'bg-warning-100 text-warning-800',
    Remote: 'bg-primary-100 text-primary-800',
  };
  return colors[status as keyof typeof colors] || colors.Active;
};

const EmployeeList: React.FC<EmployeeListProps> = ({ searchTerm }) => {
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Employee Directory ({filteredEmployees.length})
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="h-12 w-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{employee.avatar}</span>
                </div>

                {/* Employee Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{employee.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(employee.status)}`}>
                      {employee.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{employee.role} • {employee.department}</p>
                  
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {employee.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      {employee.phone}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {employee.location}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{employee.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      Joined {new Date(employee.joinDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200">
                  View Profile
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="p-12 text-center">
          <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4a1 1 0 00-1-1H9a1 1 0 00-1 1v1m4 0h2m-6 0h2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No employees found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;