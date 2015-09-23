var express = require('express');
var router = express.Router();
var Medicine = require('./../models/Medicine.js');

router.post('/', function(req, res, next) {

  Medicine.save(req.body, function(err){
    if(err) {
      res.send({'success':false,'err':err});
    } else {
      res.send({'success':true});

    }
  });
});

module.exports = router;
