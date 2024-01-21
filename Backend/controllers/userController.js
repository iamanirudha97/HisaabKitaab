const User = require("../models/userModel");  
const authService = require("../services/authService")

//add a new user to the database
const registerUser = async(req, res) => {
    const {userName, email, password} = req.body;
    try {
        const existingUser = await User.findOne({$or: [{userName} , {email}]});
        if(existingUser){
            return res.status(409).json({message: "User already registered in the database"});
        } else {
            const user = await User.create({
                userName,
                email,
                password
            });
            res.status(201).json({message: "user registered successfully", user});
        }  
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//get all users database
const getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json({ message:  allUsers});
    } catch (error) {
        res.status(500).json({ message: "DATABASE ERROR"})
    }
};

const getOneUserDetails = async(req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findOne({_id : userId});
        res.status(200).json({ UserData: user});
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

//update user information
const updateUser = async(req, res) => {
    try {
        // console.log("inside updateUser controller from verify",);
        const {userName, email, password} = req.body;
        // await User.find({email}).then();
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//delete user
const deleteUser = async(req, res) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndDelete({ _id : userId})
        .then(() => {
            res.status(200).json({ message: "User deleted Successfully"})
        })
        .catch((e) => { 
            res.status(404).json({message: "User not found"})
        });
        // console.log("inside delete user call", userId);    
    } catch (error) {
        res.status(400).json({ message : error.message});
    }
};


//login {this will be a post request}
const loginUser = async(req, res) => {
    try {
        const {userName, password} = req.body;
        const user = await authService.loginUser(userName, password);
        if(!user){
            res.status(404).json({message: "Invalid UserName or Password"});
        } else {
            //modify according to future user// DO NOT SEND PASSWORD OVER RESPONSE token: user.token
            return res.status(200).json({ message: "User logged in successfully", user});
        }  
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = { 
    deleteUser,
    updateUser, 
    getAllUsers, 
    registerUser, 
    loginUser, 
    getOneUserDetails, 
};
//create group 