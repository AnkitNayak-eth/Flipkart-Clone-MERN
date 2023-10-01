import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
    const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.koyikz1.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected');
    } catch(error) {
        console.log(`Error while connecting with the database`, error.message);
    }
}

export default Connection;