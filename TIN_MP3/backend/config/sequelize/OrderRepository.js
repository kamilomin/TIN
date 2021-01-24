const Employee = require("../../model/sequelize/Employee");
const makeOrderEmployee = require("../../model/sequelize/MakeOrderEmployee.js");
const Order = require("../../model/sequelize/Order");

exports.getOrders = () => {
    return Order.findAll();
};

exports.getOrderById = (orderId) => {
    return Order.findByPk(orderId,
        {
            include: [{
                model: makeOrderEmployee,
                as: 'makeOrderEmployees',
            include: [{
                model: Employee,
                as: 'employee'
                }]
            }]
        });
};

exports.createOrder = (newOrderData) => {
    return Order.create({
        name: newOrderData.name,
        description: newOrderData.description,
        dateArrival: newOrderData.dateArrival
    });
};

exports.updateOrder = (orderId, orderData) => {
    const name = orderData.name;
    const description = orderData.description;
    const dateArrival = orderData.dateArrival;
    return Order.update(orderData, {where: {_id: orderId }});
};

exports.deleteOrder = (orderId) => {
    return Order.destroy({
        where: { _id: orderId }
    });

}; 