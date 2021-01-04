// powinno byc takie a momam to co nizej xD const EmployeeRepository = require('../backend/repository/sequelize/EmployeeRepository');
const EmployeeRepository = require('../backend/config/sequelize/EmployeeRepository');



exports.showEmployeeList = (req, res, next) => {
    //res.render('pages/employee/employee-list', { navLocation: 'emp'});
    EmployeeRepository.getEmployees()
    .then(emps => {
        res.render('pages/employee/employee-list', {
            emps: emps,
            navLocation: 'emp'
        });
    });
}

// exports.showAddEmployeeForm = (req, res, next) => {
//     res.render('pages/employee/employee-form', {navLocation: 'emp'});
// }
exports.showAddEmployeeForm = (req, res, next) => {
            res.render('pages/employee/employee-form', {
                emp: {}, // usuwam empData
                pageTitle: 'Dodawanie pracownika',
                formMode: 'createNew',
                btnLabel: 'Dodaj pracownika',
                formAction: '/employees/add',
                navLocation: 'emp',
                validationErrors: err.details
               
            });

};
// exports.showEmployeeDetails = (req, res, next) => {
//     res.render('pages/employee/employee-details', {navLocation: 'emp'});
// }
exports.showEmployeeDetails = (req, res, next) => {
    const empId = req.params.empId;
        EmployeeRepository.getEmployeeById(empId)
        // .then( err => { res.render('pages/employee/form', {
           
        //     emp: emp,
        //     formMode: 'showDetails',
        //     pageTitle: 'Szczegóły pracownika',
        //     formAction: '',
        //     navLocation: 'emp',
        // }
        // ) 
        .then( emp => { //zmieniam emp na err
            res.render('pages/employee/employee-form', {
                emp: emp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pracownika',
                formAction: '',
                navLocation: 'emp',
                // validationErrors: err.details
                

            })
           
            .catch(() => {
                console.error('Do that');
            });
        });
// });
};

// exports.showEmployeeEdit = (req, res, next) => {
//     res.render('pages/employee/employee-edit', {navLocation: 'emp'});
// }
// w tutorialu chyba był blad bo bylo 
//exports.showEditEmployeeForm = (req, res, next) => {
exports.showEmployeeEdit = (req, res, next) => {
    
    const empId = req.params.empId;
    EmployeeRepository.getEmployeeById(empId)
        .then( emp => { //zmieniam emp na err
            res.render('pages/employee/employee-form', {
                emp: emp,
                formMode: 'edit',
                pageTitle: 'Edycja pracownika',
                btnLabel: 'Potwierdź edycje',
                formAction: '/employees/edit',
                navLocation: 'emp',
               
            })
           
        });
};

// exports.addEmployee = (req, res, next) => {
//     const empData = { ...req.body };
//     EmployeeRepository.createEmployee(empData)
//         .then( result => {
//             res.redirect('/employees');
//         });
        
// };

exports.addEmployee = (req, res, next) => {
    const empData = { ...req.body };
    EmployeeRepository.createEmployee(empData)
        .then( result => {
            res.redirect('/employees');
        })
        .catch(err => {
            res.render('pages/employee/employee-form', {
                emp: empData,
                pageTitle: 'Dodawanie pracownika',
                formMode: 'createNew',
                btnLabel: 'Dodaj pracownika',
                formAction: '/employees/add',
                navLocation: 'emp',
                validationErrors: err.details
            });
        });
};

exports.updateEmployee = (req, res, next) => {
    const empId = req.body._id;
    const empData = { ...req.body };
    EmployeeRepository.updateEmployee(empId, empData)
        .then( result => {
            res.redirect('/employees');
        })
        .catch(err => {
            res.render('pages/employee/employee-form', {
                emp: empData,
                pageTitle: 'Edycja pracownika',
                formMode: 'edit',
                btnLabel: 'Edytuj pracownika',
                formAction: '/employees/edit',
                navLocation: 'emp',
                validationErrors: err.details
            });
        });
};

exports.deleteEmployee = (req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.deleteEmployee(empId)
        .then( () => {
            res.redirect('/employees');
        });
};

