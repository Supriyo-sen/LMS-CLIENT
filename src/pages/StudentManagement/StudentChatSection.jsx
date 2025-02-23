import React, { useState, useEffect, useRef } from "react";
import { useFetchAllUsersQuery } from "@/redux/slices/adminSlice";
import {
  useSendMessageMutation,
  useAccessChatMutation,
  useAllMessagesQuery,
  useMarkMessagesAsReadMutation,
} from "@/redux/slices/chatSlice";
import io from "socket.io-client";
import ChatWindow from "@/components/Admin/Chat/ChatWindow";
import UserList from "@/components/Student/Chat/UserList";
import { useGetUserProfileQuery } from "@/redux/slices/userSlice";

let selectedChatCompare;

const StudentChatSection = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [notification, setNotification] = useState([]);
  const socket = useRef(null);
  const typingTimeoutRef = useRef(null);
  const { data: user, isError } = useGetUserProfileQuery();
  const { data: users, isLoading, error } = useFetchAllUsersQuery();
  const [markMessagesAsRead] = useMarkMessagesAsReadMutation();
  const [accessChat, { data: chatData }] = useAccessChatMutation();
  const { data: allMessages } = useAllMessagesQuery(chatData?._id, {
    skip: !chatData?._id,
  });

  const [sendMessage, { isLoading: sendMessageLoading }] =
    useSendMessageMutation();

  const filteredUsers = users?.filter((u) => u._id !== user?._id);

  // Initialize socket connection
  useEffect(() => {
    if (user && !socket.current) {
      socket.current = io("http://localhost:5000");
      socket.current.emit("setup", user);

      socket.current.on("connected", () => {
        console.log("Socket connected:", socket.current.id);
      });
      console.log("Notification", notification);

      socket.current.on("message received", (newMessageRecieved) => {
        if (
          selectedChatCompare &&
          selectedChatCompare._id !== newMessageRecieved.chat._id
        ) {
          if (!notification.includes(newMessageRecieved)) {
            setNotification([newMessageRecieved, ...notification]);
          }
        } else {
          setMessages((prevMessages) => [...prevMessages, newMessageRecieved]);
        }
      });

      socket.current.on("typing", () => {
        setIsTyping(true);
      });

      socket.current.on("stop typing", () => {
        setIsTyping(false);
      });

      return () => {
        socket.current.disconnect();
        socket.current = null; // Reset socket on unmount
      };
    }
  }, [user]);

  // Handle joining chat room when chatData changes
  useEffect(() => {
    if (chatData?._id && socket.current) {
      socket.current.emit("joinRoom", chatData._id);
      selectedChatCompare = chatData;
    }

    return () => {
      if (socket.current && chatData?._id) {
        socket.current.emit("leaveRoom", chatData._id);
      }
    };
  }, [chatData]);

  useEffect(() => {
    if (selectedUser) {
      setMessages([]);
      accessChat(selectedUser._id).then((response) => {
        if (response.data?.messages) {
          setMessages(response.data.messages);
        }
      });
    }
  }, [selectedUser]);

  // Set messages when new messages arrive
  useEffect(() => {
    if (allMessages) {
      setMessages(allMessages);
    }
  }, [allMessages]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("message seen", ({ chatId, messageIds, readerId }) => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            messageIds.includes(msg._id) && msg.sender._id !== readerId
              ? { ...msg, isRead: true }
              : msg
          )
        );
      });
    }

    return () => {
      if (socket.current) {
        socket.current.off("message seen");
      }
    };
  }, []);

  const handleSelectUser = async (user) => {
    setSelectedUser(user);

    try {
      const response = await accessChat(user._id).unwrap();

      if (response) {
        const chatId = response._id;

        // Trigger real-time update via socket immediately when the recipient opens the chat
        if (socket.current) {
          socket.current.emit("message seen", { chatId, userId: user._id });
        }

        // Ensure API also marks messages as read
        await markMessagesAsRead({ chatId, userId: user._id });
      }
    } catch (error) {
      console.error("Error accessing chat:", error);
    }
  };

  const handleSendMessage = async () => {
    if ((!newMessage.trim() && !selectedFile) || !selectedUser || !user) {
      return;
    }

    const formData = new FormData();
    formData.append("chatId", chatData?._id);
    formData.append("receiver", selectedUser._id);
    if (newMessage.trim()) {
      formData.append("content", newMessage);
      formData.append("type", "text");
    }

    if (selectedFile) {
      formData.append("media", selectedFile);

      // Automatically determine the type based on the file MIME type
      const fileType = selectedFile.type.split("/")[0];
      formData.append(
        "type",
        fileType === "image"
          ? "image"
          : fileType === "video"
          ? "video"
          : "audio"
      );
    }

    if (audioBlob) {
      formData.append("media", audioBlob);
      formData.append("type", "audio");
    }

    try {
      const response = await sendMessage(formData).unwrap();

      setNewMessage("");
      setSelectedFile(null); // Clear the selected file after sending
      socket.current.emit("new message", response);
      setMessages((prevMessages) => [...prevMessages, response]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleTyping = (e) => {
    const value = e.target.value; // Get the value from the event
    setNewMessage(value);

    if (!typing) {
      setTyping(true);
      socket.current.emit("typing", chatData?._id);
    }

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      socket.current.emit("stop typing", chatData?._id);
      setTyping(false);
    }, 3000);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users: {error?.message}</div>;

  return (
    <div className="flex h-full">
      <UserList users={filteredUsers} onSelectUser={handleSelectUser} />
      {selectedUser ? (
        <ChatWindow
          user={selectedUser}
          messages={messages}
          onSendMessage={handleSendMessage}
          newMessage={newMessage}
          setNewMessage={handleTyping}
          isTyping={isTyping}
          setSelectedFile={setSelectedFile}
          isLoading={sendMessageLoading}
          // for audio messages
          audioBlob={setAudioBlob}
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
