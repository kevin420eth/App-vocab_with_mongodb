import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export default async function connect() {
    console.log("Database Connected!")
    try {
        await mongoose.connect(process.env.URL)
    }catch(e){
        console.log("Something went wrong...")
        console.log(e.message)
    }
}