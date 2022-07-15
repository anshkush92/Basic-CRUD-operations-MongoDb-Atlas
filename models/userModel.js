const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Created a Schema of how the data in this User table (There are no tables, but for understanding) will look like
const user = new Schema({
    userName: {
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: String,
    }
});

// This created a User table in which the data will be of this format (No-SQL analogy)
const User = mongoose.model("usersTable", user);

module.exports = User;