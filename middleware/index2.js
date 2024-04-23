// secrets  acess  project 

import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = 3000
const app = express()

var userIsAuthorised = false
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    const password = req.body['password']
    if (password === 'iloveprogramming') {
        userIsAuthorised = true
    }
    next()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/public.html')
})
app.post('/check', (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html")
    } else {
        res.sendFile(__dirname + "/public/public.html")
    }
})

app.listen(PORT, (req, res) => {
    console.log(`server listening on ${PORT}`)
})

// // custom middleware
// app.use(function (req, res, next) {
// console.log(req.method);
//     console.log(req.url);
//     next()
// })
