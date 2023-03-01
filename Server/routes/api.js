//importing express library
var express = require('express');
//creating a router instance
var router = express.Router();

//creating the route
//function es una funcion para mandar a llamar al router
router.get('/author', function(req, res){
res.json({
    "name": "Brayan Martin",
    "lastname": "Garcia",
    "Facebook": "Bryan Garcia",
    "job": "ITGAM"
});    
});

//exporting the router
module.exports = router;
