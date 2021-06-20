const Voucher = require('../../models/evoucher.model')
const base = require('./base.controller')

exports.getAllVouchers = base.getAll(Voucher)
exports.getVoucher = base.getOne(Voucher)
exports.createVoucher = base.createOne(Voucher)
exports.updateVoucher = base.updateOne(Voucher)
exports.deleteVoucher = base.deleteOne(Voucher)