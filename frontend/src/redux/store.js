import {configureStore} from "@reduxjs/toolkit";
import authReducer from './userSlice'
const store = configureStore({
    reducer: {
        authR: authReducer
    }
})

export default  store