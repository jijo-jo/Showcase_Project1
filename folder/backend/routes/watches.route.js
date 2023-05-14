const express = require('express')
const watchRouter = express.Router();

const watchcontroller = require("../controllers/watch.controller");
const watchController = require('../controllers/watch.controller');

watchRouter.get('/watches',watchcontroller.findaAllwatches);
watchRouter.post('/watchid',watchcontroller.findwatchbyid);
watchRouter.post('/addwatch',watchcontroller.addnewwatch);
watchRouter.post('/updatewatch',watchcontroller.updatewatch);
watchRouter.post('/stockchange',watchController.updatewatchstock);

module.exports = watchRouter