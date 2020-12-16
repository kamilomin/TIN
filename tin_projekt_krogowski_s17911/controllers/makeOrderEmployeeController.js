exports.showMakeOrderEmployeeList = (req, res, next) => {
    res.render('pages/makeOrderEmployee/makeOrderEmployee-list', { navLocation: 'makeOrderEmployee'});
}

exports.showAddMakeOrderEmployeeForm = (req, res, next) => {
    res.render('pages/makeOrderEmployee/makeOrderEmployee-form', {navLocation: 'makeOrderEmployee'});
}

exports.showMakeOrderEmployeeDetails = (req, res, next) => {
    res.render('pages/makeOrderEmployee/makeOrderEmployee-details', {navLocation: 'makeOrderEmployee'});
}

exports.showMakeOrderEmployeeEdit = (req, res, next) => {
    res.render('pages/makeOrderEmployee/makeOrderEmployee-edit', {navLocation: 'makeOrderEmployee'});
}

