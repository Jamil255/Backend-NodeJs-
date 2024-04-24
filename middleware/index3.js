import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from "path"
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 3000
let userIsAuthorised = false
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    const password = req.body["password"]
    console.log(password);
    if (password === "jamil") {
        userIsAuthorised = true
    }
    next()

})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/public.html")

})
app.post("/check", (req, res) => { 
   if (userIsAuthorised) {
    return res.sendFile(__dirname + "/public/secret.html")
   } else {
    return res.sendFile(__dirname + "/public/public.html")
   } 
})



app.listen(PORT, (error, res) => {
    console.log(`listening on ${PORT}`);
})