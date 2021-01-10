const Sequelize = require('sequelize');
const Employee = require("../../model/sequelize/Employee");
const Employment = require("../../model/sequelize/Employment");
const Department = require("../../model/sequelize/Department");
const MakeOrderEmployee = require('../../model/sequelize/MakeOrderEmployee');
const empSchema = require('../../model/joi/Employee');
const authUtil = require('../../util/authUtils');
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
                as: 'department',
             }]}],
             
        
        });
};
exports.getEmployeeByIdforOrder = (empId) => {
    return Employee.findByPk(empId,{
        include: [{
            model: MakeOrderEmployee,
            as: 'makeOrderEmployees',
            include: [{
                model: Department,
                as: 'department',
             }],
        }],
    });
};



 exports.createEmployee = (newEmpData) => {
    newEmpData.password = authUtil.hashPassword(newEmpData.password);
     return Employee.create({
          firstName: newEmpData.firstName,
          lastName: newEmpData.lastName,
         email: newEmpData.email,
         password: newEmpData.password,
         accessLevel: newEmpData.accessLevel
      });
  };
// exports.createEmployee = (newEmpData) => {
//     const vRes = empSchema.validate(newEmpData, { abortEarly: false} );
//     if(vRes.error) {
//         return Promise.reject(vRes.serror);
//     }
//     return checkEmailUnique(newEmpData.email)
//         .then(emailErr => {
//             if(emailErr) {
//                 return Promise.reject(emailErr);
//             } else {
//                 const firstName = newEmpData.firstName;
//                 const lastName = newEmpData.lastName;
//                 const email = newEmpData.email;
//                 const password = newEmpData.password;
//                 const accessLevel = newEmpData.accessLevel;
//                 const sql = 'INSERT into Employee (firstName, lastName, email, password, accessLevel ) VALUES (?, ?, ?, ?, ?)'
//                 return db.promise().execute(sql, [firstName, lastName, email, password, accessLevel]);
//             }
//         })
//         .catch(err => {
//             return Promise.reject(err);
//         });
// };
exports.updateEmployee = (empId, empData) => {
    // UPDATE `Employees` SET `_id`=?,`firstName`=?,`lastName`=?,`email`=?,`updatedAt`=? WHERE `_id` = ?
   // zrob tu jak funkcje wyzej z sql UPDATE
//    const vRes = empSchema.validate(empData, { abortEarly: false} );
//    if(vRes.error) {
//        return Promise.reject(vRes.error);
//    }
//    return checkEmailUnique(empData.email)
//        .then(emailErr => {
//            if(emailErr) {
//                return Promise.reject(emailErr);
//            } else {
//                const firstName = empData.firstName;
//                const lastName = empData.lastName;
//                const email = empData.email;
//                const password = empData.password;
//                const accessLevel = empData.accessLevel;
//                const sql = 'UPDATE `Employees` SET `_id`=?,`firstName`=?,`lastName`=?,`email`=?,`updatedAt`=? WHERE `_id` = empId'
//                return db.promise().execute(sql, [firstName, lastName, email, password, accessLevel]);
//            }
//        })
//        .catch(err => {
//            return Promise.reject(err);
//        });

empData.password = authUtil.hashPassword(newEmpData.password);
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