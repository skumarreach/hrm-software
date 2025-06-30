import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Employees from './pages/Employees/Employees';
import TimeTracking from './pages/TimeTracking/TimeTracking';
import Leave from './pages/Leave/Leave';
import Payroll from './pages/Payroll/Payroll';
import Performance from './pages/Performance/Performance';
import Settings from './pages/Settings/Settings';

function App() {
  return (
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
        {/* Catch-all route for 404s - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;