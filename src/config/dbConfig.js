const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://usuariowd:usuariowd@cluster0.py5vonx.mongodb.net/?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
});

module.exports = connection;