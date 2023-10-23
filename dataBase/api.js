const db = require('./db');


async function recupererVerbeAleatoirement() 
{
    const sql = "SELECT * FROM verbes ORDER BY RAND() LIMIT 1";
    const [rows] = await db.query(sql);
    return rows[0];
}

module.exports = {recupererVerbeAleatoirement}