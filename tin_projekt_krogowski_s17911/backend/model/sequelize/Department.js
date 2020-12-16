const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Department = sequelize.define('Department', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    budget: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: true
        
        },
    updatetAt: {
        type: Sequelize.DATE,
        allowNull: true
        
    }
    
});

module.exports = Department;