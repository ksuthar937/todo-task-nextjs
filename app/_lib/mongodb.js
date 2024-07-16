import mongoose from "mongoose";

export default function mongooseConnection() {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connection Successfull");
  } catch (error) {
    console.log(error);
  }
}
