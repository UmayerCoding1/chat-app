import React, { useEffect } from "react";
import { GETAPI } from "../service/api";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messagesSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((state) => state.authR);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await GETAPI(`/message/${selectedUser?._id}`);

        if (response.messages) {
          dispatch(setMessages(response.messages));
        }
      } catch (error) {
        console.log(error);
        dispatch(setMessages(null));
      }
    };

    fetchMessages();
  }, [selectedUser, dispatch]);
};

export default useGetMessages;
