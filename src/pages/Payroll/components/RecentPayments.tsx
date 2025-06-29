import React from 'react';
import { DollarSign, Calendar, User, TrendingUp } from 'lucide-react';

const recentPayments = [
  {
    id: '1',
    description: 'February Payroll',
    amount: 247850,
    date: '2024-02-01',
    employees: 247,
    type: 'payroll',
  },
  {
    id: '2',
    description: 'Bonus Payments',
    amount: 15600,
    date: '2024-01-31',
    employees: 12,
    type: 'bonus',
  },
  {
    id: '3',
    description: 'January Payroll',
    amount: 241200,
    date: '2024-01-01',
    employees: 245,
    type: 'payroll',
  },
  {
    id: '4',
    description: 'Overtime Payments',
    amount: 8950,
    date: '2024-01-15',
    employees: 32,
    type: 'overtime',
  },
];

const payrollSummary = {
  totalThisMonth: 263450,
  lastMonth: 249150,
  changePercent: 5.7,
  nextPayrollDate: '2024-02-15',
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

const getPaymentTypeIcon = (type: string) => {
  const icons = {
    payroll: DollarSign,
    bonus: TrendingUp,
    overtime: Calendar,
  };
  return icons[type as keyof typeof icons] || DollarSign;
};

const getPaymentTypeColor = (type: string) => {
  const colors = {
    payroll: 'bg-primary-100 text-primary-600',
    bonus: 'bg-success-100 text-success-600',
    overtime: 'bg-warning-100 text-warning-600',
  };
  return colors[type as keyof typeof colors] || colors.payroll;
};

const RecentPayments: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Payments</h2>
          <p className="text-sm text-gray-500 mt-1">Latest payroll transactions</p>
        </div>
        <DollarSign className="h-5 w-5 text-gray-400" />
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-gray-900">This Month</h3>
          <span className="text-xs bg-success-100 text-success-800 px-2 py-1 rounded-full">
            +{payrollSummary.changePercent}%
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-1">
          {formatCurrency(payrollSummary.totalThisMonth)}
        </p>
        <p className="text-sm text-gray-600">
          Next payroll: {new Date(payrollSummary.nextPayrollDate).toLocaleDateString()}
        </p>
      </div>

      {/* Recent Payments List */}
      <div className="space-y-4">
        {recentPayments.map((payment) => {
          const Icon = getPaymentTypeIcon(payment.type);
          const colorClasses = getPaymentTypeColor(payment.type);
          
          return (
            <div
              key={payment.id}
              className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors duration-200"
            >
              <div className={`p-3 rounded-lg ${colorClasses}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900">{payment.description}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-3 w-3 mr-1" />
                    {payment.employees} employees
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(payment.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">
                  {formatCurrency(payment.amount)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200">
        View Payment History
      </button>
    </div>
  );
};

export default RecentPayments;