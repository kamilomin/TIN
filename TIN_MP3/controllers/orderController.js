
// powinno byc takie a momam to co nizej xD const OrderRepository = require('../backend/repository/sequelize/OrderRepository');
const OrderRepository = require('../backend/config/sequelize/OrderRepository');



exports.showOrderList = (req, res, next) => {
    //res.render('pages/Order/Order-list', { navLocation: 'order'});
    OrderRepository.getOrders()
    .then(orders => {
        res.render('pages/Order/Order-list', {
            orders: orders,
            navLocation: 'order',
            validationErrors: []
        });
    });
}

// exports.showAddOrderForm = (req, res, next) => {
//     res.render('pages/Order/Order-form', {navLocation: 'order'});
// }
exports.showAddOrderForm = (req, res, next) => {
    res.render('pages/Order/Order-form', {
        order: {},
        pageTitle: 'Nowe zamówienie',
        formMode: 'createNew',
        btnLabel: 'Dodaj zamówienie',
        formAction: '/Orders/add',
        navLocation: 'order',
        validationErrors: []
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
                pageTitle: 'Szczegóły zamówienia',
                formAction: '',
                navLocation: 'order',
                validationErrors: []
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
                pageTitle: 'Edycja zamówienia',
                btnLabel: 'Potwierdź edycje',
                formAction: '/Orders/edit',
                navLocation: 'order',
                validationErrors: []
            });
        });
};

exports.addOrder = (req, res, next) => {
    const orderData = { ...req.body };
    OrderRepository.createOrder(orderData)
        .then( result => {
            res.redirect('/Orders');
        })
        .catch(err => {
            res.render('pages/order/order-form', {
                emp: empData,
                pageTitle: 'Dodawanie zamowienia',
                formMode: 'createNew',
                btnLabel: 'Dodaj zamowienie',
                formAction: '/orders/add',
                navLocation: 'order',
                validationErrors: []
            });
        });
};

exports.updateOrder = (req, res, next) => {
    const orderId = req.body._id;
    const orderData = { ...req.body };
    OrderRepository.updateOrder(orderId, orderData)
        .then( result => {
            res.redirect('/Orders');
        })
        .catch(err => {
            res.render('pages/order/order-form', {
                emp: empData,
                pageTitle: 'Edycja zamowienia',
                formMode: 'edit',
                btnLabel: 'Edytuj zamowinie',
                formAction: '/order/edit',
                navLocation: 'order',
                validationErrors: err.details
            });
        });
};

exports.deleteOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    OrderRepository.deleteOrder(orderId)
        .then( () => {
            res.redirect('/Orders');
        });
};
