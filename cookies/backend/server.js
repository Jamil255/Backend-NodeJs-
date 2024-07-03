import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)
app.use(cookieParser())

app.post('/addname', (req, res) => {
  try {
    console.log(req.body)
    // const { name } = req.body
    // console.log(name)
    res
      .status(201)
      .cookie('post', 'jamiljsjdjdjd', {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      })
      .send('post request')
  } catch (error) {
    console.log(error.message)
  }
})
app.get('/', (req, res) => {
  try {
    res
      .status(201)
      .cookie('jwt-token', 'jamiljsjdjdjd', {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      })
      .send('jwt-token')
  } catch (error) {}
})
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
