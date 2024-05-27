import express from 'express'
import connectDb from './config/db.js'
import routes from './routes/user.js'
const app = express()
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
