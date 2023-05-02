const Sequelize = require('sequelize');
const db = require('../config/database');


const Overallrating = db.define("overallrating", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      allowNull: false
    },
    Averagestarcount: {
      type: Sequelize.INTEGER,
      field:"averageStarcount",
      allowNull: true
    },
    Number_of_People: {
        type: Sequelize.INTEGER,
        field:"numberofpeople",
        allowNull: true
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

module.exports = Overallrating;