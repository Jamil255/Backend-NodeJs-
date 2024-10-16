import mongoose from 'mongoose'
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://jamilafzal255:72N7hySyfAHyuqaK@cluster0.dgtlile.mongodb.net/'
    )
    console.log(conn.connection.host)
  } catch (error) {
    console.log(error.message)
  }
}
export default connectDb
