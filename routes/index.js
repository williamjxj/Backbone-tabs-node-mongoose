var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
    res.sendfile('./Backbone3/index.html');
});
router.get('/test', function(req, res) {
    //res.render('index', { title: 'Express' });
    res.sendfile('./Backbone3/index.html');
});
module.exports = router;
