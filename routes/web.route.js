const evoucherController = require('../controllers/web/evoucher.controller')

const express = require('express')
const router = express.Router()

router
  .route('/')
  .get(evoucherController.store)

module.exports = router