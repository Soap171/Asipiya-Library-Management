import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const books = [
  // Fiction Books
  {
    id: 1,
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    category: "Fiction",
    image: "/assets/images/fic_1.jpg",
    description:
      "A historical novel set in the American South during the Civil War.",
  },
  {
    id: 2,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Fiction",
    image: "/assets/images/fiction2.png",
    description: "A story of friendship and redemption set in Afghanistan.",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    image: "/assets/images/fiction3.jpg",
    description: "A novel about racial injustice in the Deep South.",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    image: "/assets/images/fiction4.jpg",
    description: "A dystopian novel about totalitarianism and surveillance.",
  },

  // Non-Fiction Books
  {
    id: 5,
    title: "Into the Wild",
    author: "Jon Krakauer",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction.png",
    description:
      "The true story of Christopher McCandless and his journey into the Alaskan wilderness.",
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction2.jpg",
    description: "A memoir about growing up in a strict and abusive household.",
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction3.jpg",
    description: "A brief history of humankind.",
  },
  {
    id: 8,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction4.jpg",
    description: "The memoir of former First Lady Michelle Obama.",
  },

  // Science Books
  {
    id: 9,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    image: "/assets/images/science1.jpg",
    description: "An exploration of the universe's origins and structure.",
  },
  {
    id: 10,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    image: "/assets/images/science2.jpg",
    description: "A book about evolution and natural selection.",
  },
  {
    id: 11,
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    category: "Science",
    image: "/assets/images/science3.jpg",
    description: "A history of the gene and its impact on humanity.",
  },
  {
    id: 12,
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Science",
    image: "/assets/images/science4.jpg",
    description: "A journey through the universe and our place in it.",
  },

  // History Books
  {
    id: 13,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "History",
    image: "/assets/images/history1.jpg",
    description: "The diary of Anne Frank during the Holocaust.",
  },
  {
    id: 14,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "History",
    image: "/assets/images/history2.jpg",
    description: "A book about the factors that shaped human history.",
  },
  {
    id: 15,
    title: "The Silk Roads",
    author: "Peter Frankopan",
    category: "History",
    image: "/assets/images/history3.jpg",
    description:
      "A new history of the world through the lens of the Silk Roads.",
  },
  {
    id: 16,
    title: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    category: "History",
    image: "/assets/images/history4.jpg",
    description: "The political genius of Abraham Lincoln.",
  },
];

function BookCategory() {
  const { categoryName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.category.toLowerCase() === categoryName.toLowerCase() &&
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 uppercase tracking-wide">
        {categoryName} Books
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for a book..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 pl-12 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FaSearch className="absolute left-4 top-3 text-gray-400 text-lg" />
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-gray-800 p-5 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => handleBookClick(book.id)}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-white">{book.title}</h2>
              <p className="text-gray-400">{book.author}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full text-lg">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
}

export default BookCategory;
