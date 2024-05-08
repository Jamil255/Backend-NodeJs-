import express from 'express'
import route from './routes/index.js'
import connectDb from './config/db.js'
import StaticRouter from './routes/StaticRoute.js'
import path from 'path'
const app = express()
const PORT = 3000
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(route)
app.use(StaticRouter)
app.listen(PORT, (err, res) => {
  console.log(`listening on ${PORT}`)
})
