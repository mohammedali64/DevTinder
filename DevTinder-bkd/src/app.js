const express = require("express");
const {adminAuth} = require("./middlewares/auth");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async(req,res)=>{
    //creating a new instance of the User model
    const user = new User({
        firstName: "Mahatma",
        lastName: "Gandhi",
        email: "gandhi@gmail.com",
        password: "gandhi@123",
        age: 102,
        gender: "male"
    });
    try{
        await user.save();
        res.send("User added successfully!")
    } catch (err) {
        res.status(400).send(err.message);
    }
})


connectDB().then(()=>{
    console.log("Database connected successfully");
    app.listen(7777,() => {
        console.log("Server is running on port 7777...");
    });
}).catch((err)=>{
    console.log("Database connection failed");
    console.log(err);
});
