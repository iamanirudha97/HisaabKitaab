import mongoose from "mongoose";
import bcrypt from "bcrypt";

let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please Enter a valid username"],
        unique: false,
    },

    email: {
        type: String,
        match: /.+\@.+\..+/,
        required: [true, "Please enter a valid email"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Please enter a valid password"],
        validate: {
            validator: function(v){
                return regExPassword.test(v);
            }, 
            message: `Must include atleast one uppercase, one lowercase, one number and one special character and 8 characters long`
        },
    },
},
    {
        timestamps : true
    }
);

userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash;
    next();
});

export const User = mongoose.model("user", userSchema);
