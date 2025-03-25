import React, { useState } from 'react';

const BookManagement = ({ books, onAddBook, onDeleteBook }) => {
  const [bookForm, setBookForm] = useState({ 
    title: '', 
    author: '', 
    isbn: '' 
  });

  const handleAddBook = (e) => {
    e.preventDefault();
    onAddBook(bookForm);
    setBookForm({ title: '', author: '', isbn: '' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Book List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Book Inventory</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Title</th>
                <th className="p-2">Author</th>
                <th className="p-2">ISBN</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book.id} className="border-b">
                  <td className="p-2">{book.title}</td>
                  <td className="p-2">{book.author}</td>
                  <td className="p-2">{book.isbn}</td>
                  <td className="p-2">
                    <span className={`
                      px-2 py-1 rounded 
                      ${book.status === 'Available' 
                        ? 'bg-green-200 text-green-800' 
                        : 'bg-yellow-200 text-yellow-800'}
                    `}>
                      {book.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button 
                      onClick={() => onDeleteBook(book.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Book Form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
        <form onSubmit={handleAddBook} className="space-y-4">
          <input 
            type="text" 
            placeholder="Book Title" 
            value={bookForm.title}
            onChange={(e) => setBookForm({...bookForm, title: e.target.value})}
            className="w-full p-2 border rounded"
            required 
          />
          <input 
            type="text" 
            placeholder="Author" 
            value={bookForm.author}
            onChange={(e) => setBookForm({...bookForm, author: e.target.value})}
            className="w-full p-2 border rounded"
            required 
          />
          <input 
            type="text" 
            placeholder="ISBN" 
            value={bookForm.isbn}
            onChange={(e) => setBookForm({...bookForm, isbn: e.target.value})}
            className="w-full p-2 border rounded"
            required 
          />
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookManagement;