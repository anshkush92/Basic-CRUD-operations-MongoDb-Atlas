// Test -------------------------- Importing the Packages ---------------------------------
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const connection = require("./config/db");

const app = express();
const port = 3000 || process.env.PORT;

// Test -------------------------- The Server Side Code ----------------------------------
connection.once("open", () => {
    console.log("Database connection established successfully");
})

app.get("/", (req, res, next) => {
    res.send(`<h1>Hello World</h1>`)
})

app.listen(port, () => { console.log(`Server running on port ${port}`) });
// Test -------------------------- Exporting the server side code ------------------------