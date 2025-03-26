import React from "react";
import { useParams } from "react-router-dom";

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
    publicationDate: "1936",
    pages: 1037,
    publisher: "Macmillan Publishers",
    language: "English",
  },
  {
    id: 2,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Fiction",
    image: "/assets/images/fiction2.png",
    description: "A story of friendship and redemption set in Afghanistan.",
    publicationDate: "2003",
    pages: 371,
    publisher: "Riverhead Books",
    language: "English",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    image: "/assets/images/fiction3.jpg",
    description: "A novel about racial injustice in the Deep South.",
    publicationDate: "1960",
    pages: 281,
    publisher: "J.B. Lippincott & Co.",
    language: "English",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    image: "/assets/images/fiction4.jpg",
    description: "A dystopian novel about totalitarianism and surveillance.",
    publicationDate: "1949",
    pages: 328,
    publisher: "Secker & Warburg",
    language: "English",
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
    publicationDate: "1996",
    pages: 224,
    publisher: "Villard",
    language: "English",
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction2.jpg",
    description: "A memoir about growing up in a strict and abusive household.",
    publicationDate: "2018",
    pages: 334,
    publisher: "Random House",
    language: "English",
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction3.jpg",
    description: "A brief history of humankind.",
    publicationDate: "2011",
    pages: 443,
    publisher: "Harvill Secker",
    language: "English",
  },
  {
    id: 8,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction4.jpg",
    description: "The memoir of former First Lady Michelle Obama.",
    publicationDate: "2018",
    pages: 448,
    publisher: "Crown Publishing Group",
    language: "English",
  },

  // Science Books
  {
    id: 9,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    image: "/assets/images/science1.jpg",
    description: "An exploration of the universe's origins and structure.",
    publicationDate: "1988",
    pages: 256,
    publisher: "Bantam Books",
    language: "English",
  },
  {
    id: 10,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    image: "/assets/images/science2.jpg",
    description: "A book about evolution and natural selection.",
    publicationDate: "1976",
    pages: 360,
    publisher: "Oxford University Press",
    language: "English",
  },
  {
    id: 11,
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    category: "Science",
    image: "/assets/images/science3.jpg",
    description: "A history of the gene and its impact on humanity.",
    publicationDate: "2016",
    pages: 592,
    publisher: "Scribner",
    language: "English",
  },
  {
    id: 12,
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Science",
    image: "/assets/images/science4.jpg",
    description: "A journey through the universe and our place in it.",
    publicationDate: "1980",
    pages: 384,
    publisher: "Random House",
    language: "English",
  },

  // History Books
  {
    id: 13,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "History",
    image: "/assets/images/history1.jpg",
    description: "The diary of Anne Frank during the Holocaust.",
    publicationDate: "1947",
    pages: 283,
    publisher: "Contact Publishing",
    language: "English",
  },
  {
    id: 14,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "History",
    image: "/assets/images/history2.jpg",
    description: "A book about the factors that shaped human history.",
    publicationDate: "1997",
    pages: 480,
    publisher: "W.W. Norton & Company",
    language: "English",
  },
  {
    id: 15,
    title: "The Silk Roads",
    author: "Peter Frankopan",
    category: "History",
    image: "/assets/images/history3.jpg",
    description:
      "A new history of the world through the lens of the Silk Roads.",
    publicationDate: "2015",
    pages: 636,
    publisher: "Bloomsbury Publishing",
    language: "English",
  },
  {
    id: 16,
    title: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    category: "History",
    image: "/assets/images/history4.jpg",
    description: "The political genius of Abraham Lincoln.",
    publicationDate: "2005",
    pages: 916,
    publisher: "Simon & Schuster",
    language: "English",
  },
];

function BookView() {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === parseInt(bookId));

  if (!book) {
    return <p className="text-center text-white">Book not found.</p>;
  }

  const handleBorrowClick = () => {
    alert(`You have borrowed "${book.title}" by ${book.author}.`);
  };

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Book Image */}
          <img
            src={book.image}
            alt={book.title}
            className="w-full md:w-1/3 h-64 object-cover rounded-md"
          />

          {/* Book Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
            <p className="text-lg text-gray-400 mb-2">
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p className="text-lg text-gray-400 mb-2">
              <span className="font-semibold">Category:</span> {book.category}
            </p>
            <p className="text-lg text-gray-400 mb-2">
              <span className="font-semibold">Publication Date:</span>{" "}
              {book.publicationDate}
            </p>
            <p className="text-lg text-gray-400 mb-2">
              <span className="font-semibold">Pages:</span> {book.pages}
            </p>
            <p className="text-lg text-gray-400 mb-2">
              <span className="font-semibold">Publisher:</span> {book.publisher}
            </p>
            <p className="text-lg text-gray-400 mb-2">
              <span className="font-semibold">Language:</span> {book.language}
            </p>
          </div>
        </div>

        {/* Book Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Description</h2>
          <p className="text-gray-300">{book.description}</p>
        </div>

        {/* Borrow Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleBorrowClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Add Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookView;
