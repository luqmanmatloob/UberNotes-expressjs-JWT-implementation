const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect("mongodb://localhost:27017/noteapp2")

module.exports = {
    connection,
};