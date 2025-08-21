import React from "react";
import Sidebar from "./Sidebar";
import MessageContainar from "./MessageContainar";
const HomePage = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 sm:h-[450px] mg:[550px] ">
      <Sidebar />
      <MessageContainar/>
    </div>
  );
};

export default HomePage;
