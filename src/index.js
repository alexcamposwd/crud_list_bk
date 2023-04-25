const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();
require('./config/dbConfig');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running! http://localhost:${PORT}`)
})