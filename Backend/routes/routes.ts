import express from "express";
import { registerUser, getAllUsers, deleteUser, updateUser, getOneUserDetails } from "../controllers/userController";
import { verifyToken } from "../middlewares/userAuthenticationJWT";
const userRouter = express.Router();

//User Controller Routes
userRouter.post("/register", registerUser);

//update user -> first name, last name, username, email, password;
userRouter.put("/updateUserInfo/:userId", updateUser);

//get all users from database
userRouter.get("/users", getAllUsers);

//get single user details by id
userRouter.get("/getOneUserDetails/:userId",verifyToken ,getOneUserDetails)

//delete a user by ID
userRouter.delete("/deleteUser/:userId",verifyToken, deleteUser);

//login route
// userRouter.post("/login", loginUser);

export default userRouter;