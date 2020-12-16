const express = require('express');//import biblioteki express
const router = express.Router();//uzysaknie obiektu routera za pomoca wywolania funkcji
//Warto tutaj zwrócić uwagę, jak w NodeJS importowany jest kod z bibliotek (po nazwie, bez wskazania lokalizacji pliku), a jak kod z naszej aplikacji (ścieżka względna do lokalizacji aktualnego pliku, czyli w tym przypadku OrderRoute.js)
const orderCotroller = require('../controllers/orderController');

router.get('/', orderCotroller.showOrderList);

router.get('/add', orderCotroller.showAddOrderForm);

router.get('/details/:orderId', orderCotroller.showOrderDetails);

router.get('/edit/:orderId', orderCotroller.showOrderEdit);

module.exports = router;

