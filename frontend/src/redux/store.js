import {configureStore} from "@reduxjs/toolkit";
import authReducer from './userSlice';
import messageReducer from './messagesSlice';
const store = configureStore({
    reducer: {
        authR: authReducer,
        messageR: messageReducer
    }
})

export default  store