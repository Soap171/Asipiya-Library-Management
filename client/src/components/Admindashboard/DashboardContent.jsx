import React from 'react';
import { 
  Users, 
  Book, 
  BookOpen, 
  ClipboardList 
} from 'lucide-react';

const DashboardContent = ({ users, books }) => {
  const dashboardCards = [
    {
      icon: Users,
      title: 'Total Users',
      value: users.length,
      color: 'blue'
    },
    {
      icon: Book,
      title: 'Total Books',
      value: books.length,
      color: 'green'
    },
    {
      icon: BookOpen,
      title: 'Borrowed Books',
      value: books.filter(b => b.status === 'Borrowed').length,
      color: 'purple'
    },
    {
      icon: ClipboardList,
      title: 'Reservations',
      value: 0,
      color: 'red'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {dashboardCards.map((card, index) => (
        <div 
          key={index} 
          className={`bg-${card.color}-100 p-6 rounded-lg shadow-md flex items-center`}
        >
          <card.icon className={`mr-4 text-${card.color}-600`} size={40} />
          <div>
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="text-2xl">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;