import React from 'react';

const BorrowedBooks = ({ books }) => {
  const borrowedBooks = books.filter(book => book.status === 'Borrowed');

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p className="text-gray-500">No books are currently borrowed.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Book Title</th>
                <th className="p-2">Author</th>
                <th className="p-2">Borrowed By</th>
                <th className="p-2">Borrow Date</th>
                <th className="p-2">Return Date</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map(book => (
                <tr key={book.id} className="border-b">
                  <td className="p-2">{book.title}</td>
                  <td className="p-2">{book.author}</td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">2024-03-20</td>
                  <td className="p-2">2024-04-10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;