var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {
  all: function(req, res) {
    Order.find().deepPopulate(['customer_id', 'product_id']).exec(function(err, result){
      res.send(result);
    });
  },
    // Order.find({}).populate("customer_id").populate("product_id")exec(function (err, result){
      //     if(err) {throw err;}
      //     else {
      //       res.send(result);
      //     }
      //   });
      // replace with this entire codes
  create: function(req, res){
    Product.findOneAndUpdate({_id: req.body.product_id, stock: {$gte: req.body.quantity}}, {$inc: {stock: -(req.body.quantity)}}, function(err, result){
      if (result) {
        new Order(req.body).save(function(err, result){
          if (err) { console.log(err);}
          else {
            Customer.findOneAndUpdate(result.customer_id, {$push: {orders: result._id}}, function(err, result){
              if (err) {console.log(err);}
              else {
                res.send("Added");
              }
            });
          }
        });
      }
      else res.send("No more in stock");
    });
  }
};
