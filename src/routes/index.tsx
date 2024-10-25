import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Lazy load components
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Login = React.lazy(() => import('../pages/auth/Login'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const NewPatient = React.lazy(() => import('../pages/patients/NewPatient'));
const NewPrescription = React.lazy(() => import('../pages/prescriptions/NewPrescription'));
const Reports = React.lazy(() => import('../pages/reports/Reports'));
const Interactions = React.lazy(() => import('../pages/interactions/Interactions'));

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />

        {/* Protected routes */}
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/patients/new" element={isAuthenticated ? <NewPatient /> : <Navigate to="/login" />} />
        <Route path="/prescriptions/new" element={isAuthenticated ? <NewPrescription /> : <Navigate to="/login" />} />
        <Route path="/reports" element={isAuthenticated ? <Reports /> : <Navigate to="/login" />} />
        <Route path="/interactions" element={isAuthenticated ? <Interactions /> : <Navigate to="/login" />} />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;