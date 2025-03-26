import React, { useState } from "react";
import ReservationsTable from "./ReservationTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ReservationsTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationData, setReservationData] = useState({
    userId: '',
    bookId: ''
  });

  // Mock data - in real app, these would come from API
  const mockBooks = [
    { id: 1, title: "The Great Gatsby", quantity: 5 },
    { id: 2, title: "To Kill a Mockingbird", quantity: 3 },
    { id: 3, title: "1984", quantity: 0 }
  ];

  const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ];

  const handleAddReservation = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement reservation creation logic
    console.log('Reservation Data:', reservationData);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Book Reservations</h1>
      <ReservationsTable />

      <Button
        onClick={handleAddReservation}
        variant="default"
        size="lg"
        className="fixed bottom-10 right-10"
      >
        <Plus className="w-5 h-5 mr-2" />
        New Reservation
      </Button>

      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create New Reservation</DialogTitle>
            <DialogDescription>
              Reserve a book for a user
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">User</label>
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
                  {mockUsers.map(user => (
                    <SelectItem key={user.id} value={String(user.id)}>
                      {user.name} ({user.email})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">Book</label>
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
                  {mockBooks.map(book => (
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

            <div className="flex justify-end space-x-2 mt-4">
              <Button type="button" variant="outline" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={!reservationData.userId || !reservationData.bookId}
              >
                Create Reservation
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ReservationsTab;