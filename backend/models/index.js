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

db.watches.hasMany(db.carts,{foreignKey:"watchId"});
db.carts.belongsTo(db.watches);
db.users.hasMany(db.carts,{foreignKey:"userId"});
db.carts.belongsTo(db.users);

db.users.hasMany(db.rating);
db.watches.hasMany(db.rating);

db.roles.hasOne(db.credentials,{foreignKey:"roleId"});
db.credentials.belongsTo(db.roles);
db.credentials.hasOne(db.users,{foreignKey:"credentialId"});
db.users.belongsTo(db.credentials);
db.users.hasOne(db.credentials,{foreignKey:"userId"});
db.credentials.belongsTo(db.users)

db.watches.hasMany(db.orders,{foreignKey:"watchId"});
db.orders.belongsTo(db.watches);
db.users.hasMany(db.orders,{foreignKey:"userId"});
db.orders.belongsTo(db.users);

db.watches.hasOne(db.overallrating,{foreignKey:"watchId"});
db.overallrating.belongsTo(db.watches)
db.users.hasMany(db.payment);



module.exports = db;