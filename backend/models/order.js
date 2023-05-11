const Sequelize = require('sequelize');
const db = require('../config/database');


const Orders = db.define("orders", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Orderstatus: {
      type: Sequelize.STRING,
      field:"ordersatatus",
      allowNull: true
    },
    Deliverystatus: {
      type: Sequelize.STRING,
      field:"deliverystatus",
      allowNull: true
    },
    userId:{
      type: Sequelize.INTEGER,
      references:{
        model:"users",
        key:"id"
      }
    },
    watchId:{
      type: Sequelize.INTEGER,
      references:{
        model:"watches",
        key:"id"
      }
    },
    createdAt: {
      allowNull: false,
      field:"created_at",
      defaultValue: Sequelize.fn('now'),
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      field:"updated_at",
      defaultValue: Sequelize.fn('now'),
      type: Sequelize.DATE
    }
  });

module.exports = Orders;