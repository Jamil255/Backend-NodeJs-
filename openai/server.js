import express from 'express'
import routes from './routes/index.js'
const app = express()
const PORT = process.env.PORT || 3000
app.use(routes)
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
