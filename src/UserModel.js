const connection = require('./connection');
const {DataTypes} = require('sequelize');

const UserModel = connection.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: DataTypes.STRING(30),
    email: DataTypes.STRING(30),
});

UserModel.sync();

module.exports = UserModel;