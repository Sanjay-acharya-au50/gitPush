const express = require("express");
// const routes = require("./exportFun/expFun");
const app = express();

const user = require("./exportFun/expFun")
const content = require("./exportFun/content");
const home = require("./exportFun/home");


    app.use("/user", user);
    app.use("/content", content);
    app.use("/home", home)

    app.get("/",(req,res)=>{
        res.send("hello world")
    })

app.listen(1000,()=>{
    console.log("server is loading 1000");
});