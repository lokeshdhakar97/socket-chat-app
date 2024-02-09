import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI!);

    if (connection.readyState == 1) {
      console.log("Connected to MONGODB");

      return Promise.resolve(true);
    }
  } catch (error) {
    console.log("Erro connecting to database: ", error);
    return Promise.reject(error);
  }
};

export default connectMongoDB;
