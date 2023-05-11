const express = require('express')
const  paymentRouter = express.Router();

const paymentcontroller = require('../controllers/payment.controller')

paymentRouter.post('/addpayment',paymentcontroller.addpayment);

module.exports = paymentRouter