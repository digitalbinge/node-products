const express = require('express');
let router = express.Router();
let Product = require('../models/product');
let authenticate = require('../utilities/authenticate');


router.get('', (req, res) => {
	Product.find().then((products) => {
		res.render('products', {productList: products});
	})
});

router.get('/new', authenticate, (req, res) => {
	res.render('new');
});

router.post('/new', authenticate, (req, res) => {
  let product_name = req.body.product_name;
  Product.create({name: product_name}).then(() => {
  	res.redirect('/products');
  })
});

router.get('/delete/:id', (req, res) => {
	let product = Product.findById(req.params.id);
	product.remove;
	res.redirect('/products');
});

module.exports = router;