// src/pages/Chat.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Chat = () => {
  const conversations = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      lastTime: "10:00 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Let’s meet tomorrow!",
      lastTime: "9:30 AM",
    },
  ];

  const messages = [
    { id: 1, text: "Hi there!", sender: "me" },
    { id: 2, text: "Hello! How can I help you?", sender: "other" },
  ];

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Mock sending a message
      console.log("Message sent:", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with conversations */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Conversations</h2>
        <ul className="space-y-4">
          {conversations.map((conv) => (
            <li
              key={conv.id}
              onClick={() => setSelectedConversation(conv)}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedConversation?.id === conv.id
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
            >
              <h3 className="font-semibold">{conv.name}</h3>
              <p className="text-sm text-gray-600 truncate">
                {conv.lastMessage}
              </p>
              <span className="text-xs text-gray-500">{conv.lastTime}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat window */}
      <main className="flex-1 bg-white shadow-md p-4 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="border-b pb-4 mb-4">
              <h2 className="text-xl font-bold">{selectedConversation.name}</h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-xs p-2 rounded-lg ${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="mt-4 flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center flex-1 flex items-center justify-center">
            Select a conversation to start chatting.
          </p>
        )}
      </main>
    </div>
  );
};

export default Chat;
