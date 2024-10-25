import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/navigation/Header';
import { useAuth } from '../contexts/AuthContext';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();
  
  // Don't show layout on auth pages
  if (['/login', '/register', '/forgot-password'].includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <main className={`${isAuthenticated ? 'ml-64 pt-16' : ''} transition-all duration-200`}>
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;