const express = require('express');
const router = express.Router();

/* GET users listing. */
//Quitamos la palabra function sustitullendo por la flecha =>
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
