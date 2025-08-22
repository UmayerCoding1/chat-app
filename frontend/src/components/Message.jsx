import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({message}) => {
  const { user } = useSelector((state) => state.authR);
 const {selectedUser} = useSelector((state) => state.authR);
  const scroll = useRef(null);
  useEffect(() => {
 scroll.current.scrollIntoView({ behavior: "smooth" });
  },[message]);


  return (
    <div ref={scroll} className="flex-1">
      <div className={`${user._id === message.senderId ? "chat chat-end" : "chat chat-start" }`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={message.senderId === user._id ? user?.avatar : selectedUser?.avatar}
            />
          </div>
        </div>
        <div className="chat-header">
         
          <time className="text-xs text-white">12:45</time>
        </div>
        <div className="chat-bubble">{message.message}</div>
       
      </div>
     
    </div>
  );
};

export default Message;
