const express = require('express')
const userRouter = express.Router();

const usercontroller = require('../controllers/user.controller');

userRouter.get('/allusers',usercontroller.findAllusers);
userRouter.post('/login',usercontroller.userLogin);
userRouter.post('/register',usercontroller.userRegister);
userRouter.post('/delete',usercontroller.deleteUser);
userRouter.get("/deliveryboys",usercontroller.findDeliveryBoy)
userRouter.post("/getuser",usercontroller.getalluserbyId)
userRouter.post("/changeshipaddress",usercontroller.updateShippingAddress)

module.exports = userRouter