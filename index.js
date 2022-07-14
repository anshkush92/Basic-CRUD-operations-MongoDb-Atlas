// Test -------------------------- Importing the Packages ---------------------------------
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 3000 || process.env.PORT;

// Test -------------------------- The Server Side Code ----------------------------------
const dbString = process.env.DB_STRING;
console.log(dbString);

mongoose.connect(dbString, {
    useNewUrlParser: true,
}).catch((error) => console.log(error));

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Database connection established successfully");
})

app.get("/", (req, res, next) => {
    res.send(`<h1>Hello World</h1>`)
})

app.listen(port, () => { console.log(`Server running on port ${port}`) });
// Test -------------------------- Exporting the server side code ------------------------