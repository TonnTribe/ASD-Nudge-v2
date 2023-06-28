const sequelize = require("sequelize");
const { DB_USER, DB_NAME, DB_PASSWORD, JAWSDB_URL } = reguire("./index");

const sequelize = process.env.JAWSDB_URL
  ? new sequelize(process.env.JAWSDB_URL)
  : new sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
