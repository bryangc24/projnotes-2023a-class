//importing express library
const express = require('express');
//creating a router instance
const router = express.Router();

//creating the route
//function es una funcion para mandar a llamar al router
//quitamos la palabra function sus ti tullendo la flecha que representa la funcion
router.get('/author', (req, res) =>{
res.json({
    "name": "Brayan Martin",
    "lastname": "Garcia",
    "Facebook": "Bryan Garcia",
    "job": "ITGAM"
});    
});

//exporting the router
module.exports = router;
