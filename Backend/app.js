import express from "express";
import userRouter from "./routes/routes.js";
const app = express();
app.use(express.json()); //using middleware to access json data
app.listen(3000, ()=> {
  console.log("The server is running on PORT #3000")
})


app.use('/user', userRouter);
