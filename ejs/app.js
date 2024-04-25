import express from "express";
const app = express();
const PORT = 3000;
app.set('view engine', "ejs")
app.get("/", (req, res) => {
    res.render("index", { dayType: "a weekday", advice: "it's time to work hard" });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
