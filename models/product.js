const { mongoose, db } = require('../database');
product = db.model('Product', { name: String });

module.exports = product

