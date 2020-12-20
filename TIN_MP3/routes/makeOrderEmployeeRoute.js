const express = require('express');//import biblioteki express
const router = express.Router();//uzysaknie obiektu routera za pomoca wywolania funkcji
//Warto tutaj zwrócić uwagę, jak w NodeJS importowany jest kod z bibliotek (po nazwie, bez wskazania lokalizacji pliku), a jak kod z naszej aplikacji (ścieżka względna do lokalizacji aktualnego pliku, czyli w tym przypadku OrderRoute.js)
const makeOrderEmployeeController = require('../controllers/makeOrderEmployeeController');

router.get('/', makeOrderEmployeeController.showMakeOrderEmployeeList);

router.get('/add', makeOrderEmployeeController.showAddMakeOrderEmployeeForm);

router.get('/details/:makeOrderEmployeeId', makeOrderEmployeeController.showMakeOrderEmployeeDetails);

router.get('/edit/:makeOrderEmployeeId', makeOrderEmployeeController.showMakeOrderEmployeeEdit);

module.exports = router;

