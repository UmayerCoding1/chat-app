import axios from "axios";


const baseURL = axios.create({
    baseURL: "http://localhost:3001/api",
    withCredentials: true
});


const POSTAPI = async (url, body) => {
    console.log(url, body);
    try {
        const response = await baseURL.post(url, body);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const GETAPI = async (url) => {
    try {
        const response = await baseURL.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export { POSTAPI , GETAPI };