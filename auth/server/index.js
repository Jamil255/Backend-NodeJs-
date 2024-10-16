import express from 'express'
import mongoose from 'mongoose'
import connectDb from './config/db.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDb()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('`port` is runing at http://localhost:300'))
