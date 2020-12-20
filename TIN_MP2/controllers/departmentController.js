
// powinno byc takie a momam to co nizej xD const DepartmentRepository = require('../backend/repository/sequelize/DepartmentRepository');
const DepartmentRepository = require('../backend/config/sequelize/DepartmentRepository');



exports.showDepartmentList = (req, res, next) => {
    //res.render('pages/Department/Department-list', { navLocation: 'dept'});
    DepartmentRepository.getDepartments()
    .then(depts => {
        res.render('pages/department/department-list', {
            depts: depts,
            navLocation: 'dept'
        });
    });
}

// exports.showAddDepartmentForm = (req, res, next) => {
//     res.render('pages/Department/Department-form', {navLocation: 'dept'});
// }
exports.showAddDepartmentForm = (req, res, next) => {
    res.render('pages/department/department-form', {
        dept: {},
        pageTitle: 'Nowy departament',
        formMode: 'createNew',
        btnLabel: 'Dodaj departament',
        formAction: '/Departments/add',
        navLocation: 'dept'
    });
}
// exports.showDepartmentDetails = (req, res, next) => {
//     res.render('pages/Department/Department-details', {navLocation: 'dept'});
// }
exports.showDepartmentDetails = (req, res, next) => {
    const deptId = req.params.deptId;
    DepartmentRepository.getDepartmentById(deptId)
        .then(dept => {
            res.render('pages/department/department-form', {
                dept: dept,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły departamentu',
                formAction: '',
                navLocation: 'dept'
            });
        });
}
// exports.showDepartmentEdit = (req, res, next) => {
//     res.render('pages/Department/Department-edit', {navLocation: 'dept'});
// }
// w tutorialu chyba był blad bo bylo 
//exports.showEditDepartmentForm = (req, res, next) => {
exports.showDepartmentEdit = (req, res, next) => {
    const deptId = req.params.deptId;
    DepartmentRepository.getDepartmentById(deptId)
        .then(dept => {
            res.render('pages/department/department-form', {
                dept: dept,
                formMode: 'edit',
                pageTitle: 'Edycja departamentu',
                btnLabel: 'Potwierdź edycje',
                formAction: '/departments/edit',
                navLocation: 'dept'
            });
        });
};

exports.addDepartment = (req, res, next) => {
    const deptData = { ...req.body };
    DepartmentRepository.createDepartment(deptData)
        .then( result => {
            res.redirect('/departments');
        });
};

exports.updateDepartment = (req, res, next) => {
    const deptId = req.body._id;
    const deptData = { ...req.body };
    DepartmentRepository.updateDepartment(deptId, deptData)
        .then( result => {
            res.redirect('/departments');
        });
};

exports.deleteDepartment = (req, res, next) => {
    const deptId = req.params.deptId;
    DepartmentRepository.deleteDepartment(deptId)
        .then( () => {
            res.redirect('/departments');
        });
};
