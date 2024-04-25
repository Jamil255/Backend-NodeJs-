import express from "express";
const app = express();
const PORT = 3000;
app.set('view engine', "ejs")
let bowl=["apples","orange","pears"]
app.get("/", (req, res) => {
    // const todays = new Date().getDay()
    // let type = "a weekday"
    // let adv = "it's time to work hard"
    // if (todays === 0 || todays === 6) {
    //     let type = "a weekend"
    //     let adv = "it's time to have some fun "
    // }


    // res.render("index", { dayType: type, advice: adv });

    // res.render("index", { fruits:bowl });

    const data = {
        title: "Ejs tag",
        seconds: new Date().getSeconds(),
        items: ["foo", "bar", "baz", "apple", "pear"],
        htmlContent:"<em>this is some em  text </em>"
    }
    res.render("index", { userData: data});
})
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
