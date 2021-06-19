const express = require('express')
const router = express.Router()
const voucherController = require('../controllers/api/voucher/voucher.controller')
const authController = require('./../controllers/api/auth/authController')

router.use(authController.protect)

router
	.route('/')
	.get(voucherController.getAllVouchers)
	.post(voucherController.createVoucher);


router
	.route('/:id')
	.get(voucherController.getVoucher)
	.put(voucherController.updateVoucher)
	.delete(voucherController.deleteVoucher);

module.exports = router