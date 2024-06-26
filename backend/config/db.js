import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}.red.bold`);
    process.exit();
  }
};

export default connectDB;
