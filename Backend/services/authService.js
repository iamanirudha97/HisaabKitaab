const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET = 'SECr3t'; // This should be in an environment variable in a real application

async function loginUser(userName, password){
        const user = await User.findOne({userName});
        const passwordMatched = await bcrypt.compare(password, user.password);
        if(user && passwordMatched){
            
            //user is verified so generate a token here
            const token = jwt.sign({userId: user._id}, SECRET);

            // console.log("Logged in as:", user.email, user._id);
            return {user, token};
        } else {
            return null;
        }  
};

module.exports = {
    loginUser
}