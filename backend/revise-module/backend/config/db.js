import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Database is connecting...")
        
        const db_url = "mongodb+srv://pnymeet_db_user:dWL76Wec2j4UN1Ga@cluster0.dbneb0b.mongodb.net/revise_db?appName=Cluster0"
        const db = await mongoose.connect(db_url)
        if(db) {
            console.log("Database is connected", db.connection.name)
        } else {
            console.error("Failed to connect database")
        }
    } catch (error) {
        console.log(error)
    }
}

export default connectDB