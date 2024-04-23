import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    console.log(req.body.street);
    bandName = req.body["street"] + req.body["pet"];
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    const responseHTML = `<h1>My name is: ${bandName}</h1>`;
    res.send(responseHTML);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
