var express = require('express');
var router = express.Router();





router.get('/', function(req, res, next) {
  res.render('pages/sign/sign.ejs', { navLocation: 'sign' });
}); 


module.exports = router;