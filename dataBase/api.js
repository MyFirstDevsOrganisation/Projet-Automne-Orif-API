const db = require('./db');


async function recupererVerbeAleatoirement() 
{

    const data = await db.conn(
        'SELECT * FROM verbe ORDER BY RAND() LIMIT 1'
    );
    return {
        data,
    };
}

module.exports = {recupererVerbeAleatoirement}
