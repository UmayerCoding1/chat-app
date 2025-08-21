import React, { useEffect } from 'react';
import { GETAPI } from '../service/api';

const useGetMessages = (id) => {
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await GETAPI(`/message/${id}`);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMessages();
    },[id])
};

export default useGetMessages;