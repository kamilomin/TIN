
// powinno byc takie a momam to co nizej xD const OrderRepository = require('../backend/repository/sequelize/OrderRepository');
const OrderRepository = require('../backend/config/sequelize/OrderRepository');



exports.showOrderList = (req, res, next) => {
    //res.render('pages/Order/Order-list', { navLocation: 'order'});
    OrderRepository.getOrders()
    .then(orders => {
        res.render('pages/Order/Order-list', {
            orders: orders,
            navLocation: 'order'
        });
    });
}

// exports.showAddOrderForm = (req, res, next) => {
//     res.render('pages/Order/Order-form', {navLocation: 'order'});
// }
exports.showAddOrderForm = (req, res, next) => {
    res.render('pages/Order/Order-form', {
        order: {},
        pageTitle: 'Nowy departament',
        formMode: 'createNew',
        btnLabel: 'Dodaj departament',
        formAction: '/Orders/add',
        navLocation: 'order'
    });
}
// exports.showOrderDetails = (req, res, next) => {
//     res.render('pages/Order/Order-details', {navLocation: 'order'});
// }
exports.showOrderDetails = (req, res, next) => {
    const orderId = req.params.orderId;
    OrderRepository.getOrderById(orderId)
        .then(order => {
            res.render('pages/Order/Order-form', {
                order: order,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły departamentu',
                formAction: '',
                navLocation: 'order'
            });
        });
}
// exports.showOrderEdit = (req, res, next) => {
//     res.render('pages/Order/Order-edit', {navLocation: 'order'});
// }
// w tutorialu chyba był blad bo bylo 
//exports.showEditOrderForm = (req, res, next) => {
exports.showOrderEdit = (req, res, next) => {
    const orderId = req.params.orderId;
    OrderRepository.getOrderById(orderId)
        .then(order => {
            res.render('pages/Order/Order-form', {
                order: order,
                formMode: 'edit',
                pageTitle: 'Edycja departamentu',
                btnLabel: 'Potwierdź edycje',
                formAction: '/Orders/edit',
                navLocation: 'order'
            });
        });
};

exports.addOrder = (req, res, next) => {
    const orderData = { ...req.body };
    OrderRepository.createOrder(orderData)
        .then( result => {
            res.redirect('/Orders');
        });
};

exports.updateOrder = (req, res, next) => {
    const orderId = req.body._id;
    const orderData = { ...req.body };
    OrderRepository.updateOrder(orderId, orderData)
        .then( result => {
            res.redirect('/Orders');
        });
};

exports.deleteOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    OrderRepository.deleteOrder(orderId)
        .then( () => {
            res.redirect('/Orders');
        });
};
