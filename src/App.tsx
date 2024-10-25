import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from './components/ui/Toast';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
        <ToastContainer />
      </AuthProvider>
    </Router>
  );
}

export default App;