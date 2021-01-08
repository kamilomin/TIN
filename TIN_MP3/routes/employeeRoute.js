const express = require('express');//import biblioteki express
const router = express.Router();//uzysaknie obiektu routera za pomoca wywolania funkcji
//Warto tutaj zwrócić uwagę, jak w NodeJS importowany jest kod z bibliotek (po nazwie, bez wskazania lokalizacji pliku), a jak kod z naszej aplikacji (ścieżka względna do lokalizacji aktualnego pliku, czyli w tym przypadku employeeRoute.js)
const employeeController = require('../controllers/employeeController');
const authUtils = require('../backend/util/authUtils');

router.get('/', employeeController.showEmployeeList);
router.get('/add', authUtils.permitAuthenticatedUserAccessLevel_2, employeeController.showAddEmployeeForm);
router.get('/details/:empId', employeeController.showEmployeeDetails);
router.get('/edit/:empId', authUtils.permitAuthenticatedUserAccessLevel_2, employeeController.showEmployeeEdit);

router.post('/add', authUtils.permitAuthenticatedUserAccessLevel_2, employeeController.addEmployee); 
router.post('/edit', authUtils.permitAuthenticatedUserAccessLevel_2, employeeController.updateEmployee);
router.get('/delete/:empId', authUtils.permitAuthenticatedUserAccessLevel_2, employeeController.deleteEmployee);

module.exports = router;

