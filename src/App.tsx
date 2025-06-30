import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Employees from './pages/Employees/Employees';
import TimeTracking from './pages/TimeTracking/TimeTracking';
import Leave from './pages/Leave/Leave';
import Payroll from './pages/Payroll/Payroll';
import Performance from './pages/Performance/Performance';
import Settings from './pages/Settings/Settings';

// Error boundary component for better error handling
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// 404 component
const NotFound: React.FC = () => {
  const location = useLocation();
  
  // Auto-redirect to dashboard after a short delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-4">Page not found: {location.pathname}</p>
        <p className="text-sm text-gray-500">Redirecting to dashboard...</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Navigate to="/" replace />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/time-tracking" element={<TimeTracking />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/settings" element={<Settings />} />
          {/* Catch-all route for 404s */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;