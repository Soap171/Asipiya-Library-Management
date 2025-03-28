import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const books = [
  {
    id: 1,
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    category: "Fiction",
    image: "/assets/images/fiction1.png",
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
    image: "/assets/images/fiction3.png",
    description: "A novel about racial injustice in the Deep South.",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    image: "/assets/images/fiction4.png",
    description: "A dystopian novel about totalitarianism and surveillance.",
  },

  {
    id: 5,
    title: "Into the Wild",
    author: "Jon Krakauer",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction1.png",
    description:
      "The true story of Christopher McCandless and his journey into the Alaskan wilderness.",
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction2.png",
    description: "A memoir about growing up in a strict and abusive household.",
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction3.png",
    description: "A brief history of humankind.",
  },
  {
    id: 8,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Non-Fiction",
    image: "/assets/images/non-fiction4.png",
    description: "The memoir of former First Lady Michelle Obama.",
  },

  {
    id: 9,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    image: "/assets/images/science1.png",
    description: "An exploration of the universe's origins and structure.",
  },
  {
    id: 10,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    image: "/assets/images/science2.png",
    description: "A book about evolution and natural selection.",
  },
  {
    id: 11,
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    category: "Science",
    image: "/assets/images/science3.png",
    description: "A history of the gene and its impact on humanity.",
  },
  {
    id: 12,
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Science",
    image: "/assets/images/science4.png",
    description: "A journey through the universe and our place in it.",
  },

  // History Books
  {
    id: 13,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "History",
    image: "/assets/images/history1.png",
    description: "The diary of Anne Frank during the Holocaust.",
  },
  {
    id: 14,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "History",
    image: "/assets/images/history2.png",
    description: "A book about the factors that shaped human history.",
  },
  {
    id: 15,
    title: "The Silk Roads",
    author: "Peter Frankopan",
    category: "History",
    image: "/assets/images/history3.png",
    description:
      "A new history of the world through the lens of the Silk Roads.",
  },
  {
    id: 16,
    title: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    category: "History",
    image: "/assets/images/history4.png",
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
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen m-10 p-10 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6 uppercase">
        {categoryName} Books
      </h1>

      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by book title or author..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 pl-12 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 font-poppins"
          />
          <IoIosSearch className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 text-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Card
              key={book.id}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              onClick={() => handleBookClick(book.id)}
            >
              <CardHeader className="p-0">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{book.title}</CardTitle>
                <CardDescription className="mb-4">
                  {book.author}
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookClick(book.id);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No books found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookCategory;
