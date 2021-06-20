const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required!']
    },
    lastname: {
        type: String,
        required: [true, 'Second name is required!']
    }, 
    phonenumber: {
        type: String,
        required: [true, 'Phone number is required!']
    },
    cnic: {
        type: String,
        required: [true, 'CNIC is required!']
    }, 
    address: {
        type: String,
        required: [true, 'Address is required!']
    }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer