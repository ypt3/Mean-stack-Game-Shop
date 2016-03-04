var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');

module.exports = {
  all: function(req, res) {
    Customer.find({}, function(err, result){
      if (err) {throw err;}
      else res.json(result);
    });
  },
  create: function(req, res) {
    new Customer(req.body).save(function(err, result){
      if (err) {console.log(err);}
      else res.send('Added');
    });
  },
  destroy: function(req, res) {
    Customer.findByIdAndRemove(req.params.id, function(err, result){
      if (err) {console.log(err);}
      else {
        Order.remove({_id: {$in: result.orders}}, function(err, result){
          if (err) {console.log(err);}
        });
        res.send("Deleted");
      }
    });
  }
};
