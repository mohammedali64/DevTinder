const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello  Express!");
})

app.listen(7777,() => {
    console.log("Server is running on port 3000...");
});