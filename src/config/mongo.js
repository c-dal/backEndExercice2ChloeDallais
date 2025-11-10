import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const initMongo = async () => {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
