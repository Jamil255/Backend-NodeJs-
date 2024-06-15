import express from 'express'
import connectDb from './config/db.js'
import routes from './routes/user.js'
import cors from 'cors'
// import cookiesParser from 'cookie-parser'
const app = express()
connectDb()
app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
// app.use(cookiesParser())
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
