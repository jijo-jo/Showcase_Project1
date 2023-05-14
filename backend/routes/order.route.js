const express = require('express')
const  orderRouter = express.Router();

const ordercontroller = require('../controllers/order.controller');

orderRouter.get('/allorders',ordercontroller.findAllorder);
orderRouter.post('/userorder',ordercontroller.findusinguserId);
orderRouter.post('/addorder',ordercontroller.addordertoorders);
orderRouter.post('/orderstatus',ordercontroller.updateOrderstatus);
orderRouter.post('/deliverystatrus',ordercontroller.updateDeliverystatus);
orderRouter.post('/delete',ordercontroller.deleteOrder);
orderRouter.get('/todeliverorder',ordercontroller.tobedelivered);

module.exports = orderRouter