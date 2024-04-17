// const express = require("express")
// const app = express()
// app.get('/', function (req, res) {
//     res.send("hello world !")

// })
// app.get('/HOME', function (req, res) {
//     res.send("hemo page")

// })
// app.listen(3000)

// error handling and middleware
const express = require('express');
const app = express();
app.use(function (req, res, next) { 
    console.log("Welcome to express");
    next()
})

app.get('/', function (req, res,next) {
    //  res.send("hello world !");
    return next(new Error("Not Found"));
})

app.use(function (error, req, res, next) { 
    console.log(error.message);
    res.status(500).send(error.message)
})

app.listen(3000)