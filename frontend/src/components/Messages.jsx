import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
import { X } from "lucide-react";

const Messages = () => {
  useGetMessages();
  const { messages } = useSelector((state) => state.messageR);

  if (!messages) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
        <button className="bg-gray-300 p-2 rounded-full opacity-40">
          <X />
        </button>
        <p>No messages</p>
      </div>
    );
  }

  return (
    <div className="flex-1 px-4 overflow-scroll scrollbar-hide">
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
