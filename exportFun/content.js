const express = require("express");


const content = express.Router();

content.get("/", (req,res)=>{
    res.send({hello : "bro"})
})

module.exports = content;