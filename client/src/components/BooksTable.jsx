import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";

function BooksTable() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      category: "Fiction",
      quantity: 5,
      author: "F. Scott Fitzgerald",
      location: "Shelf A1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwR_qwwP-PgM2uGa5crh8YvIhpV_yc7LNXA&s",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      category: "Classic",
      quantity: 3,
      author: "Harper Lee",
      location: "Shelf B2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwR_qwwP-PgM2uGa5crh8YvIhpV_yc7LNXA&s",
    },
  ]);

  const handleUpdate = (book) => {
    console.log("Update book:", book);
    // TODO: Implement update book logic
  };

  const handleDelete = (book) => {
    console.log("Delete book:", book);
    // TODO: Implement delete book logic
    setBooks(books.filter(b => b.id !== book.id));
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Available Copies</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.category}</TableCell>
              <TableCell>{book.quantity}</TableCell>
              <TableCell>{book.location}</TableCell>
              <TableCell>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-16 h-16 object-cover rounded"
                />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem 
                      onClick={() => handleUpdate(book)}
                      className="cursor-pointer"
                    >
                      <Edit className="mr-2 h-4 w-4" /> Update
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleDelete(book)}
                      className="cursor-pointer text-red-600"
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BooksTable;