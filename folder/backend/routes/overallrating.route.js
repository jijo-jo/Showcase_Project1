const express = require('express')
const overallratingRouter = express.Router();

const overallratingcontroller = require('../controllers/overallrating.controller')
overallratingRouter.post('/updaterating',overallratingcontroller.updateOverallrating)

module.exports = overallratingRouter