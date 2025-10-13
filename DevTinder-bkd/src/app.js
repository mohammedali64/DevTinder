const express = require("express");
const {adminAuth} = require("./middlewares/auth");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async(req,res)=>{
    //creating a new instance of the User model
    const user = new User(req.body);
    try{
        await user.save();
        res.send("User added successfully!")
    } catch (err) {
        res.status(400).send(err.message);
    }
})

//find user by email
app.get("/getUser",async(req,res)=>{
    const userEmail = req.body.firstName; 
    try{
        const user = await User.findOne({firstName:userEmail});
        if(user.length === 0){
            res.status(404).send("User not found");
        }else{
            res.send(user); 
        }
    }catch(err){
        res.status(400).send("Something went wrong");
    }
    
})

//get all the users from db
app.get("/feed",async (req,res)=>{
    try{
        const users = await User.find({});
        if(users.length === 0){
            res.status(404).send("User not found");
        }else{
            res.send(users);
        }
    }catch(err){
        res.status(400).send("Something went wrong");
    }

})

//Delete a user from the database
app.delete("/user",async(req,res)=>{
    const userId = req.body.userId;
    try{
        const user = await User.findOneAndDelete({_id:userId});
        res.send("User deleted successfully");
    }catch(err){
        res.status(400).send("Something went wrong");
    }
})

//Update a user in the database
app.patch("/user",async(req,res)=>{
    const userId = req.body.userId;
    const data = req.body;
    try{
        await User.findByIdAndUpdate({_id:userId},data);
        res.send("User updated successfully");
    }catch(err){
        res.status(400).send("Cannot update the user");
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
