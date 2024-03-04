//mongodb+srv://sagarlm97:7DrFza1SBqs7IrAF@cluster0.yioapxi.mongodb.net/

import mongoose from 'mongoose';

const connectToDatabase = async() => {
    try {
        await mongoose.connect("mongodb+srv://sagarlm97:7DrFza1SBqs7IrAF@cluster0.yioapxi.mongodb.net/",
        // { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" } mongodb+srv://sagarlm97:<password>@cluster0.yioapxi.mongodb.net/
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

export default connectToDatabase;