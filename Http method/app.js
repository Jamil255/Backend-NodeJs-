import express from 'express'
import data from "file:///D:/Backend/Http%20method/data.json" assert { type: "json" };
import fs from 'fs'
const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: false }))

app
    .route('/data/:id')
    .get((req, res) => {
        const singleProduct = data.find((p) => p.id === +req.params.id)
        res.send(singleProduct)
    })
    .put((req, res) => res.json({ status: 'pending' }))
    .delete((req, res) => res.json({ status: 'pending' }))
    .patch((req, res) => res.json({ status: 'pending' }))

app.post('/add/data', (req, res) => {
    const body = req.body
    data.push({ ...body, id: data.length+1 })
    fs.writeFile("./data.json", JSON.stringify(data), (err, data) => { 

        res.json({ status: 'sucess',id: data.length})
    })
})

app.listen(PORT, (req, res) => console.log(`server runing  on ${PORT}`))
