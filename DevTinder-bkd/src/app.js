const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello  Express!");
})
app.use("/hello",(req,res)=>{
    res.send("Hello  Hello Hello Express!");
})

app.listen(7777,() => {
    console.log("Server is running on port 3000...");
});