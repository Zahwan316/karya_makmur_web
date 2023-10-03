const express = require("express")
const port = 3001
const app = express()

app.route("/")
    .get((req,res) => {res.status(200).json({message:"Test"})})

app.listen(port,(req,res) => {
    return `listening at localhost ${port}`
})