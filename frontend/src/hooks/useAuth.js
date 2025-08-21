import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GETAPI } from "../service/api";
import { setUser } from "../redux/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleUser = async () => {
      try {
        const response = await GETAPI("/auth/loggedin-user");
        dispatch(setUser(response.user));
      } catch (error) {
        console.log(error);
      }
    };

    handleUser();
  }, [dispatch]);
};

export default useAuth;
