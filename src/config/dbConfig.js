const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const dbConfig = process.env.MONGO_URI;

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
});

module.exports = connection;