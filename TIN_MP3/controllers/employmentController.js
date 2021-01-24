
// powinno byc takie a momam to co nizej xD const EmploymentRepository = require('../backend/repository/sequelize/EmploymentRepository');
const EmploymentRepository = require('../backend/config/sequelize/EmploymentRepository');
const EmployeeRepository = require('../backend/config/sequelize/EmployeeRepository');
const DepartmentRepository = require('../backend/config/sequelize/DepartmentRepository');



exports.showEmploymentList = (req, res, next) => {
    //res.render('pages/Employment/Employment-list', { navLocation: 'employmentSC'});
    // const empId = req.params.empId;
    // const deptId = req.params.deptId;
    // let emps, depts;
    // EmployeeRepository.getEmployeeById(empId)
    // .then(emps => {
    //     emps = emps;
    //     return DepartmentRepository.getDepartmentById(deptId);
    // })
    // .then(depts => {
    //     depts = depts;
    // });
    EmploymentRepository.getEmployments()
    .then(employmentSCs => {
        res.render('pages/employment/employment-list', {
            employmentSCs: employmentSCs,
            btnLabel: 'zakończ',
            // emps: emps,
            // depts: depts,
            navLocation: 'employmentSC'
        });
    });
}

// exports.showAddEmploymentForm = (req, res, next) => {
//     res.render('pages/Employment/Employment-form', {navLocation: 'employmentSC'});
// }
exports.showAddEmploymentForm = (req, res, next) => {
    let allEmps, allDepts;
    EmployeeRepository.getEmployees()
        .then(emps => {
            allEmps = emps;
            return DepartmentRepository.getDepartments();
        })
        .then(depts => {
            allDepts = depts;
            res.render('pages/employment/employment-form', {
                employmentSC: {},
                formMode: 'createNew',
                allEmps: allEmps,
                allDepts: allDepts,
                pageTitle: 'Nowe zatrudnienia',
                btnLabel: 'Dodaj zatrudnienie',
                formAction: '/employments/add',
                navLocation: 'employmentSC',
                validationErrors: []
            });
        });
}
// exports.showEmploymentDetails = (req, res, next) => {
//     res.render('pages/Employment/Employment-details', {navLocation: 'employmentSC'});
// }
exports.showEmploymentDetails = (req, res, next) => {
    let allEmps, allDepts;
    const employmentSCId = req.params.employmentSCId;
    EmployeeRepository.getEmployees()
    .then(emps => {
        allEmps = emps;
        return DepartmentRepository.getDepartments();
    })
    .then(depts => {
        allDepts = depts;
    
    
    return EmploymentRepository.getEmploymentById(employmentSCId)
    })
        .then(employmentSC => {
            res.render('pages/Employment/employment-form', {
                employmentSC: employmentSC,
                formMode: 'showDetails',
                allEmps: allEmps,
                allDepts: allDepts,
                pageTitle: 'Szczegóły departamentu',
                formAction: '',
                navLocation: 'employmentSC',
                validationErrors: []
            });
        });
}
// exports.showEmploymentEdit = (req, res, next) => {
//     res.render('pages/Employment/Employment-edit', {navLocation: 'employmentSC'});
// }
// w tutorialu chyba był blad bo bylo 
//exports.showEditEmploymentForm = (req, res, next) => {
exports.showEmploymentEdit = (req, res, next) => {
    let allEmps, allDepts;
    const employmentSCId = req.params.employmentSCId;
    EmployeeRepository.getEmployees()
    .then(emps => {
        allEmps = emps;
        return DepartmentRepository.getDepartments();
    })
    .then(depts => {
        allDepts = depts;
        return  EmploymentRepository.getEmploymentById(employmentSCId)
    })
        .then(employmentSC => {
            res.render('pages/Employment/Employment-form', {
                employmentSC: employmentSC,
                formMode: 'edit',
                allEmps: allEmps,
                allDepts: allDepts,
                pageTitle: 'Edycja departamentu',
                btnLabel: 'Potwierdź edycje',
                formAction: '/Employments/edit',
                navLocation: 'employmentSC',
                validationErrors: []
            });
        });
};

exports.addEmployment = (req, res, next) => {
    const employmentSCData = { ...req.body };
    EmploymentRepository.createEmployment(employmentSCData)
        .then( result => {
            res.redirect('/Employments'),
          
        });
};

exports.updateEmployment = (req, res, next) => {
    const employmentSCId = req.body._id;
    const employmentSCData = { ...req.body };
    EmploymentRepository.updateEmployment(employmentSCId, employmentSCData)
        .then( result => {
            res.redirect('/Employments'),{
                validationErrors: [err.details]
            };
        });
};

exports.deleteEmployment = (req, res, next) => {
    const employmentSCId = req.params.employmentSCId;
    EmploymentRepository.deleteEmployment(employmentSCId)
        .then( () => {
            res.redirect('/Employments'),{
                validationErrors: []};
           
        });
};


exports.closeEmployment = (req, res, next) => {
    const employmentSCId = req.params.employmentSCId;
    const employmentSCData = { ...req.body };
    EmploymentRepository.closeEmployment(employmentSCId, employmentSCData)
        .then( () => {
            res.redirect('/Employments'),{
                validationErrors: []
            };
        });
};