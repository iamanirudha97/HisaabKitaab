const express = require("express");
const userRouter = require("./routes/routes");
const connectToDatabase = require("./database/connection");

const app = express();
app.use(express.json()); //using middleware to access json data
app.listen(3000, ()=> {
  console.log("The server is running on PORT #3000")
})


app.use('/user', userRouter);
connectToDatabase().catch((e => console.log(e)));