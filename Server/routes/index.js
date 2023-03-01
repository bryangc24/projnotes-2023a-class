var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet =["🐱‍👤","✌","🙌"];
  let icon = iconSet[Math.floor(Math.random() * 3)]
  res.render('index', { title: 'DWPCII-2023A', icon });
});

router.get('/author',(req, res)=>{
let author = {
  "name": "Brayan",
  "lastname": "Garcia",
  "Facebook": "Bryan Garcia",
  "job": "ITGAM"
};
//seding the view-model to be rendered by a View
res.render("author",author);
});
module.exports = router;
