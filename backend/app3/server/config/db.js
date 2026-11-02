import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
    try {
        console.log("Database is connecting...")
        
        const dbURL = process.env.MONGODB_URL
        const db = await mongoose.connect(dbURL)
        if (db) {
            console.log("Database is connected: ", db.connection.name)
        } else {
            console.log("Failed to connect database")
        }
    } catch (error) {
        console.log("Failed to connect database")
        console.log(error)
    }
}