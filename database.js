const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/amazon-products', { useMongoClient: true });
mongoose.Promise = Promise;

module.exports = { mongoose, db };
