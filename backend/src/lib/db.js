import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    const connection = conn.connection.host;
    console.log(connection);
  } catch (error) {
    console.error("Error connection to MONGODB", error);
    process.exit(1); // 1 status code means fail, 0
  }
};
