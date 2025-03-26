import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function AddBookModal({ isOpen, onClose }) {
  const [bookData, setBookData] = useState({
    title: '',
    description: '',
    category: '',
    quantity: 0,
    location: '',
    imageUrl: 'https://pngimg.com/d/book_PNG51090.png'
  });

  const categories = [
    'Fiction', 
    'Non-Fiction', 
    'Science', 
    'History', 
    'Biography', 
    'Reference'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setBookData(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement book addition logic
    console.log('Book Data:', bookData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Add New Book</DialogTitle>
          <DialogDescription>
            Fill in the details of the book you want to add to the library.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input 
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              className="col-span-3" 
              required 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input 
              id="description"
              name="description"
              value={bookData.description}
              onChange={handleChange}
              className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select 
              onValueChange={handleSelectChange}
              value={bookData.category}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantity
            </Label>
            <Input 
              id="quantity"
              name="quantity"
              type="number"
              value={bookData.quantity}
              onChange={handleChange}
              className="col-span-3" 
              min="0"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input 
              id="location"
              name="location"
              value={bookData.location}
              onChange={handleChange}
              className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="imageUrl" className="text-right">
              Image URL
            </Label>
            <Input 
              id="imageUrl"
              name="imageUrl"
              value={bookData.imageUrl}
              onChange={handleChange}
              className="col-span-3" 
            />
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Book</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddBookModal;