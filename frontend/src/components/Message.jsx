import React, { useEffect, useRef } from "react";

const Message = ({message}) => {
  const scroll = useRef(null);
  useEffect(() => {
 scroll.current.scrollIntoView({ behavior: "smooth" });
  },[message])
  return (
    <div ref={scroll} className="flex-1">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
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
