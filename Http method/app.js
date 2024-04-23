import express from 'express'
import data from "file:///D:/Backend/Http%20method/data.json" assert { type: "json" };
import fs from 'fs'
import bodyParser from 'body-parser'
const app = express()
const PORT = 3000
app.use(bodyParser.json());

const authMiddleWare = (req, res, next) => {

    const isAuth = true
    !isAuth ? res.status(401).send({
        message: "unauthorized user"
    }) : next()
}
app.listen(PORT, (req, res) => console.log(`server runing  on ${PORT}`))

app.route("/data/:id")
    .get(authMiddleWare, (req, res) => {
        // Headers
        // res.setHeader("X-server", "localhost:300/data/:id")
        // // alway add to X custom headers 
        // const header = req.headers
        //    to see request headers 
        // console.log(header);
        const singleProduct = data.find(p => p.id === +req.params.id)
        if (!data.id) return res.status(404).json({ message: "product not found" })
        res.status(200).send(singleProduct)
    })
    .put((req, res) => {
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
    if (!body || !body.title || !body.price || !body.description || !body.category || !body.image) {
        return res.status(400).json({
            message: "all  parameters passed"
        })

    }
    data.push({ ...body, id: data.length + 1 })
    fs.writeFile("./data.json", JSON.stringify(data), (error, data) => { })
    return res.status(201).json({ status: "success", id: data.length })
})