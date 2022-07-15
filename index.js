// Test -------------------------- Importing the Packages ---------------------------------
const express = require("express");
require("dotenv").config();
const db = require("./config/db");
const User = require("./models/userModel");

const app = express();
const port = 3000 || process.env.PORT;

// Test --------------------------- Middlewares -----------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test --------------------------- CRUD Operations on MongoDB Atlas --------------------
app.post("/", async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const newUser = await User.create({ userName, email, password });
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
})

// Test -------------------------- The Server Side Code ----------------------------------
app.get("/", (req, res, next) => {
    res.send(`<h1>Hello World</h1>`)
})

// Test -------------------------- Error Handling for the server side code ---------------
app.listen(port, () => { console.log(`Server running on port ${port}`) });

// The middleware for handling errrors, is always at the last
app.use((error, req, res, next) => console.log(error));
