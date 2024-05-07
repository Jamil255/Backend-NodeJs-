import express from 'express'
import connectDb from './config/db.js'
import route from './routes/index.js'
const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDb()
app.use(route)
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})
