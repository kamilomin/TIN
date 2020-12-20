exports.showOrderList = (req, res, next) => {
    res.render('pages/order/order-list', { navLocation: 'order'});
}

exports.showAddOrderForm = (req, res, next) => {
    res.render('pages/order/order-form', {navLocation: 'order'});
}

exports.showOrderDetails = (req, res, next) => {
    res.render('pages/order/order-details', {navLocation: 'order'});
}

exports.showOrderEdit = (req, res, next) => {
    res.render('pages/order/order-edit', {navLocation: 'order'});
}

