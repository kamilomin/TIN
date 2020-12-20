const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-example-sequelize',
 'root', 'toor', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;