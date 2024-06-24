import mongoose from "mongoose";


let isConnected = false;
let connection = null;


const dbConnect = async () => {
    try {
        if (isConnected) return connection
        connection = await mongoose.connect(String(process.env.MONGODB_URI));
        isConnected = true;
        return connection
    } catch (e) {
        console.error(e);
    }
}

export default dbConnect; 