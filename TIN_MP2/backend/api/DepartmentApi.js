const DepartmentRepository = require('../repository/mysql2/DepartmentRepository');

exports.getDepartments = (req, res, next) => {
    DepartmentRepository.getDepartments()
        .then(depts => {
            res.status(200).json(depts);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getDepartmentById = (req, res, next) => {
    const deptId = req.params.deptId;
    DepartmentRepository.getDepartmentById(deptId)
        .then(dept => {
            if(!dept) {
                res.status(404).json({
                    message: 'Department with id: '+deptId+' not found'
                })
            } else {
                res.status(200).json(dept);
            }
        });
};

exports.createDepartment = (req, res, next) => {
    DepartmentRepository.createDepartment(req.body)
        .then(newObj => {
           res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateDepartment = (req, res, next) => {
    const deptId = req.params.deptId;
    DepartmentRepository.updateDepartment(deptId, req.body)
        .then(result => {
           res.status(200).json({message: 'Department updated!', dept: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteDepartment = (req, res, next) => {
    const deptId = req.params.deptId;
    DepartmentRepository.deleteDepartment(deptId)
        .then(result => {
            res.status(200).json({message: 'Removed Department', dept: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};