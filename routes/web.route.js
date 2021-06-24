const express = require('express')
const voucherController = require('../controllers/web/voucher.controller')


const router = express.Router()

router.get('/', voucherController.getAllVouchers)
router.get('/voucher/add', voucherController.getAddVoucherView)
router.post('/voucher/add', voucherController.upload.single('image'), voucherController.addVoucher)

router.get('/voucher/:id', voucherController.getUpdateVoucherView)
router.post('/voucher/:id', voucherController.updateVoucher)
router.get('/delete/:id', voucherController.getDeleteVoucherView)
router.post('/delete/:id', voucherController.deleteVoucher)

// router
//   .route('/')
//   .get(voucherController.getAllVouchers)

// router
//   .route('/voucher/add')
//   .get(voucherController.getAddVoucherView)
//   .post(voucherController.addVoucher)

// router
//   .route('/voucher/:id')
//   .get(voucherController.getUpdateVoucherView)
//   .put(voucherController.updateVoucher)

// router
//   .route('/delete/:id')
//   .get(voucherController.getDeleteVoucherView)
//   .post(voucherController.deleteVoucher)

module.exports = router