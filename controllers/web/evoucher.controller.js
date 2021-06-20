const Voucher = require('../../models/evoucher.model')

const store = (req, res) => {
  Voucher.find({}, (err, evouchers) => {
    res.render('index', {
      evouchers
    })
  })
}

module.exports = { store }