import express from 'express'
import connectDb from './config/db.js'
import { cloudinaryConfig } from './config/cloudinaryConfig.js'
import routes from './routes/index.js'
const app = express()
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)
const PORT = process.env.PORT || 3000
cloudinaryConfig()
app.listen(PORT, (error, res) => {
  console.log(`list on port ${PORT}`)
})
