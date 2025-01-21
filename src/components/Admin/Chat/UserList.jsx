import React, { useState } from "react";

const UserList = ({ users, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 border-r border-gray-200 h-full">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full px-4 py-2 border rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-2 border-b cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectUser(user)}
          >
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
