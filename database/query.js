const createAnimalsTableQuery = `CREATE TABLE IF NOT EXISTS Animals (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INT,
    description TEXT,
    PRIMARY KEY (id)
);`;


async function createTables(pool) {
  let conn;
  let result;

  try {
    conn = await pool.getConnection();
    const tables = await conn.query(createAnimalsTableQuery);
    console.info("tableCreated db response: ", tables);
    result = tables;
  } catch (error) {
    result = { error: { name: "Failure Creating Tables", value: error } };
  }

  if (conn) conn.release(); // release to pool

  return result;
}

module.exports = { createTables };
