import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const  connectDB = async () =>{
const url=process.env.MONGO_DB;
    await mongoose.connect(url).then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
