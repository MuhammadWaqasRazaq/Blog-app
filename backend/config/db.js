import mongoose from "mongoose";
import dns from "dns";

dns.setServers(['8.8.8.8','1.1.1.1']);


 const connectDB = async () => {
  try {

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    await mongoose.connect(`${process.env.MONGO_URI}/quickblog`)
}
    catch (error) {
        console.error("Error connecting to MongoDB:", error);     
     }        
     
};

export default connectDB;