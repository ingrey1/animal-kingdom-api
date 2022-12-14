const express = require("express");
const mariadb = require("mariadb");
const fs = require("fs");

const { createTables } = require("../database/query");

const router = express.Router();

//reading certificates from file
const serverCert = [fs.readFileSync("./credentials.pem", "utf8")];
console.info("serverCert", serverCert)
/* Create Tables  */
router.post("/", async function (req, res, next) {
  let response;
  try {
    // Create pool
    const pool = mariadb.createPool({
        host: process.env.DB_HOST,
        port: 5006,
        database: 'wildlife',
        user: process.env.DB_USER,
        ssl: {
            ca: serverCert
        },
        password: process.env.DB_PASSWORD,
        connectionLimit: 5,
    });
    // Create the tables
    response = await createTables(pool);
  } catch (error) {
    response = error;
  }
  
  console.info("poolResponse", response) 

  res.status(201).json({ dbResponse: response });
});

module.exports = router;
