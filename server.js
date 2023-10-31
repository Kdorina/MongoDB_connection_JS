const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2"

async function connect(){
    try {
        await mongoose.connect(url);
        console.log("Success, connected to Mdb")
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000")
});