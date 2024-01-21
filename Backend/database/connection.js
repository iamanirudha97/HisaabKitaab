//mongodb+srv://sagarlm97:7DrFza1SBqs7IrAF@cluster0.yioapxi.mongodb.net/

const mongoose = require('mongoose');

const connectToDatabase = async() => {
    try {
        await mongoose.connect("mongodb+srv://sagarlm97:7DrFza1SBqs7IrAF@cluster0.yioapxi.mongodb.net/",
        // { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" }
        {
           dbName: "HisaabKitaab" 
        })
        .then(() => {
            console.log("Connected to the MongoDB Database");
        }).catch((e => console.log(e)));
        
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        throw error;
    }
};

module.exports = connectToDatabase;