const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Created a Schema of how the data in this User table (There are no tables, but for understanding) will look like
const user = new Schema({
    userName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
});

// This created a User table in which the data will be of this format (No-SQL analogy)
const User = mongoose.model("user", user);

module.exports = User;