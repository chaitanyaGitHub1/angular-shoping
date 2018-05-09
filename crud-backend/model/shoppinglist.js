const mongoose = require('mongoose');

const shoppingItemSchema = mongoose.Schema({
  itemName: {
    type: String,
    require: true
  },
  itemQuantity: {
    type: String,
    require: true
  },
  itemBought: {
    type: String,
    require: true
  }
});

const Item =  module.exports = mongoose.model('Item', shoppingItemSchema);
