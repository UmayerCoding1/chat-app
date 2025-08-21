import { SendHorizonal } from "lucide-react";
import React from "react";

const SendInput = () => {
  return (
    <form>
      <div className="w-full relative">
        <input className="border text-sm rounded-lg block w-full bg-gray-600 text-white py-3 px-2 " type="text" name="" placeholder="Send a message" />


        <button className="absolute top-2 right-2 text-white cursor-pointer">
            <SendHorizonal size={18}  /> 
        </button>
      </div>
    </form>
  );
};

export default SendInput;
