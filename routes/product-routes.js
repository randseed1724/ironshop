const express = require('express');

const Product = require('../models/product-model.js');

const productRoutes = express.Router();


productRoutes.get('/products', (req, res, next) => {
  Product.find((err, productList) => {
    if (err) {
      next(err);
      return;
    }


  res.render('products/products-list-view.ejs', {
   products: productList,
   });
  });
});

productRoutes.get('/products/new', (req, res, next) => {
  res.render('prducts.new-product.ejs');
});

module.exports = productRoutes;
