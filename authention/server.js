import express from 'express'
import { connectDb } from './config/db.js'
import route from './routes/index.js'
const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(route)
connectDb()

app.listen(PORT, (req, res) => {
  console.log(`listening on http://localhost: ${PORT}`)
})
