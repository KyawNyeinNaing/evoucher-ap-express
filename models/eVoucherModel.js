const mongoose = require('mongoose')
const validator = require('validator')

const eVoucherSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please fill this field'],
  },
  description: {
    type: String,
    required: [true, 'Please fill this field'],
  },
  expire_date: {
    type: Date,
    required: [true, 'Please fill this field'],
  },
  image: {
    data: Buffer,
    contentType: String
  },
  amount: {

  }
})