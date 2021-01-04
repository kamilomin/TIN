var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main' });
}); 

module.exports = router;

//// to obojetnie gdzie działą  WEIRD
const AuthController = require('../controllers/authController');
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
////
//  import React, { Suspense } from 'react';
//  import ReactDOM from 'react-dom';
//  import './index.css';
//  import App from './App';
//  import * as serviceWorker from './serviceWorker';

//  import './i18n';

//  ReactDOM.render(
//    <Suspense fallback={(<div>Loading</div>)}>
//      <App useSuspense={true} />
//    </Suspense>, document.getElementById('root'));

//  // If you want your app to work offline and load faster, you can change
//  // unregister() to register() below. Note this comes with some pitfalls.
//  // Learn more about service workers: https://bit.ly/CRA-PWA
//  serviceWorker.unregister();