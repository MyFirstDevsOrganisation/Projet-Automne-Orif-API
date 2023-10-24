const db = require('./db');


async function recupererVerbeAleatoirement() 
{
    const requete = "SELECT * FROM verbe ORDER BY RAND() LIMIT 1";
    const data = await db.conn(requete);
    return data;
}

module.exports = {recupererVerbeAleatoirement}