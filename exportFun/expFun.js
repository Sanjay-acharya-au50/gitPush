// below one is the error
// const { Router } = require("express");
const express = require("express");

const routes = express.Router();

routes.get("/",(req,res)=>{
    res.send("this is a exported route");

});

    routes.get("/sec",(req,res)=>{
        res.send("this is second exported route");
    })

module.exports = routes;