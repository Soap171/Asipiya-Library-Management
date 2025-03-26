import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function UsersTable() {
  const users = [
    {
      name: "User 1",
      email: "user1@gmail.com",
      address: "123 Main St, City, Country",
      contact: "1234567890",
      avatar: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
      registered: "2021-09-01",
    },
    {
      name: "User 2",
      email: "user2@gmail.com",
      address: "456 Elm St, City, Country",
      contact: "9876543210",
      avatar: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
      registered: "2021-09-01",
    },
  ];

  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Registered On</TableHead>
            <TableHead>Display Pic</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.contact}</TableCell>
              <TableCell>{user.registered}</TableCell>
              <TableCell>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UsersTable;