// Test -------------------------- Importing the Packages ---------------------------------
const express = require("express");
require("dotenv").config();
const db = require("./config/db");
const User = require("./models/userModel");

const app = express();
const port = 3000 || process.env.PORT;

// Test --------------------------- Middlewares -----------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test --------------------------- CREATE data ---------------------------------------
app.post("/", async (req, res) => {
    const { userName, email, password } = req.body;
    console.log(req.body);

    try {
        // Writing the Users in Users table (SQL Analogy)
        // Able to write the duplicate data, need to do something of this 
        const newUser = await User.create({ userName, email, password });
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
})

// Test -------------------------- READ data ----------------------------------------
app.get("/", async (req, res, next) => {

    try {
        // Finding the users in the MongoDB Atlas
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Test ------------------------- READ data - II ------------------------------------
app.get("/:id", async (req, res, next) => {
    // Getting the parameters from the URL using req.params
    const { id } = req.params;

    try {
        const findByIdUser = await User.findById(id);
        res.json(findByIdUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Test -------------------------- UPDATE data -------------------------------------
app.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { userName, email, password } = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(id, { userName, email, password });
        res.json(updateUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Test -------------------------- DELETE data --------------------------------------
app.delete("/:id", async (req, res) => {
    // Getting the parameters from the URL using req.params
    const { id } = req.params;

    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.send("Successfully deleted the data");
    } catch (error) {
        res.status(500).send(error);
    }

})

// Test -------------------------- Error Handling for the server side code ---------------
app.listen(port, () => { console.log(`Server running on port ${port}`) });

// The middleware for handling errrors, is always at the last
app.use((error, req, res, next) => console.log(error));
