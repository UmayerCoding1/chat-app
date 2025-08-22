import { SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import { POSTAPI } from "../service/api";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messagesSlice";


const SendInput = () => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useSelector((state) => state.authR);
  const {messages} = useSelector((state) => state.messageR);
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await POSTAPI(`/message/send/${selectedUser._id}`, { message });
      if(response.message){
        setMessage("");
        dispatch(setMessages([...messages, response.newMessage]));
      }
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="w-full relative">
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="border text-sm rounded-lg block w-full bg-gray-600 text-white py-3 px-2 "
          type="text"
          name=""
          placeholder="Send a message"
        />

        <button
          type="submit"
          className="absolute top-2 right-2 text-white cursor-pointer"
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
