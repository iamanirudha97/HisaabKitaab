import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

const userRouter = Router();
//Create Users
userRouter.post("/register", registerUser);

export default userRouter;