const express = require('express')
const router = express.Router()
const userController = require('../controllers/api/auth/userController')
const authController = require('./../controllers/api/auth/authController')


router.post('/login', authController.login)
router.post('/signup', authController.signup)

// Protect all routes after this middleware
router.use(authController.protect)

router.delete('/delete', userController.deleteMe)

// Only admin have permission to access for the below APIs 
router.use(authController.restrictTo('admin'))

router
	.route('/')
	.get(userController.getAllUsers)


router
	.route('/:id')
	.get(userController.getUser)
	.put(userController.updateUser)
	.delete(userController.deleteUser)

module.exports = router