import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const userRegister = async (req, res) => {
    try {
        const {fullname, username, email, password,confirmPassword , gender} = req.body;

        if (!fullname || !username || !email || !password || !confirmPassword || !gender) {
            return res.status(400).json({message: "All fields are required",});
        }


        if (password !== confirmPassword) {
            return res.status(400).json({message: "Password do not match"});
        }

        const user = await User.findOne({$or: [{email: email}, {username: username}]});
        if (user) {
            return res.status(400).json({message: "User already exist"});
        }

        const hashPassdord = await bcrypt.hash(password, 10);
        
       
        const mailProfile= `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femailProfile= `https://avatar.iran.liara.run/public/girl?username=${username}`;


         
        await User.create({
            fullname,
            username,
            email,
            password: hashPassdord,
            gender,
            avatar: gender === "male" ? mailProfile : femailProfile
        });


        return res.status(201).json({message: "User created successfully"});
    } catch (error) {
        console.log('User create error', error);
        
        throw new Error("Something went wrong");
        
    }
}