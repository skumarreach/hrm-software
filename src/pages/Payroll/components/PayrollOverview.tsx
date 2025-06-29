import React from 'react';
import { DollarSign, User, Calendar, CheckCircle } from 'lucide-react';

interface PayrollEntry {
  id: string;
  employee: {
    name: string;
    department: string;
    avatar: string;
  };
  salary: number;
  overtime: number;
  deductions: number;
  netPay: number;
  status: 'Processed' | 'Pending' | 'Failed';
  payDate: string;
}

const payrollEntries: PayrollEntry[] = [
  {
    id: '1',
    employee: {
      name: 'Sarah Johnson',
      department: 'HR',
      avatar: 'SJ',
    },
    salary: 5500,
    overtime: 200,
    deductions: 850,
    netPay: 4850,
    status: 'Processed',
    payDate: '2024-02-01',
  },
  {
    id: '2',
    employee: {
      name: 'Alex Chen',
      department: 'Engineering',
      avatar: 'AC',
    },
    salary: 6800,
    overtime: 450,
    deductions: 1100,
    netPay: 6150,
    status: 'Processed',
    payDate: '2024-02-01',
  },
  {
    id: '3',
    employee: {
      name: 'Maria Garcia',
      department: 'Marketing',
      avatar: 'MG',
    },
    salary: 4200,
    overtime: 0,
    deductions: 650,
    netPay: 3550,
    status: 'Pending',
    payDate: '2024-02-01',
  },
  {
    id: '4',
    employee: {
      name: 'David Kim',
      department: 'Product',
      avatar: 'DK',
    },
    salary: 5800,
    overtime: 150,
    deductions: 900,
    netPay: 5050,
    status: 'Processed',
    payDate: '2024-02-01',
  },
];

const getStatusColor = (status: string) => {
  const colors = {
    Processed: 'bg-success-100 text-success-800',
    Pending: 'bg-warning-100 text-warning-800',
    Failed: 'bg-error-100 text-error-800',
  };
  return colors[status as keyof typeof colors] || colors.Processed;
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

const PayrollOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Payroll Overview</h2>
          <p className="text-sm text-gray-500 mt-1">February 2024 payroll details</p>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-success-500" />
          <span className="text-sm text-success-600 font-medium">247/247 Processed</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700">Employee</th>
              <th className="text-right py-3 px-4 font-medium text-gray-700">Base Salary</th>
              <th className="text-right py-3 px-4 font-medium text-gray-700">Overtime</th>
              <th className="text-right py-3 px-4 font-medium text-gray-700">Deductions</th>
              <th className="text-right py-3 px-4 font-medium text-gray-700">Net Pay</th>
              <th className="text-center py-3 px-4 font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {payrollEntries.map((entry) => (
              <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{entry.employee.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{entry.employee.name}</p>
                      <p className="text-sm text-gray-500">{entry.employee.department}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-medium text-gray-900">
                  {formatCurrency(entry.salary)}
                </td>
                <td className="py-4 px-4 text-right text-gray-600">
                  {entry.overtime > 0 ? formatCurrency(entry.overtime) : '-'}
                </td>
                <td className="py-4 px-4 text-right text-gray-600">
                  {formatCurrency(entry.deductions)}
                </td>
                <td className="py-4 px-4 text-right font-semibold text-gray-900">
                  {formatCurrency(entry.netPay)}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(entry.status)}`}>
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Showing 4 of 247 employees
        </div>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All Entries
        </button>
      </div>
    </div>
  );
};

export default PayrollOverview;