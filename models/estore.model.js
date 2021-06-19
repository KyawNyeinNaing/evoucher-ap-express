const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, 'Please fill this field'],
    unique: true,
  },
  quantity: {
    type: Number,
    required: [true, 'Please fill this field'],
  },
  by_price: {
    type: Number,
    required: [true, 'Please fill this field'],
  },
  payment: {
    type: String,
    enum: ['visa', 'mastercard'],
    default: 'visa',
  },
  promo_code: {
    type: Number,
    required: [true, 'Please fill this field'],
    default: 'code-12345',
  }
})

const Test = mongoose.model('test', testSchema)
module.exports = Test
