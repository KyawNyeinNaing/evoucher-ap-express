const express = require('express');
const { getAllCustomers, getAddCustomerView, addCustomer,
  getUpdateCustomerView, updateCustomer, getDeleteCustomerView, deleteCustomer } = require('../controllers/web/customerController');


const router = express.Router();

router.get('/', getAllCustomers);
router.get('/customer/add', getAddCustomerView);
router.post('/customer/add', addCustomer);
router.get('/updateCustomer/:id', getUpdateCustomerView);
router.post('/updateCustomer/:id', updateCustomer);
router.get('/deleteCustomer/:id', getDeleteCustomerView);
router.post('/deleteCustomer/:id', deleteCustomer);



module.exports = router