import mongoose from "mongoose";
import "dotenv/config";


export const connectDB = () => {
    mongoose.connection.on("connected", () => console.log("DB connected"));
  
    mongoose.connection.on("error", (error) => console.log("DB Error", error));
  
    return mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
  };
