const express = require('express');//import biblioteki express
const router = express.Router();//uzysaknie obiektu routera za pomoca wywolania funkcji
//Warto tutaj zwrócić uwagę, jak w NodeJS importowany jest kod z bibliotek (po nazwie, bez wskazania lokalizacji pliku), a jak kod z naszej aplikacji (ścieżka względna do lokalizacji aktualnego pliku, czyli w tym przypadku EmploymentRoute.js)
const employmentController = require('../controllers/employmentController');

router.get('/', employmentController.showEmploymentList);
router.get('/add', employmentController.showAddEmploymentForm);
router.get('/details/:employmentSCId', employmentController.showEmploymentDetails);
router.get('/edit/:employmentSCId', employmentController.showEmploymentEdit);

router.post('/add', employmentController.addEmployment); 
router.post('/edit', employmentController.updateEmployment);
router.get('/delete/:employmentSCId', employmentController.deleteEmployment);

module.exports = router;

