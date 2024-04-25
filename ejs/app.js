import express from "express";
const app = express();
const PORT = 3000;
app.set('view engine', "ejs")
app.get("/", (req, res) => {
    const todays= new Date().getDay()
    let type = "a weekday"
    let adv = "it's time to work hard"
    if (todays === 0 || todays === 6) {
        let type = "a weekend"
        let adv = "it's time to have some fun "
    }
    res.render("index", { dayType: type, advice: adv });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
