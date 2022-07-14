const mongoose = require("mongoose");

// Gives access to .env file and its content, so make sure to require it whenever using .env file content
require("dotenv").config()

// Accessing the DB_STRING environment variable in the .env file     
const dbString = process.env.DB_STRING;
console.log(dbString);

mongoose.connect(dbString, {
    useNewUrlParser: true,
}).catch((error) => console.log(error));

const connection = mongoose.connect(dbString, {
    useNewUrlParser: true,
})
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.log(err));

console.log(connection);

module.exports = connection;