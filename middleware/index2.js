import express from 'express';
const app = express();
const PORT = 3000
// custom middleware
app.use(function (req, res, next) { 
console.log(req.method);
    console.log(req.url);
    next()
})

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.listen(PORT, (req, res) => {
    console.log(`server listening on ${PORT}`);
})