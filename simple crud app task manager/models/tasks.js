const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Tasks = sequelize.define("tasks", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: Sequelize.STRING,
    taskDoneStatus: Sequelize.BOOLEAN,
});

module.exports = Tasks;
