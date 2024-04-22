import express from 'express'
import data from "file:///D:/Backend/Http%20method/data.json" assert { type: "json" };
import fs from 'fs'
import bodyParser from 'body-parser'
const app = express()
const PORT = 3000
app.use(bodyParser.json());
app.listen(PORT, (req, res) => console.log(`server runing  on ${PORT}`))

app.route("/data/:id")
    .get((req, res) => {
        const singleProduct = data.find(p => p.id === +req.params.id)
        res.send(singleProduct)
    })
    .put((req, res) => {
        console.log(req.body);
        const body = req.body
        data.push({ ...body, id: data.length + 1 })
        fs.writeFile("./data.json", JSON.stringify(data), (err, data) => { })
        res.json({ status: "pending" })
    })
    .delete((req, res) => {
        res.json({ status: "pending" })
    })
    .patch((req, res) => {
        res.json({ status: "pending" })
    })

app.post("/add/data", (req, res) => {
    const body = req.body
    data.push({ ...body, id: data.length + 1 })
    fs.writeFile("./data.json", JSON.stringify(data), (error, data) => {
        return res.json({ status: "success", id: data.length })

    })
})