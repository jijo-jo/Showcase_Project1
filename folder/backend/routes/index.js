const express = require('express');
const router = express.Router();

const watchRoutes = require("./watches.route");
const userRoutes = require("./users.route");
const roleRoutes =require("./roles.route");
const ratingRoutes = require("./rating.route");
const overallratingRoutes = require("./overallrating.route");
const cartRoutes = require("./cart.route");
const orderRoutes = require("./order.route");
const paymentRoutes = require("./payment.route")

router.use('/watches',watchRoutes);
router.use('/users',userRoutes);
router.use('/roles',roleRoutes);
router.use('/rating',ratingRoutes);
router.use('/overallrating',overallratingRoutes);
router.use('/cart',cartRoutes);
router.use('/orders',orderRoutes);
router.use('/payment',paymentRoutes)

module.exports=router;