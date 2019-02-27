var express = require('express');
var app = express();
var router = express.Router();
var cookieParser = require('cookie-parser');

router.use(cookieParser());

/*
router.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)
 
  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
});

*/

/* GET home page. */
router.get('/', function(req, res, next) {
  // Cookies that have not been signed

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


router.get('/playground', function(req, res, next) {
  res.render('playground', { title: 'Playground' });
});


router.get('/third-party/cookie-parser', function(req, res, next) {
	// Cookies that have not been signed
  console.log('Cookies: ', req.cookies)
 
  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
  res.render('cookie-parser', { title: 'cookie-parser' });
});

router.get('/third-party/body-parser', function(req, res, next) {

  res.render('body-parser', { title: 'body-parser' });
});
module.exports = router;
