const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Employee = sequelize.define('Employee', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   firstName: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [2,60],
            msg: "Pole powinno zawierać od 2 do 60 znaków"
        },
    }
},
   lastName: {
       type: Sequelize.STRING,
       allowNull: false,
       validate:{
       notEmpty: {
        msg: "Pole jest wymagane"
    },
    len: {
        args: [2,60],
        msg: "Pole powinno zawierać od 2 do 60 znaków"
    },
}
},
   email: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [5,60],
            msg: "Pole powinno zawierać od 5 do 60 znaków"
        },
        isEmail: {
            msg: 'Pole powinno zawierać prawidłowy adres email'
        }
    }
}
});

module.exports = Employee;