const Sequelize = require('sequelize');
const db = require('../config/database');


const Cart = db.define("cart", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Quantity:{
       type:Sequelize.INTEGER,
       field:"quantity",
       allowNull:true
    },
    Status:{
      type:Sequelize.STRING,
       field:"status",
       allowNull:false
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

module.exports = Cart;