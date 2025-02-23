import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Paperclip, CheckCheck, Circle } from "lucide-react";
import ShowImage from "@/components/common/ShowImage";

const ChatWindow = ({
  user,
  messages,
  onSendMessage,
  newMessage,
  setNewMessage,
  isTyping,
  setSelectedFile,
  isLoading,
  audioBlob,
}) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    onSendMessage();
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-50 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-100 border-b">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3 bg-blue-500">
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>

            {isTyping ? (
              <Badge className="bg-gray-500">Typing...</Badge>
            ) : (
              <Badge className="bg-green-500">{user.role}</Badge>
            )}
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender?.role === "admin" ? "justify-end" : "justify-start "
            } mb-4`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.sender?.role === "admin" ? "bg-lime-400" : "bg-red-400"
              }  shadow-md`}
            >
              {msg.type === "text" && <p>{msg.content}</p>}

              {msg.type === "image" && (
                <ShowImage src={msg.media} alt={`Image sent by ${user.name}`} />
              )}
              {msg.type === "video" && (
                <video src={msg.media} controls className="max-w-full" />
              )}
              {msg.type === "audio" && (
                <audio src={msg.media} controls className="max-w-full" />
              )}
              <span className="text-xs mt-1 block">
                <CheckCheck
                  color={`${msg.isRead ? "blue" : "gray"}`}
                  className="h-3 w-3 inline"
                />
              </span>
            </div>
          </div>
        ))}

        <div ref={chatEndRef} />
      </ScrollArea>

      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" className="shrink-0">
            <label>
              <Paperclip className="h-4 w-4" />
              <input
                type="file"
                multiple
                accept="image/*,audio/*,video/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </Button>

          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          {isLoading ? (
            <Button variant="outline" size="icon" className="shrink-0">
              <Circle className="animate-spin h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSend} className="shrink-0">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
