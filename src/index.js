const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
require('./config/dbConfig');

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running! http://localhost:${PORT}`)
})