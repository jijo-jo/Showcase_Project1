const Sequelize = require('sequelize');
const db = require('../config/database');


const Roles = db.define("roles", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      allowNull: false
    },
    Rolename: {
      type: Sequelize.STRING,
      field:"role",
      allowNull: false
    },
    Roledescription: {
      type: Sequelize.STRING,
      field:"roledescription",
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

module.exports = Roles;