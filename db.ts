import mongoose from "mongoose";

const MONGO_URI: string | undefined = process.env.MONGO_URI || "mongodb://localhost:27017/events";

const connDB = async (): Promise<void> => {
  try {
    if (!MONGO_URI) throw new Error("MongoDB URI is not provided.");
    await mongoose.connect(MONGO_URI);
    console.log("Database connected");
  } catch (err: any) { 
    console.error((err as Error).message); 
  }
};

export default connDB;
