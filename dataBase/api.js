const db = require('./db');


async function recupererVerbeAleatoirement() {}

async function verifierReponse() {
    const data = await db.conn(
        "SELECT * FROM verbe"
    );

   
    return {
        data,
    };
}

module.exports = {
    recupererVerbeAleatoirement,
    verifierReponse
}