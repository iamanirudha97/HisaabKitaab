import { User } from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const SECRET = 'SECr3t'; // This should be in an environment variable in a real application

async function loginUser(email){
        const user = await User.findOne({email});
        if(user){  
            //user is verified so generate a token here
            const token = jwt.sign({userId: user._id}, SECRET);
            console.log("Logged in as:", user.email, user._id);
            return {user, token};
        } else {
            return null;
        }  
};

export default loginUser;