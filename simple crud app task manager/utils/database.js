const Sequelize = require("sequelize");

const sequelize = new Sequelize("crud_app", "root", "", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
