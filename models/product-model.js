const mongoose = require('mongoose');

const Schema = mongoose.Shema;

const productShema = new Schema({
  name: { type: String, },
  price: { type: Number, default: 0 },
  imageUrl: { type: String, default: 'https://ouwebs.com/wp-content/uploads/2016/11/ouwebs-logo-1.png' },
  description: { type: String, },
});

const Product = mongoose.model('Product', productShema);

module.export = Product;
