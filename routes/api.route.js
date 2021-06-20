const express = require('express')
const router = express.Router()
const userController = require('../controllers/api/auth/userController')
const authController = require('./../controllers/api/auth/authController')
const voucherController = require('../controllers/api/evoucher/voucher.controller')

// user register
router.post('/user/login', authController.login)
router.post('/user/signup', authController.signup)

// Protect all routes after this middleware
router.use(authController.protect)

router.delete('/delete', userController.deleteMe)

// Only admin have permission to access for the below APIs 
router.use(authController.restrictTo('admin'))

// start user api
router
	.route('/user')
	.get(userController.getAllUsers)

router
	.route('/user/:id')
	.get(userController.getUser)
	.put(userController.updateUser)
	.delete(userController.deleteUser)


// eVoucher api
router
	.route('/evoucher')
	.get(voucherController.getAllVouchers)
	.post(voucherController.createVoucher)

router
	.route('/evoucher/:id')
	.get(voucherController.getVoucher)
	.put(voucherController.updateVoucher)
	.delete(voucherController.deleteVoucher)

// eStore api
router
	.route('/estore')
	.get()

module.exports = router