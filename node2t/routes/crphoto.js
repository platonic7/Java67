var express = require('express');
var router = express.Router();

// middleware specific to this router
/*
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
*/

router.get('/', function(req, res) {
  res.send('강의실 사진 관리');
});



module.exports = router;
