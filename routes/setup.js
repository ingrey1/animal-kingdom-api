const express = require("express");
const mariadb = require("mariadb");

const { createTables } = require("../database/query");

const router = express.Router();



/* Create Tables  */
router.post("/", async function (req, res, next) {
  let response;
  try {
    // Create pool
    const pool = mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectionLimit: 5,
    });
    // Create the tables
    response = await createTables(pool);
  } catch (error) {
    response = error;
  }

  res.status(201).json({ dbResponse: response });
});

module.exports = router;
