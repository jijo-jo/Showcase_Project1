const express = require('express');
const router = express.Router();

const watchRoutes = require("./watches.route");

router.use('/watches',watchRoutes);


module.exports=router;