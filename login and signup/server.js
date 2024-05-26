import express from 'express'
import connectDb from './config/db.js'
import routes from './routes/user.js'
const app = express()
app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3000
connectDb()





app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
