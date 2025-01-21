import ChatWindow from "@/components/Admin/Chat/ChatWindow";
import UserList from "@/components/Admin/Chat/UserList";
import React, { useState } from "react";

const AdminChatSection = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const users = [
    { id: 1, name: "John Doe", type: "Student" },
    { id: 2, name: "Jane Smith", type: "Teacher" },
    { id: 3, name: "Mark Lee", type: "Student" },
    { id: 4, name: "Emily Davis", type: "Teacher" },
  ];

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    // Fetch chat history for the selected user
    setMessages([
      { text: "Hello Admin!", isAdmin: false },
      { text: "Hi! How can I help you?", isAdmin: true },
    ]);
  };

  const handleSendMessage = (message) => {
    setMessages((prev) => [...prev, { text: message, isAdmin: true }]);
    // Emit message to WebSocket server
  };

  return (
    <div className="flex h-full">
      <UserList users={users} onSelectUser={handleSelectUser} />
      {selectedUser ? (
        <ChatWindow
          user={selectedUser}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Select a user to start chatting</p>
        </div>
      )}
    </div>
  );
};

export default AdminChatSection;
