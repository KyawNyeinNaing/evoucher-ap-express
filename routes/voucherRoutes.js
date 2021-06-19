const express = require('express')
const router = express.Router()
const voucherController = require('../controllers/voucher/voucher.controller')

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