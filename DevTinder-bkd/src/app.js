const express = require("express");
const app = express();
const {adminAuth} = require("./middlewares/auth");


app.get("/user",adminAuth,(req,res,next)=>{
    res.send("Route handler 1");
}
)

app.listen(7777,() => {
    console.log("Server is running on port 3000...");
});