const Voucher = require('../../models/voucher.model')
const base = require('../baseController')

exports.getAllVouchers = base.getAll(Voucher)
exports.getVoucher = base.getOne(Voucher)
exports.createVoucher = base.createOne(Voucher)
exports.updateVoucher = base.updateOne(Voucher)
exports.deleteVoucher = base.deleteOne(Voucher)