const Sequelize = require('sequelize');

const MakeOrderEmployee = require('../../model/sequelize/MakeOrderEmployee');
const Employee = require('../../model/sequelize/Employee');
const Order = require('../../model/sequelize/Order');

exports.getMakeOrderEmployees = () => {
    return MakeOrderEmployee.findAll(
        {include: [
        {
            model: Employee,
            as: 'employee'
        },
        {
            model: Order,
            as: 'order'
        }]
    });
};


exports.getMakeOrderEmployeeById = (MakeOrderEmployeeId) => {
    return MakeOrderEmployee.findByPk(MakeOrderEmployeeId, {include: [
            {
                model: Employee,
                as: 'employee'
            },
            {
                model: Order,
                as: 'order'
            }]
    });
};

exports.createMakeOrderEmployee = (data) => {
    console.log(JSON.stringify(data));
    if(error) {
        return Promise.reject(error);
    }
    if(!data.dateTo){data.dateTo = 'null'} // to nie pomga z null data w zatrudnieniu
    return MakeOrderEmployee.create({
        emp_id: data.emp_id,
        dept_id: data.dept_id,
        orderValue: data.orderValue,
        dateTo: data.dateTo
    });
};

exports.updateMakeOrderEmployee = (MakeOrderEmployeeId, data) => {
    return MakeOrderEmployee.update(data, {where: {_id: MakeOrderEmployeeId }});
}

exports.deleteMakeOrderEmployee = (MakeOrderEmployeeId) => {
    return MakeOrderEmployee.destroy({
        where: { _id: MakeOrderEmployeeId }
    });
}

exports.deleteManyMakeOrderEmployees = (MakeOrderEmployeeIds) => {
    return MakeOrderEmployee.find({ _id: { [Sequelize.Op.in]: MakeOrderEmployeeIds }})
}