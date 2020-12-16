const express = require('express');//import biblioteki express
const router = express.Router();//uzysaknie obiektu routera za pomoca wywolania funkcji
//Warto tutaj zwrócić uwagę, jak w NodeJS importowany jest kod z bibliotek (po nazwie, bez wskazania lokalizacji pliku), a jak kod z naszej aplikacji (ścieżka względna do lokalizacji aktualnego pliku, czyli w tym przypadku departmentRoute.js)
const departmentController = require('../controllers/departmentController');

router.get('/', departmentController.showDepartmentList);
router.get('/add', departmentController.showAddDepartmentForm);
router.get('/details/:deptId', departmentController.showDepartmentDetails);
router.get('/edit/:deptId', departmentController.showDepartmentEdit);

router.post('/add', departmentController.addDepartment); 
router.post('/edit', departmentController.updateDepartment);
router.get('/delete/:deptId', departmentController.deleteDepartment);

module.exports = router;

