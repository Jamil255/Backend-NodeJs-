import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import connectDb from './config/db.js'
import { cloudinaryConfig } from './config/cloudinaryConfig.js'
const app = express()
const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: '*',
  })
)
connectDb()
app.use(routes)
cloudinaryConfig()
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
