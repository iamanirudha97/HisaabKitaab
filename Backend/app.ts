import express from "express";
const cors = require('cors')
import userRouter from "./routes/routes";
import connectToDatabase from "./database/connection";

const app = express();

//cors template 
var allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(express.json()); //using middleware to access json data
app.listen(3000, ()=> {
  console.log("The server is running on PORT #3000")
})


app.use('/user', userRouter);
connectToDatabase().catch((e => console.log(e)));