const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path:__dirname+'../../.env' })

const dbConfig = process.env.MONGO_URI;

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
});

module.exports = connection;