const sequelize = require('../config/database')
const db = {};


const Sequelize = require("sequelize");
db.Sequelize = Sequelize

db.sequelize = sequelize

db.watches = require("./watches");
db.users=require("./user");
db.carts=require("./cart");
db.credentials=require("./credential");
db.orders = require("./order");
db.overallrating = require("./overallrating");
db.payment = require("./payment");
db.rating = require("./rating");
db.roles = require("./roles");

db.users.hasMany(db.carts);
db.watches.hasMany(db.carts);

db.users.hasMany(db.rating);
db.watches.hasMany(db.rating);

db.credentials.hasOne(db.roles);
db.users.hasOne(db.credentials);

db.users.hasMany(db.orders);
db.watches.hasMany(db.orders);

db.overallrating.hasOne(db.watches);
db.users.hasMany(db.payment)



module.exports = db;