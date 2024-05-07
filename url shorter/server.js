import express from 'express'
import route from './routes/index.js'
const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(route)

app.listen(PORT, (err, res) => {
  console.log(`listening on ${PORT}`)
})
