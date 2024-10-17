import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.Uri)
    console.log(conn.connection.host)
  } catch (error) {
    console.log(error.message)
  }
}
export default connectDb
