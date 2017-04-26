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

productRoutes.post('/products/new', (req, res, next) => {
  const theProduct = new Product({
    name: req.body.productName,
    price: req.body.productPrice,
    imgUrl: req.body.productImageUrl,
    description: req.body.productDescription
  });

theProduct.save((err) => {
  if (err) {
    next(err);
    return;
  }


  res.redirect('/products');
});
});

module.exports = productRoutes;
