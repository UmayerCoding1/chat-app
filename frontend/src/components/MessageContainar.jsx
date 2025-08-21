import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
const MessageContainar = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-black/50">
        <div>
          <div className="avatar avatar-online">
            <div className="w-10 rounded-full">
              <img
                src="https://avatar.iran.liara.run/public"
                loading="lazy"
                alt="avatar"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-white">Umayer Hossain</p>
        </div>
      </div>

      {/* content */}
      <Messages/>

     <SendInput/>
    </div>
  );
};

export default MessageContainar;
