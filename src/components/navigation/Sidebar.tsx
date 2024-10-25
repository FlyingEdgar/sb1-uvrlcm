import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  PillIcon, 
  Activity,
  BookOpen,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Patients', path: '/patients' },
    { icon: FileText, label: 'Health Records', path: '/records' },
    { icon: PillIcon, label: 'Medications', path: '/medications' },
    { icon: Activity, label: 'Analytics', path: '/analytics' },
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: HelpCircle, label: 'Support', path: '/support' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <PillIcon className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">DrugSafe</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm font-medium ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800">Need Help?</h3>
            <p className="mt-1 text-sm text-blue-600">
              Our support team is here for you 24/7
            </p>
            <button className="mt-3 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;