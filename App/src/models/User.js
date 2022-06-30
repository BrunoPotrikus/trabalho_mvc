const Sequelize = require('sequelize');
const database = require('./bd');

const User = database.define('user_table', {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userPwd: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = User;