import express from 'express'
import mongoose from 'mongoose'
import connectDb from './config/db.js'
import routes from './routes/index.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:5173' }))
connectDb()

app.use(routes)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('`port` is runing at http://localhost:300'))
