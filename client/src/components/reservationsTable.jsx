import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function ReservationsTable() {
  const reservations = [
    {
      id: 1,
      user_id: 101,
      book_id: 202,
      reservation_date: "2023-10-01",
      status: "pending",
    },
    {
      id: 2,
      user_id: 102,
      book_id: 203,
      reservation_date: "2023-10-02",
      status: "borrowed",
    },
  ];

  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Book ID</TableHead>
            <TableHead>Reservation Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell className="font-medium">{reservation.id}</TableCell>
              <TableCell>{reservation.user_id}</TableCell>
              <TableCell>{reservation.book_id}</TableCell>
              <TableCell>{reservation.reservation_date}</TableCell>
              <TableCell>{reservation.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReservationsTable;