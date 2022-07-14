// Test -------------------------- Importing the Packages ---------------------------------
const express = require("express");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
const connection = require("./config/db");


const app = express();
const port = 3000 || process.env.PORT;

// Test --------------------------- Middlewares -----------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
    }
}))

// Test -------------------------- The Server Side Code ----------------------------------
app.get("/", (req, res, next) => {
    res.send(`<h1>Hello World</h1>`)
})

app.listen(port, () => { console.log(`Server running on port ${port}`) });

// The middleware for handling errrors, is always at the last
app.use((error, req, res, next) => console.log(error));
// Test -------------------------- Exporting the server side code ------------------------
