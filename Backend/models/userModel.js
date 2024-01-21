const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: [true, "Please Enter a valid username"],
        unique: false,
    },

    email: {
        type: String,
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
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt)
    this.password = hash;
    next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;