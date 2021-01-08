const Sequelize = require('sequelize');

const Employment = require('../../model/sequelize/Employment');
const Employee = require('../../model/sequelize/Employee');
const Department = require('../../model/sequelize/Department');

exports.getEmployments = () => {
    return Employment.findAll(
        {include: [
        {
            model: Employee,
            as: 'employee'
        },
        {
            model: Department,
            as: 'department'
        }]
    });
};


exports.getEmploymentById = (employmentId) => {
    return Employment.findByPk(employmentId, {include: [
            {
                model: Employee,
                as: 'employee'
            },
            {
                model: Department,
                as: 'department'
            }]
    });
};

exports.createEmployment = (data) => {
    console.log(JSON.stringify(data));
    if(error) {
        return Promise.reject(error);
    }
    if(!data.dateTo){data.dateTo = 'null'} // to nie pomga z null data w zatrudnieniu
    return Employment.create({
        emp_id: data.emp_id,
        dept_id: data.dept_id,
        salary: data.salary,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo
    });
};

exports.updateEmployment = (employmentId, data) => {
    return Employment.update(data, {where: {_id: employmentId }});
}

exports.deleteEmployment = (employmentId) => {
    return Employment.destroy({
        where: { _id: employmentId }
    });
}

exports.deleteManyEmployments = (employmentIds) => {
    return Employment.find({ _id: { [Sequelize.Op.in]: employmentIds }})
}

exports.closeEmployment = (employmentId, data) => {
    data.dateTo =  Date.now();
    return Employment.update(data, {where: {_id: employmentId }});
}