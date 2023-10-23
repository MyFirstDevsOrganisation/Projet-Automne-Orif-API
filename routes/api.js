const express = require('express');
const api = require('../dataBase/api');
const router = express.Router();


/* GET verbe aléatoire. */
router.get('/recuperer-verbe-aleatoirement', async function(req, res, next) {
    try {

        res.json(await api.recupererVerbeAleatoirement());
    }
    catch(err){
        next(err);
    }
    
})

/* GET verifie si le verbe est correct. */
router.get('/verifier-reponse', async function(req, res, next) {
   
})




module.exports = router;