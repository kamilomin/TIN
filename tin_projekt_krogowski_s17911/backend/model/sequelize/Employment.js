const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Employment = sequelize.define('Employment', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true
   },
   salary: {
       type: Sequelize.DECIMAL(10, 2),
       allowNull: false
   },
   dateFrom: {
       type: Sequelize.DATE,
       allowNull: false
   },
    dateTo: {
       type: Sequelize.DATE,
       allowNull: true
   },
   emp_id: {
       type: Sequelize.INTEGER,
       allowNull: false
   },
    dept_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Employment;