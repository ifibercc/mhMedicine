var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('count', { title: '兜率宫' });
});

module.exports = router;
