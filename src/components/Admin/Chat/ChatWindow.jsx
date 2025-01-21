import React, { useState, useEffect, useRef } from "react";

const ChatWindow = ({ user, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <span className="ml-4 text-gray-500">{user.type}</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 ${msg.isAdmin ? "text-right" : "text-left"}`}
          >
            <p
              className={`inline-block p-2 rounded ${
                msg.isAdmin
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
