const Voucher = require('../../models/evoucher.model')
const dotenv = require('dotenv')

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
const stripe = require('stripe')(stripeSecretKey)

const getAllVouchers = async (req, res, next) => {
  try {
    const evouchers = await Voucher.find().exec()
    res.render('voucherlist', {
      evouchers
    })

  } catch (error) {
    next(error)
  }
}

const getAddVoucher = async (req, res, next) => {
  res.render('addVoucher')
}

const addVoucher = (req, res, next) => {
  const data = {
    name: "Kyaw Kyaw",
    age: 12
  };
  // let voucher = await new Voucher({
  //   title: data.title,
  //   desc: data.desc,
  // });
  // voucher = await voucher.save();
  // res.redirect('/');
  console.log(data)
}

module.exports = {
  getAllVouchers,
  getAddVoucher,
  addVoucher
}