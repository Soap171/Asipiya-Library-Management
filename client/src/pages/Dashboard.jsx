import React, { useState } from 'react';
import Sidebar from '@/components/Admindashboard/Sidebar';
import DashboardContent from '@/components/Admindashboard/DashboardContent';
import UserManagement from '@/components/Admindashboard/UserManagement';
import BookManagement from '@/components/Admindashboard/BookManagement';
import BorrowedBooks from '@/components/Admindashboard/BorrowedBooks';
import Reservations from '@/components/Admindashboard/Reservations';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Initial dummy data (to be replaced with actual data source)
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Member' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' }
  ]);

  const [books, setBooks] = useState([
    { id: 1, title: 'React Basics', author: 'John Developer', isbn: '1234567890', status: 'Available' },
    { id: 2, title: 'Tailwind CSS', author: 'Design Pro', isbn: '0987654321', status: 'Borrowed' }
  ]);

  // User Management Functions
  const addUser = (newUser) => {
    const userWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, userWithId]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Book Management Functions
  const addBook = (newBook) => {
    const bookWithId = { ...newBook, id: books.length + 1, status: 'Available' };
    setBooks([...books, bookWithId]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Render active section
  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard': 
        return <DashboardContent users={users} books={books} />;
      case 'users': 
        return <UserManagement 
          users={users} 
          onAddUser={addUser} 
          onDeleteUser={deleteUser} 
        />;
      case 'books': 
        return <BookManagement 
          books={books} 
          onAddBook={addBook} 
          onDeleteBook={deleteBook} 
        />;
      case 'reservations': 
        return <Reservations />;
      case 'borrowed': 
        return <BorrowedBooks books={books} />;
      default: 
        return <DashboardContent users={users} books={books} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 overflow-y-auto p-6 md:p-10 mt-16 md:mt-0">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;