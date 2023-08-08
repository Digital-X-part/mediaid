import { connect, connection } from "mongoose";

const connectDb = async () => {
  try {
    await connect(process.env.MONGO_URI);
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDb;
