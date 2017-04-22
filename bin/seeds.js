const mongoose     = require('mongoose');

mongoose.connect('mongodb://localhost/ironshop');

const Product = require("../models/product-model.js");



const products = [
  {
    name: 'Yoga Mat',
    price: 29.99,
    imageUrl: 'http://i.imgur.com/XtpFrW7.jpg',
    description: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
  },
  {
    name: '20" monitor',
    price: 249.99,
    imageUrl: 'http://i.imgur.com/5ICGeY0.jpg',
    description: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
  },
  {
    name: 'bat',
    price: 29.99,
    imageUrl: 'http://www.robertskead.com/images/bat1.jpg',
    description: 'Oldbat from my uncle',
  },
  {
    name: 'ring',
    price: 2949.99,
    imageUrl: 'https://img1.etsystatic.com/128/1/7898094/il_340x270.862053495_asnx.jpg',
    description: 'Golden ring',
  },
  {
    name: 'Soylent',
    price: 54.99,
    imageUrl: 'http://media.gq.com/photos/57c6f39209f7003c4afd2c4d/3:2/w_800/drink_gallery5.546e2142f4c6.jpg',
    description: 'You never have to leave your computer! All you can eat nutrition!',
  }
];


Product.create(products, (err, productDocs) => {
  if (err) {
    throw err;
  }
  productDocs.forEach((oneProduct) => {
    console.log('NEW PRODUCT ${oneProduct.name} -> ${oneProduct._id}');
  });
});
