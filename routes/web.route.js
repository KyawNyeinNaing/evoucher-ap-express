const evoucherController = require('../controllers/evoucher.controller')

const express = require('express')
const router = express.Router()

router
  .route('/')
  .get(evoucherController.store)

module.exports = router