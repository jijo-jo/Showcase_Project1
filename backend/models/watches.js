const Sequelize = require('sequelize');
const db = require('../config/database');


const Watches = db.define("watches", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      allowNull: false
    },
    Name: {
      type: Sequelize.STRING,
      field:"name",
      allowNull: false
    },
    ModelInfo: {
      type: Sequelize.STRING,
      field:"modelinfo",
      allowNull: false
    },
    Brand: {
        type: Sequelize.STRING,
        field:"brand",
        allowNull: false
      },
    Description: {
        type: Sequelize.STRING,
        field:"description",
        allowNull: false
      },
    WarantyPeriod: {
        type: Sequelize.INTEGER,
        field:"waranty_period",
        allowNull: true
      },
    Color: {
        type: Sequelize.STRING,
        field:"color",
        allowNull: false
      },
    For_whom: {
        type: Sequelize.STRING,
        field:"for_whom",
        allowNull: false
      },
    Price: {
        type: Sequelize.INTEGER,
        field:"price",
        allowNull: false
      },
    Offer: {
        type: Sequelize.INTEGER,
        field:"offer",
        allowNull: true
      },
    Stockavailable: {
        type: Sequelize.INTEGER,
        field:"stockavailable",
        allowNull: true
      },
    Image: {
        type: Sequelize.STRING,
        field:"image",
        allowNull: true
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

module.exports = Watches;