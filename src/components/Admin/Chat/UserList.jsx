import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const UserList = ({ users, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "student":
        return "bg-blue-500";
      case "teacher":
        return "bg-green-500";
      case "admin":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col h-full w-full lg:w-1/3 border-r border-gray-200 bg-white shadow-lg lg:rounded-lg overflow-hidden">
      <div className="p-2 border-b border-gray-200">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">Users</h2>

        <div className="relative">
          <Input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-2">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => onSelectUser(user)}
              tabIndex={0}
            >
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <Badge className={`ml-2 ${getTypeColor(user.type)}`}>
                {user.type}
              </Badge>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-500 text-center">
          {filteredUsers.length} users found
        </p>
      </div>
    </div>
  );
};

export default UserList;
