import React from 'react';
import { 
  Users, 
  Book, 
  BookOpen, 
  ClipboardList, 
  Menu, 
  X, 
  Home 
} from 'lucide-react';

const Sidebar = ({ 
  activeSection, 
  setActiveSection, 
  sidebarOpen, 
  setSidebarOpen 
}) => {
  const sidebarItems = [
    { 
      section: 'dashboard', 
      icon: Home, 
      label: 'Dashboard' 
    },
    { 
      section: 'users', 
      icon: Users, 
      label: 'User Management' 
    },
    { 
      section: 'books', 
      icon: Book, 
      label: 'Book Management' 
    },
    { 
      section: 'borrowed', 
      icon: BookOpen, 
      label: 'Borrowed Books' 
    },
    { 
      section: 'reservations', 
      icon: ClipboardList, 
      label: 'Reservations' 
    }
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:static z-40 w-64 bg-white h-full shadow-lg 
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6 bg-blue-600 text-white">
          <h1 className="text-2xl font-bold">Library Admin</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.section}>
                <button 
                  onClick={() => {
                    setActiveSection(item.section);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full text-left p-2 rounded flex items-center 
                    ${activeSection === item.section 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'hover:bg-gray-100'}
                  `}
                >
                  <item.icon className="mr-2" size={20} /> {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;