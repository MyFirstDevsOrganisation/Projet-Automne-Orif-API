const mysql = require('mysql2/promise');
const config = require('../config');

async function conn(sql, params) {
  const connection = await mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
  });

  const [results, ] = await connection.execute(sql, params);

  connection.end(); 

  return results;
}

module.exports = {
  conn
};
