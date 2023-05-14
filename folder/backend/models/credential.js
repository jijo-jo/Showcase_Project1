const Sequelize = require('sequelize');
const db = require('../config/database');


const Credentials = db.define("credentials", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    Username: {
      type: Sequelize.STRING,
      field:"username",
      allowNull: false
    },
    Password: {
      type: Sequelize.STRING,
      field:"password",
      allowNull: false
    },
    userId:{
       type:Sequelize.INTEGER,
       references:{
          model:"users",
          key:"id"
       }
    },
    roleId:{
      type: Sequelize.INTEGER,
      references:{
        model:"roles",
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

module.exports = Credentials;