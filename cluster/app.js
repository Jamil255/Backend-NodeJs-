import express from 'express'
import cluster from 'node:cluster'
import os from 'node:os'
const cpuLenght = os.cpus().length
if (cluster.isPrimary) {
  for (let i = 0; i < cpuLenght; i++) {
    cluster.fork()
  }
} else {
  const app = express()
  const PORT = 3000
  app.get('/', (req, res) => {
    res.send(`server is runing on ${process.pid}`)
  })
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
  })
}
