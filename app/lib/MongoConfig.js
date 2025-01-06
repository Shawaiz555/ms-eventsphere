import mongoose from "mongoose";

const { MONGO_DB_URL} = process.env;
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_DB_URL);
    if (connection.readyState === 1)
    {
      console.log("Connected to MongoDB");
      return Promise.resolve(true);
    }
  } 
  catch (error)
  {
    console.log(error);
    return Promise.reject(error);
  }
};
