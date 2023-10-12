const sequelize = require("sequelize");
const HOST = process.env.HOST;
const DB_NAME = process.env.DB_NAME;

const db = new sequelize(DB_NAME, null, null, {
  host: HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
