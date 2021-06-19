const mongoose = require('mongoose')

const voucherSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please fill your name'],
  },
  desc: {
    type: String,
    required: [true, 'Please fill your email'],
    unique: true,
  }
})

const Voucher = mongoose.model('voucher', voucherSchema)
module.exports = Voucher
