const express = require('express')
const  cartRouter = express.Router();

const cartController=require('../controllers/cart.controller');

cartRouter.post('/findbyuserId',cartController.findusinguserId);
cartRouter.post('/updatecart',cartController.updateCartproduct);
cartRouter.post('/addcart',cartController.addproducttocart);
cartRouter.post('/deletecart',cartController.deleteCartproduct);
cartRouter.post('/cartstatus',cartController.updateCartstatus);


module.exports = cartRouter