const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {}

Users.init(
  {
    user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    nacionalidad: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    edad: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);

module.exports = Users;
