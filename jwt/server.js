import express from 'express'
import connectDb from './config/db.js'
import route from './routes/user.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDb()
app.use(route)

app.listen(process.env.PORT, (error, response) => {
  console.log(`listening on ${process.env.PORT}`)
})
