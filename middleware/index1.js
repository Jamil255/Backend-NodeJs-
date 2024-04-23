import express from "express"
import morgan from "morgan"
const app = express()
const PORT = 3000
app.use(morgan("tiny"))
app.get("/", (req, res) => {
    res.send("Welcome")
})

app.listen(PORT, (req, res) => {
    console.log(`server listening on port ${PORT}`);
})