const Sequelize = require('sequelize');
const db = require('../config/database');


const Users = db.define("users", {
    Id: {
      type: Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    UserName: {
      type: Sequelize.STRING,
      field:"username",
      allowNull: false
    },
    Dateofbirth: {
      type: Sequelize.DATEONLY,
      field:"dateofbirth",
      allowNull: false
    },
    Gender: {
        type: Sequelize.STRING,
        field:"gender",
        allowNull: false
      },
    Email: {
        type: Sequelize.STRING,
        field:"email",
        allowNull: false
      },
    Housename: {
        type: Sequelize.STRING,
        field:"housename",
        allowNull: true
      },
    Pincode: {
        type: Sequelize.STRING,
        field:"pincode",
        allowNull: false
      },
    Postoffice: {
        type: Sequelize.STRING,
        field:"postoffice",
        allowNull: false
      },
    District: {
        type: Sequelize.STRING,
        field:"district",
        allowNull: false
      },
    Phonenumber: {
        type: Sequelize.STRING,
        field:"phonenumber",
        allowNull: false
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

module.exports = Users;