const Sequelize = require('sequelize');
const db = require('../config/database');


const Payments = db.define("payments", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      allowNull: false
    },
    Amount: {
      type: Sequelize.INTEGER,
      field:"amount",
      allowNull: true
    },
    Method: {
      type: Sequelize.STRING,
      field:"method",
      allowNull: true
    },
    TransactionId: {
        type: Sequelize.STRING,
        field:"transactionid",
        allowNull: true
      },
    userId:{
        type: Sequelize.INTEGER,
        references:{
          model:"users",
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

module.exports = Payments;