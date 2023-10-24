const express = require('express');
const api = require('../dataBase/api');
const router = express.Router();


/* GET verbe aléatoire. */
router.get('/recuperer-verbe-aleatoirement', async function(req, res, next) {
    try {

        const verbe = await api.recupererVerbeAleatoirement();
        res.json(verbe);
    }
    catch(err){
        next(err);
    }
    
})
module.exports = router;