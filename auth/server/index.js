import express from 'express'
import mongoose from 'mongoose'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3000
const connectDb = async () => {
  try {
    const conn = await mongoose.connect()
    console.log(conn.connection.host)
  } catch (error) {
    console.log(error)
  }
}
connectDb()
app.listen(PORT, () => console.log('`port` is runing at http://localhost:300'))
