const express = require('express');//import biblioteki express
const router = express.Router();//uzysaknie obiektu routera za pomoca wywolania funkcji
//Warto tutaj zwrócić uwagę, jak w NodeJS importowany jest kod z bibliotek (po nazwie, bez wskazania lokalizacji pliku), a jak kod z naszej aplikacji (ścieżka względna do lokalizacji aktualnego pliku, czyli w tym przypadku employeeRoute.js)
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.showEmployeeList);
router.get('/add', employeeController.showAddEmployeeForm);
router.get('/details/:empId', employeeController.showEmployeeDetails);
router.get('/edit/:empId', employeeController.showEmployeeEdit);

router.post('/add', employeeController.addEmployee); 
router.post('/edit', employeeController.updateEmployee);
router.get('/delete/:empId', employeeController.deleteEmployee);

module.exports = router;

