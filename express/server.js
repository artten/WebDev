

const { application } = require("express");
const express = require("express")
const body = require("body-parser")

const app = express();

app.use(body.urlencoded({extended: true}))

// app.get("/", function(requset, response) {
//     //console.log(requset)
//     response.send("<h1>Hello<h1>")
// })


// app.get("/contact", function(req, res) {
//     res.send("Contact me!!");
// })

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res) {
    var num1 = req.body["num1"]
    var num2 = req.body["num2"]
    res.send(`${Number(num1) + Number(num2)}`)
})

app.listen(3000, function() {
    console.log("server started")
});




