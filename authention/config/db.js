import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    console.log(`Connecting to${conn.connection.host}`)
  } catch (error) {
    console.log(error.message)
  }
}
