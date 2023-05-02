const express = require('express')
const watchRouter = express.Router();

const watchcontroller = require("../controllers/watch.controller");

watchRouter.get('/watches',watchcontroller.findaAllwatches);


module.exports = watchRouter