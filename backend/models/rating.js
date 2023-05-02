const Sequelize = require('sequelize');
const db = require('../config/database');


const Rating = db.define("rating", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      allowNull: false
    },
    Starcount: {
      type: Sequelize.INTEGER,
      field:"starcount",
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

module.exports = Rating;