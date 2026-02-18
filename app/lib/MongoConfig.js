import mongoose from "mongoose";

const { MONGO_DB_URL } = process.env;

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return Promise.resolve(true);
  }
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log("Connection established with MongoDB...");
    return Promise.resolve(true);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
