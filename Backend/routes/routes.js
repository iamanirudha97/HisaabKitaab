import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

const userRouter = Router();
//Create Users - First Name, Last Name, Username, email, bcrypt password
userRouter.post("/register", registerUser);
//login route

export default userRouter;