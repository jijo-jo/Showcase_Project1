const express = require('express')
const ratingRouter = express.Router();

const ratingcontroller=require('../controllers/rating.controller');

ratingRouter.post('/addrating',ratingcontroller.addNewRating);
ratingRouter.post('/updaterating',ratingcontroller.updateRating);
ratingRouter.post('/getuserrating',ratingcontroller.getAllratingbyuser);

module.exports = ratingRouter