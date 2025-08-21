
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
    // const user = useSelector(state => state.authR.user);
   
    // if (!user) {
    //    return window.location.href = "/signin";
    // }
    return children;
};

export default PrivetRoute;