import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUsers();
  const otherUsers = useSelector((state) => state.authR.otherUsers);

  if (!otherUsers) {
    return <div>Loading...</div>;
  }
  return (
    <div className="overflow-y-scroll scrollbar-hide flex-1">
      {otherUsers.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
