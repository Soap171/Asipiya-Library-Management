import React, { useState } from 'react';

const UserManagement = ({ users, onAddUser, onDeleteUser }) => {
  const [userForm, setUserForm] = useState({ 
    name: '', 
    email: '', 
    role: 'Member' 
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    onAddUser(userForm);
    setUserForm({ name: '', email: '', role: 'Member' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* User List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">
                    <button 
                      onClick={() => onDeleteUser(user.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleAddUser} className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={userForm.name}
            onChange={(e) => setUserForm({...userForm, name: e.target.value})}
            className="w-full p-2 border rounded"
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={userForm.email}
            onChange={(e) => setUserForm({...userForm, email: e.target.value})}
            className="w-full p-2 border rounded"
            required 
          />
          <select 
            value={userForm.role}
            onChange={(e) => setUserForm({...userForm, role: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="Member">Member</option>
            <option value="Admin">Admin</option>
          </select>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserManagement;