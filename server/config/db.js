const mongoose = require("mongoose")

const connectDB = async () => {
    return mongoose.connect("mongodb+srv://combsuser:Doctormasx2002@cluster0.vnjz1rp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.Consolelog(`database connected...`))
    .catch((err) => console.log(err));
};


// import mongoose, { connect } from "mongoose";
// import dotenv from 'dotenv'
// dotenv.config({path: "./config/.env"})

// const ConnectDB = async () => {
//     try {
//         await mongoose.connect(process.env.URI)
//         console.log("Database Connected Successfully")
//     } catch(err) {
//         console.log("Error: " + err.message)
//     }
// }

connectDB()

module.exports = connectDB;