const {Sequelize} = require('sequelize');

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite"
});

;(async () => {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = connection;