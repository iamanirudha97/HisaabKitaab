const express = require("express");
const userRouter = express.Router();
const { registerUser, loginUser, getAllUsers, deleteUser, updateUser, getOneUserDetails } =  require("../controllers/userController");
const { verifyToken } = require("../middlewares/userAuthenticationJWT");
//Create Users - First Name, Last Name, Username, email, bcrypt password
userRouter.post("/register", registerUser);

//update user -> first name, last name, username, email, password;
userRouter.put("/updateUserInfo/",verifyToken, updateUser);

//get all users from database
userRouter.get("/users", getAllUsers);

//get single user details by id
userRouter.get("/getOneUserDetails/:userId", getOneUserDetails)

//delete a user by ID
userRouter.delete("/deleteUser/:userId", deleteUser);

//login route
userRouter.post("/login", loginUser);

module.exports = userRouter;