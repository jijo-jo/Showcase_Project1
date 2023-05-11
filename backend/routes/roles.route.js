const express = require('express')
const roleRouter = express.Router();

const rolecontroller = require('../controllers/roles.controller');

roleRouter.get('/allroles',rolecontroller.getAllroles);
roleRouter.post('/rolebyId',rolecontroller.getrolesbyId);

module.exports = roleRouter