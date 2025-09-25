const express = require("express");
const app = express();

app.use("/hello",(req,res)=>{
    res.send("HAAAA HAAAA HAAAAA HAAAAA")
})
app.get("/test",(req,res)=>{
    res.send("Hello  Express!");
})
app.post("/hello",(req,res)=>{
    res.send("Data sucessfully saved in DB");
})

app.listen(7777,() => {
    console.log("Server is running on port 3000...");
});