import React, { useEffect } from "react";
import { GETAPI } from "../service/api";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";
const useGetOtherUsers = () => {
    
    const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const response = await GETAPI("/auth");
        // setOtherUsers(response.users);
        dispatch(setOtherUsers(response.users));
      } catch (error) {
        console.error(error);
      }
    };

    fetchOtherUsers();
  }, [dispatch]);
//   return [otherUsers, setOtherUsers];
};

export default useGetOtherUsers;
