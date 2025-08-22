import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft } from "lucide-react";
import { setSelectedUser } from "../redux/userSlice";
const MessageContainar = () => {
  const {selectedUser,user} = useSelector((state) => state.authR);
  const dispatch = useDispatch();
  return (
   <>
   {selectedUser ?  <div className="md:min-w-[450px] flex flex-col">
      <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-black/50">
      <ChevronLeft onClick={() => {
         dispatch(setSelectedUser(null));
      }} className="text-black bg-white rounded-full w-8 h-8" size={13} />
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
    </div> : 
    <div className="md:min-w-[450px] flex flex-col items-center justify-center">
  
    <h2 className="text-2xl font-medium">Hi, {user?.fullname}</h2>
    <p className="text-sm">Lest's start a conversation</p>
    </div>
     }
   </>
  );
};

export default MessageContainar;
