const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://DevTinder:VGk3WQT4CTf9nzfe@cluster4.kiydj5k.mongodb.net/devTinder"
    );
}
module.exports = connectDB;

