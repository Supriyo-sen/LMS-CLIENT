import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Paperclip } from "lucide-react";

const ChatWindow = ({
  user,
  messages,
  onSendMessage,
  newMessage,
  setNewMessage,
}) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    onSendMessage();
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-50 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-100 border-b">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <Badge className="bg-green-500">{user.type}</Badge>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.isAdmin ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.isAdmin
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              } shadow-md`}
            >
              <p>{msg.text}</p>
              <span
                className={`text-xs mt-1 block ${
                  msg.isAdmin ? "text-blue-200" : "text-gray-500"
                }`}
              >
                {new Date().toLocaleTimeString()}
                {msg.isRead && (
                  <span className="ml-1 text-blue-600">✔</span>
                )}{" "}
                {/* Blue tick */}
              </span>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </ScrollArea>

      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" className="shrink-0">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} className="shrink-0">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
