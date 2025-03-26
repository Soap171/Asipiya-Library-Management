import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, CheckCircle, XCircle } from "lucide-react";

function ReservationsTable() {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      user: "John Doe",
      book: "The Great Gatsby",
      reservationDate: "2024-03-15",
      status: "pending"
    },
    {
      id: 2,
      user: "Jane Smith",
      book: "To Kill a Mockingbird",
      reservationDate: "2024-03-20",
      status: "borrowed"
    },
    {
      id: 3,
      user: "Mike Johnson",
      book: "1984",
      reservationDate: "2024-03-25",
      status: "completed"
    }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'borrowed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleUpdateStatus = (reservation, newStatus) => {
    setReservations(prev => 
      prev.map(res => 
        res.id === reservation.id 
          ? {...res, status: newStatus} 
          : res
      )
    );
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Book</TableHead>
            <TableHead>Reservation Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell>{reservation.user}</TableCell>
              <TableCell>{reservation.book}</TableCell>
              <TableCell>{reservation.reservationDate}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded ${getStatusColor(reservation.status)}`}>
                  {reservation.status}
                </span>
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
                    {reservation.status === 'pending' && (
                      <DropdownMenuItem 
                        onClick={() => handleUpdateStatus(reservation, 'borrowed')}
                        className="cursor-pointer"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" /> Mark as Borrowed
                      </DropdownMenuItem>
                    )}
                    {reservation.status === 'borrowed' && (
                      <DropdownMenuItem 
                        onClick={() => handleUpdateStatus(reservation, 'completed')}
                        className="cursor-pointer"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" /> Mark as Returned
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem 
                      onClick={() => handleUpdateStatus(reservation, 'completed')}
                      className="cursor-pointer text-red-600"
                    >
                      <XCircle className="mr-2 h-4 w-4" /> Cancel Reservation
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

export default ReservationsTable;