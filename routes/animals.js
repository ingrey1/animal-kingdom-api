var express = require('express');
var router = express.Router();

/* GET animals listing. */
router.get('/', function(req, res, next) {
  res.json({animals: [{name: 'Tiger'}]});
});

module.exports = router;
