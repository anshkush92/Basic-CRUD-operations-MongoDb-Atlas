require("dotenv").config()
const mongoose = require("mongoose");

const dbString = process.env.DB_STRING;
console.log(dbString);

mongoose.connect(dbString, {
    useNewUrlParser: true,
}).catch((error) => console.log(error));

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Database connection established successfully");
})

module.exports = connection;