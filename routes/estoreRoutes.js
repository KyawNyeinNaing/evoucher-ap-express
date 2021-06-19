const express = require('express')
const router = express.Router()
const testController = require('../controllers/estore.controller')

router
	.route('/')
	.get(testController.getAllTests)
  .post(testController.createTest)


router
	.route('/:id')
	.get(testController.getTest)
	.put(testController.updateTest)
	.delete(testController.deleteTest)

module.exports = router