import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";
const MessageContainar = () => {
  const {selectedUser} = useSelector((state) => state.authR);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-black/50">
        <div>
          <div className="avatar avatar-online">
            <div className="w-10 rounded-full">
              <img
                src={selectedUser?.avatar}
                loading="lazy"
                alt="avatar"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-white">{selectedUser?.fullname}</p>
        </div>
      </div>

      {/* content */}
      <Messages/>

     <SendInput/>
    </div>
  );
};

export default MessageContainar;
