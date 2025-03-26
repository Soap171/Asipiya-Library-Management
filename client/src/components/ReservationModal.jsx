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
import { Calendar } from "@/components/ui/calendar";

function ReservationModal({ isOpen, onClose, books, users }) {
  const [reservationData, setReservationData] = useState({
    userId: '',
    bookId: '',
    reservationDate: new Date()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement reservation creation logic
    console.log('Reservation Data:', reservationData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Create New Reservation</DialogTitle>
          <DialogDescription>
            Reserve a book for a user
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userId" className="text-right">
              User
            </Label>
            <Select 
              onValueChange={(value) => setReservationData(prev => ({
                ...prev, 
                userId: value
              }))}
              value={reservationData.userId}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a user" />
              </SelectTrigger>
              <SelectContent>
                {users.map(user => (
                  <SelectItem key={user.id} value={String(user.id)}>
                    {user.name} ({user.email})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bookId" className="text-right">
              Book
            </Label>
            <Select 
              onValueChange={(value) => setReservationData(prev => ({
                ...prev, 
                bookId: value
              }))}
              value={reservationData.bookId}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a book" />
              </SelectTrigger>
              <SelectContent>
                {books.map(book => (
                  <SelectItem 
                    key={book.id} 
                    value={String(book.id)}
                    disabled={book.quantity <= 0}
                  >
                    {book.title} {book.quantity <= 0 ? '(Out of Stock)' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Reservation Date
            </Label>
            <div className="col-span-3">
              <Calendar
                mode="single"
                selected={reservationData.reservationDate}
                onSelect={(date) => setReservationData(prev => ({
                  ...prev, 
                  reservationDate: date
                }))}
                className="rounded-md border"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!reservationData.userId || !reservationData.bookId}>
              Create Reservation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ReservationModal;