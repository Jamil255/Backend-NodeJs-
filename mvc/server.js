import express from 'express'
import connectDb from './config/db.js'
const app = express()
const PORT = 3000
connectDb()

app.get('/', (req, res) => {
  res.json({
    message: 'data fetch error',
    status: false,
  })
})

app.listen(PORT, (req, res) => {
  console.log(`server listening on ${PORT}`)
})
