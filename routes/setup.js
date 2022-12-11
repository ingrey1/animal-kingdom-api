const express = require('express');
const router = express.Router();



/* Setup an animal.  */
router.post('/', function(req, res, next) {

  // Create the table

  res.status(201).json({message: "animal table created",});
});


module.exports = router;
