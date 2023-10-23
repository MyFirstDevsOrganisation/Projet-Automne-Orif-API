const db = require('./db');


async function recupererVerbeAleatoirement() {
    const data = await db.conn(
        "SELECT * FROM verbe"
    );

   
    return {
        data,
    };
}



module.exports = {
    recupererVerbeAleatoirement,
}