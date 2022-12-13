const express = require('express');
const mariadb = require('mariadb');

const router = express.Router();

/* List animals. */
router.get('/', function(req, res, next) {
  res.status(200).json({animals: [{name: 'Tiger'}]});
});

/* Create an animal.  */
router.post('/', function(req, res, next) {

  const animalProperties = req.body

  console.info("animal properties", animalProperties)

  res.status(201).json({message: "animal created", animal: animalProperties});
});


module.exports = router;
