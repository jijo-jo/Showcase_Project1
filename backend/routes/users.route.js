const express = require('express')
const userRouter = express.Router();

const usercontroller = require('../controllers/user.controller');

userRouter.get('/allusers',usercontroller.findAllusers);
userRouter.post('/login',usercontroller.userLogin);
userRouter.post('/register',usercontroller.userRegister);
userRouter.post('/delete',usercontroller.deleteUser);

module.exports = userRouter