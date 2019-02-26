var express = require('express');
var app = express();
var router = express.Router();



var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/page1', function(req, res, next) {
  res.render('page1', { title: 'Routing and Views' });
});

router.get('/middleware', function(req, res, next) {
  res.render('middleware', { title: 'Middleware' });
});

router.get('/middleware/application-level', function(req, res, next) {
  res.render('application-level', { title: 'Application Level Middleware' });
});

router.get('/middleware/router-level', function(req, res, next) {
  res.render('router-level', { title: 'Router Level Middleware' });
});

router.get('/middleware/error-handling', function(req, res, next) {
  res.render('error-handling', { title: 'Error Handling Middleware' });
});

router.get('/middleware/built-in', function(req, res, next) {
  res.render('built-in', { title: 'Built-in Middleware' });
});

router.get('/middleware/third-party', function(req, res, next) {
  res.render('third-party', { title: 'Third-party Middleware' });
});

module.exports = router;
