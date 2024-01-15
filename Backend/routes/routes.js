import { Router } from "express";
import { deleteUser, getAllUsers, registerUser, updateUser } from "../controllers/userController.js";

const userRouter = Router();
//Create Users - First Name, Last Name, Username, email, bcrypt password
userRouter.post("/register", registerUser);

//update user - first name, last name, username, email, password;
userRouter.put("/updateUserInfo/:email", updateUser);

//get all users from database
userRouter.get("/users", getAllUsers);

//delete a user by email
userRouter.delete("/deleteUser/:email", deleteUser);

//login route

export default userRouter;