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

// Error boundary component
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// 404 component with better mobile handling
const NotFound: React.FC = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    // Auto-redirect to dashboard after a short delay
    const timer = setTimeout(() => {
      window.location.replace('/');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-macaw p-4">
      <div className="text-center bg-white rounded-xl p-8 shadow-lg max-w-md w-full">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-4">Page not found</p>
        <p className="text-sm text-gray-500 mb-4">Path: {location.pathname}</p>
        <div className="bg-gradient-to-r from-scarlet-50 to-azure-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-600">Redirecting to dashboard in 3 seconds...</p>
        </div>
        <button 
          onClick={() => window.location.replace('/')}
          className="px-6 py-3 bg-gradient-scarlet text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 touch-manipulation"
        >
          Go to Dashboard Now
        </button>
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