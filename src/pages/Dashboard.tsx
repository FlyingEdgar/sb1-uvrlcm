import React from 'react';
import { Activity, Users, PillIcon, FileText } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, icon: Icon, color }: { 
  title: string; 
  value: string; 
  icon: React.ElementType;
  color: string;
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
        <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const RecentActivity = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="px-6 py-4 border-b border-gray-200">
      <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        {[
          { time: '2 hours ago', text: 'New patient record added' },
          { time: '4 hours ago', text: 'Updated medication for Patient #1234' },
          { time: '1 day ago', text: 'Drug interaction warning resolved' },
        ].map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-blue-600" />
            <p className="text-sm text-gray-600">
              <span className="font-medium">{activity.time}:</span> {activity.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const quickActions = [
    { text: 'Add New Patient', color: 'bg-blue-600', path: '/patients/new' },
    { text: 'Create Prescription', color: 'bg-green-600', path: '/prescriptions/new' },
    { text: 'View Reports', color: 'bg-purple-600', path: '/reports' },
    { text: 'Check Interactions', color: 'bg-red-600', path: '/interactions' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {user?.name}</h1>
        <p className="mt-1 text-sm text-gray-500">Here's what's happening with your patients today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Patients"
          value="1,234"
          icon={Users}
          color="bg-blue-600"
        />
        <StatCard
          title="Active Prescriptions"
          value="856"
          icon={PillIcon}
          color="bg-green-600"
        />
        <StatCard
          title="Health Records"
          value="2,567"
          icon={FileText}
          color="bg-purple-600"
        />
        <StatCard
          title="Interactions Detected"
          value="12"
          icon={Activity}
          color="bg-red-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => navigate(action.path)}
                  className={`${action.color} text-white rounded-lg py-3 px-4 text-sm font-medium hover:opacity-90 transition-opacity`}
                >
                  {action.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;