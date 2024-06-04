import express from 'express'
import fs from 'fs'
import status from 'express-status-monitor'
const app = express()
app.use(status())
const PORT = process.env.PORT || 3000
// momery consumers
// app.get('/', (req, res) => {
//   fs.readFile('./data.txt', (error, data) => {
//     res.end(data)
//   })
// })

// streams
app.get('/', (req, res) => {
  const stream = fs.createReadStream('./data.txt', 'utf-8')
    //   console.log(stream)
    stream.on("data", (chunk) => res.write(chunk))
    stream.on("end", () =>res.end())
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
