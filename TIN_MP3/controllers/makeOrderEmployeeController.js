
// powinno byc takie a momam to co nizej xD const MakeOrderEmployeeRepository = require('../backend/repository/sequelize/MakeOrderEmployeeRepository');
const MakeOrderEmployeeRepository = require('../backend/config/sequelize/MakeOrderEmployeeRepository');
const EmployeeRepository = require('../backend/config/sequelize/EmployeeRepository');
const OrderRepository = require('../backend/config/sequelize/OrderRepository');



exports.showMakeOrderEmployeeList = (req, res, next) => {

    MakeOrderEmployeeRepository.getMakeOrderEmployees()
    .then(makeOrderEmployeeSCs => {
        res.render('pages/MakeOrderEmployee/MakeOrderEmployee-list', {
            makeOrderEmployeeSCs: makeOrderEmployeeSCs,
            // emps: emps,
            // Orders: Orders,
            navLocation: 'makeOrderEmployee'
        });
    });
}

exports.showAddMakeOrderEmployeeForm = (req, res, next) => {
    let allEmps, allOrders;
    EmployeeRepository.getEmployees()
        .then(emps => {
            allEmps = emps;
            return OrderRepository.getDepartments();
        })
        .then(orders => {
            allOrders = orders;
            res.render('pages/MakeOrderEmployee/MakeOrderEmployee-form', {
                MakeOrderEmployeeSC: {},
                formMode: 'createNew',
                allEmps: allEmps,
                allOrders: allOrders,
                pageTitle: 'Nowe zatrudnienia',
                btnLabel: 'Dodaj zatrudnienie',
                formAction: '/MakeOrderEmployees/add',
                navLocation: 'makeOrderEmployee'
            });
        });
}

exports.showMakeOrderEmployeeDetails = (req, res, next) => {
    let allEmps, allOrders;
    const MakeOrderEmployeeSCId = req.params.MakeOrderEmployeeSCId;
    EmployeeRepository.getEmployees()
    .then(emps => {
        allEmps = emps;
        return OrderRepository.getOrders();
    })
    .then(Orders => {
        allOrders = Orders;
    
    
    return MakeOrderEmployeeRepository.getMakeOrderEmployeeById(MakeOrderEmployeeSCId)
    })
        .then(MakeOrderEmployeeSC => {
            res.render('pages/MakeOrderEmployee/MakeOrderEmployee-form', {
                MakeOrderEmployeeSC: MakeOrderEmployeeSC,
                formMode: 'showDetails',
                allEmps: allEmps,
                allOrders: allOrders,
                pageTitle: 'Szczegóły departamentu',
                formAction: '',
                navLocation: 'makeOrderEmployee'
            });
        });
}

exports.showMakeOrderEmployeeEdit = (req, res, next) => {
    let allEmps, allOrders;
    const MakeOrderEmployeeSCId = req.params.MakeOrderEmployeeSCId;
    EmployeeRepository.getEmployees()
    .then(emps => {
        allEmps = emps;
        return OrderRepository.getOrders();
    })
    .then(Orders => {
        allOrders = Orders;
        return  MakeOrderEmployeeRepository.getMakeOrderEmployeeById(MakeOrderEmployeeSCId)
    })
        .then(MakeOrderEmployeeSC => {
            res.render('pages/MakeOrderEmployee/MakeOrderEmployee-form', {
                MakeOrderEmployeeSC: MakeOrderEmployeeSC,
                formMode: 'edit',
                allEmps: allEmps,
                allOrders: allOrders,
                pageTitle: 'Edycja departamentu',
                btnLabel: 'Potwierdź edycje',
                formAction: '/MakeOrderEmployees/edit',
                navLocation: 'makeOrderEmployee'
            });
        });
};

exports.addMakeOrderEmployee = (req, res, next) => {
    const MakeOrderEmployeeSCData = { ...req.body };
    MakeOrderEmployeeRepository.createMakeOrderEmployee(MakeOrderEmployeeSCData)
        .then( result => {
            res.redirect('/MakeOrderEmployees');
        });
};

exports.updateMakeOrderEmployee = (req, res, next) => {
    const MakeOrderEmployeeSCId = req.body._id;
    const MakeOrderEmployeeSCData = { ...req.body };
    MakeOrderEmployeeRepository.updateMakeOrderEmployee(MakeOrderEmployeeSCId, MakeOrderEmployeeSCData)
        .then( result => {
            res.redirect('/MakeOrderEmployees');
        });
};

exports.deleteMakeOrderEmployee = (req, res, next) => {
    const MakeOrderEmployeeSCId = req.params.MakeOrderEmployeeSCId;
    MakeOrderEmployeeRepository.deleteMakeOrderEmployee(MakeOrderEmployeeSCId)
        .then( () => {
            res.redirect('/MakeOrderEmployees');
        });
};
