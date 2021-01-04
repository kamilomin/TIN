const Sequelize = require('sequelize');
const Employee = require("../../model/sequelize/Employee");
const Employment = require("../../model/sequelize/Employment");
const Department = require("../../model/sequelize/Department");

exports.getEmployees = () => {
    return Employee.findAll();
};

exports.getEmployeeById = (empId) => {
    return Employee.findByPk(empId,
        {
            include: [{
                model: Employment,
                as: 'employments',
            include: [{
                model: Department,
                as: 'department'
                }]
            }]
        });
};

// exports.createEmployee = (newEmpData) => {
//     return Employee.create({
//         firstName: newEmpData.firstName,
//         lastName: newEmpData.lastName,
//         email: newEmpData.email
//     });
// };
exports.createEmployee = (newEmpData) => {
    const vRes = empSchema.validate(newEmpData, { abortEarly: false} );
    if(error) {
        return Promise.reject(error);
    }
    return checkEmailUnique(newEmpData.email)
        .then(emailErr => {
            if(emailErr) {
                return Promise.reject(emailErr);
            } else {
                const firstName = newEmpData.firstName;
                const lastName = newEmpData.lastName;
                const email = newEmpData.email;
                const sql = 'INSERT into Employee (firstName, lastName, email) VALUES (?, ?, ?)'
                return db.promise().execute(sql, [firstName, lastName, email]);
            }
        })
        .catch(err => {
            return Promise.reject(err);
        });
};
exports.updateEmployee = (empId, empData) => {
    const firstName = empData.firstName;
    const lastName = empData.lastName;
    const email = empData.email;
    return Employee.update(empData, {where: {_id: empId }});
};

exports.deleteEmployee = (empId) => {
    return Employee.destroy({
        where: { _id: empId }
    });

}; 

exports.findByEmail = (email) => {
    return Employee.findOne({
        where: {email: email}
    });
}