import { User } from "../models/userModel";
// import authService from "../services/authService";

//add a new user to the database
const registerUser = async(req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        console.log(existingUser);
        if(existingUser){
            return res.status(409).json({message: "User already registered in the database"});
        } else {
            const user = await User.create({
                username,
                email,
                password
            });
            res.status(201).json({message: "User registered successfully", user});
        }  
    } catch (error) {
        res.status(400).json({message: error.message});
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
        const allowedFields = ['username', 'password']
        const filteredFields = Object.keys(req.body).filter( e =>  !allowedFields.includes(e))

        if(filteredFields.length !== 0) {
            res.status(400).json({ message: "INCORRRECT FIELD!, Only Username and passwords allowed"});
            return;
        }

        const userId = req.params.userId
        const { username, password } = req.body
        await User.findOne({ _id: userId }).then( async(user) => {
            user.username = username,
            user.password = password
            await user.save()
            .then((userdata) => {
                return res.status(200).json({ message: "User updated successfully", userdata })
            })
            .catch( err => {
                return res.status(404).json({ message: "User not found" });
            })
        })
        
    } catch (error) {
        res.status(400).json({message: error.message});
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
    } catch (error) {
        res.status(400).json({ message : error.message});
    }
};


//login {this will be a post request}
// const loginUser = async(req, res) => {
//     try {
//         const { email } = req.body;
//         const user = await authService.loginUser(email);
//         if(!user){
//             res.status(404).json({message: "Invalid User details"});
//         } else {
//             //modify according to future user// DO NOT SEND PASSWORD OVER RESPONSE token: user.token
//             return res.status(200).json({ message: "User logged in successfully", user});
//         }  
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// };

export { 
    deleteUser,
    updateUser, 
    getAllUsers, 
    registerUser, 
    // loginUser, 
    getOneUserDetails, 
};