import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log("mongoDb connected", connectionInstance.connection.host);
       
       
    }
    catch (error) {
        console.log("mongoDb connection error", error);
        process.exit(1);

    }
    
}

export default connectDb;
