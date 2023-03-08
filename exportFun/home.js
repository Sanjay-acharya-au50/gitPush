
const express = require("express");

const home  = express.Router();


home.get("/",(req,res)=>{
    res.send({heh: "man, this is my home"})
})

module.exports = home;