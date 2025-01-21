import React, { useState, useEffect } from "react";
import { useFetchAllUsersQuery } from "@/redux/slices/adminSlice";
import { useGetChatHistoryQuery } from "@/redux/slices/chatSlice";
import io from "socket.io-client";
import ChatWindow from "@/components/Admin/Chat/ChatWindow";
import UserList from "@/components/Student/Chat/UserList";

const StudentChatSection = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const { data: users, isLoading, error } = useFetchAllUsersQuery();

  useEffect(() => {
    const socketInstance = io("http://localhost:5000");
    setSocket(socketInstance);

    socketInstance.on("receive_message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const {
    data: chatHistory,
    refetch,
    isFetching,
  } = useGetChatHistoryQuery(selectedUser?._id || "", {
    skip: !selectedUser,
  });

  useEffect(() => {
    if (chatHistory) {
      setMessages(chatHistory);
    }
  }, [chatHistory]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    if (!isFetching) {
      refetch();
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      socket.emit("send_message", {
        roomId: selectedUser._id,
        content: newMessage,
        sender: "student",
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, isAdmin: false, isRead: false },
      ]);
      setNewMessage("");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users: {error.message}</div>;

  return (
    <div className="flex h-full">
      <UserList users={users} onSelectUser={handleSelectUser} />
      {selectedUser ? (
        <ChatWindow
          user={selectedUser}
          messages={messages}
          onSendMessage={handleSendMessage}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Select a user to start chatting</p>
        </div>
      )}
    </div>
  );
};

export default StudentChatSection;
