import {Schema,model} from "mongoose";


const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "" 
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    }
}, {timestamps: true});

export const User =  model('User', userSchema); 