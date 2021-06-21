const mongoose = require('mongoose')

const voucherSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please fill this field'],
  },
  desc: {
    type: String,
    required: [true, 'Please fill this field'],
    unique: true,
  },
  expire_date: {
    type: String,
    required: [true, 'Please fill this field'],
  },
  image: {
    data: Buffer,
    contentType: String
  },
  amount: {
    type: Number,
    require: [true, 'Please fill this field']
  },
  payment_method: {
    type: String,
    require: [true, 'Please fill this field']
  },
  quantity: {
    type: Number,
    require: [true, 'Please fill this field']
  }
})

const Voucher = mongoose.model('voucher', voucherSchema)
module.exports = Voucher
