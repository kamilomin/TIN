const Sequelize = require('sequelize'); //chyba to nei jest potrzebne
const Employee = require("../../model/sequelize/Employee");
const Employment = require("../../model/sequelize/Employment");
const Department = require("../../model/sequelize/Department");

exports.getDepartments = () => {
    return Department.findAll();
};

exports.getDepartmentById = (deptId) => {
    return Department.findByPk(deptId,
        {
            include: [{
                model: Employment,
                as: 'employments',
            include: [{
                model: Employee,
                as: 'employee'
                }]
            }]
        });
};

exports.createDepartment = (newDeptData) => {
    return Department.create({
        name: newDeptData.name,
        budget: newDeptData.budget,
       // email: newDeptData.email
    });
};

exports.updateDepartment = (deptId, deptData) => {
    const name = deptData.name;
    const budget = deptData.budget;
   // const email = deptData.email;
    return Department.update(deptData, {where: {_id: deptId }});
};

exports.deleteDepartment = (deptId) => {
    return Department.destroy({
        where: { _id: deptId }
    });

}; 