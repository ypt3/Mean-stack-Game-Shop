var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');


module.exports = function(app) {
  app.get('/customers', function(req, res){
    customers.all(req, res);
  });
  app.post('/add/customer', function(req, res){
    customers.create(req, res);
  });
  app.post('/remove/customer/:id', function(req, res){
    customers.destroy(req, res);
  });
  app.get('/products', function(req, res){
    products.all(req, res);
  });
  app.post('/add/product', function(req, res){
    products.create(req, res);
  });
  app.get('/orders' ,function(req, res){
    orders.all(req, res);
  });
  app.post('/add/order', function(req, res){
    orders.create(req, res);
  });
};
