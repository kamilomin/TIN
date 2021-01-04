const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const MakeOrderEmployee = sequelize.define('MakeOrderEmployee', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true
   },
   orderValue: {
       type: Sequelize.DECIMAL(10, 2),
       allowNull: false
   },
    dateTo: {
       type: Sequelize.DATE,
       allowNull: true,
       defaultValue: null  //to nie pomaga
   },
   emp_id: {
       type: Sequelize.INTEGER,
       allowNull: false
   },
    order_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = MakeOrderEmployee;